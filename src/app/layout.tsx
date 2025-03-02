import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
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
        <Link
        href="https://wa.me/9538383331?text=Hello! I want to talk about Corn Silage"
        target="Hello! I want to talk about Corn Silage"
        rel="noopener noreferrer"
        className=" fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all flex items-center gap-2 z-50"
      >
        <FaWhatsapp size={24} />
        <span className="hidden sm:block">Chat with us</span>
      </Link>
        <Footer />
      </body>
    </html>
  );
}
