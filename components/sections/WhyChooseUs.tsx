import Image from "next/image";
import { CREDENTIALS } from "@/lib/data/credentials";
import { STATS } from "@/lib/data/stats";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Why choose us panel for template trust-building content.
 */
export function WhyChooseUs() {
  return (
    <section id="why-choose-us" aria-label="Why choose this company" className="bg-navy">
      <article
        className={[
          "group relative isolate overflow-hidden",
          "min-h-[620px] max-[1024px]:min-h-[580px] max-[768px]:min-h-[980px] max-[480px]:min-h-[940px]",
          "border-t border-white/5",
        ].join(" ")}
      >
        <Image
          src="/images/safety.jpg"
          alt="Crew member using safe and professional work practices"
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/20 max-[768px]:bg-[linear-gradient(to_bottom,rgba(15,32,64,0.92)_0%,rgba(15,32,64,0.65)_28%,rgba(15,32,64,0.55)_55%,rgba(15,32,64,0.8)_100%)]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

        <div className="relative z-[1] flex min-h-[inherit] items-center">
          <div className="container-1140 grid w-full grid-cols-2 items-center gap-16 py-20 max-[1024px]:gap-12 max-[768px]:grid-cols-1 max-[768px]:gap-12 max-[768px]:py-24 max-[480px]:py-20">
            <Reveal>
              <div className="max-w-[560px]">
                <p className="mb-3 text-[10px] font-semibold uppercase text-gold" style={{ letterSpacing: "0.22em" }}>
                  Why Choose Us
                </p>
                <h2
                  className="mb-5 font-[family-name:var(--font-display)] font-black text-white"
                  style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
                >
                  Built for trust, speed, and reliable service.
                </h2>
                <p className="text-[15px] leading-[1.75] text-white/75 max-[480px]:text-[14px]">
                  Use this section to explain your local reputation, safety standards, and quality guarantees. Keep this copy short,
                  specific, and outcome-focused so visitors understand why they should contact you now.
                </p>
              </div>
            </Reveal>

            <Reveal stagger className="flex flex-col gap-3 max-[768px]:gap-3">
              {CREDENTIALS.map((c) => (
                <WhyBadge key={c.shortLabel} value={c.value} smallValue={c.smallValue} title={c.title} sub={c.sub} />
              ))}
            </Reveal>
          </div>
        </div>
      </article>

      <Reveal>
        <div className="container-1140">
          <div
            className={[
              "grid grid-cols-4 max-[768px]:grid-cols-2",
              "[&>*]:border-r [&>*]:border-white/5",
              "[&>*:last-child]:border-r-0",
              "max-[768px]:[&>*:nth-child(2)]:border-r-0",
              "border-t border-white/5",
            ].join(" ")}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-8 text-center transition-colors duration-200 hover:bg-white/[0.015] max-[480px]:px-3 max-[480px]:py-5"
              >
                <div className="font-[family-name:var(--font-display)] text-[32px] font-bold leading-none text-gold max-[480px]:text-[24px]">
                  {stat.number}
                </div>
                <div
                  className="mt-[6px] text-[10px] font-medium uppercase text-white/40 max-[480px]:text-[9px]"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function WhyBadge({
  value,
  smallValue = false,
  title,
  sub,
}: {
  value: string;
  smallValue?: boolean;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-navy/75 px-5 py-[18px] transition-colors duration-200 hover:bg-navy/85">
      <div
        className={`min-w-[72px] shrink-0 font-[family-name:var(--font-display)] font-bold leading-none text-gold ${
          smallValue ? "text-[16px] leading-[1.2]" : "text-[24px]"
        }`}
      >
        {value.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div>
        <div className="mb-[2px] text-[14px] font-semibold text-white">{title}</div>
        <div className="text-[12px] text-white/40">{sub}</div>
      </div>
    </div>
  );
}
