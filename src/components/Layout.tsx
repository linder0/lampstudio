import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import LampToggle from './LampToggle'
import { useLamp } from '../context/LampContext'

interface LayoutProps {
  children: ReactNode
}

const navLinks = [
  { path: '/', label: 'Gallery' },
  { path: '/team', label: 'Team' },
  { path: '/thesis', label: 'Thesis' },
]

const pageTitles: Record<string, string> = {
  '/': 'All Projects',
  '/team': 'The Team',
  '/thesis': 'Our Thesis',
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const { isLampOn } = useLamp()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentPageTitle = pageTitles[location.pathname] || ''

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: isLampOn ? 'var(--cream)' : 'var(--cream-dim)',
        transition: 'background-color 0.8s ease-in-out'
      }}
    >
      {/* Pull Cord - Fixed in top right corner, centered in right margin */}
      <div className="fixed top-4 right-10 z-[100]">
        <LampToggle />
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-50"
        style={{
          backgroundColor: isScrolled
            ? isLampOn
              ? 'color-mix(in srgb, var(--cream) 85%, white)'
              : 'color-mix(in srgb, var(--cream-dim) 85%, white)'
            : 'transparent',
          boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease',
        }}
      >
        <div className={`max-w-7xl mx-auto pl-6 pr-14 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <div className="flex items-center justify-between">
            {/* Logo + Page Title */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className={`font-serif font-medium text-ink hover:text-burgundy transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}
              >
                Lamp Collective
              </Link>
              {isScrolled && currentPageTitle && location.pathname !== '/' && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-burgundy-light text-sm font-mono"
                >
                  / {currentPageTitle}
                </motion.span>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`relative uppercase tracking-widest text-burgundy hover:text-ink transition-all duration-300 py-2 ${isScrolled ? 'text-xs' : 'text-sm'}`}
                    >
                      {link.label}
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-px bg-burgundy"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto pl-6 pr-14 py-12 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-burgundy/10 mt-auto bg-black/5">
        <div className="max-w-7xl mx-auto pl-6 pr-14 py-8">
          <div className="flex items-end justify-between">
            {/* Left: Logo + Copyright */}
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="font-serif text-lg font-medium text-ink hover:text-burgundy transition-colors"
              >
                Lamp Collective
              </Link>
              <p className="text-xs text-burgundy-light/60">
                &copy; {new Date().getFullYear()} Lamp Collective
              </p>
            </div>

            {/* Right: Contact */}
            <div className="flex flex-col items-end gap-1 text-sm text-burgundy-light">
              <p className="font-mono text-xs tracking-wide">Reach out here:</p>
              <a
                href="mailto:hello@lampcollective.com"
                className="hover:text-burgundy transition-colors"
              >
                hello@lampcollective.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
