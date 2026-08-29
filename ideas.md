# CAO NGUYÊN MẬT — Ý tưởng thiết kế website "Khám Phá Câu Chuyện Của Giọt Mật"

## Ba hướng tiếp cận phong cách

### 1. "Mùa Hoa Trắng" — Editorial Journal
Phong cách tạp chí văn chương in ấn (literate magazine): giấy ngà, serif cổ điển, khoảng trắng rộng rãi, chương như những trang sách. Cảm giác: đọc một cuốn sách nhỏ về một mùa hoa.
Probability: 0.07

### 2. "Đất Đỏ Basalt" — Documentary Raw
Thô mộc như phóng sự ảnh tư liệu: nền đất nâu sẫm, ảnh toàn màn hình, chữ trắng, chất liệu grain và đất. Cảm giác: xem một bộ phim tài liệu ngắn.
Probability: 0.03

### 3. "Mật Hổ Phách" — Dark Amber Luxe
Tông vàng hổ phách trên nền gần đen, sang trọng như chai mật đặt trong ánh nến. Cảm giác: sản phẩm cao cấp, ấm áp.
Probability: 0.05

## HƯỚNG ĐƯỢC CHỌN: "Mùa Hoa Trắng" — Editorial Journal

### Design Movement
Literary editorial design — giao thoa giữa sách in thủ công Việt Nam và tạp chí văn chương (Kinfolk, Cereal Magazine, tạp chí văn học). Phong cách "slow reading": thiết kế phục vụ việc đọc chậm, thưởng thức.

### Core Principles
1. **Trang như giấy** — nền màu giấy ngà ấm (không trắng tinh), chữ như mực in, có cảm giác in ấn.
2. **Chương như hồi sách** — mỗi chương là một "hồi" được đánh số La Mã kiểu cổ điển, có drop cap và trích dẫn lớn.
3. **Chậm rãi** — nhịp cuộn chậm, khoảng trắng nhiều, không vội vã; người đọc "đi qua một mùa hoa".
4. **Hành trình màu sắc** — visual journey theo brief: TRẮNG (hoa) → XANH (cao nguyên) → NÂU (đất) → VÀNG HỔ PHÁCH (mật) → XANH ĐẬM (thương hiệu).

### Color Philosophy
Bảng màu được rút ra từ chính câu chuyện — mỗi màu là một mốc trong hành trình của giọt mật:
- Nền giấy ngà: `#F7F3EC` (warm ivory) — như trang sách
- Mực in: `#2B2720` (gần đen ấm)
- Trắng hoa cà phê: `#FDFCF8` + viền lá xanh nhạt `#8A9A7B`
- Xanh cao nguyên: `#3E5A45` (rêu thẫm)
- Nâu đất đỏ: `#7A4A2B` (basalt đỏ)
- Vàng hổ phách (signature): `#C8862B` — màu mật ong, dùng cho điểm nhấn, đường kẻ, trích dẫn
- Xanh đêm thẫm (kết): `#1D2A24` — nền phần kết + thương hiệu

### Layout Paradigm
- KHÔNG centered stack thông thường. Layout như trang sách so le (asymmetric): cột chữ lệch trái/phải xen kẽ, ảnh tràn màn hình xen ảnh in khung giấy (framed, như ảnh dán trong journal).
- Thanh chương dọc cố định (progress + mục lục nhỏ) bên lề trên desktop; mobile thành thanh ngang mờ trên đầu.
- Mỗi chương mở đầu bằng một "kicker" (CHƯƠNG I — MÙA HOA TRẮNG) nhỏ, viết hoa, letter-spacing rộng.
- Drop cap ở đoạn mở đầu mỗi chương.

### Signature Elements
1. **Đường kẻ mật** — một đường kẻ dọc mảnh màu hổ phách chạy dọc theo lề, như dòng mật chảy, xuyên suốt trang.
2. **Chương số La Mã** — I, II, III… in lớn mờ làm watermark (watermark typography).
3. **Dấu hoa cà phê** — motif hoa cà phê 5 cánh tối giản (SVG line-art) xuất hiện ở phân tách chương và favicon/logo.

### Interaction Philosophy
Tương tác như lật trang: cuộn là hành động chính, mọi thứ khác tối giản. Hover nhẹ như chạm giấy. Không hiệu ứng phô trương. Progress bar mảnh màu hổ phách. Liên kết mục lục cuộn mượt về chương.

### Animation
- Reveal khi cuộn: chữ fade-up nhẹ (12px, 600ms, ease-out) từng đoạn, stagger 60ms.
- Ảnh: fade + scale rất nhẹ (1.02 → 1), như ảnh hiện ra trong trang.
- Watermark số chương: fade chậm hơn.
- Tất cả tôn trọng `prefers-reduced-motion`.
- Không animation nào > 700ms; không parallax mạnh.

