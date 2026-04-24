import React from 'react'
import ContactForm from '../components/ContactForm'

/* ============================================================
   CONTACT PAGE
   TODO: Fill in phone, email, social URLs, and embed the
   Google Maps iframe for your service area.
   ============================================================ */
export default function Contact() {
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
            Let's Talk
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              color: '#ffffff',
              marginTop: '8px',
              marginBottom: '16px',
            }}
          >
            Get In Touch
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
            Whether you're ready to make a move or just exploring your options — I'd love
            to hear from you. I respond to every inquiry personally within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* Left: Contact info */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '26px',
                  marginBottom: '32px',
                }}
              >
                How to Reach Me
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Phone */}
                <ContactInfoCard
                  icon="📞"
                  label="Phone / Text"
                  value={
                    <a href="tel:+19259617911" style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '17px' }}>
                      (925) 961-7911
                    </a>
                  }
                  sub="Available Mon–Sat, 8am–7pm AZ time"
                />

                {/* Email */}
                <ContactInfoCard
                  icon="✉️"
                  label="Email"
                  value={
                    <a href="mailto:Radek@TheCopper48.com" style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '17px' }}>
                      {/* TODO: Replace with real email */}
                      Radek@TheCopper48.com
                    </a>
                  }
                  sub="I respond within 24 hours"
                />

                {/* Office */}
                <ContactInfoCard
                  icon="🏢"
                  label="Brokerage"
                  value={
                    <span style={{ fontWeight: '700', fontSize: '16px' }}>
                      {/* TODO: Replace */}
                      My Home Group
                    </span>
                  }
                  sub="AZ License # SA696921000"
                />

                {/* Social */}
                <div
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px 22px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '14px',
                    }}
                  >
                    Follow Along
                  </p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {[
                      { href: 'https://instagram.com/RadekRealtor', label: 'Instagram', icon: 'IG' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '44px',
                          height: '44px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--color-bg)',
                          border: '1.5px solid var(--color-border)',
                          fontWeight: '700',
                          fontSize: '13px',
                          color: 'var(--color-text-secondary)',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = 'var(--color-primary)'
                          e.target.style.color = 'var(--color-primary)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = 'var(--color-border)'
                          e.target.style.color = 'var(--color-text-secondary)'
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(28px, 4vw, 48px)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  marginBottom: '8px',
                }}
              >
                Send Me a Message
              </h2>
              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '14px',
                  marginBottom: '28px',
                }}
              >
                Fill out the form and I'll be in touch shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Google Maps embed */}
      <section style={{ height: '400px', background: 'var(--color-border)' }}>
        {/*
          TODO: Replace the src with your actual Google Maps embed URL.
          Go to maps.google.com → search your service area → Share → Embed a map → Copy HTML
          Then paste just the src URL from the <iframe> tag below.
        */}
        <iframe
          title="Greater Phoenix service area map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425158.3066126584!2d-112.47442384831298!3d33.60567994854478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1713000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* JSON-LD Structured Data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Radek Brazil', // TODO
            image: 'https://yourdomain.com/headshot.png',
            telephone: '(925) 961-7911',
            email: 'Radek@TheCopper48.com', // TODO
            url: 'https://yourdomain.com', // TODO
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Phoenix',
              addressRegion: 'AZ',
              addressCountry: 'US',
            },
            areaServed: ['Phoenix', 'Scottsdale', 'Chandler', 'Gilbert', 'Tempe', 'Mesa'],
            priceRange: '$$',
          }),
        }}
      />
    </main>
  )
}

function ContactInfoCard({ icon, label, value, sub }) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.5px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: '20px 22px',
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start',
      }}
    >
      <span style={{ fontSize: '24px', flexShrink: 0 }}>{icon}</span>
      <div>
        <p
          style={{
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: '4px',
          }}
        >
          {label}
        </p>
        {value}
        {sub && (
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  )
}
