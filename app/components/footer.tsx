import { businessConfig, getPhoneLink, getGoogleMapsDirectionsUrl } from 'app/config/business'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  const formatHours = (day: string) => {
    const hours = businessConfig.hours[day as keyof typeof businessConfig.hours]
    if (hours === 'closed') return 'Closed'
    if (typeof hours === 'object') {
      return `${hours.open} - ${hours.close}`
    }
    return 'Closed'
  }

  return (
    <footer className="mb-16 mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
      {/* Business Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">{businessConfig.name}</h3>
          <address className="not-italic text-neutral-600 dark:text-neutral-400 mb-4">
            <p>{businessConfig.address.street}</p>
            <p>
              {businessConfig.address.city}, {businessConfig.address.state}{' '}
              {businessConfig.address.zipCode}
            </p>
          </address>
          <p className="mb-2">
            <a
              href={getPhoneLink()}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {businessConfig.phone}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${businessConfig.email}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {businessConfig.email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
          <dl className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex justify-between">
              <dt>Monday - Friday:</dt>
              <dd>9:00 AM - 5:00 PM</dd>
            </div>
            <div className="flex justify-between">
              <dt>Saturday:</dt>
              <dd>Closed</dd>
            </div>
            <div className="flex justify-between">
              <dt>Sunday:</dt>
              <dd>Closed</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-8">
        <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          {businessConfig.googleBusinessProfileUrl && (
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href={businessConfig.googleBusinessProfileUrl}
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Google Business</p>
              </a>
            </li>
          )}
          {businessConfig.googleReviewsUrl && (
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href={businessConfig.googleReviewsUrl}
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Reviews</p>
              </a>
            </li>
          )}
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={getGoogleMapsDirectionsUrl()}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Directions</p>
            </a>
          </li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
      </p>
    </footer>
  )
}
