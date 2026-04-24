# [YOUR NAME] | Real Estate Website

A clean, fast, professional real estate agent website built with React + Vite.
Free to host on Netlify or Cloudflare Pages (domain ~$12–15/year is your only cost).

---

## Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org) (version 18 or higher) — download from nodejs.org if you don't have it.

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The site hot-reloads as you edit files.

### 3. Build for production

```bash
npm run build
```

This outputs a `dist/` folder with your fully built static site.

---

## Before You Launch — Fill In Your Details

Search the project for `TODO` comments. These are all the places you need to fill in your real info:

| What | Where |
|------|-------|
| Your name | `index.html`, `Navbar.jsx`, `Footer.jsx`, `About.jsx`, `Contact.jsx` |
| Your phone | `Footer.jsx`, `Contact.jsx`, `Contact.jsx` (JSON-LD) |
| Your email | `Footer.jsx`, `Contact.jsx`, `Contact.jsx` (JSON-LD) |
| Brokerage & license | `Footer.jsx`, `Contact.jsx` |
| Social links (IG, FB, LI) | `Footer.jsx`, `Contact.jsx` |
| Formspree ID | `ContactForm.jsx` — see setup steps below |
| Your headshot | `About.jsx` — replace the `via.placeholder.com` URL |
| Real listings | `Listings.jsx`, `FeaturedListings.jsx` — edit the data arrays |
| Testimonials | `Testimonials.jsx` — edit the array with real client quotes |

---

## Setting Up the Contact Form (Formspree — Free)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Click **New Form** and name it (e.g., "Website Contact").
3. Copy the form ID (looks like `xpzvwkqr`).
4. Open `src/components/ContactForm.jsx` and replace `YOUR_FORMSPREE_ID` with your ID.
5. Done — form submissions will go to your email.

---

## Deploying to Netlify (Free)

### Step 1: Push to GitHub

1. Create a free account at [github.com](https://github.com).
2. Create a new repository (e.g., `real-estate-website`).
3. In your project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/real-estate-website.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free tier is plenty).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub** and authorize Netlify.
4. Select your repository.
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**.

Your site will be live at a Netlify subdomain (e.g., `yourname.netlify.app`) in about 2 minutes. Every time you push to GitHub, Netlify auto-redeploys.

### Step 3: Add a Custom Domain

1. Purchase a domain at [Namecheap](https://namecheap.com) (~$12/year) or [Cloudflare Registrar](https://cloudflare.com/products/registrar/) (~$10/year).
2. In Netlify: **Site settings → Domain management → Add custom domain**.
3. Enter your domain and follow the DNS instructions Netlify provides.
4. Netlify automatically provisions a free SSL certificate via Let's Encrypt.

---

## Deploying to Cloudflare Pages (Alternative)

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and create a free account.
2. Click **Create a project → Connect to Git**.
3. Select your GitHub repo.
4. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

---

## Project Structure

```
src/
  components/
    Navbar.jsx         ← Top navigation bar
    Hero.jsx           ← Home page hero section
    FeaturedListings.jsx ← Featured listings grid
    Testimonials.jsx   ← Client testimonials slider
    ContactForm.jsx    ← Reusable contact form
    Footer.jsx         ← Site footer
  pages/
    Home.jsx           ← Home page (assembles components)
    About.jsx          ← About Me page
    Listings.jsx       ← All listings with filter
    BuyersSellers.jsx  ← Buyer/Seller guides + FAQ
    Contact.jsx        ← Contact page with map
  App.jsx              ← Router and layout
  index.css            ← Global styles + CSS variables
public/
  favicon.svg          ← Site favicon
index.html             ← HTML shell with meta tags
package.json           ← Dependencies
vite.config.js         ← Build config
```

---

## Customizing Colors & Fonts

All colors are CSS variables in `src/index.css`. To retheme the entire site, change the values in `:root { }`:

```css
--color-primary:       #C4663A;   /* main accent color */
--color-primary-dark:  #A8522A;   /* hover state */
--color-primary-light: #E8C4A8;   /* soft background tint */
--color-bg:            #FAF7F4;   /* page background */
```

Fonts are also variables — swap them out by updating `--font-heading` and `--font-body` (and updating the Google Fonts `<link>` in `index.html`).

---

## Adding a New Listing

Open `src/pages/Listings.jsx` and add an object to the `LISTINGS` array:

```js
{
  id: 7,                              // unique number
  address: '123 Main St',
  city: 'Scottsdale, AZ 85255',
  price: '$650,000',
  priceNum: 650000,
  beds: 3,
  baths: 2,
  sqft: '2,000',
  status: 'Active',                   // Active | Pending | Sold
  image: 'https://your-image-url.com/photo.jpg',
  description: 'Your description here.',
  mls: 'MLS# XXXXXXX',
  listed: 'May 2025',
},
```

To also show it in the Featured section on the Home page, add the same data to `src/components/FeaturedListings.jsx`.

---

*Built with ❤️ using React + Vite. Hosted free on Netlify.*
