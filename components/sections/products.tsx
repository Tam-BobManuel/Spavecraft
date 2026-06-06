import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { PRODUCTS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export function Products() {
  return (
    <section id="products" className="relative border-t border-orange-200/20 bg-gradient-to-b from-orange-50/50 to-white py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/bg-products.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>
      <Container className="relative space-y-16">
        <AnimateOnScroll animation="fadeInUp">
          <SectionHeader
            title="AI Products"
            subtitle="Cutting-edge solutions for the modern enterprise"
          />
        </AnimateOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <AnimateOnScroll
              key={product.id}
              animation="fadeInUp"
              delay={index * 150}
              duration={600}
            >
              <div className="group relative overflow-hidden rounded-xl border border-orange-200/30 bg-white transition-all duration-500 hover:border-orange-300/50 hover:shadow-xl hover:shadow-orange-500/5">
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-orange-100 to-amber-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:bg-clip-text transition-all duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <Button
                    variant="ghost"
                    className="group/btn mt-2 text-orange-600 hover:text-amber-600 hover:bg-orange-50 px-0"
                  >
                    Learn more
                    <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
