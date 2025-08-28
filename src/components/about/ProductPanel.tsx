"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const panelVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

export default function ProductPanel() {
  return (
    <motion.div
      key="product"
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
            key="img-product"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/amaranth.jpg"
              alt="Product shapes"
              fill
              className="object-cover bg-white"
            />
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Right: Text */}
      <div className="p-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-pink-900 drop-shadow">
          Amaranth: The Mesoamerican Treasure
        </h2>

        <div className="mt-4 space-y-4 text-[15px] md:text-lg leading-relaxed text-gray-800 max-h-[400px] overflow-y-auto pr-2">
          <div>
            <h3 className="font-bold text-lg text-[#762B3B] mb-2">History</h3>
            <p>
              Over 8,000 years ago, amaranth was a core food of the Aztec and Mayan empires — treasured as much as gold, offered to the gods, and used to fuel warriors in battle. Today, this ancient grain continues its legacy as one of the most nutritious foods on Earth.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-[#762B3B] mb-2">Importance</h3>
            <p>
              Celebrated as a superfood by experts worldwide — and even studied by NASA for its potential in space missions — amaranth is prized for its exceptional nutrition, versatility, and ability to grow in challenging climates. It's a bridge between ancient tradition and modern wellness.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-[#762B3B] mb-2">Health Benefits:</h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Rich in high-quality protein and essential amino acids</li>
              <li>Excellent source of calcium, iron, magnesium, and antioxidants</li>
              <li>Naturally gluten-free and easy to digest</li>
              <li>Supports heart health</li>
              <li>Helps maintain strong muscles and bones</li>
              <li>Promotes healthy digestion with natural fiber</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
