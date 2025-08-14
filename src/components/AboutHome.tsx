import Image from "next/image";
import Link from "next/link";

type AboutHomeProps = {
  id?: string;
  title?: string;
  description?: string;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  aboutHref?: string;
  ingredientsHref?: string;
  containerClassName?: string;
  hideImageOnMobile?: boolean; // true: hide on <md (matches your current behavior)
};

export default function AboutHome({
  id = "about",
  title = "About NICTE",
  description = "We craft alegria bites inspired by Mesoamerican heritage — balancing taste, nutrition, and everyday joy.",
  bullets = [
    "Rooted in amaranth traditions and mindful sourcing.",
    "Five superfood seeds in a clean, satisfying bite.",
    "Hand-finished shapes for gifts, events, and daily snacks.",
  ],
  imageSrc = "/images/flyer-light.svg",
  imageAlt = "About NICTE",
  aboutHref = "/about",
  ingredientsHref = "/ingredients",
  containerClassName = "w-full max-w-6xl px-4 py-2 md:py-16",
  hideImageOnMobile = true,
}: AboutHomeProps) {
  const imageVisibility = hideImageOnMobile ? "hidden md:block" : "";

  return (
    <section id={id} className={containerClassName}>
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Left: image */}
        <div
          className={`relative aspect-[5/6] overflow-hidden rounded-2xl ${imageVisibility}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(min-width:1024px) 50vw, 100vw"
            priority={false}
          />
        </div>

        {/* Right: copy */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-green-700">
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

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={aboutHref}
              aria-label="Go to About page"
              className="inline-flex items-center justify-center rounded-full bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              Learn more
            </Link>
            <Link
              href={ingredientsHref}
              aria-label="Go to Ingredients page"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-semibold hover:bg-gray-50"
            >
              Ingredients
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
