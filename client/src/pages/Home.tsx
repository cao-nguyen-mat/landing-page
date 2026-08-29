/*
 * CAO NGUYÊN MẬT — "Mùa Hoa Trắng" Editorial Journal theme
 * Main page: a literary visual journey through 8 chapters.
 * Paper-ivory bg, ink serif, honey-amber accents, Roman numeral watermarks,
 * slow reveal-on-scroll, chapter navigation rail.
 * Content rules: only real brand facts; pending data marked "CẦN BỔ SUNG".
 */
import { useEffect, useMemo, useState } from "react";
import { IMAGES, BRAND, TRANSPARENCY, CHAPTERS } from "@/lib/siteData";
import { useRevealAll } from "@/hooks/useReveal";
import { ChapterHeader, FlowerDivider, BlossomMark, Pending } from "@/components/editorial";
import JourneyTimeline from "@/components/JourneyTimeline";
import TransparencyTable from "@/components/TransparencyTable";

function useActiveChapter() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden paper-grain">
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroHighlandMorning}
          alt="Bình minh trên những vườn cà phê trắng hoa ở cao nguyên Đắk Lắk"
          className="reveal-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A24]/85 via-[#1D2A24]/35 to-[#1D2A24]/20" />
      </div>

      <div className="relative z-10 container pb-16 md:pb-24 pt-40">
        <div className="imprint mb-10">
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="" className="w-10 h-10 md:w-12 md:h-12" />
            <div>
              <p className="kicker !text-[#E8B966]">{BRAND.name}</p>
              <p className="font-label text-[0.68rem] tracking-[0.25em] uppercase text-[#F7F3EC]/70">
                {BRAND.origin}
              </p>
            </div>
          </div>
          <span className="ml-1 mt-2 h-px w-16 bg-[#E8B966]/50" aria-hidden />
        </div>

        <h1 className="display text-[#F7F3EC] font-semibold leading-[1.08] text-[2.6rem] md:text-[4.2rem] max-w-3xl">
          Một giọt mật{" "}
          <em className="text-[#E8B966]">bắt đầu từ đâu?</em>
        </h1>
        <p className="mt-6 max-w-xl text-[#F7F3EC]/85 text-base md:text-lg leading-relaxed">
          Nó không bắt đầu từ chiếc chai. Trước khi có mật, đã có một buổi sớm trên cao nguyên —
          khi những vườn cà phê bất chợt đổi màu, và cả vùng đất lặng đi để nghe hoa nở.
        </p>

        <div className="mt-10 flex items-center gap-6">
          <a
            href="#nguon-goc"
            className="inline-flex items-center gap-3 border border-[#E8B966]/60 text-[#E8B966] px-6 py-3 text-sm tracking-[0.2em] uppercase hover:bg-[#E8B966] hover:text-[#1D2A24] transition-colors duration-300"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Bắt đầu câu chuyện
          </a>
          <span className="honey-line h-12 hidden md:block" />
        </div>
      </div>

      <div className="absolute bottom-4 right-6 z-10 hidden md:block">
        <p className="font-label text-[0.62rem] tracking-[0.3em] uppercase text-[#F7F3EC]/40">
          Cuộn chậm — như một mùa hoa
        </p>
      </div>
    </section>
  );
}

