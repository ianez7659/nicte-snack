"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import IngredientCard, { IngredientItem } from "@/components/IngredientCard";
import Link from "next/link";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

// Ingredient items with images and descriptions
const ITEMS: IngredientItem[] = [
  {
    key: "amaranth",
    title: "Amaranth:",
    highlight: "Amaranth:",
    desc: [
      "Gluten-free grain high in protein, fiber, and micronutrients like calcium, iron, and magnesium.",
      "May help lower cholesterol, reduce inflammation, and support bone health.",
    ],
    image: "/images/spoon-amaranth2.jpg",
  },
  {
    key: "chia",
    title: "Chia:",
    highlight: "Chia:",
    desc: [
      "Packed with fiber, omega-3 fatty acids, protein, and antioxidants.",
      "Can aid digestion, promote heart health, stabilize blood sugar, and boost energy.",
    ],
    image: "/images/spoon-chia.jpg",
  },
  {
    key: "flax",
    title: "Flax:",
    highlight: "Flax:",
    desc: [
      "Rich in omega-3s, lignans, and fiber; supports heart & digestive health.",
      "Soluble fiber gels with water, which may help with weight management.",
    ],
    image: "/images/spoon-flax.jpg",
  },
  {
    key: "sunflower",
    title: "Sunflower Seeds:",
    highlight: "Sunflower seeds:",
    desc: [
      "Healthy fats, protein, fiber, vitamin E, selenium, magnesium.",
      "May support skin & heart health and provide antioxidants.",
    ],
    image: "/images/spoon-sunflower.jpg",
  },
  {
    key: "pumpkin",
    title: "Pumpkin Seeds:",
    highlight: "Pumpkin seeds:",
    desc: [
      "Protein, healthy fats, fiber, iron, zinc, magnesium, antioxidants.",
      "Can aid digestion, support prostate & heart health, and immunity.",
    ],
    image: "/images/spoon-pumpkin2.jpg",
  },
  {
    key: "lime",
    title: "Lime:",
    highlight: "Lime:",
    desc: [
      "Vitamin C, antioxidants, flavonoids. May boost immunity and digestion.",
    ],
    image: "/images/spoon-lime.jpg",
  },
  {
    key: "mango",
    title: "Mango:",
    highlight: "Mango:",
    desc: [
      "High in vitamins A & C with antioxidants and fiber. Good for skin & digestion.",
    ],
    image: "/images/spoon-mango.jpg",
  },
  {
    key: "honey",
    title: "Honey:",
    highlight: "Honey:",
    desc: ["Natural sweetener with antioxidants; soothing and gut-friendly."],
    image: "/images/spoon-honey.jpg",
  },
  {
    key: "matcha",
    title: "Matcha:",
    highlight: "Matcha:",
    desc: [
      "Antioxidant-rich catechins; may boost metabolism, focus, and heart health.",
    ],
    image: "/images/spoon-matcha.jpg",
  },
  {
    key: "chocolate",
    title: "Chocolate:",
    highlight: "Chocolate:",
    desc: ["Flavonoids support blood flow, mood, and cognitive function."],
    image: "/images/spoon-choco2.jpg",
  },
  {
    key: "coconut",
    title: "Coconut:",
    highlight: "Coconut:",
    desc: ["MCTs provide quick energy; also fiber, vitamins, and minerals."],
    image: "/images/spoon-coconut2.jpg",
  },
];

export default function IngredientsPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section className="pt-10 min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-gradient-to-b from-white via-green-50 to-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-green-800">
            Ingredients
          </h1>
          <p className="mt-3 text-gray-600">
            The superfood lineup behind our Alegria Bites
          </p>
          <Link
            href="/product"
            className="inline-block mt-6 rounded-lg border border-green-700 text-green-800 hover:bg-green-50 px-6 py-2 font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>

      {/* List */}
      <motion.div
        className="max-w-3xl mx-auto px-4 pb-4 space-y-1"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {ITEMS.map((item) => (
          <motion.div key={item.key} variants={itemVariants} layout>
            <IngredientCard
              item={item}
              isOpen={openKey === item.key}
              onToggle={() =>
                setOpenKey(openKey === item.key ? null : item.key)
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
