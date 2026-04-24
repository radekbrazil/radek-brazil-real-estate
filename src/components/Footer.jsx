import React from 'react'
import { Link } from 'react-router-dom'

/* ============================================================
   FOOTER
   TODO: Fill in all [PLACEHOLDER] values.
   ============================================================ */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--color-dark)',
        color: '#e0d0c8',
        padding: '64px 0 32px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              to="/"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '20px',
                color: '#ffffff',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              {/* TODO: Replace with agent name */}
              Radek Brazil{' '}
              <span style={{ color: 'var(--color-primary-light)', fontWeight: '400' }}>
                | Real Estate
              </span>
            </Link>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#b8a49c', marginBottom: '20px' }}>
              Helping Arizona families find home. Licensed real estate professional serving the
              greater Phoenix metro area.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: '14px' }}>
              <a
                href="https://instagram.com/RadekRealtor"
                aria-label="Instagram"
                style={socialIconStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--color-primary-light)',
                marginBottom: '20px',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                ['/', 'Home'],
                ['/listings', 'Listings'],
                ['/hot-deals', '🔥 Hot Deals'],
                ['/buyers-sellers', 'Buy & Sell'],
                ['/about', 'About Me'],
                ['/contact', 'Contact'],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link
                    to={path}
                    style={{ color: '#b8a49c', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.target.style.color = '#b8a49c')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--color-primary-light)',
                marginBottom: '20px',
              }}
            >
              Get In Touch
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* TODO: Replace with real phone/email */}
              <li>
                <a href="tel:+19259617911" style={{ color: '#b8a49c', fontSize: '14px' }}>
                  📞 (925) 961-7911
                </a>
              </li>
              <li>
                <a href="mailto:Radek@TheCopper48.com" style={{ color: '#b8a49c', fontSize: '14px' }}>
                  ✉️ Radek@TheCopper48.com
                </a>
              </li>
              <li style={{ color: '#b8a49c', fontSize: '14px' }}>
                📍 Greater Phoenix, Arizona
              </li>
              <li style={{ color: '#b8a49c', fontSize: '13px', marginTop: '8px' }}>
                {/* TODO: Add real brokerage and license */}
                My Home Group<br />
                AZ License # SA696921000
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: '#7a6860' }}>
            © {currentYear} Radek Brazil | Real Estate. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: '#7a6860' }}>
            Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  )
}

const socialIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.08)',
  color: '#b8a49c',
  transition: 'background 0.2s, color 0.2s',
}