function ChapterOne() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5 relative">
          <div className="photo-frame reveal-img rotate-[-1.2deg]">
            <img
              src={IMAGES.coffeeBlossomClose}
              alt="Hoa cà phê trắng năm cánh với nhị vàng"
              className="w-full object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
          <p className="mt-3 font-label text-[0.62rem] tracking-[0.25em] uppercase text-muted-foreground">
            Một buổi sớm, khi hoa vừa mở cánh
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ChapterHeader
            id="nguon-goc"
            numeral="I"
            kicker="Nguồn gốc"
            title="Một giọt mật bắt đầu từ đâu?"
            hook="Trước khi có mật, đã có một mùa hoa."
          />
          <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.9] max-w-xl">
            <p className="drop-cap reveal">
              Có những buổi sáng ở Đắk Lắk bắt đầu rất lặng. Sương còn vắt trên lá cà phê,
              đất đỏ chưa kịp ấm, và từ xa — nếu biết lắng nghe — hình như có một mùi hương
              rất nhẹ đang lan ra từ hàng cây. Không ồn ào. Không báo trước. Chỉ trong một buổi
              sớm, cả khu vườn dường như đã đổi khác.
            </p>
            <p className="reveal" data-delay="80">
              Đó là lúc mùa hoa cà phê đến. Những cánh trắng nhỏ xíu mở ra khắp các triền đồi,
              đính trên cành như những ngôi sao rơi xuống đất. Hương của chúng thanh và lạnh,
              phảng phất xa gần, như thể vùng đất vừa khẽ thở dài.
            </p>
            <p className="reveal" data-delay="140">
              Ong bắt đầu bay từ rất sớm. Những chuyến bay đầu tiên của ngày cắt ngang mặt trời
              mới lên, nối liền bông hoa này với bông hoa khác, khu vườn này với khu vườn kia.
              Hàng nghìn chuyến đi nhỏ, không ai đếm, không ai thấy — vậy mà chính chúng đang
              viết nên điều gì đó.
            </p>
            <p className="reveal" data-delay="200">
              Và đâu đó trong mùa hoa ấy, một giọt mật bắt đầu được hình thành.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

  function ChapterTwo() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FDFBF6] paper-grain">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <ChapterHeader
              id="mua-hoa-trang"
              numeral="II"
              kicker="Mùa hoa"
              title="Mùa hoa trắng"
              hook="Mùa hoa không ở lại lâu. Vì vậy nó quý."
            />
            <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.9] max-w-xl">
              <p className="drop-cap reveal">
                Mùa hoa cà phê ngắn đến mức gần như chỉ là một hơi thở. Có năm, cả vùng chỉ trắng
                trong dăm bảy ngày — nở xong, hoa rơi như tuyết mỏng, để lại những chấm xanh nhỏ
                trên cành. Ai sống gần vườn cà phê đều biết: mùa hoa không chờ ai.
              </p>
              <p className="reveal" data-delay="80">
                Nhưng chính sự ngắn ngủi ấy lại làm nên điều khác thường. Mỗi năm, cao nguyên
                một lần khoác lên mình màu trắng — trắng như thể ai đó rải phấn lên triền đồi,
                trắng đến mức ánh sáng buổi sớm dường như cũng dịu đi. Người ta nói ở Đắk Lắk,
                vào những ngày ấy, hương hoa đi theo cả con đường.
              </p>
              <p className="reveal" data-delay="140">
                Với đàn ong, mùa hoa trắng là bữa tiệc lớn nhất trong năm. Hàng triệu bông hoa
                năm cánh, mỗi bông một chút mật hoa, xếp thành một bản đồ hương thơm trải dài
                khắp các sườn đồi. Ong không cần ai chỉ đường — chúng đọc được bản đồ ấy bằng
                chính cơ thể mình.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-24">
            <div className="photo-frame reveal-img rotate-[1.5deg]">
              <img
                src={IMAGES.daklakLandscape}
                alt="Những đồi cà phê trên cao nguyên Đắk Lắk"
                className="w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 font-label text-[0.62rem] tracking-[0.25em] uppercase text-muted-foreground text-right">
              Những đồi cà phê trong mùa hoa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterThree() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4 order-2 md:order-1 md:pt-20">
          <div className="photo-frame reveal-img rotate-[-1deg]">
            <img
              src={IMAGES.beeOnBlossom}
              alt="Ong mật hút mật trên hoa cà phê trắng"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <p className="mt-3 font-label text-[0.62rem] tracking-[0.25em] uppercase text-muted-foreground">
            Một chuyến đi nhỏ trong hàng nghìn chuyến đi
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-6 order-1 md:order-2">
          <ChapterHeader
            id="nhung-nguoi-khach-nho"
            numeral="III"
            kicker="Đàn ong"
            title="Những người khách nhỏ của mùa hoa"
            hook="Trước khi có chai mật, đã có hàng nghìn chuyến bay nhỏ."
          />
          <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.9] max-w-xl">
            <p className="drop-cap reveal">
              Ong không làm mật một mình. Mỗi chú ong thợ trong một đời sống ngắn ngủi thực hiện
              hàng nghìn chuyến bay — từ tổ đến hoa, từ hoa về tổ. Mỗi chuyến đi mang về một
              giọt mật hoa bé đến mức mắt thường không thấy. Nhưng hàng nghìn chuyến đi cộng
              lại, thì thành một mùa.
            </p>
            <p className="reveal" data-delay="80">
              Trong tổ, những giọt mật hoa ấy được chuyền tay nhau — ong này trao cho ong kia,
              hết lớp này đến lớp khác, cho đến khi nước bay đi, mật đặc lại. Đó là cách một
              đàn ong làm việc: không ai được ghi công, không ai nghỉ giữa chừng, và cả tổ cùng
              chung một nhịp sống.
            </p>
            <p className="reveal" data-delay="140">
              Giọt mật ong hoa cà phê, vì thế, là tổng hòa của biết bao chuyến bay giữa mùa hoa
              trắng. Khi bạn nhìn thấy màu hổ phách trong chai, hãy nhớ rằng trước đó nó là
              màu trắng của những cánh hoa, và là tiếng vo ve của những chuyến đi không ai đếm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

  function ChapterFour() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F4F6F1] paper-grain">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6">
            <ChapterHeader
              id="con-nguoi"
              numeral="IV"
              kicker="Con người"
              title="Con người đứng bên cạnh thiên nhiên"
              hook="Thiên nhiên không vội. Người làm mật cũng vậy."
            />
            <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.9] max-w-xl">
              <p className="drop-cap reveal">
                Giữa mùa hoa và đàn ong, có những con người lặng lẽ đứng ở giữa. Họ không tạo ra
                mùa hoa, cũng không tạo ra con ong — họ học cách lắng nghe cả hai. Lắng nghe xem
                hoa đã nở đều chưa, thời tiết năm nay thế nào, đàn ong có đủ khỏe để đi xa.
              </p>
              <p className="reveal" data-delay="80">
                Việc của người làm mật, thật ra, phần lớn là việc chờ đợi. Chờ hoa, chờ ong,
                chờ mật chín. Có những điều không thểเร่ง: mùa hoa đến khi nó đến, mật đặc lại
                khi nó sẵn sàng. Kinh nghiệm về thời điểm ấy thường không nằm trong sách vở —
                nó nằm trong những vụ mùa đã qua, được truyền lại từ người trước sang người sau.
              </p>
              <p className="reveal" data-delay="140">
                [Người nuôi ong và câu chuyện của họ — <Pending />]
              </p>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-24">
            <div className="photo-frame reveal-img rotate-[1.2deg]">
              <img
                src={IMAGES.beekeeperHands}
                alt="Bàn tay người làm mật nâng khung cầu ong"
                className="w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 font-label text-[0.62rem] tracking-[0.25em] uppercase text-muted-foreground text-right">
              Chăm đàn ong như chăm một vụ mùa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useRevealAll<HTMLDivElement>();
  const pageRef = useRevealAll<HTMLDivElement>();
  const active = useActiveChapter();

  return (
    <div ref={pageRef} className="min-h-screen editorial-spine">
      <ChapterNav active={active} />
      <Hero />
      <ChapterOne />
      <ChapterTwo />
      <ChapterThree />
      <ChapterFour />
      <JourneyTimeline />
      <ChapterSix />
      <ChapterSeven />
      <TransparencySection />
      <SensorySection />
      <ChapterEight />
      <Footer />
    </div>
  );
}

