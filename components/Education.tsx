import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeader index="05" title="Education" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    B.E. — Computer Engineering
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Ajeenkya DY Patil School of Engineering, Pune
                  </p>
                </div>
                <p className="font-mono text-xs text-muted">2022 – 2026</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    HSC — 12th Grade
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    St. Xavier&apos;s, Ahmednagar
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    SSC — 10th Grade
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Army Public School, Ahmednagar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}