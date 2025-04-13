import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export interface DesignerStep {
  step: string;
  problem: string;
  knowledge: string;
  explanation: string;
  conclusion: string;
}

export interface StepBranch {
  steps: DesignerStep[];
  start?: string; // 父线中起始节点的 step 值
  end?: string;   // 父线中结束节点的 step 值
}

interface TimelineProps {
  branches?: StepBranch[];
}

const TEST_DATA: StepBranch[] = [
  // 父线（第一条支线）—主时间轴
  {
    steps: [
      {
        step: 'A',
        problem: '父线问题A',
        knowledge: '父线知识A',
        explanation: '父线说明A',
        conclusion: '父线结论A',
      },
      {
        step: 'B',
        problem: '父线问题B',
        knowledge: '父线知识B',
        explanation: '父线说明B',
        conclusion: '父线结论B',
      },
      {
        step: 'C',
        problem: '父线问题C',
        knowledge: '父线知识C',
        explanation: '父线说明C',
        conclusion: '父线结论C',
      },
      {
        step: 'D',
        problem: '父线问题D',
        knowledge: '父线知识D',
        explanation: '父线说明D',
        conclusion: '父线结论D',
      },
    ]
  },
  // 子支线示例，start 与 end 对应父线的 step 值
  {
    start: 'B',
    end: 'C',
    steps: [
      {
        step: 'b1',
        problem: '子支线问题1',
        knowledge: '子支线知识1',
        explanation: '子支线说明1',
        conclusion: '子支线结论1',
      },
      {
        step: 'b2',
        problem: '子支线问题2',
        knowledge: '子支线知识2',
        explanation: '子支线说明2',
        conclusion: '子支线结论2',
      },
    ]
  }
];

export const Timeline: React.FC<TimelineProps> = ({ branches = TEST_DATA }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // 清空之前的内容
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // 定义 svg 的尺寸与边距
    const width = 800;
    const height = 200 + branches.length * 40; // 根据支线数量动态调整高度
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    svg.attr('width', width).attr('height', height);

    // 使用 d3 内置颜色方案，支线颜色不同
    const colorScale = d3.scaleOrdinal<string>()
      .domain(branches.map((_, i) => i.toString()))
      .range(d3.schemeCategory10);

    // 计算每条支线的垂直间距
    const branchCount = branches.length;
    const branchSpacing = (height - margin.top - margin.bottom) / (branchCount + 1);

    // 假设 branches[0] 为父线，提前计算父线的 x 位置映射
    let parentXScale: d3.ScaleLinear<number, number> | null = null;
    if (branches.length > 0) {
      const parentSteps = branches[0].steps;
      parentXScale = d3.scaleLinear()
        .domain([0, parentSteps.length - 1])
        .range([margin.left, width - margin.right]);
    }

    // 遍历所有支线，绘制各自的横向时间轴
    branches.forEach((branch, branchIndex) => {
      // 当前支线的 y 坐标
      const y = margin.top + (branchIndex + 1) * branchSpacing;
      const nodeCount = branch.steps.length;

      // 对于该支线，计算节点的水平位置（初始计算值）
      const xScale = d3.scaleLinear()
        .domain([0, nodeCount - 1])
        .range([margin.left, width - margin.right]);

      // 构造节点坐标数据，类型为 [number, number][]
      const lineData: [number, number][] = branch.steps.map((_, index) => [xScale(index), y]);

      // 如果当前支线为子支线，并且有 start/end 参数，则覆盖首尾节点的 x 坐标
      // 这里假设父线为 branches[0]
      if (branchIndex > 0 && parentXScale) {
        // 如果有 start 参数，则查找父线中对应的节点
        if (branch.start) {
          const parentBranch = branches[0];
          const startIndex = parentBranch.steps.findIndex(s => s.step === branch.start);
          if (startIndex !== -1) {
            const parentX = parentXScale(startIndex);
            lineData[0][0] = parentX;
          }
        }
        // 如果有 end 参数，则查找父线中对应的节点
        if (branch.end) {
          const parentBranch = branches[0];
          const endIndex = parentBranch.steps.findIndex(s => s.step === branch.end);
          if (endIndex !== -1) {
            const parentX = parentXScale(endIndex);
            lineData[lineData.length - 1][0] = parentX;
          }
        }
      }

      // 定义线条生成器，生成路径字符串
      const lineGenerator = d3.line<[number, number]>()
        .x(d => d[0])
        .y(d => d[1]);
      const pathD = lineGenerator(lineData) || '';

      // 绘制连接线
      svg.append('path')
        .attr('d', pathD)
        .attr('fill', 'none')
        .attr('stroke', colorScale(branchIndex.toString()))
        .attr('stroke-width', 2);

      // 绘制每个节点和文本（仅显示 step 字段）
      branch.steps.forEach((step, index) => {
        const cx = lineData[index][0];
        // 节点圆点
        svg.append('circle')
          .attr('cx', cx)
          .attr('cy', y)
          .attr('r', 5)
          .attr('fill', colorScale(branchIndex.toString()));

        // 显示文本
        svg.append('text')
          .attr('x', cx)
          .attr('y', y - 10)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10px')
          .text(step.step);
      });
    });
  }, [branches]);

  return (
    <svg ref={svgRef} />
  );
};

export default Timeline;
