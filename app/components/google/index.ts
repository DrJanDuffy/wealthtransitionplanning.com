/**
 * Google Schema Components Index (2025 Enhanced)
 * Central export file for all structured data components
 *
 * These components implement Google's latest 2025 guidelines for:
 * - Rich Results
 * - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * - Voice Search (Speakable)
 * - AI/Semantic Search optimization
 */

// Core Schema Components
export { LocalBusinessSchema } from './local-business-schema'
export { OrganizationSchema } from './organization-schema'
export { WebSiteSchema } from './website-schema'
export { PersonSchema } from './person-schema'
export { ProfessionalServiceSchema } from './professional-service-schema'

// Navigation & Structure
export { BreadcrumbSchema, generateBreadcrumbItems } from './breadcrumb-schema'

// Content Schema Components
export { ArticleSchema, BlogListingSchema } from './article-schema'
export { ServiceSchema, ServiceCatalogSchema } from './service-schema'
export { FAQSchema } from '../faq-schema'
export { ReviewSchema, testimonialReviews } from './review-schema'
export { HowToSchema, wealthTransitionSteps } from './how-to-schema'

// Voice Search & AI
export { SpeakableSchema, ArticleSpeakableSchema } from './speakable-schema'

// Analytics & Tracking
export { GoogleAnalytics } from './google-analytics'
