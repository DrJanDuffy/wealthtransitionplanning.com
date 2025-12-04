import { businessConfig, getGoogleMapsEmbedUrl } from 'app/config/business'

interface GoogleMapsProps {
  width?: string
  height?: string
  className?: string
}

/**
 * Google Maps Embed Component
 * Displays an embedded Google Map for the business location
 * 
 * Note: You'll need a Google Maps API key. Add it to your environment variables:
 * NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
 */
export function GoogleMaps({ 
  width = '100%', 
  height = '450px',
  className = ''
}: GoogleMapsProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'
  const embedUrl = getGoogleMapsEmbedUrl().replace('YOUR_API_KEY', apiKey)
  
  // Fallback to simple embed if no API key
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    const address = encodeURIComponent(businessConfig.address.full)
  return (
    <div className={`w-full ${className}`}>
      <iframe
        width={width}
        height={height}
        className="border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${address}`}
        title={`Map showing ${businessConfig.name} location`}
      />
    </div>
  )
  }

  return (
    <div className={`w-full ${className}`}>
      <iframe
        width={width}
        height={height}
        className="border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title={`Map showing ${businessConfig.name} location`}
      />
    </div>
  )
}


