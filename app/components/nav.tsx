'use client'

import Link from 'next/link'
import { businessConfig } from 'app/config/business'
import { useState } from 'react'

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

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-gray-900 hover:text-[#2563eb] transition-colors">
                {businessConfig.name}
              </span>
              <span className="ml-2 text-xs md:text-sm text-gray-500 font-normal hidden sm:inline">
                Real Estate Services for Financial Planners
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-3 py-2 text-sm font-normal text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap relative"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-[#2563eb] text-white text-sm font-semibold rounded-md hover:bg-[#1d4ed8] transition-colors whitespace-nowrap shadow-sm"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-3 py-2 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-3 px-3 py-2 bg-[#2563eb] text-white text-base font-semibold rounded-md hover:bg-[#1d4ed8] text-center shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
