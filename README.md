# Commons Market

Commons Market is a responsive multi-category storefront made as a college project. It demonstrates product browsing, cart management, guest checkout, order tracking and basic store administration.

## Features

- Responsive home page, category browsing, product search, category/price filters and sorting
- Twenty sample products across Electronics, Fashion, Home & Kitchen, Beauty, and Sports & Outdoors
- Product details, quantity controls and stock checks
- Cart stored in browser `localStorage`
- Guest checkout with delivery details, shipping calculation, and two payment choices: Cash on Delivery or demo online payment
- Order confirmation and a customer dashboard with order history
- Mock customer sign-in and registration; profile, orders, and addresses pages
- Admin dashboard with product editing, order status management, customer list and inventory view
- Demo product, user, cart, and order data stored in the current browser only

## Technology

Next.js App Router, React, JavaScript, Tailwind CSS, Lucide icons, browser `localStorage`.

## Folder structure

```text
app/                     App Router entry points and global styles
components/store.jsx     Sample data and browser-persisted storefront state
components/storefront.jsx Storefront, checkout and dashboard screens
```

## Run locally

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To make a production build and serve it locally:

```bash
npm run build
npm start
```

## Demo access

- **Customer:** Register with any name, email and password (6 or more characters), or enter any email and password on the login form. This is a frontend-only demo; passwords are not authenticated by a server.
- **Admin:** `admin@commonsmarket.demo` / `admin123`

## Deploy to Vercel

Push this folder to a Git repository, import it in Vercel, and deploy with the default Next.js settings. No environment variables are required for this demo. Product, account and order data lives in each browser and does not sync between devices. Connect a real database and authentication provider before using it for real customers. Online payment is a demo selection only; no real payment gateway is connected. Cash on Delivery is available.
