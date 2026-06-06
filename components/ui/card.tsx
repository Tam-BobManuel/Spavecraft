import { cn } from '@/lib/utils'
import type { CardProps } from '@/types'

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'glass glass-hover rounded-xl p-6 relative',
        className
      )}
    >
      {children}
    </div>
  )
}
