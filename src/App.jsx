import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Listings from './pages/Listings'
import BuyersSellers from './pages/BuyersSellers'
import Contact from './pages/Contact'
import HotDeals from './pages/HotDeals'

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/buyers-sellers" element={<BuyersSellers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hot-deals" element={<HotDeals />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

function NotFound() {
  return (
    <main
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '64px 24px',
      }}
    >
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '80px', color: 'var(--color-primary)', marginBottom: '8px' }}>
        404
      </h1>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', marginBottom: '16px' }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Looks like this page moved or doesn't exist. Let's get you back on track.
      </p>
      <a href="/" className="btn-primary">Go Back Home</a>
    </main>
  )
}
