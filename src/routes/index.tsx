import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

// Above-fold: loaded immediately
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Floating } from "@/components/site/Floating";

// Below-fold: lazy-loaded to split the 785 kB bundle
const About = lazy(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("@/components/site/Services").then((m) => ({ default: m.Services })));
const Gallery = lazy(() => import("@/components/site/Gallery").then((m) => ({ default: m.Gallery })));
const Packages = lazy(() => import("@/components/site/Packages").then((m) => ({ default: m.Packages })));
const Process = lazy(() => import("@/components/site/Process").then((m) => ({ default: m.Process })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })));
const Calculator = lazy(() => import("@/components/site/Calculator").then((m) => ({ default: m.Calculator })));
const Blog = lazy(() => import("@/components/site/Blog").then((m) => ({ default: m.Blog })));
const FinalCTA = lazy(() => import("@/components/site/FinalCTA").then((m) => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));

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
      <Suspense fallback={null}>
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
      </Suspense>
      <Floating />
    </main>
  );
}
