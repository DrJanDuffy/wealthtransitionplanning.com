import Link from 'next/link'

/**
 * Client Resources Section
 * Based on Real Life Planning's client resources section
 */
export function ClientResources() {
  const resources = [
    {
      name: 'Right Capital',
      description: 'Financial planning and portfolio management platform',
      url: null, // Client portal access provided upon engagement
    },
    {
      name: 'Stratifi',
      description: 'Investment analysis and reporting tools',
      url: null, // Client portal access provided upon engagement
    },
  ]

  return (
    <section className="mb-16 p-8 bg-neutral-50 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Client Resources</h2>
      <p className="mb-6 text-gray-900">
        Access your financial planning tools and resources:
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="p-6 border border-neutral-200 rounded-lg bg-white"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{resource.name}</h3>
            <p className="text-sm text-gray-800 mb-2">
              {resource.description}
            </p>
            {resource.url ? (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Access Portal →
              </a>
            ) : (
              <p className="text-sm text-gray-800 italic">
                Access provided upon engagement
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-800">
        * Client portal access provided upon engagement. Contact us to get started.
      </p>
    </section>
  )
}

