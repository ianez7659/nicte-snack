"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";

// FAQ data
const FAQS = [
  {
    q: "What are Alegria Bites made of?",
    a: "Amaranth as the base + chia, flax, sunflower, pumpkin seeds. Low sugar with natural flavors like matcha, dried mango, and cacao-coconut.",
  },
  {
    q: "Are they vegan / gluten-free?",
    a: "Yes—plant-based ingredients and naturally gluten-free amaranth. Check final labels for any flavor-specific notes.",
  },
  {
    q: "How sweet are they?",
    a: "Designed to be low in sugar (target 3 g). We keep flavors balanced and clean without heavy syrups.",
  },
  {
    q: "Shelf life & storage",
    a: "Keep in a cool, dry place. For best texture/flavor, consume within the recommended period on the label.",
  },
  {
    q: "Do you offer custom shapes/sizes?",
    a: "Yes. We support custom/bulk orders for events and gifts. Reach out via the contact page.",
  },
  {
    q: "Allergens",
    a: "Manufactured with seeds; check packaging for cross-contact information if you have specific allergies.",
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="pt-10 min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-gradient-to-b from-white via-green-50 to-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            FAQ
          </h1>
          <p className="mt-2 text-gray-600">
            Answers to common questions about NICTE and Alegria Bites.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {FAQS.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpenIdx(i)}
              className="text-left rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              aria-haspopup="dialog"
            >
              <div className="w-full aspect-video rounded-lg border-2 border-dashed border-gray-300 grid place-items-center">
                <span className="text-gray-400 text-xs">Q</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{f.q}</h3>
              <p className="mt-1 text-gray-600 text-sm line-clamp-2">{f.a}</p>
              <span className="mt-3 inline-flex items-center text-green-700 font-semibold">
                Read more <span className="ml-1">›</span>
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        open={openIdx !== null}
        onClose={() => setOpenIdx(null)}
        title={openIdx !== null ? FAQS[openIdx].q : ""}
      >
        <p className="text-gray-700 leading-relaxed">
          {openIdx !== null ? FAQS[openIdx].a : ""}
        </p>
      </Modal>
    </section>
  );
}
