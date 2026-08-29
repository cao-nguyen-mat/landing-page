/*
 * CAO NGUYÊN MẬT — "Mùa Hoa Trắng" Editorial Journal theme
 * Chương V: "Từ hoa đến mật" — a slow vertical timeline of the honey's journey.
 * Honey vertical line motif, serif step titles, documentary photo anchors.
 */
import { IMAGES } from "@/lib/siteData";
import { useRevealAll } from "@/hooks/useReveal";
import { BlossomMark } from "@/components/editorial";

const STEPS = [
  {
    n: "01",
    title: "Hoa",
    body: "Mùa hoa cà phê nở trắng khắp các triền đồi. Mỗi bông hoa năm cánh mở ra một chút mật hoa — khởi đầu của mọi điều.",
    img: IMAGES.coffeeBlossomClose,
    alt: "Hoa cà phê trắng năm cánh",
    rotate: "rotate-[-1.5deg]",
  },
  {
    n: "02",
    title: "Ong",
    body: "Đàn ong bay giữa những bông hoa, mang mật hoa về tổ. Hàng nghìn chuyến đi nhỏ, không ai đếm, không ai thấy.",
    img: IMAGES.beeOnBlossom,
    alt: "Ong mật trên hoa cà phê",
    rotate: "rotate-[1.5deg]",
  },
  {
    n: "03",
    title: "Mật",
    body: "Trong tổ, những giọt mật hoa được chuyền từ ong này sang ong kia cho đến khi đặc lại. Thời gian làm phần việc của thời gian.",
    img: IMAGES.harvestFrame,
    alt: "Khung cầu ong chứa mật",
    rotate: "rotate-[-1deg]",
  },
  {
    n: "04",
    title: "Thu hoạch & đóng chai",
    body: "Mật được thu hoạch và đóng chai tại Đắk Lắk, theo từng lô. Con người chỉ làm điều họ biết rõ — phần còn lại交给 thiên nhiên.",
    img: IMAGES.honeyPour,
    alt: "Mật ong hổ phách được rót chậm rãi",
    rotate: "rotate-[1.2deg]",
  },
  {
    n: "05",
    title: "Đến tay bạn",
    body: "Chai mật về tới bàn tay bạn — cùng với đó là một mùa hoa, một vùng đất, và một chu kỳ thời gian trọn vẹn.",
    img: IMAGES.tastingMoment,
    alt: "Khoảnh khắc thưởng thức mật ong",
    rotate: "rotate-[-1.2deg]",
  },
];

export default function JourneyTimeline() {
  const ref = useRevealAll<HTMLDivElement>();

  return (
    <section className="relative py-20 md:py-28 bg-[#F7F3EC]" aria-label="Chương V — Từ hoa đến mật">
      <div ref={ref} className="container">
        <header id="tu-hoa-den-mat" className="relative scroll-mt-20">
          <span className="chapter-numeral absolute -top-4 right-0 text-[7rem] md:text-[11rem] hidden md:block" aria-hidden>
            V
          </span>
          <div className="chapter-rule reveal mb-4">
            <BlossomMark className="w-5 h-5 shrink-0" />
            <p className="kicker">Chương V — Hành trình</p>
          </div>
          <h2 className="display reveal font-semibold tracking-tight text-[2.2rem] leading-[1.15] md:text-6xl" data-delay="60">
            Từ hoa đến mật
          </h2>
          <p className="quote-serif reveal mt-6 text-lg md:text-xl text-muted-foreground max-w-xl" data-delay="120">
            Một giọt mật đi qua bao nhiêu bàn tay — kể cả những bàn tay không phải của người?
          </p>
        </header>

        <div className="relative mt-16 md:mt-20">
          {/* The honey line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-honey/50 to-transparent" aria-hidden />

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`relative md:grid md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "" : ""}`}>
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 z-10">
                  <BlossomMark className="w-6 h-6 bg-[#F7F3EC]" stroke="var(--honey)" />
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-20 md:text-right" : "md:col-start-2 md:pl-20"}`}>
                  <div className="reveal">
                    <p className="font-label text-[0.65rem] tracking-[0.28em] uppercase text-honey mb-2">
                      Bước {s.n}
                    </p>
                    <h3 className="display text-2xl md:text-3xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-[1.02rem] leading-[1.85] text-foreground/85 max-w-md mx-auto md:mx-0 md:[margin-inline-start:auto]">
                      {s.body}
                    </p>
                  </div>
                  <div className={`mt-6 photo-frame reveal-img w-full max-w-sm mx-auto md:mx-0 ${s.rotate} ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <img src={s.img} alt={s.alt} className="w-full object-cover aspect-[4/3]" loading="lazy" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
