'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { NAVIGATION_LINKS } from '@/lib/constants'
import { Satellite, Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-orange-200/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20">
            <Satellite className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-gray-900">Spavecraft</span>
        </div>

        <nav className="hidden gap-8 md:flex">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-gray-500 transition-colors hover:text-gray-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-gray-500 hover:text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-orange-200/30 bg-white/90 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
              Get Started
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
