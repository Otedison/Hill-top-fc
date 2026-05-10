import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hilltop FC — Born on the Hill. Built for Glory." },
      { name: "description", content: "Hilltop Football Club — grassroots football from Ruiru, Kiambu County, Kenya." },
    ],
  }),
  component: HomePage,
});

const news = [
  { tag: "Match Result", icon: "⚽", title: "Hilltop edge Thika FC 2–1 in derby thriller", body: "A late strike from captain Otieno seals a famous win at Ruiru Stadium under the floodlights." },
  { tag: "Training", icon: "🏃", title: "Pre-season camp opens with 40 hopefuls", body: "The squad return to the hills for ten days of fitness, tactical drills and friendly matches." },
  { tag: "Community", icon: "🤝", title: "Club launches youth coaching clinic", body: "Free Saturday sessions begin at Ruiru Stadium for kids aged 8–14 from across Kiambu County." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-hero text-cream overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, oklch(1 0 0 / 0.04) 0 2px, transparent 2px 60px), repeating-linear-gradient(0deg, oklch(1 0 0 / 0.03) 0 2px, transparent 2px 60px)",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="w-[min(1200px,92%)] mx-auto relative z-10 max-w-4xl">
          <span className="eyebrow reveal">Hilltop Football Club · Est. 2015</span>
          <h1 className="mt-4 text-cream text-5xl md:text-7xl reveal delay-1">
            Born on the Hill.
            <span className="block italic text-gold">Built for Glory.</span>
          </h1>
          <p className="mt-6 text-lg text-cream-dim max-w-xl reveal delay-2">
            A grassroots football family rising from the rolling hills of Ruiru — playing with discipline,
            pride, and the spirit of Kiambu County.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 reveal delay-3">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gold text-green-deep font-bold uppercase tracking-[0.15em] text-sm rounded-sm hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              Meet the Squad →
            </Link>
            <Link
              to="/fixtures"
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-cream text-cream font-bold uppercase tracking-[0.15em] text-sm rounded-sm hover:bg-cream hover:text-green-deep transition-colors"
            >
              View Fixtures
            </Link>
          </div>
        </div>
        <Link
          to="/about"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 text-gold animate-bounce"
          aria-label="Scroll to about"
        >
          <ArrowDown size={28} />
        </Link>
      </section>

      {/* STATS */}
      <section className="bg-green-deep text-cream py-10 border-y border-[oklch(0.85_0.17_90/0.2)]">
        <div className="w-[min(1200px,92%)] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { n: "2015", l: "Founded" },
            { n: "32", l: "Players" },
            { n: "4", l: "Trophies" },
          ].map(s => (
            <div key={s.l}>
              <div className="font-display font-black text-5xl text-gold">{s.n}</div>
              <div className="uppercase tracking-[0.25em] text-xs text-cream-dim mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20">
        <div className="w-[min(1200px,92%)] mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
            <div>
              <span className="eyebrow !text-green-soft">Latest from the club</span>
              <h2 className="mt-2 text-4xl md:text-5xl">News &amp; Updates</h2>
            </div>
            <Link
              to="/fixtures"
              className="inline-flex px-5 py-3 border-2 border-green-deep text-green-deep font-bold uppercase tracking-[0.15em] text-xs rounded-sm hover:bg-green-deep hover:text-cream transition-colors"
            >
              All Fixtures →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {news.map(n => (
              <article
                key={n.title}
                className="bg-card rounded-sm overflow-hidden border border-border hover:-translate-y-1.5 hover:shadow-elegant transition-all"
              >
                <div className="aspect-[16/10] bg-gradient-card-dark flex items-center justify-center text-5xl text-gold relative">
                  <span>{n.icon}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-green-soft">{n.tag}</span>
                  <h3 className="mt-2 mb-2 text-xl">{n.title}</h3>
                  <p className="text-muted-foreground text-sm">{n.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
