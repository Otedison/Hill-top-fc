import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Club Life — Hilltop FC Gallery" },
      { name: "description", content: "Match day moments, training ground grit and community spirit at Hilltop FC." },
      { property: "og:title", content: "Club Life — Hilltop FC Gallery" },
      { property: "og:description", content: "Photo gallery from Hilltop Football Club." },
    ],
  }),
  component: GalleryPage,
});

type Cat = "matches" | "training" | "events";
type Tile = { cat: Cat; icon: string; tone: string; h: string };

const tiles: Tile[] = [
  { cat: "matches", icon: "⚽", tone: "from-green-soft to-green-deep", h: "h-72" },
  { cat: "training", icon: "👟", tone: "from-green-mid to-green-deep", h: "h-52" },
  { cat: "events", icon: "🏆", tone: "from-gold to-[oklch(0.55_0.13_85)]", h: "h-80" },
  { cat: "matches", icon: "🥅", tone: "from-green-mid to-green-deep", h: "h-52" },
  { cat: "training", icon: "💪", tone: "from-green-soft to-green-deep", h: "h-80" },
  { cat: "events", icon: "🎉", tone: "from-green-mid to-gold/40", h: "h-72" },
  { cat: "matches", icon: "🔥", tone: "from-green-soft to-green-deep", h: "h-52" },
  { cat: "training", icon: "⚡", tone: "from-green-mid to-green-deep", h: "h-72" },
  { cat: "events", icon: "🏅", tone: "from-gold to-[oklch(0.55_0.13_85)]", h: "h-72" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<"all" | Cat>("all");
  const [open, setOpen] = useState<Tile | null>(null);
  const visible = tiles.filter(t => filter === "all" || t.cat === filter);

  return (
    <>
      <PageHeader eyebrow="Through the lens" title="Club Life" intro="Match day moments, training ground grit, and community spirit." />
      <section className="py-20">
        <div className="w-[min(1200px,92%)] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {(["all", "matches", "training", "events"] as const).map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border capitalize transition-colors ${
                  filter === c
                    ? "bg-green-deep text-cream border-green-deep"
                    : "bg-card text-foreground border-border hover:border-green-soft"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {visible.map((t, i) => {
              const isGold = t.tone.includes("gold");
              return (
                <button
                  key={i}
                  onClick={() => setOpen(t)}
                  className={`mb-4 w-full ${t.h} rounded-sm overflow-hidden cursor-pointer block break-inside-avoid relative bg-gradient-to-br ${t.tone} flex items-center justify-center text-6xl ${isGold ? "text-green-deep" : "text-gold"} hover:scale-[0.98] transition-transform`}
                >
                  {t.icon}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-8"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-cream flex items-center justify-center hover:bg-white/20"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className={`w-[min(700px,90vw)] aspect-square rounded-sm flex items-center justify-center text-[10rem] bg-gradient-to-br ${open.tone} ${open.tone.includes("gold") ? "text-green-deep" : "text-gold"}`}
            onClick={e => e.stopPropagation()}
          >
            {open.icon}
          </div>
        </div>
      )}
    </>
  );
}
