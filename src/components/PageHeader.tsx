export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="relative bg-green-deep text-cream pt-24 pb-16 overflow-hidden">
      <div className="w-[min(1200px,92%)] mx-auto reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-2 text-4xl md:text-6xl text-cream">{title}</h1>
        {intro && <p className="mt-4 text-cream-dim max-w-2xl">{intro}</p>}
      </div>
      <div
        className="absolute inset-x-0 -bottom-px h-14 bg-background"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </div>
  );
}
