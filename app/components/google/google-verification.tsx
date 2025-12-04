/**
 * Google Search Console Verification Component
 * Adds verification meta tag to the head
 * 
 * The verification code is already handled in layout.tsx metadata,
 * but this component can be used if you need it elsewhere
 */
export function GoogleVerification() {
  const verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

  if (!verificationCode) {
    return null
  }

  return (
    <meta
      name="google-site-verification"
      content={verificationCode}
    />
  )
}


