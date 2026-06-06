import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ArrowRight, Calendar } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative border-t border-orange-200/20 bg-gradient-to-b from-white to-orange-50/50 py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg-cta.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          sizes="100vw"
        />
      </div>
      <Container>
        <AnimateOnScroll animation="scaleIn" duration={800}>
          <div className="relative overflow-hidden rounded-2xl border border-orange-300/30 bg-gradient-to-br from-orange-500/10 via-white to-amber-500/10 p-8 sm:p-12 lg:p-16">
            <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-[120px] animate-float-slow" />
            <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[100px] animate-float" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gradient">
                Ready to transform your business?
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Join hundreds of companies using our platform to accelerate their growth.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 transition-all duration-300 sm:px-8 sm:py-6 text-base">
                  Launch Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-300/40 text-gray-700 hover:bg-orange-50 hover:text-gray-900 sm:px-8 sm:py-6 text-base"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
