import { Instagram, Youtube, Music2, MapPin, Phone, Clock } from "lucide-react";
import { PHONE_DISPLAY } from "./data";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-display text-3xl text-gold">
              Mawa <span className="italic">Wedding</span> <span className="text-sage">Syar'i</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-xs italic">
              Amanah, Estetik, Berkesan — mewujudkan pernikahan syar'i yang tak terlupakan.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Music2, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 grid place-items-center border border-white/15 hover:border-gold hover:text-gold transition-colors"
                >
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-gold mb-5">Menu</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#tentang" className="hover:text-gold transition-colors">Tentang</a></li>
              <li><a href="#layanan" className="hover:text-gold transition-colors">Layanan</a></li>
              <li><a href="#galeri" className="hover:text-gold transition-colors">Galeri</a></li>
              <li><a href="#blog" className="hover:text-gold transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-gold mb-5">Layanan</div>
            <ul className="space-y-3 text-sm">
              <li>Wedding Organizer</li>
              <li>Dekorasi</li>
              <li>Dokumentasi</li>
              <li>MUA & Busana</li>
              <li>Catering</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-gold mb-5">Wilayah</div>
            <ul className="space-y-3 text-sm">
              <li>Bandung</li>
              <li>Jabodetabek</li>
              <li>Jawa Tengah</li>
              <li>Lampung</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-gold mb-5">Kontak</div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <span>Jl. Yupiter x Blok H2 No. 17, Sekejati, Bandung</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <a href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`} className="hover:text-gold transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <span>08:00 – 17:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <div>© 2025 Mawa Wedding Syar'i. All rights reserved.</div>
          <div className="italic font-display text-sm text-gold/70">Barakallahu lakuma</div>
        </div>
      </div>
    </footer>
  );
}
