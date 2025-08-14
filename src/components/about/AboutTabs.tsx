"use client";

export type TabKey = "intro" | "product" | "founder";

export const TABS: { key: TabKey; label: string }[] = [
  { key: "intro", label: "NICTE" },
  { key: "product", label: "Product" },
  { key: "founder", label: "Founder" },
];

type Props = {
  current: TabKey;
  onChange: (key: TabKey) => void;
};

export default function AboutTabs({ current, onChange }: Props) {
  return (
    <div className="border-b border-gray-200">
      <div
        role="tablist"
        aria-label="About sections"
        className="flex justify-end gap-2"
      >
        {TABS.map(({ key, label }) => {
          const active = current === key;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={active}
              onClick={() => onChange(key)}
              className={[
                "px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors",
                "border border-transparent border-b-0",
                active
                  ? "text-green-800 bg-white border-x-gray-200 border-t-gray-200 -mb-px"
                  : "text-gray-500 hover:text-gray-700",
              ].join(" ")}
            >
              <span
                className={[
                  "block py-1",
                  active ? "bg-green-200 rounded-2xl" : "",
                ].join(" ")}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
