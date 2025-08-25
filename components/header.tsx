"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  onLoginClick?: () => void
}

export function Header({ onLoginClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/bank-of-america-logo.svg" alt="Bank of America" className="h-8" />
          </div>

          {/* Right side - LOGIN and Menu */}
          <div className="flex items-center space-x-4">
            <button onClick={onLoginClick} className="text-red-600 font-semibold text-sm hover:underline">
              LOGIN
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-1">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100">
              Checking
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100">
              Savings & CDs
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100">
              Credit Cards
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100">
              Home Loans
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100">
              Auto Loans
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100">
              Investing
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100">
              Small Business
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100">
              Student Banking
            </a>
            <div className="pt-4 border-t border-gray-200">
              <a href="#" className="block text-gray-700 hover:text-blue-600 py-1">
                En español
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 py-1">
                Contact Us
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 py-1">
                Help
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
