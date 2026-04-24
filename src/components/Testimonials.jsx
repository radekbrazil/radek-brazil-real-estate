import React, { useState } from 'react'

/* ============================================================
   TESTIMONIALS SECTION
   TODO: Replace with real client testimonials and names.
   ============================================================ */
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Working with Radek Brazil was the best decision we made in our home search. They knew every neighborhood in Scottsdale, moved fast when we found our dream home, and made the whole process feel effortless. We closed in 28 days.",
    name: 'Sarah & Mike T.',
    location: 'Scottsdale, AZ',
    type: 'Buyers',
    stars: 5,
  },
  {
    id: 2,
    quote:
      "I was nervous about selling — it was my mom's house and had a lot of sentimental value. Radek Brazil was patient, compassionate, and strategic. We listed on a Thursday, had multiple offers by Sunday, and sold for $40K over asking.",
    name: 'Rebecca L.',
    location: 'Chandler, AZ',
    type: 'Seller',
    stars: 5,
  },
  {
    id: 3,
    quote:
      "As first-time buyers, we had a thousand questions. Radek Brazil answered every single one without making us feel rushed. They found us a home we love in a neighborhood we didn't even know we'd love. Couldn't recommend them more.",
    name: 'James & Priya K.',
    location: 'Tempe, AZ',
    type: 'First-Time Buyers',
    stars: 5,
  },
  {
    id: 4,
    quote:
      "I've done three transactions with Radek Brazil over the years — two purchases and one sale. Every time they bring the same energy, hustle, and integrity. They're the only agent I'll ever call.",
    name: 'David M.',
    location: 'Gilbert, AZ',
    type: 'Repeat Client',
    stars: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = TESTIMONIALS[active]

  return (
    <section
      className="section"
      style={{
        background: 'var(--color-dark)',
        color: '#ffffff',
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span
            className="section-label"
            style={{ color: 'var(--color-primary-light)' }}
          >
            Client Stories
          </span>
          <h2
            className="section-title"
            style={{ color: '#ffffff', margin: '0 auto 16px' }}
          >
            What My Clients Say
          </h2>
          <p
            className="section-subtitle"
            style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}
          >
            Real results and honest feedback from families across the Phoenix area.
          </p>
        </div>

        {/* Testimonial card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(32px, 5vw, 56px)',
            position: 'relative',
            marginBottom: '40px',
          }}
        >
          {/* Quote icon */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              left: '32px',
              fontFamily: 'Georgia',
              fontSize: '80px',
              color: 'var(--color-primary)',
              lineHeight: 1,
              opacity: 0.4,
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            "
          </div>

          {/* Stars */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', justifyContent: 'center' }}>
            {Array.from({ length: current.stars }).map((_, i) => (
              <span key={i} style={{ color: '#FBBF24', fontSize: '20px' }}>★</span>
            ))}
          </div>

          {/* Quote text */}
          <blockquote
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(17px, 2.5vw, 22px)',
              lineHeight: '1.65',
              color: '#f5f0ec',
              textAlign: 'center',
              marginBottom: '32px',
              fontStyle: 'italic',
            }}
          >
            "{current.quote}"
          </blockquote>

          {/* Attribution */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
              {current.name}
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
              {current.type} · {current.location}
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View testimonial ${i + 1}`}
              style={{
                width: i === active ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === active ? 'var(--color-primary)' : 'rgba(255,255,255,0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 0.3s ease, background 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
