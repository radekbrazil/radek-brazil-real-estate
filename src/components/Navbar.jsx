import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

/* ============================================================
   NAVBAR
   Sticky top nav with mobile hamburger menu.
   TODO: Replace Radek Brazil with the agent's actual name.
   ============================================================ */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Add shadow when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/listings', label: 'Listings' },
    { to: '/hot-deals', label: '🔥 Hot Deals' },
    { to: '/buyers-sellers', label: 'Buy & Sell' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#ffffff',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 16px rgba(42,26,16,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '20px',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            letterSpacing: '0.3px',
          }}
        >
          {/* TODO: Replace with agent's name */}
          Radek Brazil <span style={{ color: 'var(--color-primary)', fontWeight: '400' }}>| Real Estate</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ul
            style={{
              display: 'flex',
              gap: '28px',
              listStyle: 'none',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: '700',
                    letterSpacing: '0.5px',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    paddingBottom: '4px',
                    borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn-primary" style={{ fontSize: '13px', padding: '10px 22px' }}>
            Free Consultation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--color-text-primary)',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--color-text-primary)',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--color-text-primary)',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderTop: '1px solid var(--color-border)',
            padding: '16px 24px 24px',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '12px 0',
                    fontWeight: '700',
                    fontSize: '16px',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                    borderBottom: '1px solid var(--color-border)',
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ marginTop: '20px', display: 'block', textAlign: 'center' }}
          >
            Free Consultation
          </Link>
        </div>
      )}

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          a.btn-primary[href="/contact"] { display: none !important; }
        }
      `}</style>
    </header>
  )
}
