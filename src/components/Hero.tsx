"use client";

type HeroProps = {
  title: string;
  subtitle?: string;
  webmSrc: string;
  mp4Src?: string;
  poster?: string;
  className?: string; // height / width / layout classes
  overlayClassName?: string; // overlay positioning tweaks
};

export default function Hero({
  title,
  subtitle,
  webmSrc,
  mp4Src = "/videos/nicte-vid.mp4",
  poster = "/images/LogoTitle.jpg",
  className = "w-full h-[50dvh] md:h-[85dvh]",
  overlayClassName = "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
}: HeroProps) {
  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <video
        className="absolute left-1/2 top-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover block z-0"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="metadata"
      >
        <source src={webmSrc} type="video/webm" />
        {mp4Src ? <source src={mp4Src} type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>

      <div
        className={`absolute z-10 px-6 pointer-events-none text-center ${overlayClassName}`}
      >
        <div className="text-white drop-shadow-lg">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.85)]">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-xl md:text-3xl font-medium text-white drop-shadow-[0_1px_4px_rgba(0,0,0,.75)]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
