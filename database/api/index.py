# from common.canvas.angle import angle_set
# from common.canvas.axis import axis
# from common.canvas.circle import circle, edge_point, origin
# from common.canvas.dot import dot
# from common.canvas.figure import figure
# from common.canvas.function import function
# from common.canvas.line import line, end_point, start_point
# from common.canvas.parametric import parametric
# from common.canvas.plane import plane
# from common.canvas.polygon import polygon
# from common.canvas.vector import vector


# from common.layout.align import align
# from common.layout.block import block
# from common.layout.column import column
# from common.canvas.dot import dot
# from common.layout.flexbox import flexbox
# from common.text.highlight import highlight
# from common.canvas.line_segment import line_segment
# from common.model.link import link
# from common.text.lower import lower
# from common.text.lr import lr
# from common.text.overline import overline
# from common.layout.par import par
# from common.canvas.parametric import parametric
# from common.canvas.plane import plane
# from common.canvas.polygon import polygon
# from common.layout.row import row
# from common.text.smallcaps import smallcaps
# from common.text.strike import strike
# from common.text.sub import sub
# from common.text.supper import supper
# from common.text.text import text
# from common.layout.transform import transform
# from common.text.underline import underline
# from common.text.upper import upper
# from common.canvas.vector import vector
# from common.table.table import table

from .common.canvas.canvas import canvas
from .common.canvas.angle import angle_set
# from .common.canvas.axis import axis_set
from .common.canvas.circle import circle_set
from .common.canvas.dot import dot_set
from .common.canvas.figure import figure_set
# from .common.canvas.function import function_set
# from .common.canvas.graphs import graphs_set
from .common.canvas.line import line_set
# from .common.canvas.parametric import parametric_set
from .common.canvas.plane import plane_set
# from .common.canvas.polygon import polygon_set
# from .common.canvas.vector import vector_set
from .common.layout import layout_set
from .common.text import text_set


components = [
    canvas,
    *angle_set,
    *circle_set,
    *dot_set,
    *figure_set,
    # *function_set,
    *line_set,
    *plane_set,
    *layout_set,
    *text_set,
]

animations = []

examples = []

index = {
    "components": components,
    "animations": animations,
    "examples": examples
}