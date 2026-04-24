import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* ============================================================
   HOT DEALS PAGE — Investment opportunities
   Add deals to the HOT_DEALS array. Set active: false to hide
   a deal without deleting it.

   Strategy tags (for filter): 'STR' | 'House Hack' | 'Assumptions' | 'Cash Flow' | 'Fix & Flip'
   Deal tags (badge on card):  'Off-Market' | 'Price Drop' | 'Coming Soon' | 'Cash Flow' | 'Fix & Flip'

   LEAD GATE: Visitors must submit their info before viewing deals.
   Submissions go to Netlify Forms (dashboard → Forms → hot-deals-lead).
   ============================================================ */

const HOT_DEALS = [
  // Add deals here as they come up. Example:
  // {
  //   id: 1,
  //   address: '1234 E Example St',
  //   city: 'Phoenix, AZ 85001',
  //   price: '$375,000',
  //   image: 'https://...',
  //   tag: 'Off-Market',           // badge shown on card image
  //   strategies: ['STR', 'Cash Flow'],  // used for filter tabs
  //   highlight: 'Projected 8% cap rate',
  //   description: 'Single-family with existing tenant in place. Strong rental history in a growing submarket.',
  //   active: true,
  // },
]

const FILTER_OPTIONS = [
  { key: 'All',         label: 'All Deals' },
  { key: 'STR',         label: '🏖 STR' },
  { key: 'House Hack',  label: '🏠 House Hack' },
  { key: 'Assumptions', label: '📋 Assumptions' },
]

const tagColors = {
  'Off-Market':    { bg: '#fef3c7', color: '#92400e' },
  'Price Drop':    { bg: '#fee2e2', color: '#991b1b' },
  'Coming Soon':   { bg: '#ede9fe', color: '#5b21b6' },
  'Cash Flow':     { bg: '#dcfce7', color: '#15803d' },
  'Fix & Flip':    { bg: '#ffedd5', color: '#9a3412' },
}

