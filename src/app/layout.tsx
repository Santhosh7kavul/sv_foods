import type { Metadata } from "next";
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: "400"
})
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "SV Foods",
  description: "Feeding the future with natural, sustainable cattle feed for thriving, healthy animals",
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
      </head>
      <body
        className={inter.className}
      >
    
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
