import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { HERO_CONTENT } from '@/lib/constants'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50/50">
      <div className="absolute inset-0 bg-grid" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-orange-400/8 blur-[80px] animate-float" />
      </div>

      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
        <div className="text-center lg:text-left">
          <AnimateOnScroll animation="fadeInUp" duration={800}>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-100/50 px-5 py-2 text-sm text-orange-700 backdrop-blur mb-8">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Next-generation technology
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={150} duration={800}>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">{HERO_CONTENT.headline}</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={300} duration={800}>
            <p className="mt-6 text-balance text-lg text-gray-500 sm:text-xl max-w-lg">
              {HERO_CONTENT.subheadline}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={450} duration={800}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 transition-all duration-300 sm:px-8 sm:py-6 text-base">
                {HERO_CONTENT.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-orange-300/40 text-gray-700 hover:bg-orange-50 hover:text-gray-900 sm:px-8 sm:py-6 text-base"
              >
                <Play className="mr-2 h-4 w-4" />
                {HERO_CONTENT.secondary_cta}
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fadeIn" delay={300} duration={1000} className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-orange-200/30 bg-white/50 shadow-xl shadow-orange-500/5">
              <img
                src="/hero-tech.jpg"
                alt="Spavecraft technology illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
