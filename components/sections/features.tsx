import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { FEATURES } from '@/lib/constants'
import { BrainCircuit, BarChart3, Shield, Server, Headphones, Puzzle } from 'lucide-react'

const featureIcons = [
  <BrainCircuit key="brain" className="h-6 w-6" />,
  <BarChart3 key="chart" className="h-6 w-6" />,
  <Shield key="shield" className="h-6 w-6" />,
  <Server key="server" className="h-6 w-6" />,
  <Headphones key="headphones" className="h-6 w-6" />,
  <Puzzle key="puzzle" className="h-6 w-6" />,
]

export function Features() {
  return (
    <section id="features" className="relative border-t border-orange-200/20 bg-white py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-[0.12] bg-cover bg-center"
          style={{ backgroundImage: 'url(/bg-features.jpg)' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.02] to-transparent" />
      <Container className="relative space-y-16">
        <AnimateOnScroll animation="fadeInUp">
          <SectionHeader
            title="Powerful Features"
            subtitle="Everything you need to transform your business"
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <AnimateOnScroll
              key={feature.id}
              animation="fadeInUp"
              delay={index * 100}
              duration={600}
            >
              <Card className="flex flex-col gap-4 group bg-gradient-to-br from-white to-orange-50/50 border-orange-200/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/15 to-amber-500/15 text-orange-600 group-hover:from-orange-500/25 group-hover:to-amber-500/25 group-hover:text-amber-600 transition-all duration-500">
                  {featureIcons[index]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
