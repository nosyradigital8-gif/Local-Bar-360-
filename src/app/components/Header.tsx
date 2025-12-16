import { Wine, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-green-600 rounded-full">
              <Wine className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl text-gray-900">Local Bar 360 GH</h1>
              <p className="text-xs text-gray-600">Authentic Ghanaian Refreshment</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-amber-100">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
