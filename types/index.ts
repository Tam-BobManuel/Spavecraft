export interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

export interface Product {
  id: string
  title: string
  description: string
  image: string
  link?: string
}

export interface Mission {
  id: string
  company: string
  quote: string
  result: string
  image: string
}

export interface Solution {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export interface CardProps {
  children: React.ReactNode
  className?: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}
