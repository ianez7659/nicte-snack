"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const panelVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

export default function FounderPanel() {
  return (
    <motion.div
      key="founder"
      variants={panelVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="grid md:grid-cols-2 gap-6 rounded-b-lg border border-gray-200 border-t-0 p-6 md:p-8"
    >
      {/* Left: Image */}
      <div className="relative h-72 md:h-[520px] bg-white">
        <AnimatePresence mode="wait">
          <motion.figure
            key="img-founder"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/founder.jpg"
              alt="Founder"
              fill
              className="object-cover bg-white"
            />
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Right: Text */}
      <div className="p-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-pink-900 drop-shadow">
          About the Founder
        </h2>
        <div className="mt-4 space-y-4 text-[15px] md:text-lg leading-relaxed text-gray-800">
          <p>
            Hi there! I am Sac Moreno. Thanks for being here. Let me tell you
            the story of NICTE&apos;s birth…
          </p>
          <p>
            I arrived in Vancouver as an international student and missed
            authentic Mexican food—especially <em>alegrias</em>. I realized
            amaranth wasn&apos;t well-known here and thought: why not share it,
            healthier and lower in sugar, fused with international flavours?
          </p>
          <p>
            NICTE is Mexican tradition, a healthy choice, a dream—an
            international fusion inspired by heritage and folklore.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
