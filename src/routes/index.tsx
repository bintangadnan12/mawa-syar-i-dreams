import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Packages } from "@/components/site/Packages";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Calculator } from "@/components/site/Calculator";
import { Blog } from "@/components/site/Blog";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { Floating } from "@/components/site/Floating";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mawa Wedding Syar'i — Wedding Organizer Syar'i Bandung" },
      {
        name: "description",
        content:
          "Wedding organizer syar'i terpercaya di Bandung. 8+ tahun pengalaman, 500+ pasangan bahagia. Layanan WO, dekorasi, MUA, dokumentasi & catering sesuai syariat Islam.",
      },
      { property: "og:title", content: "Mawa Wedding Syar'i — Wedding Organizer Syar'i Bandung" },
      {
        property: "og:description",
        content:
          "Pernikahan syar'i yang indah, sakral, dan tak terlupakan. Melayani Bandung, Jabodetabek, Jawa Tengah & Lampung.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-bg text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Gallery />
      <Packages />
      <Process />
      <Testimonials />
      <Calculator />
      <Blog />
      <FinalCTA />
      <Footer />
      <Floating />
    </main>
  );
}
