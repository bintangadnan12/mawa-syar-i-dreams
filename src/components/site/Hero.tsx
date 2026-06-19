import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { waLink } from "./data";

const HERO_IMG =
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=2000&q=85";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden flex items-center justify-center text-center"
    >
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={HERO_IMG}
          alt="Pernikahan syar'i elegan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />
      </motion.div>

      <div className="relative z-10 container-x flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="eyebrow text-sage mb-6"
          style={{ color: "#b6c9a6" }}
        >
          Wedding Organizer Syar'i #1 di Bandung
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display text-white text-[40px] leading-[1.05] md:text-[64px] md:leading-[1.05] max-w-4xl tracking-tight"
        >
          Pernikahan Syar'i yang
          <br />
          <span className="italic text-[#e7d6b8]">Indah, Sakral,</span> dan Tak Terlupakan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-xl text-white/85 text-base md:text-lg leading-relaxed"
        >
          Kami hadir untuk mewujudkan momen suci pernikahan Anda sesuai tuntunan Islam —
          dengan estetika yang memukau dan layanan yang amanah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={waLink("Halo Mawa Wedding, saya ingin konsultasi gratis untuk pernikahan saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gold text-white px-8 py-4 text-xs tracking-[0.25em] uppercase inline-flex items-center gap-3 transition-colors"
          >
            <span className="absolute inset-0 bg-ink translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative">Konsultasi Gratis</span>
            <span className="relative">→</span>
          </a>
          <a
            href="#galeri"
            className="group relative overflow-hidden border border-white/80 text-white px-8 py-4 text-xs tracking-[0.25em] uppercase inline-flex items-center gap-3"
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative group-hover:text-ink transition-colors">Lihat Karya Kami</span>
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.8 }, y: { repeat: Infinity, duration: 2.2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 z-10"
        aria-label="Scroll ke bawah"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
