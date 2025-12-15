import { ReactNode } from 'react';

// Root layout - required by Next.js App Router
// The locale-specific layout in [locale]/layout.tsx handles html/body and imports globals.css
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
