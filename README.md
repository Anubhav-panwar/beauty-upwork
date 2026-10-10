# MAISON BEAUTÉ — Premium Cosmetics E-Commerce Demo

A client-ready, luxury cosmetics e-commerce website demo built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Zustand.

Designed with editorial aesthetic direction, warm ivory and blush beauty tones, typography (Cormorant Garamond & Manrope), and client-side interactions.

---

## ✨ Features & Architecture

- **Editorial Creative Direction**: Warm ivory (`#FAF7F2`), blush (`#E9C9C5`), dusty rose (`#C88D8A`), and espresso (`#352722`) luxury palette.
- **Hero Section**: Editorial composition with campaign photography, floating badge, trust ratings, and primary/secondary CTAs.
- **Interactive Categories**: Asymmetric editorial layout filtering products by Skincare, Makeup, Haircare, and Body Care.
- **Bestsellers Grid**: Filterable product catalog with image hover swaps, pricing, review stars, and Quick Add.
- **New Arrivals**: Curated seasonal vanity releases with individual product details.
- **Quick View Modal**: In-depth modal with tabs for ritual description, key actives, and how-to-use instructions.
- **Dynamic Shopping Bag**: Slide-out cart drawer with live subtotal calculation, quantity adjustment, and free-shipping progress tracker.
- **Wishlist System**: LocalStorage-persisted favoriting system with slide-out drawer and instant move-to-bag actions.
- **Live Search**: Instant keyword search by product title, category, and ingredients with quick recommendations.
- **Simulated Checkout**: Client demo checkout screen showcasing order breakdown, sample address fields, and confirmation workflow.
- **Newsletter Subscription**: Client-side validated form with welcome discount code reward and Sonner notifications.
- **Responsive Design**: Designed and tested across mobile, tablet, laptop, and ultra-wide screens.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + custom inline SVGs
- **State Management**: Zustand (with localStorage persistence)
- **Toast Notifications**: Sonner
- **Typography**: Cormorant Garamond & Manrope (Google Fonts via `next/font/google`)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Netlify Deployment

This project contains zero backend requirements or paid APIs, making it 100% ready for Netlify:

1. Push this repository to GitHub.
2. Link the repository in your [Netlify](https://www.netlify.com/) dashboard.
3. Netlify automatically detects Next.js settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. The included `netlify.toml` automatically configures the build settings.

---

© MAISON BEAUTÉ — Crafted for Client Presentation.
