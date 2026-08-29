/*
 * CAO NGUYÊN MẬT — "Mùa Hoa Trắng" Editorial Journal theme
 * Shared editorial building blocks: chapter header with Roman numeral watermark,
 * five-petal coffee blossom divider (SVG line-art), pending-data placeholder.
 * Signature motifs: honey vertical line, large serif quotes, Jost kickers.
 */
import { ReactNode } from "react";

/** Five-petal coffee blossom line-art, brand honey amber. */
export function BlossomMark({ className = "w-8 h-8", stroke = "var(--honey)" }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="13"
          rx="9.5"
          ry="15"
          transform={`rotate(${deg} 32 32)`}
          stroke={stroke}
          strokeWidth="1.4"
        />
      ))}
      <circle cx="32" cy="32" r="5" stroke={stroke} strokeWidth="1.4" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 32 + 5 * Math.cos(rad);
        const y1 = 32 + 5 * Math.sin(rad);
        const x2 = 32 + 9 * Math.cos(rad);
        const y2 = 32 + 9 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="1.4" />;
      })}
    </svg>
  );
}

/** Horizontal divider: small blossom flanked by hairlines. */
export function FlowerDivider({ tone = "light" }: { tone?: "light" | "dark" }) {
  const line = tone === "dark" ? "rgba(247,243,236,0.25)" : "color-mix(in oklch, var(--honey) 45%, transparent)";
  const stroke = tone === "dark" ? "#E8B966" : "var(--honey)";
  return (
    <div className="flex items-center gap-4 my-10" aria-hidden>
      <span className="honey-line flex-1" style={{ background: `linear-gradient(to right, transparent, ${line})` }} />
      <BlossomMark className="w-7 h-7 shrink-0" stroke={stroke} />
      <span className="honey-line flex-1" style={{ background: `linear-gradient(to left, transparent, ${line})` }} />
    </div>
  );
}

/** Chapter opener: kicker "CHƯƠNG IV", Roman watermark numeral, serif headline. */
export function ChapterHeader({
  numeral,
  kicker,
  title,
  hook,
  id,
  tone = "light",
}: {
  numeral: string;
  kicker: string;
  title: string;
  hook: string;
  id?: string;
  tone?: "light" | "dark";
}) {
  const sub = tone === "dark" ? "text-[#F7F3EC]/60" : "text-muted-foreground";
  return (
    <header id={id} className="relative pt-24 md:pt-32 scroll-mt-20">
      <span
        className="chapter-numeral absolute -top-4 right-0 text-[7rem] md:text-[11rem] hidden md:block"
        aria-hidden
      >
        {numeral}
      </span>
      <div className="chapter-rule reveal mb-4">
        <BlossomMark className="w-5 h-5 shrink-0" />
        <p className="kicker">Chương {numeral} — {kicker}</p>
      </div>
      <h2
        className={`display reveal font-semibold tracking-tight text-[2.2rem] leading-[1.15] md:text-6xl ${
          tone === "dark" ? "text-[#F7F3EC]" : ""
        }`}
        data-delay="60"
      >
        {title}
      </h2>
      <div className="mt-6 max-w-xl">
        <p className={`quote-serif text-lg md:text-xl leading-relaxed ${sub}`}>{hook}</p>
      </div>
    </header>
  );
}

/** Placeholder for data the brand still needs to confirm. Honest, quiet. */
export function Pending({ children = "Thông tin cần bổ sung" }: { children?: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-earth/80"
      title="Thông tin này đang chờ được bổ sung từ dữ liệu thực tế của thương hiệu"
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-earth/60 align-middle" />
      {children}
    </span>
  );
}
