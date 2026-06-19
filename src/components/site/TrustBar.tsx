import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const STATS = [
  { value: 8, suffix: "+", label: "Tahun Berpengalaman" },
  { value: 500, suffix: "+", label: "Pasangan Bahagia" },
  { value: 4, suffix: "", label: "Provinsi Terlayani" },
  { value: 4.9, suffix: "", prefix: "★ ", decimals: 1, label: "Rating Kepuasan" },
];

export function TrustBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="trust" ref={ref} className="bg-white py-14 md:py-16">
      <div className="container-x grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center text-center px-4 py-4 ${
              i > 0 ? "md:border-l border-gold/30" : ""
            } ${i > 0 && i % 2 === 0 ? "border-l border-gold/30 md:border-l" : ""} ${
              i === 2 ? "border-t md:border-t-0 border-gold/30" : ""
            } ${i === 3 ? "border-t md:border-t-0 border-gold/30" : ""}`}
          >
            <div className="font-display text-5xl md:text-6xl text-gold">
              {inView ? (
                <CountUp
                  end={s.value}
                  duration={2}
                  decimals={s.decimals || 0}
                  prefix={s.prefix || ""}
                  suffix={s.suffix}
                />
              ) : (
                <span>{s.prefix || ""}0{s.suffix}</span>
              )}
            </div>
            <div className="mt-2 text-xs tracking-[0.2em] uppercase text-ink/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
