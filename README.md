# Second Eye Website | موقع عينك الثانية الأمنية

A modern, bilingual (Arabic/English) website for Second Eye Security - a telecommunications, IT, and security systems company based in Riyadh, Saudi Arabia.

## Features

- **Bilingual Support**: Full Arabic and English support with RTL layout for Arabic
- **Modern Tech Stack**: Built with Next.js 16, React, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first, fully responsive design
- **Smooth Animations**: Framer Motion for beautiful page transitions
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Contact Form**: Interactive contact form for client inquiries
- **Services Showcase**: Detailed presentation of company services
- **Partners Section**: Display of technical partners and clients

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd secondeye-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will default to Arabic. Switch to English using the language switcher in the header.

## Project Structure

```
secondeye-website/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Root layout with i18n
│   │   └── page.tsx        # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── VisionMissionSection.tsx
│   │   ├── PartnersSection.tsx
│   │   └── ContactSection.tsx
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   └── LanguageSwitcher.tsx
├── i18n/
│   ├── routing.ts          # i18n routing config
│   └── request.ts          # i18n request config
├── messages/
│   ├── ar.json             # Arabic translations
│   └── en.json             # English translations
└── middleware.ts           # i18n middleware

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding Content

1. **Translations**: Edit `messages/ar.json` and `messages/en.json`
2. **Services**: Update service data in `components/sections/ServicesSection.tsx`
3. **Partners**: Update partner logos in `components/sections/PartnersSection.tsx`
4. **Contact Info**: Edit contact details in `messages/*.json` files

### Styling

- Main styles: `app/globals.css`
- Tailwind config: Uses Tailwind CSS v4 with inline config
- Color scheme: Cyan, Blue, and Purple gradients

### Arabic Font

The site uses **Tajawal** font for beautiful Arabic typography. The font is loaded from Google Fonts.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
```

Then deploy the `.next` folder and `package.json` to your hosting platform.

## Environment Variables

No environment variables are required for the basic setup. For production, you may want to add:

- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact form email
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2024 Second Eye Security. All rights reserved.

## Support

For issues or questions, contact:
- Email: osamamo.saad83@gmail.com
- Phone: +966 594 866 064
- Address: Eqtisad St, AlHamra, Riyadh 13216, Saudi Arabia

---

Built with ❤️ for Second Eye Security
