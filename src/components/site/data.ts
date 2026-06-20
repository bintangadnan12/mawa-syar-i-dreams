// ============================================================
// BRAND CONFIG — edit bagian ini saja untuk ganti klien
// ============================================================
export const BRAND = {
  name: "Mawa Wedding Syar'i",
  nameShort: "Mawa Wedding",
  nameDisplay: ["Mawa", "Wedding", "Syar'i"] as const,
  niche: "Wedding Organizer Syar'i",
  tagline: "Wedding Organizer Syar'i #1 di Bandung",
  heroDesc: "Kami hadir untuk mewujudkan momen suci pernikahan Anda sesuai tuntunan Islam — dengan estetika yang memukau dan layanan yang amanah.",
  aboutDesc: "Mawa Wedding Syar'i adalah wedding organizer asal Bandung yang fokus melayani pasangan muslim yang menginginkan pernikahan sesuai tuntunan Islam — tanpa mengorbankan keindahan dan kenyamanan. Selama lebih dari 8 tahun, kami telah dipercaya 500+ pasangan di Jawa Barat, Jabodetabek, Jawa Tengah, dan Lampung.",
  city: "Bandung",
  address: "Jl. Yupiter x Blok H2 No. 17, Sekejati, Bandung",
  year: "2025",
  heroImg: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=2000&q=85",
  metaTitle: "Mawa Wedding Syar'i — Wedding Organizer Syar'i Bandung",
  metaDesc: "Wedding organizer syar'i terpercaya di Bandung. 8+ tahun pengalaman, 500+ pasangan bahagia.",
};
// ============================================================

export const WHATSAPP_NUMBER = "6282115619187";
export const PHONE_DISPLAY = "082-1156-1918-7";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket", href: "#paket" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

