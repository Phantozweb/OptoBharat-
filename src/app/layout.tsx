
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: 'OPTOBHARAT - India\'s Largest Optometry Student Community',
    template: '%s - OPTOBHARAT',
  },
  description: 'OPTOBHARAT is India\'s largest and most impactful optometry student community, dedicated to empowering the next generation of eye care professionals. Join us for education, innovation, and collaboration.',
  keywords: ['OPTOBHARAT', 'optometry student community', 'India optometry', 'eye care education', 'optometrist network', 'vision care', 'student community'],
  openGraph: {
    title: 'OPTOBHARAT - India\'s Largest Optometry Student Community',
    description: 'Connecting and empowering optometry students across India and worldwide.',
    type: 'website',
    url: 'https://www.optobharat.com', // Replace with your actual domain
    // image: 'https://www.optobharat.com/og-image.png', // Replace with your actual OG image URL
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OPTOBHARAT - India\'s Largest Optometry Student Community',
    description: 'Connecting and empowering optometry students across India and worldwide.',
    // image: 'https://www.optobharat.com/twitter-image.png', // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
