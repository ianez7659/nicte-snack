// src/app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "NICTE | Superfood Alegria",
  description: "Rebuilt with Next.js + Tailwind + TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} bg-white text-gray-900 font-sans`}>
        <Header />
        <main className="pt-[30px] min-h-screen max-w-8xl mx-auto ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