export const SERVICES = [
  {
    title: "Wedding Organizer",
    desc: "Koordinasi menyeluruh hari H dengan tim profesional yang amanah.",
    icon: "Sparkles",
  },
  {
    title: "Dekorasi",
    desc: "Konsep rustic, modern, hingga custom sesuai impian Anda.",
    icon: "Flower2",
  },
  {
    title: "Dokumentasi",
    desc: "Foto & video pre-wedding hingga after-wedding sinematik.",
    icon: "Camera",
  },
  {
    title: "MUA & Busana",
    desc: "Riasan dan busana syar'i dari berbagai seri terbaik.",
    icon: "Crown",
  },
  {
    title: "Catering",
    desc: "Pilihan menu lezat dan halal mulai dari 37rb per orang.",
    icon: "Utensils",
  },
  {
    title: "Paket All-in-One",
    desc: "Bundling terbaik untuk efisiensi anggaran dan ketenangan.",
    icon: "Gift",
  },
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", cat: "Dekorasi", h: "tall" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80", cat: "MUA & Busana", h: "short" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80", cat: "Dekorasi", h: "short" },
  { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80", cat: "Dokumentasi", h: "tall" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80", cat: "MUA & Busana", h: "tall" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80", cat: "Dekorasi", h: "short" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", cat: "Dokumentasi", h: "short" },
  { src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&q=80", cat: "MUA & Busana", h: "tall" },
  { src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80", cat: "Dokumentasi", h: "short" },
];

export const GALLERY_TABS = ["Semua", "Dekorasi", "MUA & Busana", "Dokumentasi"] as const;

type Pkg = { name: string; tag?: string; price: number; popular?: boolean; features: string[] };

export const WO_PACKAGES: Pkg[] = [
  {
    name: "Paket Hemat",
    tag: "100 – 200 tamu",
    price: 6_750_000,
    features: [
      "Koordinator & 3 tim hari H",
      "Briefing & technical meeting",
      "Susunan acara & timeline",
      "Pendamping pengantin",
      "Konsultasi gratis",
    ],
  },
  {
    name: "Paket Standar",
    tag: "250 – 350 tamu",
    price: 8_750_000,
    popular: true,
    features: [
      "Koordinator senior & 5 tim hari H",
      "Briefing, TM & gladi resik",
      "Susunan acara, rundown & cue card",
      "Pendamping kedua pengantin",
      "Koordinasi seluruh vendor",
      "Konsultasi gratis tanpa batas",
    ],
  },
  {
    name: "Paket Lengkap",
    tag: "400 – 500 tamu",
    price: 11_500_000,
    features: [
      "Koordinator senior & 8 tim hari H",
      "Briefing, TM & 2x gladi resik",
      "Custom rundown & timeline",
      "Pendamping & asisten keluarga",
      "Koordinasi vendor menyeluruh",
      "Laporan & evaluasi pasca acara",
    ],
  },
  {
    name: "Paket Eksklusif",
    tag: "500 – 750 tamu",
    price: 16_500_000,
    features: [
      "Wedding director & 12 tim",
      "Unlimited meeting & TM",
      "Custom premium rundown",
      "Pendamping VIP keluarga inti",
      "Koordinasi semua vendor premium",
      "Konsep & supervisi penuh",
    ],
  },
];

export const DEKOR_PACKAGES: Pkg[] = [
  { name: "Dekorasi A", tag: "Basic Elegan", price: 11_850_000, features: ["Pelaminan utama", "Backdrop akad", "Standing flower", "Photobooth sederhana", "Karpet & janur"] },
  { name: "Dekorasi B", tag: "Modern Rustic", price: 16_750_000, popular: true, features: ["Pelaminan premium", "Backdrop akad custom", "Standing flower fresh", "Photobooth instagramable", "Dekor meja tamu"] },
  { name: "Dekorasi C", tag: "Luxury Floral", price: 19_850_000, features: ["Pelaminan luxury", "Backdrop akad fresh flower", "Aisle walk", "Photobooth premium", "Dekor lengkap pelaminan & tamu"] },
  { name: "Dekorasi D", tag: "Premium Garden", price: 29_850_000, features: ["Konsep garden / ballroom mewah", "Fresh flower lengkap", "Lighting dekoratif", "Photobooth signature", "Full styling area"] },
];

export const DOKUM_PACKAGES: Pkg[] = [
  { name: "Paket Silver", tag: "Akad only", price: 3_850_000, features: ["1 fotografer", "1 videografer", "200 foto edit", "Highlight video 1 menit", "Soft file lengkap"] },
  { name: "Paket Gold", tag: "Akad + Resepsi", price: 5_500_000, popular: true, features: ["2 fotografer", "1 videografer", "400 foto edit", "Highlight video 2 menit", "Album cetak premium"] },
  { name: "Paket Platinum", tag: "Full Day", price: 7_250_000, features: ["3 fotografer", "2 videografer", "Cinematic video 3 menit", "Same day edit", "Album & USB box"] },
  { name: "Paket Signature", tag: "Pre & After", price: 8_750_000, features: ["Tim sinematik", "Pre-wedding & after-wedding", "Cinematic video 4 menit", "Foto unlimited", "Album luxury box"] },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Konsultasi Gratis", desc: "Ceritakan impian Anda. Kami dengar dengan tulus.", icon: "MessageCircle" },
  { n: "02", title: "Perencanaan Detail", desc: "Kami rancang konsep, rundown, dan vendor bersama.", icon: "ClipboardList" },
  { n: "03", title: "Pelaksanaan Profesional", desc: "Hari H di tangan kami, hati Anda tenang.", icon: "HeartHandshake" },
  { n: "04", title: "Kenangan Selamanya", desc: "Dokumentasi indah untuk Anda kenang seumur hidup.", icon: "Image" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Dekorasi pernikahannya luar biasa indah. Semua tamu kagum dan kami sangat puas dengan pelayanannya yang responsif dan amanah.",
    name: "Rina & Fajar",
    date: "Juni 2024",
    avatar: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=200&q=80",
  },
  {
    quote:
      "Tim Mawa sangat profesional dan memahami kebutuhan kami sebagai pasangan yang ingin pernikahan sesuai syariat. Alhamdulillah sempurna.",
    name: "Siti & Rizal",
    date: "Maret 2024",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "Dari konsultasi pertama sampai hari H, semua terasa tenang. Tidak ada drama. Hanya berkah. Terima kasih Mawa Wedding.",
    name: "Aisyah & Hanif",
    date: "Oktober 2024",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const BLOG_POSTS = [
  {
    title: "Panduan Pernikahan Syar'i: Tata Cara & Adab yang Perlu Diketahui",
    cat: "Panduan",
    date: "12 Mei 2024",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    title: "10 Tips Memilih Wedding Organizer Syar'i yang Tepercaya",
    cat: "Tips",
    date: "28 April 2024",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    title: "Tren Dekorasi Pernikahan Islami 2024 yang Elegan dan Modern",
    cat: "Inspirasi",
    date: "3 April 2024",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80",
  },
];

export const formatIDR = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
