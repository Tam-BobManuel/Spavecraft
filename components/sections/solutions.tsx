import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { SOLUTIONS, SOLUTIONS_HEADING } from '@/lib/constants'
import { Code2, Lightbulb, Wrench, BookOpen } from 'lucide-react'

const solutionIcons = [
  <Code2 key="code" className="h-6 w-6" />,
  <Lightbulb key="lightbulb" className="h-6 w-6" />,
  <Wrench key="wrench" className="h-6 w-6" />,
  <BookOpen key="book" className="h-6 w-6" />,
]

export function Solutions() {
  return (
    <section id="solutions" className="relative border-t border-orange-200/20 bg-gradient-to-b from-orange-50/50 to-white py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg-solutions.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
        />
      </div>
      <Container className="relative space-y-16">
        <AnimateOnScroll animation="fadeInUp">
          <SectionHeader
            title={SOLUTIONS_HEADING.title}
            subtitle={SOLUTIONS_HEADING.subtitle}
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2">
          {SOLUTIONS.map((solution, index) => (
            <AnimateOnScroll
              key={solution.id}
              animation="fadeInUp"
              delay={index * 100}
              duration={600}
            >
              <div className="glass glass-hover rounded-xl p-6 group flex gap-4 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/15 to-amber-500/15 text-orange-600 group-hover:text-amber-600 transition-all duration-500">
                  {solutionIcons[index]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{solution.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
