import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { MISSIONS } from '@/lib/constants'
import { Quote } from 'lucide-react'

export function Missions() {
  return (
    <section id="missions" className="relative border-t border-orange-200/20 bg-white py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] via-transparent to-transparent" />
      <Container className="relative space-y-16">
        <AnimateOnScroll animation="fadeInUp">
          <SectionHeader
            title="Client Missions"
            subtitle="Real transformations from real customers"
          />
        </AnimateOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MISSIONS.map((mission, index) => (
            <AnimateOnScroll
              key={mission.id}
              animation={index % 2 === 0 ? 'slideFromLeft' : 'slideFromRight'}
              delay={index * 100}
              duration={600}
            >
              <div className="group relative overflow-hidden rounded-xl border border-orange-200/30 bg-white transition-all duration-500 hover:border-orange-300/50 hover:shadow-xl hover:shadow-orange-500/5 h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-orange-100 to-amber-50">
                  <img
                    src={mission.image}
                    alt={mission.company}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">{mission.company}</h3>
                  <div className="flex-1 mt-4">
                    <Quote className="h-5 w-5 text-orange-300 mb-2" />
                    <blockquote className="text-sm text-gray-500 italic leading-relaxed">
                      &ldquo;{mission.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="mt-6 pt-4 border-t border-orange-200/20">
                    <p className="text-sm font-medium text-gradient-subtle">{mission.result}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
