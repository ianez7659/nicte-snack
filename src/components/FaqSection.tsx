"use client";

import Link from "next/link";
import { useId } from "react";

export type FaqItem = {
  question: string;
  answer: React.ReactNode; // allows inline <Link> etc.
};

type FaqSectionProps = {
  id?: string;
  title?: string;
  items: FaqItem[];
  containerClassName?: string; // outer width/spacing
  listClassName?: string; // list wrapper classes
  ctaHref?: string;
  ctaLabel?: string;
};

export default function FaqSection({
  id = "faq",
  title = "FAQ",
  items,
  containerClassName = "w-full max-w-8xl px-4 py-16",
  listClassName = "mx-auto max-w-3xl space-y-4",
  ctaHref = "/faq",
  ctaLabel = "See full FAQ",
}: FaqSectionProps) {
  const uid = useId();

  return (
    <section id={id} className={containerClassName}>
      <h3 className="text-2xl md:text-4xl text-green-700 font-bold tracking-tight text-center mb-8">
        {title}
      </h3>

      <div className={listClassName}>
        {items.map((it, i) => {
          const panelId = `${uid}-panel-${i}`;
          return (
            <details
              key={panelId}
              className="group rounded-xl border p-4 open:bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-2 list-none">
                <span className="font-semibold">{it.question}</span>
                <svg
                  className="h-5 w-5 text-gray-500 transition group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.8.4l5 6a1 1 0 01-1.6 1.2L10 5.25 5.8 10.6a1 1 0 01-1.6-1.2l5-6A1 1 0 0110 3z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div id={panelId} className="mt-2 text-sm text-gray-700">
                {it.answer}
              </div>
            </details>
          );
        })}
      </div>

      {ctaHref ? (
        <div className="text-center mt-8">
          <Link
            href={ctaHref}
            className="inline-flex items-center bg-green-700 text-white justify-center rounded-full px-6 py-3 text-sm font-semibold hover:bg-green-800"
          >
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </section>
  );
}
