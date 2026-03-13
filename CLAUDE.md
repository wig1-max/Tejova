# Tejova — Business & Financial Services Website

## Project Overview

Single-page, mobile-first website for **Tejova** (shoptejova.in) — a professional business and financial services firm in Sector 11, Panchkula, Haryana, India. Serves the Chandigarh Tricity area (Panchkula, Chandigarh, Mohali, Zirakpur).

## Tech Stack

- **Vanilla HTML/CSS/JS** — no frameworks, no build tools
- Google Fonts (Poppins + Inter) via CDN
- Font Awesome 6 via cdnjs CDN
- Mobile-first responsive CSS with breakpoints at 768px (tablet) and 1024px (desktop)

## File Structure

```
index.html      — Complete single-page site (all sections)
style.css       — Mobile-first responsive styles with CSS custom properties
script.js       — Minimal JS: hamburger menu, service card toggle, lazy map loading, scroll header
sitemap.xml     — XML sitemap for SEO
robots.txt      — Crawler directives
CLAUDE.md       — This file
```

## Business Positioning (Important Context)

Tejova is positioned as a **professional services firm** led by someone with ACCA candidacy and Canadian accounting training — NOT a government kiosk. The service hierarchy is:

1. **Tier 1 (Primary):** Business Registration & Setup, Tax & Compliance — these are the main revenue drivers
2. **Tier 2 (Secondary):** Loans (200+ bank/NBFC network) & Insurance — cross-sell layer
3. **Tier 3 (Tertiary):** Government Services (Aadhaar, PAN, certificates) — footfall engine

All content, SEO, and visual hierarchy should reflect this ordering.

## Design System

- **Colors:** Navy `#1B2A4A` (primary), Orange `#E8913A` (accent), White backgrounds, Light gray `#F8F9FA`
- **Fonts:** Poppins (headings, 600/700), Inter (body, 400/500/600)
- **Border radius:** 8px
- **Shadows:** `0 2px 8px rgba(0,0,0,0.1)` (default), `0 4px 16px rgba(0,0,0,0.12)` (large)

## CSS Conventions

- CSS custom properties defined in `:root` — always use variables, never hardcode colors
- Mobile-first: base styles target phones, `@media (min-width: 768px)` for tablet, `@media (min-width: 1024px)` for desktop
- BEM-like naming: `.service-card`, `.service-card--primary`, `.service-icon`
- Service cards use `.service-card--primary` modifier for Tier 1 visual emphasis (navy border + subtle gradient + accent icon)

## JS Conventions

- Vanilla JS, IIFE pattern, `'use strict'`
- Elements selected by ID where possible (`getElementById`)
- Passive scroll listeners for performance
- Intersection Observer for lazy loading (Google Maps iframe)

## SEO Setup

- JSON-LD structured data: `@type: ["ProfessionalService", "FinancialService"]`
- `serviceType` array leads with professional services (GST, ITR, business registration) before loans/insurance
- Open Graph tags for social sharing
- Canonical URL: `https://shoptejova.in/`
- Meta keywords target: business registration, GST filing, ITR, tax consultant, CA services, loans, insurance — all localized to Panchkula

## Contact Details

- **Address:** SCO 37, Cabin No. 16, Sector 11, Panchkula, Haryana 134109
- **Phone/WhatsApp:** 7986772124
- **Email:** contact@shoptejova.in
- **Hours:** Monday–Saturday, 10:00 AM – 6:00 PM

## Performance Goals

- Sub-2-second first contentful paint on 3G
- No frameworks, minimal JS (~2 KB)
- Google Maps lazy-loaded via Intersection Observer (zero initial cost)
- All heavy assets (fonts, icons) served from CDNs with browser caching
