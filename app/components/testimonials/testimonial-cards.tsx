interface Testimonial {
  name: string
  role: string
  location: string
  content: string
  rating: number
}

interface TestimonialCardsProps {
  testimonials: Testimonial[]
}

/**
 * Improved Testimonial Cards Component
 * Modern card design with better readability
 */
export function TestimonialCards({ testimonials }: TestimonialCardsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center mb-4">
            {renderStars(testimonial.rating)}
          </div>
          <p className="text-gray-900 mb-6 leading-relaxed italic text-lg">
            "{testimonial.content}"
          </p>
          <div className="border-t border-gray-200 pt-4">
            <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
            <p className="text-sm text-gray-900 font-medium">{testimonial.role}</p>
            <p className="text-sm text-gray-700">{testimonial.location}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

