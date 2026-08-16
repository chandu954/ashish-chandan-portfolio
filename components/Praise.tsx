import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const PROOF = [
  {
    n: "01",
    title: "Client security review passed",
    text: "Hyacinte's tenant isolation was audited by the client — zero cross-tenant leaks across every attempt on the bilingual eval set.",
    foot: "client · Hyacinte AI · Ghana",
  },
  {
    n: "02",
    title: "Four systems live today",
    text: "Research Swarm, Eleva, QuickCart, and Khetika run in production — the demo links on this page open the real systems.",
    foot: "verifiable · no screenshots",
  },
  {
    n: "03",
    title: "Claims trace to evidence",
    text: "Impact numbers come from shipped work and eval harnesses; every project links to its code, its deployment, or the methodology behind the number.",
    foot: "stated per project",
  },
] as const;

export default function Praise() {
  return (
    <section className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeader
            index="05"
            title="Verified delivery"
            subtitle="Not endorsements — evidence. Each claim on this page links to something you can check."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {PROOF.map((p) => (
            <Reveal key={p.n} delay={0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
                <p className="font-mono text-xs text-faint">{p.n}</p>
                <h3 className="mt-2 font-mono text-sm font-semibold text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {p.text}
                </p>
                <p className="mt-auto pt-5 font-mono text-[10px] text-faint">
                  {p.foot}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
