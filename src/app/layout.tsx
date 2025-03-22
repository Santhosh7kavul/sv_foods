// import type { Metadata } from "next";
// import { FaWhatsapp } from "react-icons/fa";
// import Link from "next/link";
// import { Inter } from 'next/font/google'
// const inter = Inter({
//   subsets: ['latin'],
//   weight: "400"
// })
// import "./globals.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";


// export const metadata: Metadata = {
//   title: "SV Foods",
//   description: "Feeding the future with natural, sustainable cattle feed for thriving, healthy animals",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" type="image/png" href="/logo.png" />
//       </head>
//       <body
//         className={inter.className}
//       >
//         <Header />
//         {children}
//         <Link
//         href="https://wa.me/9538383331?text=Hello! I want to talk about Corn Silage"
//         target="Hello! I want to talk about Corn Silage"
//         rel="noopener noreferrer"
//         className=" fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all flex items-center gap-2 z-50"
//       >
//         <FaWhatsapp size={24} />
//         <span className="hidden sm:block">Chat with us</span>
//       </Link>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Inter } from 'next/font/google';
import Script from "next/script";


const inter = Inter({
  subsets: ['latin'],
  weight: "400"
});

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define keywords separately as a string to avoid TypeScript errors
const keywords: string = "silage, corn silage, silage bags, cattle feed, organic silage, silage for cows, corn silage for sale, best silage for dairy cows, silage price per ton, feeding silage to cattle";

// Define metadata
export const metadata: Metadata = {
  title: "SV Foods - Premium Silage & Cattle Feed Supplier",
  description: "Buy high-quality silage, corn silage, silage bags, and cattle feed. We offer organic and sustainable feed solutions for livestock, dairy farms, and poultry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
        <link rel="icon" type="image/png" href="/logo.png" />
        {/* google analytics */}
        <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LG8PHLL4PF"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LG8PHLL4PF');
          `,
        }}
      />


        {/* breadcrumb */}
        <Script id="structured-data-breadcrumbs" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cornrichsilage.in/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://cornrichsilage.in/about",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Product",
                "item": "https://cornrichsilage.in/product",
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Gallery",
                "item": "https://cornrichsilage.in/gallery",
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://cornrichsilage.in/contact",
              },
            ],
          })}
        </Script>
        {/* website */}
        <Script id="structured-data-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Corn Rich Silage",
            "url": "https://cornrichsilage.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://cornrichsilage.in/contact{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
          {/* Local business */}
          <Script id="structured-data-localbusiness" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Corn Rich Silage",
            "image": "https://cornrichsilage.in/_next/image?url=%2Flogo.png&w=96&q=75",
            "@id": "",
            "url": "https://cornrichsilage.in/",
            "telephone": "+91-8105643121",
            "priceRange": "7500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kellode, Hosadurga",
              "addressLocality": "Tumkur",
              "postalCode": "",
              "addressCountry": "IN",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.3406,
              "longitude": 77.10152,
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              "opens": "00:00",
              "closes": "23:59",
            },
          })}
        </Script>


        <meta name="google-site-verification" content="d6jMexBmehlqZTYATi3Uew-8w9EdP1R-kJ0iwvzaPww" />

        {/* <meta name="description" content={metadata.description} /> */}
        <meta name="description" content="Buy high-quality silage, corn silage, silage bags, and cattle feed. We offer organic and sustainable feed solutions for livestock, dairy farms, and poultry." />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="SV Foods" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) for social media */}
        {/* <meta property="og:title" content={metadata.title} /> */}
        <meta property="og:title" content="SV Foods - Premium Silage & Cattle Feed Supplier" />
        <meta property="og:description" content="Buy high-quality silage, corn silage, silage bags, and cattle feed. We offer organic and sustainable feed solutions for livestock, dairy farms, and poultry." />
        <meta property="og:image" content="/images/silage-banner.jpg" />
        <meta property="og:url" content="https://cornrichsilage.in/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Link
          href="https://wa.me/9538383331?text=Hello! I want to talk about Corn Silage"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all flex items-center gap-2 z-50"
        >
          <FaWhatsapp size={24} />
          <span className="hidden sm:block">Chat with us</span>
        </Link>
        <Footer />
      </body>
    </html>
  );
}