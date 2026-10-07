import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.scss";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";
import { Cursor } from "@/components/ui/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060913",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Creamy Day — Premium Handcrafted Ice Cream | Make The Day Happy",
    template: "%s | Creamy Day Ice Cream",
  },
  description:
    "Enjoy premium ice cream, crafted fresh with the finest natural ingredients and a whole lot of love. Cups, family packs, sundaes, and plant-based flavors in Dowlaiswaram, Rajahmundry.",
  keywords: [
    "Creamy Day",
    "Creamy Day Ice Cream",
    "Handcrafted Ice Cream",
    "Dowlaiswaram Ice Cream Parlor",
    "Rajahmundry Ice Cream",
    "Ice Cream Party Tubs",
    "Dairy Free Ice Cream",
    "Family Pack Ice Creams",
  ],
  authors: [{ name: "Creamy Day" }],
  creator: "Creamy Day",
  publisher: "Creamy Day",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Creamy Day — Premium Handcrafted Ice Cream",
    description:
      "A Little Joy in Every Scoop. Make the day happy with our handcrafted natural flavors, rich sundaes, and fresh dairy treats.",
    siteName: "Creamy Day",
    images: [
      {
        url: "/images/brand/creamy-day-full-logo.png",
        width: 1573,
        height: 942,
        alt: "Creamy Day Official Trademark Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creamy Day — Premium Handcrafted Ice Cream",
    description: "Make the day happy with Creamy Day handcrafted ice creams.",
    images: ["/images/brand/creamy-day-full-logo.png"],
  },
  icons: {
    icon: "/images/brand/creamy-day-emblem.png",
    apple: "/images/brand/creamy-day-emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: siteConfig.name,
    description: siteConfig.longDescription,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: "IN",
    },
    telephone: siteConfig.contact.phones[0].value,
    openingHours: "Mo-Su 10:00-23:00",
    servesCuisine: "Ice Cream, Desserts, Sundaes",
  };

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#060913] text-cream-50 selection:bg-amber-500/30 selection:text-amber-200">
        <SmoothScroll>
          <Preloader />
          <Cursor />
          <div className="dessert-glow" aria-hidden="true" />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
