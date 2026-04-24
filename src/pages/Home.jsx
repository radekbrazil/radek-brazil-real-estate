import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FeaturedListings from '../components/FeaturedListings'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

/* ============================================================
   HOME PAGE
   ============================================================ */
export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Value Proposition */}
      <ValuePropSection />

      {/* 3. Featured Listings */}
      <FeaturedListings />

      {/* 4. How It Works */}
      <HowItWorksSection />

      {/* 5. Testimonials */}
      <Testimonials />

      {/* 6. CTA Banner */}
      <CTABanner />

      {/* 7. Contact form */}
      <ContactSection />
    </main>
  )
}

/* --- Value Proposition ------------------------------------ */
function ValuePropSection() {
  const values = [
    {
      icon: '🏡',
      title: 'Deep Local Knowledge',
      desc: 'I know every pocket of the Valley — from Cave Creek ranches to Downtown Phoenix lofts.',
    },
    {
      icon: '🤝',
      title: 'Negotiation You Can Count On',
      desc: 'My clients routinely achieve favorable terms because I come to every deal prepared and strategic.',
    },
    {
      icon: '📱',
      title: 'Always Accessible',
      desc: "You'll never wonder what's happening with your transaction. I keep clients informed at every step.",
    },
    {
      icon: '⭐',
      title: 'Proven Track Record',
      desc: '30 closed transactions across the Phoenix metro, with a near-perfect client satisfaction record.',
    },
  ]

  return (
    <section className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Why Choose Me</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Arizona Real Estate Done Right
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            I'm not just a transaction — I'm your guide, your advocate, and your
            resource long after closing day.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                padding: '32px 24px',
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--color-border)',
                background: 'var(--color-bg)',
                transition: 'border-color var(--transition), box-shadow var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary-light)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{v.icon}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  marginBottom: '10px',
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --- How It Works ----------------------------------------- */
function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Let\'s Connect', desc: 'Tell me your goals — buying, selling, or both. We\'ll talk through what\'s realistic given your timeline and budget.' },
    { num: '02', title: 'Build a Strategy', desc: 'I\'ll create a custom plan: which neighborhoods to target, how to price competitively, or how to position your home for max value.' },
    { num: '03', title: 'Execute Together', desc: 'I handle the details — tours, negotiations, inspections, and paperwork — so you can focus on your life.' },
    { num: '04', title: 'Close with Confidence', desc: 'You\'ll know exactly what to expect at closing. And my support doesn\'t end there — I\'m your real estate resource forever.' },
  ]

  return (
    <section
      className="section"
      style={{ background: 'var(--color-primary-light)', overflow: 'hidden' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label" style={{ color: 'var(--color-primary-dark)' }}>
            The Process
          </span>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            Simple. Clear. No Surprises.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
          }}
        >
          {steps.map((step, i) => (
            <div key={step.num} style={{ position: 'relative' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '48px',
                  color: 'var(--color-primary)',
                  opacity: 0.3,
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  marginBottom: '10px',
                  color: 'var(--color-dark)',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --- CTA Banner ------------------------------------------- */
function CTABanner() {
  return (
    <section
      style={{
        background: 'var(--color-primary)',
        padding: '64px 24px',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '700px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 4vw, 42px)',
            color: '#ffffff',
            marginBottom: '16px',
          }}
        >
          Ready to Make Your Move?
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '17px',
            marginBottom: '36px',
            lineHeight: '1.7',
          }}
        >
          Whether you're buying, selling, or just exploring your options — a quick
          conversation costs nothing and could change everything.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              background: '#ffffff',
              color: 'var(--color-primary)',
              padding: '14px 32px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: '700',
              fontSize: '15px',
              transition: 'transform 0.2s',
            }}
          >
            Schedule a Free Call
          </Link>
          <Link
            to="/listings"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: '700',
              fontSize: '15px',
              border: '2px solid rgba(255,255,255,0.6)',
            }}
          >
            Browse Listings
          </Link>
        </div>
      </div>
    </section>
  )
}

/* --- Contact Section -------------------------------------- */
function ContactSection() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Let's Start the Conversation
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a question or ready to get started? I respond within 24 hours.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
