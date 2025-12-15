import { ReactNode } from 'react';

// Root layout - Next.js requires this file
// The actual html/body structure is handled in [locale]/layout.tsx
// This is a workaround for next-intl with App Router
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
