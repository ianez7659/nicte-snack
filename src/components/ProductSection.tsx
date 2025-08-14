"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type ProductSlide = {
  href: string;
  img: string;
  alt: string;
  title?: string;
  subtitle?: string;
};

type ProductSectionProps = {
  id?: string;
  title?: string;
  slides: ProductSlide[];
  containerClassName?: string; // outer spacing/width classes
  swiperClassName?: string; // class on Swiper (e.g. for theming)
  paginationClassName?: string; // external pagination target (unique per instance if multiple)
  speed?: number;
  loop?: boolean;
};

export default function ProductSection({
  id = "products",
  title = "Our Products",
  slides,
  containerClassName = "w-full max-w-6xl px-4 md:px-0 py-16",
  swiperClassName = "w-full overflow-hidden products-swiper",
  paginationClassName = "products-pagination",
  speed = 700,
  loop = true,
}: ProductSectionProps) {
  return (
    <section id={id} className={containerClassName}>
      <h2 className="text-center text-3xl md:text-4xl text-green-700 font-bold py-6 tracking-tight">
        {title}
      </h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ el: `.${paginationClassName}`, clickable: true }}
        loop={loop}
        speed={speed}
        roundLengths
        slidesPerView={1}
        spaceBetween={8}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className={swiperClassName}
      >
        {slides.map((p) => (
          <SwiperSlide key={p.img}>
            <Link
              href={p.href}
              aria-label={`Go to ${p.title ?? "product"}`}
              className="group block relative overflow-hidden rounded-2xl shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 45vw, 90vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                {p.title || p.subtitle ? (
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    {/* uncomment if you want captions visible */}
                    {/* <h4 className="text-white text-xl md:text-2xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,.7)]">
                      {p.title}
                    </h4>
                    {p.subtitle ? (
                      <p className="mt-1 text-white/90 text-sm">{p.subtitle}</p>
                    ) : null} */}
                  </div>
                ) : null}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* external pagination container (below images) */}
      <div
        className={`${paginationClassName} !static mt-6 flex justify-center`}
      />
    </section>
  );
}
