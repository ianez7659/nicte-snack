"use client";

import "swiper/css/effect-fade";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "@/components/Hero";
import AboutHome from "@/components/AboutHome";
import ProductSection from "@/components/ProductSection";
import FaqSection, { FaqItem } from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

const PRODUCT_SLIDES = [
  {
    href: "/product#flavours",
    img: "/images/nice-mango.webp",
    alt: "Flavours",
    title: "Flavours",
    subtitle: "Cacao, Vanilla, Mix",
  },
  {
    href: "/product#flavours",
    img: "/images/nicte-choco.webp",
    alt: "Flavours Options",
    title: "Flavours",
    subtitle: "Explore all options",
  },
  {
    href: "/product#shapes-price",
    img: "/images/nicte-matcha.webp",
    alt: "Shapes",
    title: "Shapes & Price",
    subtitle: "Classic, Heart, Bar",
  },

  {
    href: "/product#shapes-price",
    img: "/images/flowers.webp",
    alt: "Gift & Events",
    title: "Gift & Events",
    subtitle: "Bulk & custom orders",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does pricing work?",
    answer: (
      <>
        We use tiered pricing by quantity. See details on the Product page.
        <Link
          href="/product#shapes-price"
          className="ml-1 underline underline-offset-4"
        >
          View pricing →
        </Link>
      </>
    ),
  },
  {
    question: "What are the health benefits of amaranth?",
    answer: (
      <>
        Amaranth is a nutrient-rich pseudo-cereal packed with high-quality
        protein, essential minerals, and antioxidants. It is naturally
        gluten-free and supports overall health, digestion, and bone strength.
        <Link href="/about" className="ml-1 underline underline-offset-4">
          Read more →
        </Link>
      </>
    ),
  },
  {
    question: "Are there any upcoming promotion events?",
    answer: (
      <>
        We are currently preparing a promotion event. Please stay tuned for
        future announcements.
        <Link href="/faq" className="ml-1 underline underline-offset-4">
          View FAQ →
        </Link>
      </>
    ),
  },
];

export default function Home() {
  return (
    <section className="md:pt-10 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <Hero
        title="Healthy, Crunchy, Delicious."
        subtitle="Five Superfood Seeds in One Bite!"
        webmSrc="/videos/nicte-land.webm"
        mp4Src="/videos/nicte-vid.mp4"
      />

      {/* About (homepage) */}
      <AboutHome />

      {/* Product teaser (replace your previous Product CTA block with this) */}
      <ProductSection slides={PRODUCT_SLIDES} />

      {/* FAQ (teaser on Home) */}
      <FaqSection items={FAQ_ITEMS} />

      {/* Contact (standalone band) */}
      <ContactSection />
    </section>
  );
}
