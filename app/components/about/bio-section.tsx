/**
 * Improved Bio Section for About Page
 * Modern layout with better readability
 */
export function BioSection() {
  return (
    <section className="mb-12">
      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111827' }}>
          Professional Background and Expertise
        </h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: '#111827' }}>
            Dr. Janet Duffy is a trusted real estate and wealth transition planning expert 
            dedicated to helping Certified Financial Planners and their clients in Las Vegas 
            and throughout Nevada navigate the complexities of real estate decisions, estate 
            planning, retirement planning, and wealth transfer strategies.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: '#111827' }}>
            With years of experience in both real estate and financial planning, Dr. Duffy 
            specializes in providing real estate services that seamlessly integrate with 
            financial planning practices. Her unique expertise combines deep real estate 
            market knowledge with a comprehensive understanding of financial planning 
            principles, tax strategies, and wealth transition objectives.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: '#111827' }}>
            As a fiduciary-minded real estate professional, Dr. Duffy prioritizes her clients' 
            best interests in every recommendation, ensuring that real estate decisions align 
            with comprehensive financial planning goals and support long-term financial success.
          </p>
        </div>
      </div>
    </section>
  )
}

