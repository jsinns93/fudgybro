# FUDGYBRO - Indonesian Premium Brownies & Desserts

## Overview
A modern React-based website for FUDGYBRO, a premium Indonesian dessert brand specializing in fudgy brownies and viral cookie bombs. The site showcases their menu, store locations, rewards program, and ordering system.

## Tech Stack
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM (HashRouter)
- **Icons**: Lucide React

## Project Structure
```
/
├── App.tsx           # Main app with routing
├── index.tsx         # React entry point
├── index.html        # HTML template with Tailwind CDN
├── vite.config.ts    # Vite configuration (port 5000)
├── tsconfig.json     # TypeScript configuration
├── components/       # Reusable UI components
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── Order.tsx
│   ├── Rewards.tsx
│   ├── Stores.tsx
│   └── Contact.tsx
├── constants.tsx     # App constants and data
└── types.ts          # TypeScript type definitions
```

## Development
- Run: `npm run dev`
- Server runs on port 5000 at 0.0.0.0
- Vite configured with `allowedHosts: true` for Replit proxy compatibility

## Deployment
- Build: `npm run build`
- Static deployment from `dist` directory
