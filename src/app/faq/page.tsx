"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";

// FAQ item type
type FAQItem = {
  q: string;
  a: string;
  image: string;
};

// FAQ data
const FAQS: FAQItem[] = [
  {
    q: "Do you host product events or launch parties?",
    a: "Yes! We're planning something exciting. Stay tuned for a surprise event that will amaze you. We'll be announcing details soon, so keep an eye on our updates!",
    image: "/images/events-1.jpg",
  },
  {
    q: "What are Alegria Bites made of?",
    a: "Amaranth as the base + chia, flax, sunflower, pumpkin seeds. Low sugar with natural flavors like matcha, dried mango, and cacao-coconut.",
    image: "/images/ama-seed-1.jpg",
  },
  {
    q: "Are they vegan / gluten-free?",
    a: "Yes—plant-based ingredients and naturally gluten-free amaranth. Check final labels for any flavor-specific notes.",
    image: "/images/healthy-2.jpg",
  },
  {
    q: "How sweet are they?",
    a: "Designed to be low in sugar (target 3 g). We keep flavors balanced and clean without heavy syrups.",
    image: "/images/honey.jpg",
  },
  {
    q: "Shelf life & storage",
    a: "Keep in a cool, dry place. For best texture/flavor, consume within the recommended period on the label.",
    image: "/images/refrige.jpg",
  },
  {
    q: "Do you offer custom shapes/sizes?",
    a: "Yes. We support custom/bulk orders for events and gifts. Reach out via the contact page.",
    image: "/images/giftbox.jpg",
  },
  {
    q: "Allergens",
    a: "Manufactured with seeds; check packaging for cross-contact information if you have specific allergies.",
    image: "/images/healthy-1.jpg",
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="pt-10 min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-gradient-to-b from-white via-green-50 to-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#5E7053]">
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
              className="text-left rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              aria-haspopup="dialog"
            >
              <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-[#5E7053]/20 via-[#CAC3DC]/30 to-[#762B3B]/10 border-2 border-[#5E7053]/30 grid place-items-center relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{ backgroundImage: `url(${f.image})` }}
                ></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-[#5E7053] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">Q</span>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{f.q}</h3>
              <p className="mt-1 text-gray-600 text-sm line-clamp-3">{f.a}</p>
              <span className="mt-3 inline-flex items-center text-[#5E7053] font-semibold">
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
