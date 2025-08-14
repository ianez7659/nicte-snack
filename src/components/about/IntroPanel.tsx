"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const panelVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

export default function IntroPanel() {
  return (
    <motion.div
      key="intro"
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
            key="img-intro"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 rounded-xl overflow-hidden border border-gray-200"
          >
            <Image
              src="/images/flowers.webp"
              alt="NICTE hero"
              fill
              className="object-cover"
              priority
            />
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Right: Text */}
      <div className="p-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-pink-900 drop-shadow">
          Discover the power of seeds
        </h2>
        <div className="mt-4 space-y-4 text-[15px] md:text-lg leading-relaxed text-gray-800">
          <p>
            At NICTE, we blend the Mexican traditional <em>alegrias</em> recipe,
            with less sugar and more protein &amp; fiber—mixing international
            flavours like Dried Mango, Matcha, and Chococonut.
          </p>
          <p>
            Alegrias have ancient Mexican origins. Amaranth was crucial in
            indigenous diets—used as currency and in ceremonies—making alegrias
            both delicious and highly nutritious.
          </p>
          <p>
            Each bar is hand-crafted. We keep improving—from adding new flavours
            to reducing added sugars—so you can choose health without losing
            joy.
          </p>
          <p>
            Our mission is to connect international tastes while celebrating
            Mexico&apos;s heritage—sustainably, inclusively, and with quality in
            every bite.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
