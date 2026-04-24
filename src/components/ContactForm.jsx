import React, { useState } from 'react'

/* ============================================================
   CONTACT FORM — Netlify Forms
   No signup or config needed. Works automatically when deployed
   to Netlify. Submissions appear in your Netlify dashboard.
   ============================================================ */

export default function ContactForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'buying',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', interest: 'buying', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          background: '#f0faf4',
          border: '1px solid #86efac',
          borderRadius: 'var(--radius-md)',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
          Message Received!
        </h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>
          Thanks for reaching out. I'll be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            marginTop: '20px',
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '10px 24px',
            cursor: 'pointer',
            color: 'var(--color-text-secondary)',
            fontSize: '14px',
          }}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      {/* Required hidden field for Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Name & Email row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        <div>
          <label htmlFor="name" style={labelStyle}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Phone & Interest row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(480) 555-0100"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="interest" style={labelStyle}>I'm Interested In</label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            style={{ ...inputStyle, appearance: 'auto', cursor: 'pointer' }}
          >
            <option value="buying">Buying a Home</option>
            <option value="selling">Selling My Home</option>
            <option value="both">Both Buying & Selling</option>
            <option value="investing">Real Estate Investing</option>
            <option value="valuation">Free Home Valuation</option>
            <option value="other">General Question</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" style={labelStyle}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 4 : 5}
          placeholder="Tell me about what you're looking for, your timeline, or any questions you have..."
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
        />
      </div>

      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: '14px' }}>
          Something went wrong. Please try again or email me directly at Radek@TheCopper48.com
        </p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === 'sending'}
        style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  )
}

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: '700',
  letterSpacing: '0.5px',
  color: 'var(--color-text-secondary)',
  marginBottom: '6px',
  textTransform: 'uppercase',
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '1.5px solid var(--color-border)',
  borderRadius: 'var(--radius-sm)',
  fontSize: '15px',
  color: 'var(--color-text-primary)',
  background: '#ffffff',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}
