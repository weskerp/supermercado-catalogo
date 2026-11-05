
import { useState } from 'react'
import { Menu, X, ShoppingBasket } from 'lucide-react'
import { siteConfig } from '../../../config/site'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Produtos', href: '/produtos' },
    { label: 'Catalogo', href: '/catalogo' },
  ]

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-container">

        <a href="#inicio" className="header-brand" onClick={closeMenu}>
          {siteConfig.logo ? (
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className="header-logo"
            />
          ) : (
            <div className="header-logo-placeholder">
              <ShoppingBasket size={29} />
            </div>
          )}

          <div className="header-brand-info">
            <strong>{siteConfig.name}</strong>
            <span>Supermercado</span>
          </div>
        </a>

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

        <a href="#ofertas" className="header-offers-button">
          Ver ofertas
        </a>

        <button
          type="button"
          className="header-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </header>
  )
}
