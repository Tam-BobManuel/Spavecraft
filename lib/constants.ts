import type { Feature, Product, Mission, Solution } from '@/types'

export const NAVIGATION_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Products', href: '#products' },
  { label: 'Missions', href: '#missions' },
  { label: 'Solutions', href: '#solutions' },
]

export const FEATURES: Feature[] = [
  {
    id: 'feature-1',
    icon: null,
    title: 'AI Automation',
    description: 'Streamline your workflow with intelligent automation powered by cutting-edge AI technology.',
  },
  {
    id: 'feature-2',
    icon: null,
    title: 'Real-time Analytics',
    description: 'Get instant insights into your data with real-time dashboards and comprehensive reporting.',
  },
  {
    id: 'feature-3',
    icon: null,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance with all major standards.',
  },
  {
    id: 'feature-4',
    icon: null,
    title: 'Scalable Infrastructure',
    description: 'Built to scale from startup to enterprise with zero downtime deployments.',
  },
  {
    id: 'feature-5',
    icon: null,
    title: '24/7 Support',
    description: 'Dedicated support team available round the clock to help you succeed.',
  },
  {
    id: 'feature-6',
    icon: null,
    title: 'Custom Integration',
    description: 'Seamlessly integrate with your existing tools and workflows.',
  },
]

export const PRODUCTS = [
  {
    id: 'product-1',
    title: 'AI Producers',
    description: 'Advanced AI tools for content generation and optimization.',
    image: '/products/ai-producers.jpg',
  },
  {
    id: 'product-2',
    title: 'Data Analytics',
    description: 'Comprehensive analytics platform for data-driven decisions.',
    image: '/products/analytics.jpg',
  },
  {
    id: 'product-3',
    title: 'Automation Suite',
    description: 'Powerful workflow automation for enterprise efficiency.',
    image: '/products/automation.jpg',
  },
]

export const MISSIONS = [
  {
    id: 'mission-1',
    company: 'TechCorp',
    quote: 'We reduced our operational costs by 40% using their innovative solutions.',
    result: 'Increased efficiency and reduced time-to-market by 6 months.',
    image: '/missions/techcorp.jpg',
  },
  {
    id: 'mission-2',
    company: 'InnovateCo',
    quote: 'The best investment we made for our digital transformation.',
    result: 'Scaled to serve 10x more customers without adding infrastructure.',
    image: '/missions/innovateco.jpg',
  },
  {
    id: 'mission-3',
    company: 'FutureScale',
    quote: 'Transformed our entire business model with their platform.',
    result: 'Revenue increased by 3x within the first year.',
    image: '/missions/futurscale.jpg',
  },
]

export const SOLUTIONS = [
  {
    id: 'solution-1',
    icon: null,
    title: 'Custom Development',
    description: 'Tailored solutions built specifically for your unique business needs.',
  },
  {
    id: 'solution-2',
    icon: null,
    title: 'Consulting Services',
    description: 'Expert guidance from industry veterans to accelerate your transformation.',
  },
  {
    id: 'solution-3',
    icon: null,
    title: 'Implementation Support',
    description: 'End-to-end support to ensure smooth deployment and adoption.',
  },
  {
    id: 'solution-4',
    icon: null,
    title: 'Training Programs',
    description: 'Comprehensive training to maximize ROI and team productivity.',
  },
]

export const HERO_CONTENT = {
  headline: 'Engineering the Infinite',
  subheadline: 'Unlock the potential of your business with cutting-edge technology and intelligent solutions.',
  cta: 'Get Started',
  secondary_cta: 'Learn More',
}

export const SOLUTIONS_HEADING = {
  title: 'Custom Software Solutions',
  subtitle: 'Transform your business with tailored software engineered for your success.',
}

export const INNOVATION_HEADING = {
  title: 'Innovation Lab',
  subtitle: 'Pushing boundaries, creating the future, and solving complex challenges.',
}
