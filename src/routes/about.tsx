import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hilltop FC" },
      { name: "description", content: "Founded in 2015 in Ruiru, Hilltop FC unites a community through football, discipline, and excellence." },
      { property: "og:title", content: "About — Hilltop FC" },
      { property: "og:description", content: "The story of a grassroots Kenyan football club rising from the hills of Ruiru." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: "🤝", title: "COMMUNITY", body: "Football belongs to the people. Every match, every training session is for Ruiru." },
  { icon: "⚡", title: "DISCIPLINE", body: "Standards on and off the pitch. Respect for the game, the badge, and each other." },
  { icon: "🏆", title: "EXCELLENCE", body: "We chase every loose ball, every trophy, every chance to be better than yesterday." },
];

const honours = [
  "2018 — Ruiru District League Champions",
  "2019 — Kiambu County Cup Semi-Finalists",
  "2020 — Kiambu Cup Runners-Up",
  "2022 — Ruiru Charity Shield Winners",
  "2024 — Kiambu County League — 3rd Place Finish",
];

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About the club" title="Our Story" intro="From dusty training grounds to the brightest pitches in Kiambu — this is Hilltop FC." />
      <section className="py-20">
        <div className="w-[min(1200px,92%)] mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="reveal aspect-[4/5] rounded-sm bg-gradient-card-dark shadow-elegant flex items-center justify-center text-7xl text-gold relative overflow-hidden">
              ⚽
              <span className="absolute bottom-4 left-4 text-gold font-display tracking-[0.2em] text-sm font-bold">EST. 2015</span>
            </div>
            <div className="reveal delay-1">
              <span className="eyebrow !text-green-soft">Since 2015</span>
              <h2 className="mt-2 mb-5 text-4xl md:text-5xl">Rising from the hills of Ruiru</h2>
              <p className="text-foreground/80">
                Hilltop FC was founded in 2015 by a group of passionate youth from Ruiru. Rising from humble training
                grounds on the hills overlooking the town, the club has grown into one of the most spirited grassroots
                teams in Kiambu County.
              </p>
              <p className="mt-4 text-foreground/80">
                What began as weekend kickabouts is now a structured football family — with a dedicated coaching staff,
                a loyal supporter base, and a clear ambition to compete at the very top of Kenyan grassroots football.
              </p>
              <div className="mt-8 p-6 bg-green-deep text-cream border-l-4 border-gold rounded-sm">
                <span className="eyebrow">Our Mission</span>
                <p className="mt-2 font-display text-xl text-cream leading-snug">
                  "To develop football talent, build character, and unite the Ruiru community through the beautiful game."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal delay-${i + 1} bg-green-deep text-cream p-8 rounded-sm border-t-[3px] border-gold`}
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-gold text-xl tracking-wider mb-2">{p.title}</h3>
                <p className="text-cream-dim text-sm">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-card p-10 border-l-4 border-gold rounded-sm reveal">
            <h3 className="text-2xl mb-5">Club Honours</h3>
            <ul className="grid gap-3">
              {honours.map(h => (
                <li key={h} className="pl-7 relative text-foreground/80">
                  <span className="absolute left-0">🏆</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
