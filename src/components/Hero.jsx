import React from 'react'
import { Link } from 'react-router-dom'

/* ============================================================
   HERO SECTION — Home page
   Full-bleed photo background with headline and CTAs.
   ============================================================ */
export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.45)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(42,26,16,0.70) 40%, rgba(42,26,16,0.2) 100%)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="container"
        style={{ position: 'relative', zIndex: 2, padding: '80px 24px' }}
      >
        <div style={{ maxWidth: '620px' }}>
          {/* Eyebrow label */}
          <span
            style={{
              display: 'inline-block',
              background: 'var(--color-primary)',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: '4px',
              marginBottom: '24px',
            }}
          >
            Arizona Real Estate
          </span>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 6vw, 68px)',
              fontWeight: '700',
              color: '#ffffff',
              lineHeight: '1.15',
              marginBottom: '24px',
            }}
          >
            Find Your Place<br />
            <span style={{ color: 'var(--color-primary-light)' }}>in Arizona</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: '1.75',
              marginBottom: '40px',
              maxWidth: '520px',
            }}
          >
            Whether you're buying your first home, upsizing, or ready to sell — I bring
            deep local knowledge and honest guidance to every transaction in the
            greater Phoenix area.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/listings" className="btn-primary">
              Browse Listings →
            </Link>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-body)',
                fontWeight: '700',
                fontSize: '15px',
                border: '2px solid rgba(255,255,255,0.6)',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#ffffff'
                e.target.style.background = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.6)'
                e.target.style.background = 'transparent'
              }}
            >
              Free Home Valuation
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
