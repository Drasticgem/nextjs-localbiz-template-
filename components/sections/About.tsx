import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { Reveal } from "@/components/animations/Reveal";

/**
 * About our team — two-column layout on desktop (text left, vintage
 * founder photo right). On mobile the photo sits between the headline
 * and body copy.
 */
export function About() {
  return (
    <section id="about" className="bg-navy py-20 max-[768px]:py-12">
      <div className="container-1140">
        <Reveal className="md:flex md:items-start md:gap-12">
          {/* Text column */}
          <div className="max-w-[520px] max-[768px]:max-w-none">
            <p
              className="mb-3 text-[10px] font-semibold uppercase text-gold"
              style={{ letterSpacing: "0.22em" }}
            >
              About our team
            </p>
            <h2
              className="mb-4 font-[family-name:var(--font-display)] font-black text-white"
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: 1.2,
              }}
            >
              A local contractor focused on dependable service
            </h2>

            {/* Founder photo — mobile only (between headline and body) */}
            <div className="my-6 md:hidden">
              <Image
                src="/images/Founder.jpg"
                alt="Original Premier Trades Company building — Engineering &amp; Construction"
                width={564}
                height={291}
                className="rounded-lg border border-white/10"
              />
            </div>

            <p className="mb-6 text-[14px] leading-[1.8] text-white/60">
              Founded by {BUSINESS.founder} in {BUSINESS.founded}, we&apos;ve
              built a strong reputation for quality workmanship, transparent communication, and on-time delivery. Update this section with your client&apos;s story, service area, and differentiators.
            </p>
            <a
              href="#"
              className="inline-block rounded-lg border-[1.5px] border-gold/70 bg-transparent px-6 py-3 text-[13px] font-semibold text-gold transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-navy"
              style={{ letterSpacing: "0.04em" }}
            >
              Read our full story →
            </a>
          </div>

          {/* Founder photo — desktop only (right column) */}
          <div className="hidden shrink-0 md:block md:w-[420px]">
            <Image
              src="/images/Founder.jpg"
              alt="Original Premier Trades Company building — Engineering &amp; Construction"
              width={564}
              height={291}
              className="rounded-lg border border-white/10 shadow-lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