function ChapterSix() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F6F1EA] paper-grain">
      <div className="container grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5 relative">
          <div className="photo-frame reveal-img rotate-[-1.2deg]">
            <img
              src={IMAGES.daklakLandscape}
              alt="Cao nguyên Đắk Lắk với những triền đồi cà phê và đất đỏ"
              className="w-full object-cover aspect-[16/10]"
              loading="lazy"
            />
          </div>
          <p className="mt-3 font-label text-[0.62rem] tracking-[0.25em] uppercase text-muted-foreground">
            Đất đỏ, nắng và những triền đồi
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ChapterHeader
            id="dak-lak"
            numeral="VI"
            kicker="Vùng đất"
            title="Đắk Lắk — nơi câu chuyện bắt đầu"
            hook="Đất này có mùa hoa. Và mùa hoa ấy có tên."
          />
          <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.9] max-w-xl">
            <p className="drop-cap reveal">
              Đắk Lắk là một vùng cao nguyên ở giữa Tây Nguyên, nơi đất đỏ bazan trải dài dưới
              những triền đồi và mùa khô kéo dài đến tận lúc hoa cà phê nở. Ở đây, cà phê không
              chỉ là cây trồng — nó là nhịp sống của cả vùng: mỗi năm một vụ hoa, mỗi vụ hoa
              một lần cả đất trời đổi màu.
            </p>
            <p className="reveal" data-delay="80">
              Mùa hoa đến sau những tháng khô, khi nắng vừa dịu và gió mang theo hơi đất.
              Những vườn cà phê phủ trắng trong mấy ngày ngắn ngủi — rồi hoa rụng, trái non
              hiện ra, và chu kỳ bắt đầu lại từ đầu. Cứ thế, năm này qua năm khác, cao nguyên
              giữ nhịp riêng của mình, không nhanh, không chậm.
            </p>
            <p className="reveal" data-delay="140">
              Với Cao Nguyên Mật, Đắk Lắk không chỉ là nơi sản xuất. Đó là quê hương của giọt mật —
              nơi mùa hoa, con ong và con người gặp nhau mỗi năm một lần, đúng hẹn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

  function ChapterSeven() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FBF4E7] paper-grain">
      <div className="container">
        <ChapterHeader
          id="giot-mat-trong-chai"
          numeral="VII"
          kicker="Sản phẩm"
          title="Giọt mật trong chai của bạn"
          hook="Hành trình ngược trở lại — từ cao nguyên về bàn tay bạn."
        />
        <div className="mt-14 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 md:col-start-1">
            <div className="photo-frame reveal-img rotate-[1deg]">
              <img
                src={IMAGES.honeyBottle}
                alt="Chai mật ong hoa cà phê Cao Nguyên Mật"
                className="w-full object-cover aspect-[3/4]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 font-label text-[0.62rem] tracking-[0.25em] uppercase text-muted-foreground">
              Chai mật và mùa hoa đặt cạnh nhau
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="reveal">
              <img src={IMAGES.logo} alt="" className="w-12 h-12 mb-5" />
              <p className="kicker mb-2">Cao Nguyên Mật · {BRAND.origin}</p>
              <h3 className="display text-4xl md:text-5xl font-semibold leading-tight">{BRAND.product}</h3>
              <p className="mt-2 font-label text-sm tracking-[0.25em] uppercase text-muted-foreground">
                {BRAND.productEn}
              </p>
              <p className="quote-serif mt-6 text-xl md:text-2xl text-honey">
                {BRAND.tagline}
              </p>
            </div>
            <div className="mt-8 space-y-4 text-[1.02rem] leading-[1.85] max-w-xl reveal" data-delay="100">
              <p>
                Những gì bạn cầm trên tay là phần còn lại của một mùa hoa: mật ong từ hoa cà phê,
                được thu hoạch và đóng chai tại Đắk Lắk. Khối lượng tịnh {BRAND.netWeight}.
              </p>
              <p>
                Thông tin chi tiết của từng lô — số lô, ngày sản xuất, hạn sử dụng, thành phần —
                được ghi trên nhãn và bảng minh bạch bên dưới. Chúng tôi chỉ công bố những gì có
                dữ liệu thực tế.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                <span><strong className="text-foreground">Nguồn gốc:</strong> Đắk Lắk, Việt Nam</span>
                <span><strong className="text-foreground">Khối lượng:</strong> {BRAND.netWeight}</span>
                <span><strong className="text-foreground">Số lô:</strong> <Pending>theo nhãn chai</Pending></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransparencySection() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <p className="kicker reveal mb-3">Product Transparency</p>
          <h2 className="display reveal text-3xl md:text-4xl font-semibold leading-tight" data-delay="60">
            Sự thật của giọt mật
          </h2>
          <p className="reveal mt-5 text-[1.02rem] leading-[1.85] text-muted-foreground" data-delay="100">
            Chúng tôi tin rằng một câu chuyện đẹp phải đi cùng những con số thật. Dưới đây là
            mọi thông tin chúng tôi có thể công khai về sản phẩm — và cả những thông tin đang
            chờ được bổ sung.
          </p>
        </div>
        <div className="mt-10 max-w-3xl specimen-plate reveal p-6 md:p-10">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <p className="font-label text-[0.68rem] tracking-[0.22em] uppercase text-honey">
              Hồ sơ sản phẩm — specimen plate
            </p>
            <span className="hidden sm:block font-label text-[0.62rem] tracking-[0.2em] uppercase text-muted-foreground">
              CNM · Đắk Lắk
            </span>
          </div>
          <TransparencyTable rows={TRANSPARENCY} />
          <div className="mt-8 pt-6 border-t border-dashed border-border">
            <p className="font-label text-[0.68rem] tracking-[0.22em] uppercase text-honey mb-2">
              Kiểm nghiệm sản phẩm
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kết quả kiểm nghiệm và chứng nhận chất lượng đang được hoàn thiện theo hồ sơ thực tế.
              Khi có kết quả, thông tin sẽ được cập nhật tại đây kèm liên kết xem COA.
              {" "}<Pending>Kết quả kiểm nghiệm cần bổ sung</Pending>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SensorySection() {
  const senses = [
    {
      key: "Nhìn",
      title: "Nhìn",
      body: "Mật ong hoa cà phê có màu hổ phách — từ vàng sáng đến nâu amber tùy theo vụ mùa. Rót chậm, bạn sẽ thấy nó đặc và trong, ánh lên như một mảnh chiều hôm.",
      pending: false,
    },
    {
      key: "Ngửi",
      title: "Ngửi",
      body: "Hương đặc trưng theo cảm quan thực tế của từng lô.",
      pending: true,
    },
    {
      key: "Nếm",
      title: "Nếm",
      body: "Độ ngọt, hậu vị và cảm giác trong miệng theo đánh giá cảm quan thực tế.",
      pending: true,
    },
  ];
  return (
    <section className="relative py-20 md:py-24 bg-[#FDFCF8] paper-grain">
      <div className="container">
        <div className="max-w-3xl">
          <p className="kicker reveal mb-3">Góc nhìn của người thưởng thức</p>
          <h2 className="display reveal text-3xl md:text-4xl font-semibold leading-tight" data-delay="60">
            Trước khi nếm, hãy quan sát
          </h2>
          <p className="reveal mt-5 text-[1.02rem] leading-[1.85] text-muted-foreground" data-delay="100">
            Một thìa mật cũng là một trang của câu chuyện. Hãy dành một phút để nhìn, ngửi, rồi
            nếm — như cách người ta mở một cuốn sách.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {senses.map((s, i) => (
            <div key={s.key} className="reveal" data-delay={String(i * 90)}>
              <div className="border-t border-honey/40 pt-5">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="display text-3xl font-semibold text-honey">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display text-2xl font-semibold">{s.title}</h3>
                </div>
                {s.pending ? (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.body} <Pending>Thông tin cảm quan cần xác nhận</Pending>
                  </p>
                ) : (
                  <p className="text-[1rem] leading-[1.85]">{s.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterEight() {
  return (
    <section className="relative py-24 md:py-36 bg-[#1D2A24] text-[#F7F3EC] overflow-hidden">
      <div className="container grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <p className="kicker !text-[#E8B966] reveal mb-4">Chương VIII — Kết</p>
          <h2 className="display reveal text-[2.2rem] md:text-5xl font-semibold leading-[1.12]" data-delay="60">
            Mang một phần cao nguyên về nhà
          </h2>
          <div className="mt-8 space-y-6 text-[1.05rem] leading-[1.9] text-[#F7F3EC]/80 max-w-xl">
            <p className="reveal" data-delay="120">
              Khoảnh khắc bạn mở nắp chai, điều xảy ra thật ra lớn hơn một chút so với vẻ ngoài
              của nó. Một thìa mật được rót ra — nhưng cùng lúc đó, một mùa hoa trắng cũng vừa
              được mở ra.
            </p>
            <p className="reveal" data-delay="180">
              Trong vị ngọt ấy có buổi sớm trên cao nguyên, có những vườn cà phê trắng hoa,
              có chuyến bay của đàn ong qua ánh nắng, có sự chờ đợi của con người, và có ký ức
              của một vùng đất tên Đắk Lắk.
            </p>
            <p className="quote-serif reveal text-2xl md:text-3xl text-[#E8B966]" data-delay="240">
              Mật từ mùa hoa cà phê trắng.
            </p>
          </div>
          <div className="reveal imprint mt-10" data-delay="300">
            <div className="flex items-center gap-4">
              <img src={IMAGES.logo} alt="" className="w-12 h-12" />
              <div>
                <p className="font-semibold tracking-[0.16em] text-base" style={{ fontFamily: "var(--font-label)" }}>
                  {BRAND.name}
                </p>
                <p className="font-label text-[0.62rem] tracking-[0.28em] uppercase text-[#F7F3EC]/55 mt-1">
                  {BRAND.origin}
                </p>
              </div>
            </div>
            <span className="ml-1 mt-2 h-px w-20 bg-[#E8B966]/50" aria-hidden />
            <p className="mt-3 font-label text-[0.62rem] tracking-[0.22em] uppercase text-[#F7F3EC]/40">
              {BRAND.productEn}
            </p>
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <div className="reveal-img rotate-[1deg] bg-[#2A3A32] p-3">
            <img
              src={IMAGES.tastingMoment}
              alt="Khoảnh khắc thưởng thức một thìa mật bên cửa sổ"
              className="w-full object-cover aspect-[4/5]"
              loading="lazy"
            />
          </div>
          <p className="mt-3 font-label text-[0.62rem] tracking-[0.25em] uppercase text-[#F7F3EC]/45 text-right">
            Một buổi chiều, một thìa mật
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 bg-[#16211C] text-[#F7F3EC]/70">
      <div className="container flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={IMAGES.logo} alt="" className="w-9 h-9" />
            <span className="font-semibold tracking-[0.14em] text-sm text-[#F7F3EC]" style={{ fontFamily: "var(--font-label)" }}>
              {BRAND.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            {BRAND.address}
            <br />
            Điện thoại: {BRAND.phones.join(" — ")}
          </p>
        </div>
        <div className="text-right">
          <p className="quote-serif text-lg text-[#E8B966]">{BRAND.tagline}</p>
          <p className="font-label text-[0.62rem] tracking-[0.25em] uppercase mt-2 text-[#F7F3EC]/40">
            Đắk Lắk · Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Chapter navigation rail — desktop left, mobile top bar. */
function ChapterNav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = useMemo(
    () =>
      CHAPTERS.map((c, i) => ({
        ...c,
        n: String(i + 1).padStart(2, "0"),
      })),
    [],
  );

  return (
    <>
      {/* Desktop left rail */}
      <nav
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-5"
        aria-label="Mục lục chương"
      >
        {items.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group flex items-center gap-3"
            title={c.title}
          >
            <span
              className={`honey-line h-8 transition-all duration-300 ${
                active === c.id ? "opacity-100" : "opacity-30 group-hover:opacity-70"
              }`}
            />
            <span
              className={`font-label text-[0.6rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                active === c.id ? "text-honey" : "text-muted-foreground"
              }`}
            >
              {c.n}
            </span>
          </a>
        ))}
      </nav>

      {/* Mobile top bar */}
      <header
        className={`lg:hidden fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#1D2A24]/92 backdrop-blur-md shadow-sm" : "bg-gradient-to-b from-black/55 to-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <img src={IMAGES.logo} alt="" className="w-6 h-6" />
            <span className="font-semibold tracking-[0.14em] text-[0.7rem] text-[#F7F3EC]">
              {BRAND.name}
            </span>
          </a>
          <a
            href="#nguon-goc"
            className="font-label text-[0.6rem] tracking-[0.22em] uppercase text-[#E8B966] border border-[#E8B966]/50 px-3 py-1.5"
          >
            Đọc câu chuyện
          </a>
        </div>
      </header>
    </>
  );
}
