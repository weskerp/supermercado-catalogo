
import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = [
    { label: 'Início', href: '#' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Categorias', href: '#categorias' },
  ]

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="home-header">
      <div className="header-home-container">
        <nav className={`header-navigation ${menuOpen ? 'active' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="header-nav-link"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#ofertas"
            className="header-mobile-offers"
            onClick={closeMenu}
          >
            Confira nossas ofertas
          </a>
        </nav>
      </div>
    </header>
  )
}
