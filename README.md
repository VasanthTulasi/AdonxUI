# AdonxUI

A React-based marketing landing page for **Adonx**, a cryptocurrency exchange platform. It showcases platform features, displays live crypto prices, and invites users to join the community.

## Features

- **Hero section** — headline and illustration introducing the Adonx exchange
- **Live crypto prices** — real-time prices and 24-hour change for Bitcoin, Ethereum, Litecoin, and Bitcoin Cash via the public CoinGecko API
- **Platform features showcase** — six alternating sections covering Highly Scalable Matching Engine, Multi-Layered Security, Account Alias, Vanity Address, Atom Swap, and Developer API
- **Community / About section** — social icons and footer links
- **Responsive navigation** — logo, anchor links to Features and About sections, Log in and Sign Up buttons

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 17 |
| Build tooling | Create React App (react-scripts 4) |
| Styling | Custom CSS (no framework) |
| Fonts | Google Fonts (Titillium Web, Source Sans Pro, Raleway, Cormorant) |
| External data | CoinGecko public REST API (no API key required) |
| Assets | Custom SVGs for icons, logos, and backgrounds |

## Prerequisites

- **Node.js** ≥ 14 (LTS recommended)
- **npm** ≥ 6 (bundled with Node.js)

## Getting Started

### Installation

```bash
git clone <repo-url>
cd AdonxUI
npm install
```

### Environment Variables

This project uses no environment variables. The CoinGecko API endpoint used is public and requires no authentication.

### Running the App

```bash
# Development server (hot reload at http://localhost:3000)
npm start

# Production build (output to /build)
npm run build
```

## Project Structure

```
AdonxUI/
├── public/               # Static assets served as-is (favicon, manifest)
└── src/
    ├── App.js            # Root component — wires together all sections
    ├── Components/       # UI components (NavBar, HeroSection, Currencies, etc.)
    ├── SVGs/             # SVG assets: logo, icons, currency logos, backgrounds
    └── Images/           # Raster/SVG image assets
```

## Available Scripts

| Script | Description |
|---|---|
| `npm start` | Start development server on port 3000 |
| `npm run build` | Create optimised production build in `/build` |
| `npm test` | Run tests in interactive watch mode |
| `npm run eject` | Eject from Create React App (irreversible) |

## Contributing

1. Fork the repository and create a feature branch.
2. Make changes, keeping components in `src/Components/` and assets in `src/SVGs/`.
3. Run `npm start` to verify the UI locally.
4. Open a pull request against `main`.
