import { cn } from '@/lib/utils'
import { DesignerStep } from '@/app/types/designer'

export function ChatGraph({ steps }: { steps: DesignerStep[] }) {
  return (
    <div className="w-full bg-gray-100 rounded-xl px-6 py-10">
      <div className="relative mx-auto max-w-5xl">
        {/* Timeline line */}
        {steps.length > 0 && (
          <div className="absolute left-0 right-0 h-1 top-1/2 -translate-y-1/2 bg-gray-300" />
        )}

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step label */}
              <div className="mb-8 text-center">
                <div className="font-medium text-gray-800 text-lg">
                  {step.step}: {step.title}
                </div>
              </div>

              {/* Node */}
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center z-10',
                  index === 0
                    ? 'bg-black'
                    : 'bg-white border-2 border-gray-400',
                )}
              />

              {/* Description */}
              <div className="mt-8 text-center">
                <div className="text-sm text-gray-600">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
