# Code Together - Landing Page

A modern, highly responsive SaaS landing page for a Chrome Extension that tracks coding accountability.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React Three Fiber** (3D elements)
- **TypeScript**

## Features

- 🎨 Modern orange & black theme
- 🎭 Smooth scroll animations with Framer Motion
- 🎲 3D floating cube in hero section
- 📱 Fully responsive design
- 🎯 Glassmorphism effects
- ⚡ Optimized performance

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with 3D element
│   ├── FloatingCube.tsx # 3D cube component
│   ├── Waitlist.tsx    # Waitlist form
│   ├── WhatItIs.tsx    # What it is section
│   ├── HowItWorks.tsx  # How it works section
│   ├── WhatMakesUsDifferent.tsx # Comparison section
│   ├── FAQ.tsx         # FAQ accordion
│   └── Footer.tsx      # Footer
└── package.json
```

## Sections

1. **Hero** - Full viewport with headline and 3D animated cube
2. **Waitlist** - Email signup with glassmorphism card
3. **What It Is** - Product explanation
4. **How It Works** - 4-step process cards
5. **What Makes Us Different** - Comparison layout
6. **FAQ** - Accordion-style questions
7. **Footer** - Minimal footer with links

## Customization

The theme colors can be adjusted in `tailwind.config.js` under the `primary` color palette.

## License

MIT

