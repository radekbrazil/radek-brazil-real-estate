import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* ============================================================
   LISTINGS PAGE — 29 total transactions.
   Status: Active | Pending | Sold
   ============================================================ */

const LISTINGS = [
  {
    id: 1,
    address: '26617 S Beech Creek Drive',
    city: 'Sun Lakes, AZ 85248',
    price: '$346,750',
    priceNum: 346750,
    beds: 3,
    baths: 2,
    sqft: '1,823',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20260202230033067222000000.jpg',
    description: 'Single-story home in desirable Sun Lakes. Helped buyer secure this property in a competitive market.',
    mls: 'Buyer Represented',
    listed: 'March 2026',
  },
  {
    id: 2,
    address: '1707 N Bridalwreath Street',
    city: 'Tempe, AZ 85288',
    price: '$535,000',
    priceNum: 535000,
    beds: 4,
    baths: 2,
    sqft: '1,645',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20251021175843885616000000.jpg',
    description: 'Great Tempe location close to ASU and the 101 corridor. Guided buyers through a smooth closing in under 30 days.',
    mls: 'Buyer Represented',
    listed: 'November 2025',
  },
  {
    id: 3,
    address: '28942 N Lazurite Way',
    city: 'San Tan Valley, AZ 85143',
    price: '$365,000',
    priceNum: 365000,
    beds: 3,
    baths: 2,
    sqft: '1,910',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20250325163400541806000000.jpg',
    description: 'Spacious San Tan Valley home. Helped first-time buyers navigate the full process from offer to close.',
    mls: 'Buyer Represented',
    listed: 'May 2025',
  },
  {
    id: 4,
    address: '3720 S 87th Drive',
    city: 'Tolleson, AZ 85353',
    price: '$436,990',
    priceNum: 436990,
    beds: 4,
    baths: 2,
    sqft: '1,832',
    status: 'Sold',
    image: 'https://cdn.photos.sparkplatform.com/az/20250207224609236460000000.jpg',
    description: 'Well-priced 4-bedroom in the West Valley. Buyers relocated from out of state — coordinated the entire remote purchase process.',
    mls: 'Buyer Represented',
    listed: 'April 2025',
  },
  {
    id: 15,
    address: '38140 W La Paz Street',
    city: 'Maricopa, AZ 85138',
    price: '$300,000',
    priceNum: 300000,
    beds: 3,
    baths: 2,
    sqft: '1,500',
    status: 'Sold',
    image: 'https://cdn.photos.sparkplatform.com/az/20231005233809838270000000.jpg',
    description: 'Affordable Maricopa find in a growing community. Helped buyers enter the market and close on time in early 2025.',
    mls: 'Buyer Represented',
    listed: 'January 2025',
  },
  {
    id: 5,
    address: '3494 E Alexander Drive',
    city: 'San Tan Valley, AZ 85143',
    price: '$475,990',
    priceNum: 475990,
    beds: 5,
    baths: 3,
    sqft: '2,400',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20240827231948620333000000.jpg',
    description: 'Five-bedroom new construction. Worked directly with builder reps to get the best lot and upgrades for our buyers.',
    mls: 'Buyer Represented',
    listed: 'December 2024',
  },
  {
    id: 6,
    address: '1119 W Mango Drive',
    city: 'Gilbert, AZ 85233',
    price: '$385,000',
    priceNum: 385000,
    beds: 3,
    baths: 2,
    sqft: '1,700',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20240925044045291431000000.jpg',
    description: 'Charming Gilbert home in a well-established neighborhood. Helped buyers compete and close smoothly at the right price.',
    mls: 'Buyer Represented',
    listed: 'December 2024',
  },
  {
    id: 7,
    address: '4142 E Cathy Drive',
    city: 'Gilbert, AZ 85296',
    price: '$490,000',
    priceNum: 490000,
    beds: 4,
    baths: 2,
    sqft: '2,100',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20240625095225537181000000.jpg',
    description: 'Spacious Gilbert 4-bedroom. Negotiated a strong deal for buyers in a competitive market.',
    mls: 'Buyer Represented',
    listed: 'July 2024',
  },
  {
    id: 30,
    address: '644 E Del Rio Street',
    city: 'Gilbert, AZ 85295',
    price: '$829,000',
    priceNum: 829000,
    beds: 4,
    baths: 3,
    sqft: '3,200',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20240209230109044705000000.jpg',
    description: 'Highest-priced transaction in my portfolio. Represented the seller and sold this Gilbert luxury home during the coming-soon pre-listing stage — before it ever hit the open market.',
    mls: 'Seller Represented',
    listed: 'March 2024',
  },
  {
    id: 16,
    address: '53510 W Candlelight Road',
    city: 'Maricopa, AZ 85139',
    price: '$350,000',
    priceNum: 350000,
    beds: 3,
    baths: 2,
    sqft: '1,700',
    status: 'Sold',
    image: 'https://cdn1.photos.sparkplatform.com/az/20230818233137251515000000.jpg',
    description: 'Maricopa home in a growing community. Helped buyers find the right property at the right price.',
    mls: 'Buyer Represented',
    listed: 'March 2024',
  },
  {
    id: 17,
    address: '2424 E Amelia Avenue',
    city: 'Phoenix, AZ 85016',
    price: '$465,000',
    priceNum: 465000,
    beds: 3,
    baths: 2,
    sqft: '1,600',
    status: 'Sold',
    image: 'https://cdn1.photos.sparkplatform.com/az/20240111001750662625000000.jpg',
    description: 'Well-located Phoenix home near the Biltmore corridor. Guided buyers through a competitive offer process.',
    mls: 'Buyer Represented',
    listed: 'February 2024',
  },
  {
    id: 8,
    address: '444 S 99th Place',
    city: 'Mesa, AZ 85208',
    price: '$312,000',
    priceNum: 312000,
    beds: 3,
    baths: 2,
    sqft: '1,400',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20231021015223850935000000.jpg',
    description: 'Affordable Mesa home — perfect entry point for first-time buyers. Walked clients through every step from search to close.',
    mls: 'Buyer Represented',
    listed: 'December 2023',
  },
  {
    id: 18,
    address: '7883 N 49th Avenue',
    city: 'Glendale, AZ 85301',
    price: '$270,000',
    priceNum: 270000,
    beds: 3,
    baths: 1,
    sqft: '1,200',
    status: 'Sold',
    image: 'https://cdn3.photos.sparkplatform.com/az/20251231173538516838000000.jpg',
    description: 'Great value in Glendale. Helped buyers secure an affordable property in a rising market.',
    mls: 'Buyer Represented',
    listed: 'November 2023',
  },
  {
    id: 9,
    address: '35756 W Santa Clara Avenue',
    city: 'Maricopa, AZ 85138',
    price: '$329,990',
    priceNum: 329990,
    beds: 3,
    baths: 2,
    sqft: '1,600',
    status: 'Sold',
    image: 'https://cdn1.photos.sparkplatform.com/az/20230817184753976016000000.jpg',
    description: 'Newer construction in Maricopa. Coordinated the full purchase process for buyers relocating to the area.',
    mls: 'Buyer Represented',
    listed: 'October 2023',
  },
  {
    id: 19,
    address: '450 Leisure World',
    city: 'Mesa, AZ 85206',
    price: '$325,000',
    priceNum: 325000,
    beds: 2,
    baths: 2,
    sqft: '1,400',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20231006144948066775000000.jpg',
    description: 'Active adult community home at Leisure World. Helped buyers find the perfect low-maintenance lifestyle property.',
    mls: 'Buyer Represented',
    listed: 'October 2023',
  },
  {
    id: 20,
    address: '7027 S 45th Avenue',
    city: 'Laveen, AZ 85339',
    price: '$383,000',
    priceNum: 383000,
    beds: 3,
    baths: 2,
    sqft: '1,800',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20230807032913078818000000.jpg',
    description: 'Laveen home in a rapidly growing area. Assisted buyers with the full purchase process from search to close.',
    mls: 'Buyer Represented',
    listed: 'September 2023',
  },
  {
    id: 21,
    address: '3830 E Lakewood Parkway E #2031',
    city: 'Phoenix, AZ 85048',
    price: '$250,000',
    priceNum: 250000,
    beds: 2,
    baths: 2,
    sqft: '1,100',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20230603013547276572000000.jpg',
    description: 'Ahwatukee condo in a desirable lakeside community. Helped buyers secure this well-priced unit in a sought-after complex.',
    mls: 'Buyer Represented',
    listed: 'June 2023',
  },
  {
    id: 10,
    address: '19147 E Kingbird Drive',
    city: 'Queen Creek, AZ 85142',
    price: '$475,000',
    priceNum: 475000,
    beds: 4,
    baths: 3,
    sqft: '2,200',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20230328233212313289000000.jpg',
    description: 'Beautiful Queen Creek home with great curb appeal. Guided buyers through a multi-offer situation to a successful close.',
    mls: 'Buyer Represented',
    listed: 'April 2023',
  },
  {
    id: 11,
    address: '1121 W Portland Street',
    city: 'Phoenix, AZ 85007',
    price: '$515,000',
    priceNum: 515000,
    beds: 4,
    baths: 2,
    sqft: '1,850',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20230127232259447105000000.jpg',
    description: 'Central Phoenix gem in a sought-after neighborhood. Helped buyers land a well-priced property with strong long-term value.',
    mls: 'Buyer Represented',
    listed: 'March 2023',
  },
  {
    id: 12,
    address: '6008 E Scafell Circle',
    city: 'Mesa, AZ 85215',
    price: '$542,500',
    priceNum: 542500,
    beds: 4,
    baths: 3,
    sqft: '2,300',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20220928103308367014000000.jpg',
    description: 'Stunning Mesa home with strong comps. Represented buyers in a fast-moving market and secured favorable terms.',
    mls: 'Buyer Represented',
    listed: 'December 2022',
  },
  {
    id: 22,
    address: '7838 W Flynn Lane',
    city: 'Glendale, AZ 85303',
    price: '$410,000',
    priceNum: 410000,
    beds: 3,
    baths: 2,
    sqft: '1,800',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20220609063759129662000000.jpg',
    description: 'Glendale family home in a well-kept neighborhood. Helped buyers lock in this property during a competitive summer market.',
    mls: 'Buyer Represented',
    listed: 'July 2022',
  },
  {
    id: 23,
    address: '3900 E Baseline Road #148',
    city: 'Phoenix, AZ 85042',
    price: '$360,000',
    priceNum: 360000,
    beds: 2,
    baths: 2,
    sqft: '1,200',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20220520202448429602000000.jpg',
    description: 'Phoenix condo near South Mountain. Guided buyers through the HOA process and negotiated a clean, smooth close.',
    mls: 'Buyer Represented',
    listed: 'July 2022',
  },
  {
    id: 24,
    address: '35187 N Karan Swiss Circle',
    city: 'San Tan Valley, AZ 85143',
    price: '$450,000',
    priceNum: 450000,
    beds: 4,
    baths: 2,
    sqft: '2,000',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20220506154507961533000000.jpg',
    description: 'San Tan Valley home in a quiet cul-de-sac setting. Helped buyers compete effectively and close without complications.',
    mls: 'Buyer Represented',
    listed: 'June 2022',
  },
  {
    id: 25,
    address: '5516 N 22nd Drive',
    city: 'Phoenix, AZ 85015',
    price: '$360,000',
    priceNum: 360000,
    beds: 3,
    baths: 2,
    sqft: '1,500',
    status: 'Sold',
    image: 'https://cdn1.photos.sparkplatform.com/az/20220319233022392630000000.jpg',
    description: 'Central Phoenix home with great access to the I-17 corridor. Assisted buyers in a competitive spring market.',
    mls: 'Buyer Represented',
    listed: 'May 2022',
  },
  {
    id: 26,
    address: '347 S Travis',
    city: 'Mesa, AZ 85208',
    price: '$405,000',
    priceNum: 405000,
    beds: 3,
    baths: 2,
    sqft: '1,700',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20220403235457267304000000.jpg',
    description: 'Mesa home with strong bones and good value. Helped buyers identify the right property and close without a hitch.',
    mls: 'Buyer Represented',
    listed: 'May 2022',
  },
  {
    id: 27,
    address: '16745 E Gunsight Drive #C5',
    city: 'Fountain Hills, AZ 85268',
    price: '$255,000',
    priceNum: 255000,
    beds: 2,
    baths: 2,
    sqft: '1,100',
    status: 'Sold',
    image: 'https://cdn2.photos.sparkplatform.com/az/20220224193847190568000000.jpg',
    description: 'Fountain Hills condo with beautiful surroundings. Helped buyers find the perfect low-maintenance property in a sought-after community.',
    mls: 'Buyer Represented',
    listed: 'March 2022',
  },
  {
    id: 28,
    address: '11207 N 51st Drive',
    city: 'Glendale, AZ 85304',
    price: '$415,000',
    priceNum: 415000,
    beds: 3,
    baths: 2,
    sqft: '1,800',
    status: 'Sold',
    image: 'https://cdn1.photos.sparkplatform.com/az/20220218153854339446000000.jpg',
    description: 'Glendale home in a desirable neighborhood. Represented buyers and delivered a smooth transaction from offer to keys.',
    mls: 'Buyer Represented',
    listed: 'March 2022',
  },
  {
    id: 13,
    address: '723 W El Alba Way',
    city: 'Chandler, AZ 85225',
    price: '$447,000',
    priceNum: 447000,
    beds: 3,
    baths: 2,
    sqft: '1,750',
    status: 'Sold',
    image: 'https://cdn1.photos.sparkplatform.com/az/20220211193417090544000000.jpg',
    description: 'Seller representation in a competitive spring market. Priced strategically and sold quickly above expectations.',
    mls: 'Seller Represented',
    listed: 'March 2022',
  },
  {
    id: 29,
    address: '8513 W Gross Avenue',
    city: 'Tolleson, AZ 85353',
    price: '$355,000',
    priceNum: 355000,
    beds: 3,
    baths: 2,
    sqft: '1,600',
    status: 'Sold',
    image: 'https://cdn1.photos.sparkplatform.com/az/20211215213859094427000000.jpg',
    description: 'Tolleson home with great value in the West Valley. Helped buyers start the year off right with a successful purchase.',
    mls: 'Buyer Represented',
    listed: 'January 2022',
  },
  {
    id: 14,
    address: '2326 N Pomeroy Circle',
    city: 'Mesa, AZ 85201',
    price: '$705,000',
    priceNum: 705000,
    beds: 5,
    baths: 3,
    sqft: '3,100',
    status: 'Sold',
    image: 'https://cdn0.photos.sparkplatform.com/az/20210908140109632793000000.jpg',
    description: 'High-value Mesa home — the largest transaction in my portfolio. Represented buyers in a complex deal and delivered results on a significant investment.',
    mls: 'Buyer Represented',
    listed: 'November 2021',
  },
]

