import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeader
            index="07"
            title="Let's talk."
            subtitle="Interested in AI engineering, LLM applications, RAG systems, or full-stack products?"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="font-mono text-sm text-body">
                <span className="text-faint">$</span> echo
                &quot;hello@ashishchandan&quot;
              </p>
              <a
                href="mailto:ashishchandan0425@gmail.com"
                className="mt-3 inline-block break-all text-2xl font-semibold text-accent transition-colors underline-offset-4 hover:text-accent-strong hover:underline sm:text-3xl"
              >
                ashishchandan0425@gmail.com
              </a>
              <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-3">
                <div>
                  <p className="font-mono text-xs text-faint">email ↗</p>
                  <a
                    href="mailto:ashishchandan0425@gmail.com"
                    className="text-sm text-body transition-colors hover:text-accent"
                  >
                    write to me
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs text-faint">github ↗</p>
                  <a
                    href="https://github.com/chandu954"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-body transition-colors hover:text-accent"
                  >
                    chandu954
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs text-faint">linkedin ↗</p>
                  <a
                    href="https://www.linkedin.com/in/ashish-chandan-4421a2259"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-body transition-colors hover:text-accent"
                  >
                    ashish-chandan
                  </a>
                </div>
              </div>
              <p className="mt-8 font-mono text-xs text-faint">
                based in Pune, India · UTC+5:30
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  <span className="text-faint">{"//"}</span> recruiter quick facts
                </p>
                <dl className="mt-4 grid gap-x-8 gap-y-2.5 font-mono text-xs leading-relaxed sm:grid-cols-2">
                  {[
                    ["availability", "immediate · no notice"],
                    ["location", "Pune · remote / hybrid"],
                    ["target roles", "AI / ML Engineer"],
                    ["work auth", "Indian citizen"],
                    ["timezone", "IST · UTC+5:30"],
                    ["engagement", "FTE · contract"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-wrap gap-x-3 gap-y-1">
                      <dt className="shrink-0 text-faint">{label}</dt>
                      <dd className="text-body">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 sm:p-8">
                <div>
                  <p className="font-mono text-xs text-faint">resume</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    A one-page summary of the work above.
                  </p>
                </div>
                <a
                  href="/Ashish_Chandan_ATS_Resume.pdf"
                  download
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:bg-accent-strong hover:shadow-lg hover:shadow-accent/20"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 sm:p-8">
                <div>
                  <p className="font-mono text-xs text-faint">quick chat</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    15 minutes — role fit, projects, or a live walkthrough of
                    the RAG and agent systems.
                  </p>
                </div>
                <a
                  href="mailto:ashishchandan0425@gmail.com?subject=Quick%20chat%20—%2015%20minutes"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent/20"
                >
                  Book a chat ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}