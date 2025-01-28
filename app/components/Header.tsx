'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = document.querySelectorAll('section[id]')
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eco_Refill_Logo_1_2_-removebg-preview-x7B5RpquastjjxEtSW8DNO4szLK2Ka.png"
              alt="EcoSuds Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-foreground">EcoSuds</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <nav className={`${
              isMenuOpen 
                ? 'absolute top-full left-0 right-0 border-b bg-background p-4' 
                : 'hidden'
              } md:relative md:flex md:items-center md:space-x-6`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block py-2 md:py-0 transition-colors hover:text-primary",
                    activeSection === item.href.slice(1)
                      ? "text-primary font-medium" 
                      : "text-muted-foreground"
                  )}
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      const target = document.querySelector(item.href)
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                    setIsMenuOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild
                className="w-full md:hidden mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/contact-v2-map">
                  Get Started
                </Link>
              </Button>
            </nav>

            <div className="flex items-center gap-4">
              <Button 
                asChild
                className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact-v2-map">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

