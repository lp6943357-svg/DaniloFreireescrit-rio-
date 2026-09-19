'use client'

import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#localizacao', label: 'Localização' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className="bg-primary-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 group text-white">
            <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center font-bold text-primary-900 group-hover:scale-110 transition-transform">DF</div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight">Danilo Freire</h1>
              <p className="text-xs text-gray-200">Advogados</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-white text-sm font-medium hover:text-accent-400 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+553137851890" className="text-white flex items-center gap-2 hover:text-accent-400 transition-colors" title="Ligar">
              <Phone size={18} />
              <span className="text-sm">(31) 3785-1890</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-primary-600 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden border-t border-primary-400 py-4 bg-primary-500">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-3 text-white font-medium hover:bg-primary-600 hover:text-accent-400 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-primary-400">
              <a href="tel:+553137851890" className="flex items-center gap-2 py-3 px-3 text-white hover:bg-primary-600 hover:text-accent-400 rounded-lg transition-colors">
                <Phone size={18} />
                <span className="text-sm">(31) 3785-1890</span>
              </a>
              <a href="https://maps.app.goo.gl/3Mi7UYm6DV3roczz6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-3 px-3 text-white hover:bg-primary-600 hover:text-accent-400 rounded-lg transition-colors">
                <MapPin size={18} />
                <span className="text-sm">Ver Localização</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
