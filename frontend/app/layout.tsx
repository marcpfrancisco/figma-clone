import type { Metadata } from 'next';
import './globals.css';
import Room from './Room';

export const metadata: Metadata = {
  title: 'Website Builder',
  description:
    'A minimalist Figma Clone using Fabric.js and LiveBlocks for real-time collaboration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-primary-grey-200">
        <Room>{children}</Room>
      </body>
    </html>
  );
}
