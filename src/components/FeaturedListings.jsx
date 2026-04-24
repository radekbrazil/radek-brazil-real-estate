import React from 'react'
import { Link } from 'react-router-dom'

/* ============================================================
   FEATURED LISTINGS SECTION
   Displays a curated set of listings on the Home page.
   To add/remove featured listings, edit the FEATURED_LISTINGS array below.
   ============================================================ */

// Recent sold transactions — update with active listings when available
const FEATURED_LISTINGS = [
  {
    id: 1,
    address: '26617 S Beech Creek Drive',
    city: 'Sun Lakes, AZ 85248',
    price: '$346,750',
    beds: 3,
    baths: 2,
    sqft: '1,823',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20260202230033067222000000.jpg',
    description: 'Single-story Sun Lakes home. Helped buyers compete and close smoothly in a tight market.',
  },
  {
    id: 2,
    address: '1707 N Bridalwreath Street',
    city: 'Tempe, AZ 85288',
    price: '$535,000',
    beds: 4,
    baths: 2,
    sqft: '1,645',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20251021175843885616000000.jpg',
    description: 'Tempe 4-bedroom near the 101. Guided buyers from offer to close in under 30 days.',
  },
  {
    id: 3,
    address: '3494 E Alexander Drive',
    city: 'San Tan Valley, AZ 85143',
    price: '$475,990',
    beds: 5,
    baths: 3,
    sqft: '2,400',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20240827231948620333000000.jpg',
    description: 'Five-bedroom new construction. Negotiated upgrades and lot selection directly with the builder.',
  },
]

const statusColors = {
  Active:  { bg: '#dcfce7', color: '#15803d' },
  Pending: { bg: '#fef9c3', color: '#854d0e' },
  Sold:    { bg: '#f3f4f6', color: '#6b7280' },
}

export default function FeaturedListings() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span className="section-label">Current Listings</span>
            <h2 className="section-title">Featured Properties</h2>
            <p className="section-subtitle">
              Handpicked homes across the Phoenix metro — from Scottsdale to Chandler and beyond.
            </p>
          </div>
          <Link to="/listings" className="btn-outline" style={{ whiteSpace: 'nowrap' }}>
            View All Listings
          </Link>
        </div>

        {/* Listings grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {FEATURED_LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ListingCard({ listing }) {
  const badge = statusColors[listing.status] || statusColors['Active']

  return (
    <article
      style={{
        background: '#ffffff',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        transition: 'transform var(--transition), box-shadow var(--transition)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--shadow-card)'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={listing.image}
          alt={`Property at ${listing.address}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        {/* Status badge */}
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: badge.bg,
            color: badge.color,
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: '4px',
          }}
        >
          {listing.status}
        </span>
        {/* Price badge */}
        <span
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '14px',
            background: 'var(--color-dark)',
            color: '#ffffff',
            fontSize: '15px',
            fontWeight: '700',
            padding: '6px 14px',
            borderRadius: '6px',
          }}
        >
          {listing.price}
        </span>
      </div>

      {/* Details */}
      <div style={{ padding: '20px 22px 24px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '17px',
            marginBottom: '4px',
          }}
        >
          {listing.address}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
          {listing.city}
        </p>

        {/* Specs row */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            fontSize: '13px',
            color: 'var(--color-text-secondary)',
            marginBottom: '14px',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '14px',
          }}
        >
          <span>🛏 {listing.beds} bd</span>
          <span>🚿 {listing.baths} ba</span>
          <span>📐 {listing.sqft} sqft</span>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
          {listing.description}
        </p>

        <Link
          to="/contact"
          style={{
            fontSize: '13px',
            fontWeight: '700',
            color: 'var(--color-primary)',
            textDecoration: 'none',
          }}
        >
          Schedule a Showing →
        </Link>
      </div>
    </article>
  )
}
