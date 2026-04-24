# Cowork Master Prompt — Real Estate Agent Website Project

## Project Overview

You are helping me build and maintain a professional real estate agent website from scratch. I am a licensed real estate agent based in Arizona. The site will be built using React or plain HTML/CSS/JavaScript and deployed for free via Netlify or Cloudflare Pages, with a custom domain purchased separately. The total hosting cost must remain under $20/year.

---

## My Goals

- Replace my old Wix site with a fully custom, fast, professional website
- Build something I can maintain and iterate on easily using Cowork
- Keep annual costs as low as possible (domain only — no paid hosting, no subscriptions)
- Have a site that generates leads, showcases my listings, and builds trust with buyers and sellers in the Arizona market

---

## Tech Stack

- **Framework:** React (preferred) or plain HTML/CSS/JS if simpler for the task
- **Styling:** Tailwind CSS or plain CSS — your choice based on what produces the best result
- **Hosting:** Netlify or Cloudflare Pages (free tier)
- **Version Control:** GitHub (free)
- **Contact Form:** Formspree or Web3Forms (free tiers)
- **Domain:** Custom domain (~$12–15/year via Namecheap or Cloudflare Registrar)
- **No backend required** — this is a static site

---

## Site Structure

Build the following pages and sections:

### 1. Home Page
- Hero section with a strong headline, subheadline, and a CTA button (e.g., "Search Homes" or "Get a Free Home Valuation")
- Brief intro / value proposition
- Featured listings section (manually curated — no live MLS feed)
- Testimonials / social proof
- Call-to-action section (contact or schedule a consultation)

### 2. About Page
- Professional bio
- Photo placeholder
- Credentials, years of experience, areas served
- Personal touch / why I love Arizona real estate

### 3. Listings Page
- Manually added property cards (address, price, beds/baths, photo, brief description)
- Link each listing to a detail page or external Zillow/MLS link
- Simple grid layout, filterable by status (Active, Pending, Sold)

### 4. Buyers & Sellers Pages (optional, can combine)
- Buyer's guide content
- Seller's guide content
- FAQs
- CTA to contact me

### 5. Contact Page
- Contact form (name, email, phone, message) via Formspree or Web3Forms
- My phone number and email displayed
- Link to my social profiles (Instagram, Facebook, LinkedIn)
- Google Maps embed of my service area (greater Phoenix/Arizona)

### 6. Blog / Market Updates (optional, add later)
- Simple markdown-based or static blog posts
- Topics: Arizona market trends, buying tips, neighborhood guides

---

## Design Direction

- **Aesthetic:** Clean, modern, and trustworthy — luxury-adjacent without being cold
- **Color palette:** Warm neutrals + a bold accent (e.g., deep navy, warm gold, or desert terracotta — suggest options)
- **Typography:** Distinctive, professional — avoid generic fonts like Arial or Inter
- **Imagery:** High-quality placeholder images from Unsplash (real estate / Arizona / desert / homes)
- **Mobile-first:** Must look excellent on phones — most real estate traffic is mobile
- **Feel:** Premium, approachable, Arizona-rooted

---

## Branding Placeholders

Use these placeholders until I provide real details — just flag them clearly in the code with `<!-- TODO -->` comments:

- **Agent Name:** `[YOUR NAME]`
- **Phone:** `[YOUR PHONE]`
- **Email:** `[YOUR EMAIL]`
- **Brokerage:** `[YOUR BROKERAGE NAME]`
- **License Number:** `[YOUR AZ LICENSE #]`
- **Headshot:** Use a placeholder image from `https://via.placeholder.com/400x500`
- **Logo:** Text-based logo for now — `[YOUR NAME] | Real Estate`
- **Social Links:** `[INSTAGRAM_URL]`, `[FACEBOOK_URL]`, `[LINKEDIN_URL]`

---

## Code Standards

- All code should be clean, well-commented, and easy for me to edit
- Use component-based structure if building in React (one file per section/page)
- Keep the file/folder structure simple and logical:

```
/src
  /components
    Navbar.jsx
    Hero.jsx
    FeaturedListings.jsx
    Testimonials.jsx
    ContactForm.jsx
    Footer.jsx
  /pages
    Home.jsx
    About.jsx
    Listings.jsx
    Contact.jsx
  App.jsx
  index.css
index.html
package.json
```

- CSS variables for all colors and fonts so I can retheme easily
- All images should use `alt` text for accessibility and SEO
- Include basic meta tags for SEO on every page (title, description, OG tags)

---

## SEO Requirements

- Each page has a unique `<title>` and `<meta description>`
- Use semantic HTML (h1, h2, article, section, nav, footer)
- Structured data / JSON-LD for LocalBusiness on the contact/home page
- Fast load time — avoid heavy dependencies

---

## Deployment Instructions (include a README.md)

Create a `README.md` with step-by-step instructions for:
1. Running the site locally (`npm install` → `npm run dev`)
2. Pushing to GitHub
3. Connecting GitHub repo to Netlify for free auto-deploy
4. Adding a custom domain in Netlify
5. Setting up the contact form with Formspree

---

## How to Work With Me

- **When I say "build the hero section"** → write the full component code, ready to paste in
- **When I say "update the color scheme"** → change the CSS variables in one place
- **When I say "add a listing"** → show me the exact object/component to copy and modify
- **When I say "make it more mobile-friendly"** → audit and fix responsive breakpoints
- **When I ask for copy/text** → write professional real estate agent copy, Arizona-focused
- Always output complete, working code — never pseudocode or partial snippets unless I ask
- If you need a decision from me, ask one clear question before proceeding

---

## What NOT to Do

- Do not suggest Wix, Squarespace, Webflow, or any paid website builder
- Do not add any paid services or subscriptions without flagging the cost first
- Do not use live MLS/IDX data feeds (legal restrictions apply) — manual listings only
- Do not over-engineer — keep it simple, fast, and maintainable
- Do not use placeholder lorem ipsum text in final outputs — write real copy

---

*This prompt was generated to work with Anthropic's Cowork tool. Start each session by referencing this document to maintain project context.*
