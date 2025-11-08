import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Compass,
  Orbit,
  Radar,
  Sparkles,
  Telescope,
} from "lucide-react";

export default function Home() {
  const navLinks = [
    { label: "Approach", href: "#approach" },
    { label: "Signals", href: "#signals" },
    { label: "Practice", href: "#practice" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const offerings = [
    {
      title: "Speculative Intelligence",
      description:
        "Map possible futures, edge behaviors, and cultural undercurrents to stay ahead of emergent patterns.",
      icon: Sparkles,
    },
    {
      title: "Exploratory Research",
      description:
        "Layer qualitative depth with machine-aided synthesis to surface hidden insights in ambiguous terrain.",
      icon: Telescope,
    },
    {
      title: "Strategic Orchestration",
      description:
        "Design adaptive programs, pilots, and experiments that align teams around actionable hypotheses.",
      icon: Compass,
    },
  ];

  const signals = [
    {
      eyebrow: "New frontier finance",
      title: "Decoding trust rituals for post-institutional capital networks.",
    },
    {
      eyebrow: "Synthetic bio futures",
      title: "Forecasting public sentiment swings around self-directed biomods.",
    },
    {
      eyebrow: "Defense & resilience",
      title: "Stress-testing autonomous response protocols against soft threats.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Vos Arkana gave our leadership a vocabulary for the future. Their synthesis is both poetic and operationally sharp.",
      name: "Leah Mendoza",
      role: "Chief Vision Officer, Halcyon Orbit",
    },
    {
      quote:
        "They unlocked a narrative that aligned engineering, product, and policy—something we’d chased for two years.",
      name: "Naresh Patel",
      role: "Director of Strategy, Onda Systems",
    },
  ];

  const differentiators = [
    "Hybrid human-AI research stack for accelerated pattern recognition.",
    "Studio partners with a maximum of six teams per year to ensure focus.",
    "Track record across frontier tech, climate resilience, defense, and media.",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-[-30%] bg-[radial-gradient(circle_at_top,rgba(88,225,230,0.32),rgba(0,0,0,0))]" />
        <div className="absolute inset-[-40%] translate-y-[30%] bg-[radial-gradient(circle_at_bottom,rgba(144,97,255,0.28),rgba(0,0,0,0))]" />
        <div className="grid-overlay absolute inset-0" />
        <div className="grain-overlay absolute inset-0" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <header className="flex flex-wrap items-center justify-between gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Vos Arkana logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                Vos Arkana
              </p>
              <p className="text-sm text-white/60">
                Applied Intelligence Studio
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:hello@vosarkana.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-slate-900"
          >
            Engage the studio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </header>

        <main className="mt-20 flex flex-col gap-24 pb-10">
          <section className="relative grid gap-16 lg:grid-cols-[1fr_minmax(0,400px)] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-white/70">
                <BadgeCheck className="h-4 w-4" />
                Time to outpace the signal
              </span>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Decode the unseen. Orchestrate the unthinkable.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
                Vos Arkana partners with leaders navigating the edges of
                technology, narrative, and security. We surface subtle signals,
                compose bold hypotheses, and craft the initiatives that carry
                teams into uncharted territory.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#approach"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Explore our method
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#signals"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
                >
                  Track active signals
                </a>
              </div>
              <dl className="mt-14 grid gap-6 text-white/70 sm:grid-cols-3">
                {[
                  ["18+", "multi-disciplinary analysts"],
                  ["6", "active partner teams per year"],
                  ["4-6 weeks", "from immersion to pilot"],
                ].map(([stat, label]) => (
                  <div key={stat}>
                    <dt className="text-sm uppercase tracking-[0.25em]">
                      {label}
                    </dt>
                    <dd className="mt-2 text-3xl font-semibold text-white">
                      {stat}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative isolate overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
              <div className="absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(75,226,223,0.5),rgba(75,226,223,0))]" />
              <div className="relative space-y-6">
                <h2 className="text-lg font-medium uppercase tracking-[0.4em] text-white/60">
                  Studio Stack
                </h2>
                <div className="space-y-4">
                  {differentiators.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/70"
                    >
                      <Radar className="mt-1 h-5 w-5 text-teal-300" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                    Partner Archetypes
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• Frontier R&D teams decoding new markets</li>
                    <li>• Venture studios aligning narrative + build</li>
                    <li>• Strategic operators shaping resilient systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            id="approach"
            className="rounded-[36px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl"
          >
            <div className="flex flex-col justify-between gap-12 lg:flex-row">
              <div className="max-w-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Methodology
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  A modular practice built for ambiguous frontiers.
                </h2>
                <p className="mt-5 text-base text-white/70">
                  Each engagement operates as a tailored intelligence cycle—
                  immersion, synthesis, orchestration, and provocation. We work
                  in nested sprints that continuously surface insight while
                  preparing teams to execute.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {offerings.map((offering) => (
                  <div
                    key={offering.title}
                    className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
                  >
                    <offering.icon className="h-10 w-10 text-teal-300" />
                    <h3 className="text-xl font-semibold text-white">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {offering.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-200/90">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.08] via-transparent to-transparent opacity-0 transition group-hover:opacity-40" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="signals"
            className="grid gap-10 rounded-[36px] border border-white/10 bg-white/[0.02] p-10 lg:grid-cols-[320px_1fr]"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Active Signals
              </p>
              <h2 className="text-3xl font-semibold text-white">
                We monitor the currents others miss.
              </h2>
              <p className="text-sm text-white/70">
                Our observatory layer blends field research with speculative
                scanning. Each quarter we open a limited window for partners to
                tap the live feed.
              </p>
              <a
                href="mailto:signals@vosarkana.com"
                className="inline-flex items-center gap-2 rounded-full border border-teal-200/20 bg-teal-200/10 px-5 py-2 text-sm font-semibold text-teal-100 transition hover:border-teal-200/60 hover:bg-teal-200/20"
              >
                Join the signal briefing
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {signals.map((signal) => (
                <article
                  key={signal.title}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-xs uppercase tracking-[0.35em] text-teal-200/80">
                    {signal.eyebrow}
                  </span>
                  <p className="text-base text-white/80">{signal.title}</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/50">
                      <Orbit className="h-4 w-4 text-white/40" />
                      Updated weekly
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="practice"
            className="rounded-[36px] border border-white/10 bg-white/[0.035] p-10"
          >
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Practice Lines
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Operate at the seams where narrative meets execution.
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  We embed with your teams, building shared perspective and
                  translating it into movements that resonate internally and in
                  market.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  <li>• Immersive fieldwork and rapid ethnography</li>
                  <li>• Narrative prototyping & scenario facilitation</li>
                  <li>• Portfolio roadmapping under uncertainty</li>
                  <li>• Pilot design, measurement, and iteration</li>
                </ul>
              </div>
              <div className="grid w-full gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Signal Cartography",
                    copy:
                      "Multi-layered maps connecting behavior shifts to strategic implications.",
                  },
                  {
                    title: "Narrative Engines",
                    copy:
                      "Story systems that align teams and stakeholders around decisive action.",
                  },
                  {
                    title: "Experimental Chambers",
                    copy:
                      "Design sprints and pilot loops engineered to test hypotheses under real pressure.",
                  },
                  {
                    title: "Continuity Playbooks",
                    copy:
                      "Operating principles that codify insight into resilient decision frameworks.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/70">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="testimonials"
            className="grid gap-10 rounded-[36px] border border-white/10 bg-white/[0.02] p-10 lg:grid-cols-[320px_1fr]"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Voices
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Trusted by those building what does not yet exist.
              </h2>
              <p className="text-sm text-white/70">
                We integrate as discreet, high-trust partners. Outcomes are
                measured in clarity, alignment, and the velocity of bold moves.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-base text-white/80">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-auto text-sm text-white/60">
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div>{testimonial.role}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-auto flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 text-sm text-white/70 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Stay oriented
            </p>
            <p className="mt-2 text-base text-white">
              Subscribe to the Vos Arkana field dispatch for quarterly
              frameworks and emergent signal briefs.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@organization.com"
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none sm:w-72"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Receive dispatch
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} Vos Arkana. Operate beyond the obvious.
          </div>
        </footer>
      </div>
    </div>
  );
}
