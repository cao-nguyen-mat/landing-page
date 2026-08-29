/*
 * CAO NGUYÊN MẬT — "Mùa Hoa Trắng" Editorial Journal theme
 * Central data: image assets, brand info, transparency data (real data only).
 * Unconfirmed fields are marked "CẦN BỔ SUNG" — never fabricated.
 */

export const IMAGES = {
  heroHighlandMorning: "/manus-storage/hero-highland-morning_188b6600.png",
  coffeeBlossomClose: "/manus-storage/coffee-blossom-close_d39de93d.png",
  beeOnBlossom: "/manus-storage/bee-on-blossom_ff11c07a.png",
  beekeeperHands: "/manus-storage/beekeeper-hands_670b68d8.png",
  honeyPour: "/manus-storage/honey-pour_4662ed7a.png",
  harvestFrame: "/manus-storage/harvest-frame_2421b0f7.png",
  daklakLandscape: "/manus-storage/daklak-landscape_6e691f33.png",
  honeyBottle: "/manus-storage/honey-bottle_7d3e40d2.png",
  tastingMoment: "/manus-storage/tasting-moment_5c4f9c85.png",
  logo: "/manus-storage/can-logo_91dad4a3.png",
};

export const BRAND = {
  name: "CAO NGUYÊN MẬT",
  product: "MẬT ONG HOA CÀ PHÊ",
  productEn: "COFFEE BLOSSOM HONEY",
  origin: "ĐẮK LẮK · VIỆT NAM",
  tagline: "Mật từ mùa hoa cà phê trắng",
  address: "Quốc Lộ 27, Xã Dray Bhăng, tỉnh Đắk Lắk",
  phones: ["0949 743 486", "0911 888 854"],
  netWeight: "1000 ml",
};

export const TRANSPARENCY = [
  { label: "Tên sản phẩm", value: "Mật ong hoa cà phê" },
  { label: "Thương hiệu", value: "CAO NGUYÊN MẬT" },
  { label: "Nguồn gốc", value: "Đắk Lắk, Việt Nam" },
  { label: "Thành phần", value: "CẦN BỔ SUNG", pending: true },
  { label: "Khối lượng tịnh", value: BRAND.netWeight },
  { label: "Số lô", value: "CẦN BỔ SUNG", pending: true },
  { label: "Ngày sản xuất", value: "CẦN BỔ SUNG", pending: true },
  { label: "Hạn sử dụng", value: "CẦN BỔ SUNG", pending: true },
  { label: "Đơn vị sản xuất & đóng gói", value: "CAO NGUYÊN MẬT" },
  { label: "Địa chỉ", value: BRAND.address },
  { label: "Điện thoại", value: BRAND.phones.join(" — ") },
];

export const CHAPTERS = [
  { id: "nguon-goc", numeral: "I", short: "Từ đâu", title: "Một giọt mật bắt đầu từ đâu?" },
  { id: "mua-hoa-trang", numeral: "II", short: "Mùa hoa", title: "Mùa hoa trắng" },
  { id: "nhung-nguoi-khach-nho", numeral: "III", short: "Đàn ong", title: "Những người khách nhỏ của mùa hoa" },
  { id: "con-nguoi", numeral: "IV", short: "Con người", title: "Con người đứng bên cạnh thiên nhiên" },
  { id: "tu-hoa-den-mat", numeral: "V", short: "Hành trình", title: "Từ hoa đến mật" },
  { id: "dak-lak", numeral: "VI", short: "Đắk Lắk", title: "Đắk Lắk — nơi câu chuyện bắt đầu" },
  { id: "giot-mat-trong-chai", numeral: "VII", short: "Chai mật", title: "Giọt mật trong chai của bạn" },
  { id: "mang-ve-nha", numeral: "VIII", short: "Về nhà", title: "Mang một phần cao nguyên về nhà" },
];
