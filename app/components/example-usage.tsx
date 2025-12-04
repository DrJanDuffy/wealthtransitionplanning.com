/**
 * Example Usage Component
 * 
 * This file demonstrates how to use the Google integration components
 * You can reference this when building your pages
 */

import { GoogleMaps } from './google/google-maps'
import { ContactButtons } from './google/contact-buttons'
import { FAQSchema } from './faq-schema'

/**
 * Example: Homepage with Maps and Contact Buttons
 */
export function ExampleHomepage() {
  return (
    <div>
      <h1>Welcome to Our Business</h1>
      
      {/* Contact Action Buttons */}
      <ContactButtons className="my-8" showReviews={true} />
      
      {/* Google Maps Embed */}
      <div className="my-8">
        <h2>Find Us</h2>
        <GoogleMaps width="100%" height="450px" />
      </div>
      
      {/* FAQ Section with Schema */}
      <div className="my-8">
        <h2>Frequently Asked Questions</h2>
        <FAQSchema
          faqs={[
            {
              question: 'What services do you offer?',
              answer: 'We offer comprehensive wealth transition planning services including estate planning, retirement planning, and financial security strategies.',
            },
            {
              question: 'Where are you located?',
              answer: 'We are located in Las Vegas, Nevada, serving clients throughout the region.',
            },
            {
              question: 'What are your business hours?',
              answer: 'We are open Monday through Friday from 9:00 AM to 5:00 PM. We are closed on weekends.',
            },
          ]}
        />
        <dl className="space-y-4 mt-4">
          <div>
            <dt className="font-semibold">What services do you offer?</dt>
            <dd className="mt-2 text-gray-900">
              We offer comprehensive wealth transition planning services including estate planning, retirement planning, and financial security strategies.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Where are you located?</dt>
            <dd className="mt-2 text-gray-900">
              We are located in Las Vegas, Nevada, serving clients throughout the region.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">What are your business hours?</dt>
            <dd className="mt-2 text-gray-900">
              We are open Monday through Friday from 9:00 AM to 5:00 PM. We are closed on weekends.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

/**
 * Example: Contact Page
 */
export function ExampleContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      
      {/* Contact Information */}
      <div className="my-8">
        <ContactButtons className="mb-8" />
        <GoogleMaps width="100%" height="400px" />
      </div>
    </div>
  )
}