### Typography System
- Display/Headline: **Cormorant Garamond** (600/700, italic cho trích dẫn) — serif văn chương, thanh mảnh, có hồn.
- Body: **Noto Serif Display** (400/500) cho đoạn văn — vẫn serif để giữ chất văn, dễ đọc trên mobile.
- Kicker/label/UI: **Jost** (500, letter-spacing 0.2em) — sans thanh mảnh cho nhãn, mục lục, meta.
- Hierarchy: kicker (12px, tracking rộng) → headline chương (clamp 2.5–4.5rem serif italic khi cần) → body (17–19px, line-height 1.8) → trích dẫn lớn (serif italic 1.6–2rem màu hổ phách).

### Brand Essence
Cao Nguyên Mật — mật ong hoa cà phê từ Đắk Lắk, dành cho người muốn nếm một vùng đất chứ không chỉ một vị ngọt. Khác biệt: kể câu chuyện thay vì rao hàng.
Personality: chân thành, tĩnh lặng, tự hào ngầm.

### Brand Voice
Trầm, giàu hình ảnh, "show don't tell", trưởng thành. Không sáo rỗng.
- Ví dụ 1: "Trước khi có mật, đã có một mùa hoa."
- Ví dụ 2: "Mở nắp chai là mở ra một buổi sáng trên cao nguyên."

### Wordmark & Logo
Wordmark "CAO NGUYÊN MẬT" set bằng Cormorant Garamond tracking rộng, hai dòng nhỏ "ĐẮK LẮK · VIỆT NAM" bên dưới. Logo mark: bông hoa cà phê 5 cánh line-art màu hổ phách (không chữ), nền trong suốt.

### Signature Brand Color
Vàng hổ phách mật ong `#C8862B` — màu của giọt mật, dùng làm điểm nhấn nhất quán.

## Cấu trúc trang (theo brief)
1. HERO — full-screen, câu hỏi "Một giọt mật bắt đầu từ đâu?"
2. Chương I — Một giọt mật bắt đầu từ đâu?
3. Chương II — Mùa hoa trắng
4. Chương III — Những người khách nhỏ của mùa hoa
5. Chương IV — Con người đứng bên cạnh thiên nhiên
6. Chương V — Từ hoa đến mật (timeline hành trình)
7. Chương VI — Đắk Lắk, nơi câu chuyện bắt đầu
8. Chương VII — Giọt mật trong chai của bạn (nhãn sản phẩm + transparency)
9. Product Transparency (bảng dữ liệu thực)
10. Góc nhìn người thưởng thức (Nhìn / Ngửi / Nếm)
11. Chương VIII — Mang một phần cao nguyên về nhà (kết, nền xanh đêm)
12. Footer — liên hệ: Quốc Lộ 27, Xã Dray Bhăng, Đắk Lắk · 0949743486 – 0911888854

## Nguyên tắc nội dung
- Chân thật tuyệt đối: chỉ dùng dữ liệu brief cung cấp (địa chỉ, SĐT, khối lượng 1000ml, Đắk Lắk, hoa cà phê). Các mục chưa có dữ liệu (LOT, MFG, EXP, thành phần chi tiết, kiểm nghiệm, cảm quan) đánh dấu [THÔNG TIN CẦN BỔ SUNG] bằng UI placeholder tinh tế.
- Tránh các cụm từ bị cấm ("tinh hoa đất trời", "100% tự nhiên" kiểu khẩu hiệu...).
- Đoạn văn ngắn, hook mỗi chương, khoảng trắng nhiều, mobile-first (người đọc từ QR trên chai).
- Meta: title + description tiếng Việt cho SEO.

## Style Decisions

- Đường kẻ mật hổ phách `#C8862B` phải xuất hiện như một "sống sách" biên tập liên tục: chạy dọc lề trái desktop suốt trang, và mỗi chương có thanh_rule hổ phách ngắn kèm dấu hoa cà phê ở đầu.
- Wordmark Cao Nguyên Mật luôn đi kèm dấu hoa cà phê và dòng gốc "ĐẮK LẮK · VIỆT NAM" — như một con dấu văn chương (literary imprint), xuất hiện trang trọng ở hero, phần kết và footer.
- Khu vực sản phẩm & minh bạch được trình bày như "specimen plate" lưu trữ: nhãn được đóng khung như bản nghiên cứu mẫu vật, chữ dữ liệu tiết chế, placeholder "[THÔNG TIN CẦN BỔ SUNG]" trông có chủ đích chứ không trống trải.
- Hành trình màu theo chương: chương I–II tông trắng hoa, chương III–IV tông xanh cao nguyên, chương V–VI tông nâu đất, chương VII–transparency tông hổ phách, chương VIII–footer nền xanh đêm.
