'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideFromLeft' | 'slideFromRight'
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

const animationMap: Record<string, string> = {
  fadeInUp: 'animate-fade-in-up',
  fadeIn: 'animate-fade-in',
  scaleIn: 'animate-scale-in',
  slideFromLeft: 'animate-slide-from-left',
  slideFromRight: 'animate-slide-from-right',
}

export function AnimateOnScroll({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animationMap[animation] : 'opacity-0',
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
