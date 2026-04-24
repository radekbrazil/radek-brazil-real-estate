import React from 'react'
import { Link } from 'react-router-dom'

/* ============================================================
   ABOUT PAGE
   TODO: Replace all [PLACEHOLDER] values with real info.
   Replace headshot placeholder with a real professional photo.
   ============================================================ */
export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          background: 'var(--color-dark)',
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span className="section-label" style={{ color: 'var(--color-primary-light)' }}>
            About Me
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              color: '#ffffff',
              marginTop: '8px',
            }}
          >
            Your Arizona Real Estate Expert
          </h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 380px) 1fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* Headshot */}
            <div>
              <div
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-hover)',
                  margin: '0 auto',
                }}
              >
                <img
                  src="/headshot.png"
                  alt="Radek Brazil — Arizona Real Estate Agent"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                  }}
                />
              </div>
              {/* Credential badges */}
              <div
                style={{
                  marginTop: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {[
                  ['🏛️', 'Licensed Arizona REALTOR®'],
                  ['📍', 'Serving Greater Phoenix Metro'],
                  ['📞', '(480) 253-9803'], // TODO
                  ['✉️', 'Radek@TheCopper48.com'], // TODO
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      background: 'var(--color-bg)',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div>
              <span className="section-label">Licensed Real Estate Professional</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.5vw, 40px)',
                  marginBottom: '24px',
                }}
              >
                Hi, I'm Radek Brazil
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.85', color: 'var(--color-text-secondary)' }}>
                  I'm a Realtor based in Tempe, originally from Northern California. I started my first business at 18 and have been self-employed ever since — so when I say I understand the investor mindset, I mean it. When I'm not working, you'll find me chasing the next adventure — whether that's traveling somewhere new, getting outdoors, lacing up on the ice, or building something from scratch in my garage.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.85', color: 'var(--color-text-secondary)' }}>
                  I work with all types of clients, from first-time home buyers to seasoned investors. One area I'm particularly passionate about is investment property acquisition — I specialize in helping clients identify properties aligned with their specific goals, whether that's long-term appreciation, cash flow, or short-term rental income. I operate multiple high-performing short-term rentals across the Valley myself, so I bring firsthand knowledge of what makes a property perform — not just theory.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.85', color: 'var(--color-text-secondary)' }}>
                  One thing that sets me apart: I come from a trades background, which means I can walk through a property and spot issues that most agents — and even some inspectors — would miss. Structural red flags, deferred maintenance, costly repairs hiding in plain sight — I've seen it all. My goal isn't to sell you on a home, it's to make sure you're walking into your purchase with both eyes open. If something concerns me, I'll tell you straight.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.85', color: 'var(--color-text-secondary)' }}>
                  Buying a home is often one of the biggest financial decisions you'll ever make, and whether you're searching for a primary residence or building a portfolio, I'm here to make sure you're making a smart, informed move.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.85', color: 'var(--color-text-secondary)' }}>
                  As an added bonus for my clients, if you need a place to stay during your transition, I have Airbnb units available at deeply discounted rates — exclusively for the people I work with.
                </p>
              </div>

              {/* Credentials */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '20px',
                  marginTop: '40px',
                }}
              >
                {[
                  ['30', 'Homes Sold'],
                  ['4', 'Sales Last 12 Mo.'],
                  ['$250K–$829K', 'Price Range'],
                  ['5★', 'Client Rating'],
                ].map(([stat, label]) => (
                  <div
                    key={label}
                    style={{
                      background: 'var(--color-bg)',
                      border: '1.5px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '20px 16px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '28px',
                        color: 'var(--color-primary)',
                        fontWeight: '700',
                      }}
                    >
                      {stat}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">
                  Work With Me →
                </Link>
                <Link to="/listings" className="btn-outline">
                  View My Listings
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Service areas */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Where I Work</span>
            <h2 className="section-title" style={{ margin: '0 auto' }}>
              Serving the Greater Phoenix Area
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            {[
              'Scottsdale', 'Phoenix', 'Chandler', 'Gilbert', 'Tempe',
              'Mesa', 'Fountain Hills', 'Cave Creek', 'Paradise Valley',
              'Peoria', 'Glendale', 'Surprise',
            ].map((area) => (
              <span
                key={area}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '8px 20px',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'var(--color-primary)',
          padding: '64px 24px',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 4vw, 38px)',
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            Ready to Work Together?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>
            Every great real estate journey starts with a conversation. Let's talk about
            your goals — no pressure, no commitment.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              background: '#ffffff',
              color: 'var(--color-primary)',
              padding: '14px 36px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: '700',
              fontSize: '15px',
            }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
