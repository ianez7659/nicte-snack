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
    img: "/images/hat.webp", // TODO: replace
    alt: "Flavours",
    title: "Flavours",
    subtitle: "Cacao, Vanilla, Mix",
  },
  {
    href: "/product#flavours",
    img: "/images/flavors-options-light.svg", // TODO: replace
    alt: "Flavours Options",
    title: "Flavours",
    subtitle: "Explore all options",
  },
  {
    href: "/product#shapes-price",
    img: "/images/flyer-light.svg", // TODO: replace
    alt: "Shapes",
    title: "Shapes & Price",
    subtitle: "Classic, Heart, Bar",
  },
  {
    href: "/product#shapes-price",
    img: "/images/hearts.webp", // TODO: replace
    alt: "Shapes & Price",
    title: "Shapes & Price",
    subtitle: "Tiered pricing available",
  },
  {
    href: "/product#shapes-price",
    img: "/images/background.jpg", // TODO: replace
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
    question: "Do you offer bulk or event orders?",
    answer: (
      <>
        Yes—bulk quantities and custom shapes for events are available. Get in
        touch for quotes and lead times.
      </>
    ),
  },
  {
    question: "Where do you ship?",
    answer: (
      <>
        Currently within Canada; international shipping may be possible on
        request.
      </>
    ),
  },
];

export default function Home() {
  return (
    <section className="md:pt-10 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <Hero
        title="Eat Healthy, Stay Healthy"
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
