# Pujye Website

A single-page static site for Pujye — no build step, no dependencies. Just HTML + CSS in one file.

## What's inside

```
pujye-site/
├── index.html       ← Home
├── shop.html        ← Full product catalogue
├── story.html        ← Our Story (founders + brand story)
├── track.html        ← Track Order (lookup form, not yet connected to real orders)
├── contact.html       ← Contact form + bulk/distributor info
└── assets/
    ├── logo.png       ← your Pujye logo
    └── styles.css      ← shared design system used by every page
```

All five pages share one stylesheet (`assets/styles.css`), so any color, font, or spacing change you make there updates the whole site at once.

## Before you go live

- [ ] Swap real product photography in for the current line-art icons (in `.prod-img` blocks)
- [ ] Confirm final pricing (currently: Incense packet ₹10, Dhoopbatti ₹15, 14-Day Box ₹50–60 MRP)
- [ ] Point "Notify Me" / "Contact" to a real email or WhatsApp number
- [ ] Add real Instagram/WhatsApp links in the footer (currently `#` placeholders)
- [ ] Decide whether to add a founders/"About Us" section

## Deploy it — pick one

### Option A: Vercel (recommended, free, custom domain support)

1. Create a free account at vercel.com if you don't have one
2. Install the CLI: `npm i -g vercel`
3. From inside this folder, run: `vercel`
4. Follow the prompts (accept defaults — it auto-detects a static site)
5. To go live permanently: `vercel --prod`
6. Add your custom domain under Project → Settings → Domains

### Option B: Netlify Drop (fastest, zero setup)

1. Go to https://app.netlify.com/drop
2. Drag the entire `pujye-site` folder onto the page
3. It's live instantly with a `*.netlify.app` URL
4. Add a custom domain under Site settings → Domain management

### Option C: GitHub Pages (free, good if you want version control)

1. Create a new GitHub repo (e.g. `pujye-website`)
2. Push this folder's contents to the repo's `main` branch
3. Go to Settings → Pages → set source to `main` branch, root folder
4. Your site will be live at `https://<your-username>.github.io/pujye-website`
5. For a custom domain, add a `CNAME` file with your domain name at the root

## Custom domain

Once deployed on any of the above, buy your domain (e.g. from GoDaddy, Namecheap, or Hostinger — India-friendly options), then point its DNS to your host following that platform's domain guide. Vercel and Netlify both walk you through this in their dashboard.
