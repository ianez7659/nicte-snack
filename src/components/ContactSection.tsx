import Image from "next/image";
import Link from "next/link";

type ContactTeaserProps = {
  id?: string;
  title?: string;
  description?: string;
  bullets?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  bandClassName?: string; // outer <section> classes (band/background)
  containerClassName?: string; // inner width/spacing classes
  reverseOnDesktop?: boolean; // image first on desktop (md:order-2)
};

export default function ContactTeaser({
  id = "contact-teaser",
  title = "Get in touch",
  description = "Questions, bulk orders, or event collaborations? We’re happy to help.",
  bullets = [
    "Bulk & custom event orders",
    "Ingredients & allergens",
    "Wholesale & partnerships",
  ],
  ctaHref = "/contact",
  ctaLabel = "Contact Us",
  imageSrc = "/images/Spoons-circle-light.svg",
  imageAlt = "Contact NICTE",
  bandClassName = "w-full bg-neutral-50",
  containerClassName = "max-w-8xl mx-auto px-4 py-16",
  reverseOnDesktop = true,
}: ContactTeaserProps) {
  const imageOrder = reverseOnDesktop ? "md:order-2" : "";

  return (
    <section id={id} className={bandClassName}>
      <div className={containerClassName}>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${imageOrder}`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 40vw, 100vw"
              priority={false}
            />
          </div>

          {/* Copy */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#597e53]">
              {title}
            </h3>
            <p className="mt-3 text-base md:text-lg text-gray-700">
              {description}
            </p>

            {bullets?.length ? (
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span>•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {ctaHref ? (
              <div className="mt-6">
                <Link
                  href={ctaHref}
                  aria-label="Go to Contact page"
                  className="inline-flex items-center justify-center rounded-full bg-[#597e53] px-6 py-3 text-white font-semibold hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                >
                  {ctaLabel}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
