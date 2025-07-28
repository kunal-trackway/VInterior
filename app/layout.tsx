import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'V Interior',
  description: 'V Interior has been providing quality residential interior design services since 2017. Our team of talented designers is dedicated to crafting personalized interior designs that meet each clients unique style and preferences. Let us bring your dream home to life.',
  keywords: 'V Interior, interior design, residential design, personalized interiors, home decor, interior decorators, quality design services',
  authors: [{ name: 'Praveen Gowda' }],
  viewport: 'width=device-width, initial-scale=1',
  
  icons: {
    icon: 'https://v-interior.vercel.app/favicon.ico',
    shortcut: 'https://v-interior.vercel.app/favicon.ico', // Optional: For older browsers
    apple: 'https://v-interior.vercel.app/favicon.ico', // Optional: For iOS devices
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}