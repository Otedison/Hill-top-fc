import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Squad — Hilltop FC" },
      { name: "description", content: "Meet the Hilltop FC players and coaching staff carrying the green and gold." },
      { property: "og:title", content: "The Squad — Hilltop FC" },
      { property: "og:description", content: "Players and coaching staff of Hilltop Football Club, Ruiru." },
    ],
  }),
  component: TeamPage,
});

type Pos = "GK" | "DEF" | "MID" | "FWD";
const squad: { n: number; name: string; pos: Pos }[] = [
  { n: 1, name: "Daniel Otieno", pos: "GK" },
  { n: 2, name: "Brian Kariuki", pos: "DEF" },
  { n: 3, name: "Kevin Mutua", pos: "DEF" },
  { n: 4, name: "Mark Wanjala", pos: "DEF" },
  { n: 5, name: "Stephen Njoroge", pos: "DEF" },
  { n: 6, name: "Patrick Omondi", pos: "MID" },
  { n: 8, name: "James Maina", pos: "MID" },
  { n: 10, name: "Victor Onyango", pos: "MID" },
  { n: 11, name: "Eric Wekesa", pos: "FWD" },
  { n: 7, name: "Dennis Kiprop", pos: "FWD" },
  { n: 9, name: "Michael Achieng", pos: "FWD" },
  { n: 14, name: "Antony Mwenda", pos: "MID" },
];

const posColors: Record<Pos, string> = {
  GK: "bg-blue-500 text-white",
  DEF: "bg-red-500 text-white",
  MID: "bg-gold text-green-deep",
  FWD: "bg-emerald-500 text-white",
};

const staff = [
  { i: "JM", name: "Joseph Mwangi", role: "Head Coach" },
  { i: "PK", name: "Peter Kamau", role: "Assistant Coach" },
  { i: "SO", name: "Samuel Owino", role: "Goalkeeper Coach" },
  { i: "RN", name: "Ruth Njeri", role: "Team Physio" },
];

function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="2025 Season" title="The Squad" intro="Meet the players carrying the green and gold onto the pitch every weekend." />
      <section className="py-20">
        <div className="w-[min(1200px,92%)] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {squad.map(p => {
              const initials = p.name.split(" ").map(s => s[0]).join("");
              return (
                <div
                  key={p.n}
                  className="group bg-green-deep text-cream rounded-sm overflow-hidden border border-[oklch(0.85_0.17_90/0.18)] hover:border-gold hover:-translate-y-2 hover:shadow-glow transition-all"
                >
                  <div className="aspect-square bg-gradient-card-dark flex items-center justify-center font-display text-5xl text-gold font-black border-b border-[oklch(0.85_0.17_90/0.2)] relative">
                    <span className="absolute top-2 left-3 text-2xl">🇰🇪</span>
                    <span className="absolute top-2 right-3 font-display text-3xl text-gold font-black drop-shadow-lg leading-none">
                      {p.n}
                    </span>
                    {initials}
                  </div>
                  <div className="p-4">
                    <div className="font-display text-lg font-bold">{p.name}</div>
                    <span className={`inline-block mt-2 text-[0.65rem] tracking-[0.2em] font-bold px-2 py-1 rounded-sm ${posColors[p.pos]}`}>
                      {p.pos}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20">
            <span className="eyebrow !text-green-soft">Touchline</span>
            <h3 className="mt-2 mb-6 text-3xl">Coaching Staff</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {staff.map(s => (
                <div key={s.name} className="bg-card p-6 rounded-sm text-center border-t-[3px] border-green-soft">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-card-dark text-gold flex items-center justify-center font-display text-2xl font-black">
                    {s.i}
                  </div>
                  <h4 className="font-display text-lg">{s.name}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