const STATUS_FILTERS = ['All', 'Active', 'Pending', 'Sold']
const statusColors = {
  Active:  { bg: '#dcfce7', color: '#15803d' },
  Pending: { bg: '#fef9c3', color: '#854d0e' },
  Sold:    { bg: '#f3f4f6', color: '#6b7280' },
}

export default function Listings() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? LISTINGS
      : LISTINGS.filter((l) => l.status === activeFilter)

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
            Properties
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
            Transaction History
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            30 closed transactions representing buyers and sellers across the greater Phoenix metro.
          </p>
        </div>
      </section>

      {/* Listings body */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {STATUS_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '8px 22px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid',
                  borderColor: activeFilter === f ? 'var(--color-primary)' : 'var(--color-border)',
                  background: activeFilter === f ? 'var(--color-primary)' : '#ffffff',
                  color: activeFilter === f ? '#ffffff' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {f}{' '}
                <span style={{ opacity: 0.7, fontSize: '12px' }}>
                  ({f === 'All' ? LISTINGS.length : LISTINGS.filter((l) => l.status === f).length})
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '48px 0' }}>
              No listings in this category right now. Check back soon!
            </p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '28px',
              }}
            >
              {filtered.map((listing) => (
                <FullListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}

          {/* Not finding what you want */}
          <div
            style={{
              marginTop: '64px',
              background: '#ffffff',
              border: '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', marginBottom: '10px' }}>
              Not Seeing What You're Looking For?
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
              I have access to off-market properties and can help you find exactly what you want.
              Tell me your criteria and I'll go find it.
            </p>
            <Link to="/contact" className="btn-primary">
              Tell Me What You Need &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function FullListingCard({ listing }) {
  const badge = statusColors[listing.status] || statusColors['Active']

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
      {/* Image */}
      <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
        <img
          src={listing.image}
          alt={listing.address + ' — ' + listing.city}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
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
          {listing.price}
        </span>
      </div>

      {/* Details */}
      <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', marginBottom: '4px' }}>
          {listing.address}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
          {listing.city} &middot; {listing.mls}
        </p>

        {/* Specs — only shown for active/pending listings */}
        {listing.status !== 'Sold' && (
          <div
            style={{
              display: 'flex',
              gap: '18px',
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              paddingBottom: '14px',
              marginBottom: '14px',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <span>&#x1F6CF; {listing.beds} bd</span>
            <span>&#x1F6BF; {listing.baths} ba</span>
            <span>&#x1F4D0; {listing.sqft} sqft</span>
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
          {listing.description}
        </p>

        {listing.status !== 'Sold' ? (
          <Link to="/contact" className="btn-primary" style={{ textAlign: 'center', fontSize: '14px' }}>
            Schedule a Showing
          </Link>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '10px',
              background: 'var(--color-bg)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              color: 'var(--color-text-muted)',
              fontWeight: '700',
            }}
          >
            &#x2713; Sold &middot; {listing.listed}
          </div>
        )}
      </div>
    </article>
  )
}
