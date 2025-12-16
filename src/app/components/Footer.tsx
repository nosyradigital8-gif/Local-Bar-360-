import { Wine, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-green-600 rounded-full">
                <Wine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl">Local Bar 360 GH</h3>
                <p className="text-sm text-gray-400">Authentic Ghanaian Refreshment</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Celebrating Ghanaian taste with locally made beverages and snacks, served with class and hospitality for weddings, corporate events, and social gatherings.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/localbar360gh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+233 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@localbar360gh.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Instagram className="w-4 h-4 mt-1" />
                <span>@localbar360gh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 Local Bar 360 GH. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
