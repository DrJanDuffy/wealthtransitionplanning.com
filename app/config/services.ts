/**
 * Service Tiers Configuration
 * Based on Real Life Planning structure, adapted for Wealth Transition Planning
 */

export interface ServiceTier {
  id: string
  name: string
  tagline: string
  description: string
  bestFor: string
  features: string[]
  whyChoose: string[]
  whatToExpect: string[]
  fees: string
  cta: {
    primary: string
    secondary: string
  }
  freeGuide?: string
}

export const serviceTiers: ServiceTier[] = [
  {
    id: 'comprehensive',
    name: 'COMPREHENSIVE',
    tagline: 'Fee-Only and Fiduciary',
    description: 'COMPREHENSIVE wealth transition planning to elevate your financial life with ongoing, comprehensive financial planning and investment management – our core solution.',
    bestFor: 'People who have mastered the financial basics and are looking to build on their financial foundation.',
    whyChoose: [
      'Comprehensive financial planning that looks at all aspects of your financial life',
      'Custom investment strategy that includes your real estate, retirement, and other investments',
      'We\'ll design an investment policy statement that acts like a constitution for all your investments',
      'Optional low-fee investment management for all your non-real estate investments',
    ],
    features: [
      'Comprehensive Financial Life Planning',
      'Custom Investment Strategy',
      'Optional Low-Fee Investment Management',
      'Socially responsible portfolios available',
      'Automatic rebalancing',
    ],
    whatToExpect: [
      'Initial comprehensive financial assessment',
      'Custom wealth transition plan',
      'Ongoing financial planning support',
      'Regular portfolio reviews and adjustments',
      'Access to educational resources',
    ],
    fees: 'Transparent monthly fee based on your assets and planning needs',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Wealth Transition Planning Guide 2.0',
  },
  {
    id: 'launch',
    name: 'LAUNCH',
    tagline: 'Fee-Only and Fiduciary',
    description: 'LAUNCH your wealth transition journey with financial coaching to get off to an excellent start.',
    bestFor: 'People just getting started (or restarted) on their wealth transition journey, and who are looking to develop excellent financial habits.',
    whyChoose: [
      'Master the basics of wealth transition planning',
      'Develop powerful financial habits that will last',
      'Understand your estate planning needs',
      'Create a foundation for future wealth transfer',
    ],
    features: [
      'Financial Coaching Sessions',
      'Basic Estate Planning Guidance',
      'Wealth Transition Education',
      'Goal Setting and Planning',
      'Budget and Cash Flow Management',
    ],
    whatToExpect: [
      'Initial financial assessment',
      'Personalized coaching plan',
      'Regular coaching sessions',
      'Educational resources and tools',
      'Progress tracking and adjustments',
    ],
    fees: 'Affordable monthly coaching fee',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Getting Started with Wealth Transition Planning',
  },
  {
    id: 'aim',
    name: 'AIM',
    tagline: 'Fee-Only and Fiduciary',
    description: 'AIM high with a short-term consultation with a CFP® to tackle a specific wealth transition planning project or analysis.',
    bestFor: 'Individuals looking to answer a specific financial question within a short time frame.',
    whyChoose: [
      'Short-term engagement for project-based financial planning',
      'We\'ll run all the important numbers',
      'Help you work through your choices',
      'Give you a clear action plan to take the next step in confidence',
    ],
    features: [
      'Project-Based Planning',
      'Specific Financial Analysis',
      'Clear Action Plan',
      'One-Time Consultation',
      'Written Recommendations',
    ],
    whatToExpect: [
      'Initial consultation to understand your project',
      'Comprehensive analysis of your specific situation',
      'Detailed recommendations and action plan',
      'Follow-up support as needed',
    ],
    fees: 'Project-based fee - transparent pricing for your specific needs',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Project-Based Planning Guide',
  },
  {
    id: 'live',
    name: 'LIVE',
    tagline: 'Fee-Only and Fiduciary',
    description: 'CRUSH YOUR WEALTH TRANSITION GOALS with live workshops and coaching groups.',
    bestFor: 'People who like hands-on learning and the motivation of a group.',
    whyChoose: [
      'Empower yourself with practical, hands-on group learning',
      'Coaching on essential wealth transition topics',
      'Get inspired by peers with similar goals',
      'Customized workshops for your company\'s needs',
    ],
    features: [
      'Live Workshops and Boot Camps',
      'Financial Coaching Groups',
      'Company Workshops and Webinars',
      'One-to-One Financial Consultations',
      'Customized Content for Your Organization',
    ],
    whatToExpect: [
      'Interactive learning sessions',
      'Group coaching and peer support',
      'Practical tools and resources',
      'Ongoing access to materials',
      'Customized content for your needs',
    ],
    fees: 'Workshop and group pricing available - contact for details',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Workshop Topics Guide',
  },
  {
    id: 'learn',
    name: 'LEARN',
    tagline: 'Improve your financial skills',
    description: 'LEARN at your own pace with DIY educational resources.',
    bestFor: 'Anyone interested in wealth transition planning and estate planning.',
    whyChoose: [
      'Gain new skills and boost your confidence',
      'Learn at your own pace',
      'Access comprehensive educational resources',
      'Get inspired by real-world examples',
    ],
    features: [
      'The Wealth Transition Blog',
      'Free Intro Workshops and Webinars',
      'Wealth Transition Guides™ with Checklists',
      'DIY Online Courses (Coming Soon)',
      'Podcast - Stories from Wealth Transition (Coming Soon)',
    ],
    whatToExpect: [
      'Access to blog articles and resources',
      'Free workshops and webinars',
      'Downloadable guides and checklists',
      'Online courses (coming soon)',
      'Podcast episodes (coming soon)',
    ],
    fees: 'Free and premium resources available',
    cta: {
      primary: 'Explore Resources',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Wealth Transition Planning Basics',
  },
]

export function getServiceTier(id: string): ServiceTier | undefined {
  return serviceTiers.find((tier) => tier.id === id)
}

