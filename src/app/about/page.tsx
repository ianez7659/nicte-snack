"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AboutTabs, { TabKey } from "@/components/about/AboutTabs";
import IntroPanel from "@/components/about/IntroPanel";
import ProductPanel from "@/components/about/ProductPanel";
import FounderPanel from "@/components/about/FounderPanel";

export default function AboutPage() {
  const [tab, setTab] = useState<TabKey>("intro");

  return (
    <section className="pt-10 min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-gradient-to-b from-white via-green-50 to-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            About NICTE
          </h1>
          <p className="mt-3 text-gray-600">
            Health, tradition, and international flavours — in every bite.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <AboutTabs current={tab} onChange={setTab} />

        <div className="mt-0">
          <AnimatePresence mode="wait">
            {tab === "intro" && <IntroPanel key="intro" />}
            {tab === "product" && <ProductPanel key="product" />}
            {tab === "founder" && <FounderPanel key="founder" />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
