import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BizMatchKE - AI-Powered Business Ideas for Kenyan Entrepreneurs",
  description: "Transform your skills into a successful business with BizMatchKE. Get personalized AI-generated business ideas tailored to your skills, capital, and location in Kenya.",
  keywords: "business ideas, Kenya, entrepreneurship, AI business ideas, startup Kenya, small business Kenya",
  authors: [{ name: "BizMatchKE Team" }],
  creator: "BizMatchKE",
  publisher: "BizMatchKE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bizmatchke.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BizMatchKE - AI-Powered Business Ideas for Kenyan Entrepreneurs",
    description: "Transform your skills into a successful business with BizMatchKE. Get personalized AI-generated business ideas tailored to your skills, capital, and location in Kenya.",
    url: 'https://bizmatchke.com',
    siteName: 'BizMatchKE',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BizMatchKE - AI-Powered Business Ideas Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BizMatchKE - AI-Powered Business Ideas for Kenyan Entrepreneurs",
    description: "Transform your skills into a successful business with BizMatchKE. Get personalized AI-generated business ideas tailored to your skills, capital, and location in Kenya.",
    images: ['/images/twitter-image.jpg'],
    creator: '@bizmatchke',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BizMatchKE",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KES"
  },
  "description": "AI-powered platform that generates personalized business ideas for Kenyan entrepreneurs based on their skills, capital, and location.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f59e0b" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['light', 'dark', 'system']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