/* ── Lead Gate Form ──────────────────────────────────────── */
function LeadGate({ onUnlock }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', intent: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.intent) {
      setError('Please fill out all fields.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'hot-deals-lead',
          ...form,
        }).toString(),
      })
      localStorage.setItem('hd_unlocked', '1')
      onUnlock()
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid var(--color-border)',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--color-text)',
    background: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
  }

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '520px' }}>
        {/* Teaser card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-hover)',
            overflow: 'hidden',
          }}
        >
          {/* Top bar */}
          <div
            style={{
              background: 'var(--color-primary)',
              padding: '20px 32px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '6px' }}>🔒</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                color: '#ffffff',
                margin: 0,
              }}
            >
              Unlock Exclusive Deals
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: '6px', marginBottom: 0 }}>
              Free access — just tell me a little about yourself
            </p>
          </div>

          {/* Form body */}
          <form
            name="hot-deals-lead"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            style={{ padding: '32px' }}
          >
            {/* Hidden field required by Netlify */}
            <input type="hidden" name="form-name" value="hot-deals-lead" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                  I'm looking to... *
                </label>
                <select
                  name="intent"
                  value={form.intent}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="">Select one...</option>
                  <option value="Investment Purchase">Investment Purchase</option>
                  <option value="Personal Home">Personal Home</option>
                  <option value="Both">Both — Open to Either</option>
                </select>
              </div>

              {error && (
                <p style={{ color: '#dc2626', fontSize: '14px', margin: 0 }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '15px',
                  padding: '14px',
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? 'wait' : 'pointer',
                }}
              >
                {submitting ? 'Submitting...' : 'Show Me the Deals 🔥'}
              </button>

              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center', margin: 0 }}>
                No spam. Your info is only used to match you with relevant deals.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ── Main Page ───────────────────────────────────────────── */
export default function HotDeals() {
  const [unlocked, setUnlocked] = useState(() => !!localStorage.getItem('hd_unlocked'))
  const [activeFilter, setActiveFilter] = useState('All')

  const activeDeals = HOT_DEALS.filter((d) => d.active)
  const filteredDeals =
    activeFilter === 'All'
      ? activeDeals
      : activeDeals.filter((d) => d.strategies && d.strategies.includes(activeFilter))

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'var(--color-dark)',
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span className="section-label" style={{ color: 'var(--color-primary-light)' }}>
            Investment Opportunities
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
            🔥 Hot Deals
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', maxWidth: '540px', margin: '0 auto' }}>
            Off-market finds, price reductions, and high-potential investment properties
            across the Phoenix metro — curated from my personal network before they hit the open market.
          </p>
        </div>
      </section>

      {/* Lead gate OR deals grid */}
      {!unlocked ? (
        <LeadGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">

            {/* Filter tabs */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '36px',
              }}
            >
              {FILTER_OPTIONS.map((opt) => {
                const isActive = activeFilter === opt.key
                return (
                  <button
                    key={opt.key}
                    onClick={() => setActiveFilter(opt.key)}
                    style={{
                      padding: '9px 20px',
                      borderRadius: '999px',
                      border: isActive
                        ? '2px solid var(--color-primary)'
                        : '2px solid var(--color-border)',
                      background: isActive ? 'var(--color-primary)' : '#ffffff',
                      color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: '700',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>

            {/* Grid or empty */}
            {filteredDeals.length === 0 ? (
              <EmptyState filter={activeFilter} />
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '28px',
                }}
              >
                {filteredDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Why invest with Radek */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Why Work With Me</span>
            <h2 className="section-title" style={{ margin: '0 auto' }}>
              An Agent Who Actually Invests
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                icon: '🏠',
                title: 'I Run STRs Myself',
                desc: 'I operate multiple high-performing short-term rentals across the Valley. When I evaluate a property for you, I know what actually makes one perform.',
              },
              {
                icon: '🔧',
                title: 'Trades Background',
                desc: "I can walk through a property and spot what most agents miss — structural issues, deferred maintenance, costly repairs hiding in plain sight. You'll know exactly what you're buying.",
              },
              {
                icon: '📊',
                title: 'Goal-Aligned Strategy',
                desc: "Whether you're after long-term appreciation, monthly cash flow, or short-term rental income, I help you identify properties aligned with your specific investment goals.",
              },
              {
                icon: '🤝',
                title: 'Off-Market Access',
                desc: "Some of the best deals never hit Zillow. My network gives clients access to properties before they're publicly listed.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '28px 24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--color-border)',
                  background: 'var(--color-bg)',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {item.desc}
                </p>
              </div>
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
            Want First Access to New Deals?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>
            Tell me your investment criteria — budget, preferred areas, strategy — and I'll
            reach out the moment something matching hits my radar.
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
            Send Me Your Criteria →
          </Link>
        </div>
      </section>
    </main>
  )
}

function EmptyState({ filter }) {
  const label = filter === 'All' ? 'any active deals' : `any ${filter} deals`
  return (
    <div style={{ textAlign: 'center', padding: '64px 24px' }}>
      <div style={{ fontSize: '56px', marginBottom: '20px' }}>🔍</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', marginBottom: '12px' }}>
        No {filter === 'All' ? 'Active Deals' : `${filter} Deals`} Right Now
      </h3>
      <p
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: '16px',
          maxWidth: '480px',
          margin: '0 auto 32px',
          lineHeight: '1.7',
        }}
      >
        {filter === 'All'
          ? "New deals come and go quickly. Drop me your investment criteria and I'll contact you the moment something worth your attention comes up."
          : `I don't have ${label} listed right now, but they come up. Let me know what you're looking for and I'll reach out when one lands.`}
      </p>
      <Link to="/contact" className="btn-primary">
        Get Notified of New Deals →
      </Link>
    </div>
  )
}

function DealCard({ deal }) {
  const tag = tagColors[deal.tag] || { bg: '#f3f4f6', color: '#374151' }

  return (
    <article
      style={{
        background: '#ffffff',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform var(--transition), box-shadow var(--transition)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--shadow-card)'
      }}
    >
      <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
        <img
          src={deal.image}
          alt={deal.address}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: tag.bg,
            color: tag.color,
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: '4px',
          }}
        >
          {deal.tag}
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '14px',
            background: 'var(--color-dark)',
            color: '#fff',
            fontWeight: '700',
            fontSize: '15px',
            padding: '6px 14px',
            borderRadius: '6px',
          }}
        >
          {deal.price}
        </span>
      </div>

      <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', marginBottom: '4px' }}>
          {deal.address}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
          {deal.city}
        </p>

        {/* Strategy tags */}
        {deal.strategies && deal.strategies.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
            {deal.strategies.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary-dark)',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  letterSpacing: '0.3px',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {deal.highlight && (
          <div
            style={{
              background: '#fef9c3',
              border: '1px solid #fde047',
              borderRadius: 'var(--radius-sm)',
              padding: '8px 12px',
              fontSize: '13px',
              fontWeight: '700',
              color: '#713f12',
              marginBottom: '12px',
            }}
          >
            ⚡ {deal.highlight}
          </div>
        )}

        <p
          style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.65',
            marginBottom: '20px',
            flex: 1,
          }}
        >
          {deal.description}
        </p>

        <Link to="/contact" className="btn-primary" style={{ textAlign: 'center', fontSize: '14px' }}>
          I'm Interested →
        </Link>
      </div>
    </article>
  )
}
