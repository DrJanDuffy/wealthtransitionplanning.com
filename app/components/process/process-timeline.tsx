interface ProcessStep {
  step: number
  title: string
  description: string
  details: string[]
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

/**
 * Improved Process Timeline Component
 * Modern vertical timeline design
 */
export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            {/* Step number circle */}
            <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {step.step}
            </div>
            
            {/* Content */}
            <div className="ml-8 flex-1">
              <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-900 mb-6 leading-relaxed">{step.description}</p>
                <ul className="list-disc pl-6 space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-900">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

