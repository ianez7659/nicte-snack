"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  title: string;
  subtitle?: string;
  images: { src: string; alt: string }[];
  id: string; // section anchor
};

// Image path
const GALLERY: GalleryItem[] = [
  {
    id: "wedding",
    title: "For Your Wedding",
    subtitle:
      "Elegant, customizable bites that add a sophisticated touch to your big day.",
    images: [
      { src: "/images/hearts.webp", alt: "Wedding idea 1" },
      { src: "/images/LogoTitle.jpg", alt: "Wedding idea 2" },
      { src: "/images/LogoTitle.jpg", alt: "Wedding idea 3" },
    ],
  },
  {
    id: "kids",
    title: "Children’s Parties",
    subtitle:
      "Bright, fun, and full of flavor—bites kids will love and ask for more!",
    images: [
      { src: "/images/custom.webp", alt: "Kids idea 1" },
      { src: "/images/organized.webp", alt: "Kids idea 2" },
      { src: "/images/LogoTitle.jpg", alt: "Kids idea 3" },
    ],
  },
  {
    id: "special",
    title: "For Your Special Someone",
    subtitle:
      "Healthy, heartwarming treats to sweeten the moment and show you care.",
    images: [
      { src: "/images/hat.webp", alt: "Special someone 1" },
      { src: "/images/flowers.webp", alt: "Special someone 2" },
    ],
  },
  {
    id: "valentines",
    title: "Valentine's Day",
    subtitle: "Romantic and delicious—share love and joy with Alegria Bites.",
    images: [
      { src: "/images/hearts.webp", alt: "Valentine 1" },
      { src: "/images/LogoTitle.jpg", alt: "Valentine 2" },
      { src: "/images/LogoTitle.jpg", alt: "Valentine 3" },
    ],
  },
  {
    id: "gifts",
    title: "Thoughtful Gifts",
    subtitle:
      "Give the gift of health and sweetness—unique and memorable for anyone.",
    images: [
      { src: "/images/brown-cloth.webp", alt: "Gift idea 1" },
      { src: "/images/line-cloth.webp", alt: "Gift idea 2" },
    ],
  },
  {
    id: "catering",
    title: "Event Catering",
    subtitle:
      "Personalize your event with healthy gourmet bites—ideal for corporate gatherings.",
    images: [
      { src: "/images/custom.webp", alt: "Catering idea 1" },
      { src: "/images/holder.webp", alt: "Catering idea 2" },
      { src: "/images/LogoTitle.jpg", alt: "Catering idea 3" },
      { src: "/images/LogoTitle.jpg", alt: "Catering idea 4" },
    ],
  },
  {
    id: "everyday",
    title: "Everyday Snacking",
    subtitle:
      "Wholesome, satisfying, and nourishing—perfect for any time of day.",
    images: [
      { src: "/images/bars.webp", alt: "Everyday 1" },
      { src: "/images/kinds.webp", alt: "Everyday 2" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
};

export default function GalleryPage() {
  return (
    <section className="pt-10 min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-gradient-to-b from-white via-green-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Gallery: Discover the Perfect Snacks for Every Occasion
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Planning a wedding, children’s party, family gathering, or corporate
            event? Our Alegria Bites are the ultimate choice for any
            celebration! Browse our gallery for ideas.
          </p>

          {/* Quick nav (anchor tabs) */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {GALLERY.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="px-3 py-2 text-sm rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                {g.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 pb-16 space-y-14">
        {GALLERY.map((g, idx) => (
          <motion.section
            key={g.id}
            id={g.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="scroll-mt-24"
          >
            {/* Header */}
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {g.title}
                </h2>
                {g.subtitle && (
                  <p className="mt-1 text-gray-600">{g.subtitle}</p>
                )}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
              {g.images.map((img, i) => (
                <figure
                  key={img.alt + i}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 bg-white"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 35vw, 50vw"
                    priority={idx === 0 && i < 2}
                  />
                </figure>
              ))}

              {g.images.length === 0 && (
                <div className="col-span-full grid place-items-center rounded-xl border-2 border-dashed border-gray-300 h-40 text-gray-400">
                  Coming soon
                </div>
              )}
            </div>
          </motion.section>
        ))}

        <div className="mt-8 text-center">
          <p className="text-gray-700">
            Want a tailored concept for your event?
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-lg border border-green-700 text-green-800 hover:bg-green-50 px-5 py-2 font-semibold"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 px-5 py-2 font-semibold"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
