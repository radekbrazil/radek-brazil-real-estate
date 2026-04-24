import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* ============================================================
   BUYERS & SELLERS PAGE
   Combined guide page with tab navigation.
   ============================================================ */
export default function BuyersSellers() {
  const [activeTab, setActiveTab] = useState('buyers')

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
            Resources
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              color: '#ffffff',
              marginTop: '8px',
              marginBottom: '24px',
            }}
          >
            Your Arizona Real Estate Guide
          </h1>

          {/* Tab switcher */}
          <div
            style={{
              display: 'inline-flex',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: '4px',
            }}
          >
            {[['buyers', 'Buying a Home'], ['sellers', 'Selling Your Home']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                style={{
                  padding: '10px 28px',
                  borderRadius: 'calc(var(--radius-lg) - 4px)',
                  border: 'none',
                  background: activeTab === id ? 'var(--color-primary)' : 'transparent',
                  color: activeTab === id ? '#ffffff' : 'rgba(255,255,255,0.65)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab content */}
      {activeTab === 'buyers' ? <BuyersContent /> : <SellersContent />}

      {/* Shared FAQ */}
      <FAQSection activeTab={activeTab} />

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
            Ready to Take the Next Step?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', fontSize: '16px' }}>
            Whether you're buying, selling, or still weighing your options — let's talk. The
            consultation is free and the information is invaluable.
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
            Schedule a Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  )
}

/* --- Buyers Content --------------------------------------- */
function BuyersContent() {
  const steps = [
    {
      num: '01',
      title: 'Get Pre-Approved',
      desc: "Before we start touring homes, you'll want a pre-approval letter from a lender. This tells sellers you're serious and tells us exactly what price range to target. I can connect you with trusted local lenders who deliver fast, competitive quotes.",
    },
    {
      num: '02',
      title: 'Define Your Criteria',
      desc: "Bedrooms, bathrooms, school district, commute time, backyard — let's build your wish list and must-haves together. We'll also talk neighborhoods: the East Valley, North Scottsdale, and Phoenix proper each have a very different personality.",
    },
    {
      num: '03',
      title: 'Tour & Evaluate',
      desc: "I'll curate homes that match your criteria and schedule tours that respect your time. I'll be honest with you about what I see — including things that aren't immediately obvious, like HOA restrictions, deferred maintenance, or neighborhood trends.",
    },
    {
      num: '04',
      title: 'Make a Winning Offer',
      desc: "Arizona is a competitive market. I'll help you craft an offer that stands out — through smart pricing strategy, clean terms, and clear communication with the listing agent. I know how to win without overpaying.",
    },
    {
      num: '05',
      title: 'Inspections & Due Diligence',
      desc: "Once under contract, we'll order a home inspection and review the findings together. I'll advise you on what to negotiate, what to let go, and what could be a deal-breaker. No surprises at closing.",
    },
    {
      num: '06',
      title: 'Close & Celebrate',
      desc: "Arizona closings typically take 30–45 days from accepted offer. I'll walk you through every step of the closing process, review the settlement statement with you, and be there when you get your keys.",
    },
  ]

  return (
    <section className="section" style={{ background: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ marginBottom: '56px' }}>
          <span className="section-label">The Buyer's Journey</span>
          <h2 className="section-title">How I Help You Buy Smart</h2>
          <p className="section-subtitle">
            Buying a home in Arizona is exciting — and I'll make sure it stays that way.
            Here's how the process works from first conversation to closing day.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  fontSize: '18px',
                  color: 'var(--color-primary)',
                  flexShrink: 0,
                }}
              >
                {step.num}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --- Sellers Content -------------------------------------- */
function SellersContent() {
  const steps = [
    {
      num: '01',
      title: 'Free Home Valuation',
      desc: "I'll perform a comprehensive Comparative Market Analysis (CMA) — looking at recent sales, active competition, and market trends — to give you an accurate, defensible price range for your home. No guesswork.",
    },
    {
      num: '02',
      title: 'Prepare Your Home',
      desc: "The way your home presents online and in-person determines how quickly it sells and for how much. I'll give you a prioritized list of improvements — from quick cosmetic fixes to staging strategies — that deliver maximum ROI.",
    },
    {
      num: '03',
      title: 'Professional Marketing',
      desc: "Your home will be professionally photographed, listed on the MLS, and promoted across major platforms including Zillow, Realtor.com, and targeted social media ads. Your listing will be seen by the right buyers.",
    },
    {
      num: '04',
      title: 'Showings & Feedback',
      desc: "I'll coordinate all showings, provide buyer feedback in real time, and keep you in the loop on market response. If we're not getting traction, I'll tell you why and what to adjust.",
    },
    {
      num: '05',
      title: 'Evaluate & Negotiate Offers',
      desc: "Receiving an offer is exciting — but not all offers are equal. I'll walk you through every term: price, inspection period, earnest money, close date, and contingencies. I'll negotiate firmly on your behalf.",
    },
    {
      num: '06',
      title: 'Close on Your Terms',
      desc: "Once under contract, I'll coordinate with the buyer's agent, lender, title company, and inspector to keep everything on track. My goal: a smooth closing on the timeline you need.",
    },
  ]

  return (
    <section className="section" style={{ background: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ marginBottom: '56px' }}>
          <span className="section-label">The Seller's Journey</span>
          <h2 className="section-title">How I Get Your Home Sold</h2>
          <p className="section-subtitle">
            Selling isn't just putting a sign in the yard. It's strategy, preparation, and
            expert execution. Here's how I maximize your home's value.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  fontSize: '18px',
                  color: 'var(--color-primary)',
                  flexShrink: 0,
                }}
              >
                {step.num}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --- FAQ Section ------------------------------------------ */
function FAQSection({ activeTab }) {
  const [openFaq, setOpenFaq] = useState(null)

  const buyerFaqs = [
    {
      q: "How much do I need for a down payment in Arizona?",
      a: "It depends on your loan type. Conventional loans typically require 5–20%, while FHA loans allow as little as 3.5% down. VA loans (for veterans) and USDA loans may require zero down. I'll connect you with lenders who can walk you through all your options.",
    },
    {
      q: "How long does it take to buy a home?",
      a: "Once you're pre-approved and we find the right home, most Arizona purchases close in 30–45 days. The search phase varies — some clients find their home in 2 weeks, others take 2–3 months. It depends on your criteria and how competitive the market is.",
    },
    {
      q: "Do I pay your commission as a buyer?",
      a: "In most cases, no. The seller typically pays both agents' commissions. Under new industry rules, I'll disclose my compensation clearly before we start working together.",
    },
    {
      q: "Should I sell my current home before buying?",
      a: "It depends on your equity, finances, and risk tolerance. We can talk through bridge financing, contingency offers, and rent-back agreements to create a strategy that works for your specific situation.",
    },
  ]

  const sellerFaqs = [
    {
      q: "What's the best time of year to sell in Arizona?",
      a: "Arizona's market tends to be most active from January through April, when snowbirds and out-of-state buyers are most active. That said, well-priced homes sell year-round. The best time is when you're ready — not when the calendar says so.",
    },
    {
      q: "How do you determine the listing price?",
      a: "I prepare a thorough Comparative Market Analysis (CMA) that looks at recently sold homes similar to yours, current competition, and market trends. I'll show you the full data, not just a number, so you can make an informed decision.",
    },
    {
      q: "How long will it take to sell my home?",
      a: "A well-priced, well-prepared home in a desirable area can go under contract in days. Homes that sit longer are usually overpriced or need preparation. I'll give you an honest timeline based on your home's specifics.",
    },
    {
      q: "What are your marketing strategies?",
      a: "Professional photography, MLS listing, Zillow/Realtor.com syndication, social media ads, email campaigns to my buyer database, open houses, and direct outreach to agents with active buyers. Your home will get maximum exposure.",
    },
  ]

  const faqs = activeTab === 'buyers' ? buyerFaqs : sellerFaqs

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            {activeTab === 'buyers' ? 'Buyer\'s' : 'Seller\'s'} Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                border: '1.5px solid',
                borderColor: openFaq === i ? 'var(--color-primary-light)' : 'var(--color-border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    color: 'var(--color-text-primary)',
                    fontWeight: '500',
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: '20px',
                    color: 'var(--color-primary)',
                    transition: 'transform 0.2s',
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div
                  style={{
                    padding: '0 24px 20px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.8',
                    fontSize: '15px',
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '16px',
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
