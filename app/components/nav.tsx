'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { businessConfig } from 'app/config/business'
import { useState, useEffect } from 'react'

const navItems = [
  {
    path: '/services',
    name: 'Services',
  },
  {
    path: '/cfp-partners',
    name: 'CFP Partners',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/resources',
    name: 'Resources',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header 
      className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-gray-200 shadow-sm' 
          : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {businessConfig.name}
              </span>
              <span className="ml-2 text-xs md:text-sm text-gray-600 font-normal hidden lg:inline transition-colors">
                Real Estate Services for Financial Planners
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path || pathname?.startsWith(item.path + '/')
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap relative ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="ml-3 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Tablet/Mobile Navigation - Show fewer items */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.slice(0, 3).map((item) => {
              const isActive = pathname === item.path || pathname?.startsWith(item.path + '/')
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
            {navItems.map((item) => {
              const isActive = pathname === item.path || pathname?.startsWith(item.path + '/')
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="block mt-4 px-4 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 text-center shadow-lg hover:shadow-xl transition-all duration-200 transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
