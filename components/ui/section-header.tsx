import { cn } from '@/lib/utils'
import type { SectionHeaderProps } from '@/types'

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('space-y-4', centered && 'text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={cn(
        'h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-amber-500',
        centered && 'mx-auto'
      )} />
    </div>
  )
}
