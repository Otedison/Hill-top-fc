import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/fixtures")({
  head: () => ({
    meta: [
      { title: "Fixtures & Results — Hilltop FC" },
      { name: "description", content: "Upcoming matches and recent results for Hilltop FC across league, cup and friendly competitions." },
      { property: "og:title", content: "Fixtures & Results — Hilltop FC" },
      { property: "og:description", content: "Match days, scores, and the road ahead for Hilltop Football Club." },
    ],
  }),
  component: FixturesPage,
});

type Comp = "League" | "Cup" | "Friendly";

const upcoming: { date: string; opp: string; venue: string; comp: Comp }[] = [
  { date: "May 17, 2026", opp: "Ruiru United", venue: "Ruiru Stadium", comp: "League" },
  { date: "May 24, 2026", opp: "Thika FC", venue: "Thika Sports Complex", comp: "League" },
  { date: "May 31, 2026", opp: "Juja Rangers", venue: "Ruiru Stadium", comp: "Cup" },
  { date: "Jun 07, 2026", opp: "Kiambu Stars", venue: "Kiambu Grounds", comp: "League" },
  { date: "Jun 14, 2026", opp: "Githurai FC", venue: "Ruiru Stadium", comp: "Friendly" },
];

const results: { date: string; opp: string; score: string; comp: Comp; res: "win" | "draw" | "loss" }[] = [
  { date: "May 03, 2026", opp: "Thika FC", score: "2 - 1", comp: "League", res: "win" },
  { date: "Apr 26, 2026", opp: "Juja Rangers", score: "1 - 1", comp: "League", res: "draw" },
  { date: "Apr 19, 2026", opp: "Limuru United", score: "0 - 2", comp: "Cup", res: "loss" },
  { date: "Apr 12, 2026", opp: "Ruiru United", score: "3 - 0", comp: "League", res: "win" },
  { date: "Apr 05, 2026", opp: "Kahawa FC", score: "2 - 2", comp: "Friendly", res: "draw" },
];

const resBadge = {
  win: "bg-emerald-500 text-white",
  loss: "bg-red-500 text-white",
  draw: "bg-amber-500 text-white",
};

function FixturesPage() {
  const [tab, setTab] = useState<"upcoming" | "results">("upcoming");
  const [comp, setComp] = useState<"all" | Comp>("all");

  const filteredUp = upcoming.filter(f => comp === "all" || f.comp === comp);
  const filteredRes = results.filter(f => comp === "all" || f.comp === comp);

  return (
    <>
      <PageHeader eyebrow="2025 Season" title="Fixtures & Results" intro="Match days, scores, and the road ahead." />
      <section className="py-20">
        <div className="w-[min(1200px,92%)] mx-auto">
          {/* Tabs */}
          <div className="flex gap-1 mb-6 border-b-2 border-border">
            {(["upcoming", "results"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3 font-bold uppercase tracking-[0.15em] text-xs border-b-[3px] -mb-[2px] transition-colors ${
                  tab === t ? "text-green-deep border-gold" : "text-muted-foreground border-transparent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(["all", "League", "Cup", "Friendly"] as const).map(c => (
              <button
                key={c}
                onClick={() => setComp(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                  comp === c
                    ? "bg-green-deep text-cream border-green-deep"
                    : "bg-card text-foreground border-border hover:border-green-soft"
                }`}
              >
                {c === "all" ? "All" : c}
              </button>
            ))}
          </div>

          <div className="bg-card rounded-sm overflow-hidden shadow-sm overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-green-deep text-cream">
                  {tab === "upcoming"
                    ? ["Date", "Opponent", "Venue", "Competition", "Status"].map(h => (
                        <th key={h} className="text-left px-5 py-4 text-xs uppercase tracking-[0.2em]">{h}</th>
                      ))
                    : ["Date", "Opponent", "Score", "Competition", "Result"].map(h => (
                        <th key={h} className="text-left px-5 py-4 text-xs uppercase tracking-[0.2em]">{h}</th>
                      ))}
                </tr>
              </thead>
              <tbody>
                {tab === "upcoming"
                  ? filteredUp.map(f => (
                      <tr key={f.date + f.opp} className="border-b border-border hover:bg-[oklch(0.85_0.17_90/0.06)]">
                        <td className="px-5 py-4 font-bold">{f.date}</td>
                        <td className="px-5 py-4">{f.opp}</td>
                        <td className="px-5 py-4">{f.venue}</td>
                        <td className="px-5 py-4">{f.comp}</td>
                        <td className="px-5 py-4">
                          <span className="inline-block px-3 py-1 rounded-sm text-[0.65rem] font-bold tracking-[0.15em] uppercase bg-green-deep text-gold">
                            Scheduled
                          </span>
                        </td>
                      </tr>
                    ))
                  : filteredRes.map(f => (
                      <tr key={f.date + f.opp} className="border-b border-border hover:bg-[oklch(0.85_0.17_90/0.06)]">
                        <td className="px-5 py-4 font-bold">{f.date}</td>
                        <td className="px-5 py-4">{f.opp}</td>
                        <td className="px-5 py-4 font-bold">{f.score}</td>
                        <td className="px-5 py-4">{f.comp}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-block px-3 py-1 rounded-sm text-[0.65rem] font-bold tracking-[0.15em] uppercase ${resBadge[f.res]}`}>
                            {f.res === "win" ? "Win" : f.res === "loss" ? "Loss" : "Draw"}
                          </span>
                        </td>
                      </tr>
                    ))}
                {(tab === "upcoming" ? filteredUp : filteredRes).length === 0 && (
                  <tr><td colSpan={5} className="px-5 py-8 text-center text-muted-foreground">No matches.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
