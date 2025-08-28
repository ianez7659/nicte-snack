import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/product" },
  { name: "FAQ", href: "/faq" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#597e53] text-white mt-16">
      {/* Top */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3 items-start">
        {/* Brand / blurb */}
        <div>
          <h2 className="text-lg font-semibold tracking-wide">NICTE</h2>
          <p className="mt-3 text-sm leading-relaxed/6 opacity-90">
            Superfood alegria bites inspired by Mesoamerican heritage.
          </p>
          <p className="mt-4 text-xs opacity-80">
            © {year} • by Ian Hyun Kyu Lee
          </p>
        </div>

        {/* Navigate */}
        <nav aria-label="Footer navigation" className="md:justify-self-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div className="md:justify-self-end">
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">
            Connect
          </h3>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/nictesnacksca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              title="Instagram"
            >
              {/* Instagram icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href="mailto:nictesnacks@gmail.com"
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              title="Email"
            >
              {/* Email icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
