import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { INNOVATION_HEADING } from '@/lib/constants'
import { FlaskConical, Microscope } from 'lucide-react'

export function Innovation() {
  return (
    <section className="relative border-t border-orange-200/20 bg-white py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg-innovation.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
        />
      </div>
      <Container className="relative space-y-16">
        <AnimateOnScroll animation="fadeInUp">
          <SectionHeader
            title={INNOVATION_HEADING.title}
            subtitle={INNOVATION_HEADING.subtitle}
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2">
          <AnimateOnScroll animation="slideFromLeft" duration={700}>
            <div className="group relative overflow-hidden rounded-xl border border-orange-200/30 bg-gradient-to-br from-white to-orange-50/50 transition-all duration-500 hover:border-orange-300/50 hover:shadow-xl hover:shadow-orange-500/5">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-orange-100/60 via-amber-50/30 to-orange-50">
                <div className="text-orange-300 group-hover:text-orange-400 transition-all duration-500 group-hover:animate-float">
                  <FlaskConical className="h-16 w-16" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg">AI Research</h3>
                <p className="text-sm text-gray-500">
                  Advancing the frontiers of artificial intelligence with groundbreaking research.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slideFromRight" duration={700}>
            <div className="group relative overflow-hidden rounded-xl border border-orange-200/30 bg-gradient-to-br from-white to-amber-50/50 transition-all duration-500 hover:border-orange-300/50 hover:shadow-xl hover:shadow-orange-500/5">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-amber-100/60 via-orange-50/30 to-amber-50">
                <div className="text-amber-300 group-hover:text-orange-400 transition-all duration-500 group-hover:animate-float">
                  <Microscope className="h-16 w-16" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg">Future Tech</h3>
                <p className="text-sm text-gray-500">
                  Exploring emerging technologies and building tomorrow&apos;s solutions today.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
