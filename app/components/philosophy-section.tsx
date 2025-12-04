import { businessConfig } from 'app/config/business'

/**
 * Financial Planning Philosophy Section
 * Based on Real Life Planning's philosophy section
 */
export function PhilosophySection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Our Financial Planning Philosophy For Wealth Transition
        </h2>
        <p className="text-xl text-gray-900 dark:text-gray-100 max-w-3xl mx-auto font-medium">
          We believe in comprehensive, personalized wealth transition planning that integrates 
          all aspects of your financial life to help you achieve your legacy goals.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Fee-Only Fiduciary</h3>
          <p className="text-gray-900 dark:text-gray-100">
            As Fee-Only financial planners, we work for you. Our fiduciary obligation is to work 
            solely in your best interests with no commissions or sales pitch.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Comprehensive Planning</h3>
          <p className="text-gray-900 dark:text-gray-100">
            We'll make sure all the pieces of your financial life fit together - estate planning, 
            retirement, real estate, and wealth transfer strategies.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">We Walk Our Talk</h3>
          <p className="text-gray-900 dark:text-gray-100">
            We're wealth transition planning experts, financial planners, and estate planning 
            specialists. Because we understand both wealth management and estate planning, 
            we can help you put it all together.
          </p>
        </div>
      </div>
    </section>
  )
}

