"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export type IngredientItem = {
  key: string;
  title: string;
  highlight?: string;
  desc: string[];
  image: string;
};

export default function IngredientCard({
  item,
  isOpen,
  onToggle,
}: {
  item: IngredientItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `${item.key}-panel`;

  return (
    <div className="rounded-2xl overflow-hidden bg-white will-change-transform py-2 ">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full text-left group"
      >
        {/* Top: image part */}
        <figure className="relative w-full aspect-[5/1] bg-white cursor-pointer">
          <Image
            src={item.image}
            alt={`${item.title} image`}
            fill
            className="object-contain"
            sizes="(min-width: 768px) 800px, 100vw"
          />
        </figure>

        {/* Bottom: text and arrow */}
        <div className="flex items-center justify-between px-5 py-2 cursor-pointer">
          <h3 className="text-xl md:text-3xl md:font-semibold font-semibold text-green-800">
            {item.title}
          </h3>
          <span
            className={`inline-block text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden
          >
            <ChevronDown size={30} className="text-green-800" />
          </span>
        </div>
      </button>

      {/* Open description using framer-motion animations */}
      <motion.div
        id={panelId}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.24 }}
        className="px-5 pb-2 overflow-hidden"
      >
        <div className="rounded-xl bg-gray-100 border border-gray-200 p-4">
          <div className="mt-1 text-lg space-y-2 text-gray-700">
            {item.desc.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
