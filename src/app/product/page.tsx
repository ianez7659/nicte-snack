"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type TabKey = "flavours" | "price";

const TABS: { key: TabKey; label: string }[] = [
  { key: "flavours", label: "Flavours" },
  { key: "price", label: "Price" },
];

export default function ProductPage() {
  const [tab, setTab] = useState<TabKey>("flavours");

  return (
    <section className="pt-10 min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-gradient-to-b from-white via-green-50 to-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#5E7053]">
            Our Products
          </h1>
          <p className="mt-3 text-gray-600">
            Alegria Bites made with superfood seeds — low sugar, high taste.
          </p>
          <Link
            href="/ingredients"
            className="mt-6 inline-block rounded-lg border border-[#5E7053] bg-green-200 text-green-700 hover:bg-[#5E7053] hover:text-white px-6 py-3 font-semibold transition"
          >
            View Ingredients
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        {/* Line Tabs - right aligned */}
        <div className="border-b border-gray-200">
          <div
            role="tablist"
            aria-label="Product sections"
            className="flex justify-end gap-2"
          >
            {TABS.map(({ key, label }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(key)}
                  className={[
                    "px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors",
                    "border border-transparent border-b-0",
                    active
                      ? "text-green-800 bg-white border-x-gray-200 border-t-gray-200 -mb-px"
                      : "text-gray-500 hover:text-gray-700",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "block py-1",
                      active
                        ? "bg-green-200 rounded-2xl"
                        : "border-transparent hover:border-gray-300",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panels */}
        <div className="mt-0">
          <AnimatePresence mode="wait">
            {tab === "flavours" && (
              <motion.div
                key="flavours"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-b-lg border border-gray-200 border-t-0 p-6 md:p-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left: Text section */}
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-2xl font-extrabold text-amber-900/90 border-b pb-2">
                        <span className="italic">Chococonut</span> Alegria Bites
                      </h2>
                      <p className="mt-3 text-gray-700">
                        100% cacao powder and dried coconut is the perfect combo
                        for chocolate lovers. Cacao has always been admired
                        because of its supplement potential since the ancient
                        Mayas times. Why not supplement the high-sugared regular
                        chocolates snacks for a healthy cacao-flavored alegria?
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-extrabold text-yellow-600 border-b pb-2 text-right">
                        <span className="italic">Dried Mango</span>{" "}
                        <span className="not-italic">Alegria Bites</span>
                      </h2>
                      <p className="mt-3 text-gray-700">
                        Carefully cut pieces of mango dropping in each bite you
                        give, adding that extra sweetness and detail to your
                        healthy seeds bar.We use high quality dried mango that
                        ensures the sweet taste, softness, and consistency that
                        your mouth deserves. It is high in vitamins A, C,
                        antioxidants and fiber that support your immune system.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-extrabold text-green-700 border-b pb-2">
                        <span className="italic">Matcha</span> Alegria Bites
                      </h2>
                      <p className="mt-3 text-gray-700">
                        One of the most relevant Japanese foods among Buddhist
                        monks and samurai warriors because of its calming yet
                        energizing properties, ideal for your morning diet. Let
                        the incredible matchas benefits and flavor drown while
                        eating your healthy amaranth snack.
                      </p>
                    </section>
                  </div>

                  {/* Right: image placeholder */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex items-center justify-center">
                    <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-gray-200">
                      <Image
                        src="/images/nicte-packages.webp"
                        alt="Product image"
                        width={800}
                        height={1000}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {tab === "price" && (
              <motion.div
                key="price"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-b-lg border border-gray-200 border-t-0 p-6 md:p-8"
              >
                {/* Price table */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900">Price</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Unit price by quantity
                  </p>

                  <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-6xl rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                      <div className="grid grid-cols-2 text-center px-6 py-3 bg-green-50 border-b border-gray-200">
                        <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Quantity
                        </span>
                        <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Price
                        </span>
                      </div>

                      {[
                        ["1 ~ 2", "$4.50 each"],
                        ["3 ~ 9", "$4.00 each"],
                        ["10 ~ 19", "$3.75 each"],
                        ["20 ~ 49", "$3.50 each"],
                        ["50+", "$3.25 each"],
                      ].map(([qty, price], idx) => (
                        <div
                          key={qty}
                          className={`grid grid-cols-2 text-center px-6 py-4 text-gray-800 ${
                            idx !== 4 ? "border-b border-gray-100" : ""
                          }`}
                        >
                          <span className="font-medium">{qty}</span>
                          <span className="font-semibold text-[#5E7053] tabular-nums">
                            {price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-center text-gray-600">
                    Would you like to know more?{" "}
                    <Link
                      href="/faq"
                      className="text-[#762B3B] font-semibold hover:underline"
                    >
                      Read the FAQ →
                    </Link>
                  </p>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
