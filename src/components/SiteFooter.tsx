import { Shield } from "./Shield";

export function SiteFooter() {
  return (
    <footer className="bg-green-deep text-cream-dim py-10 border-t border-[oklch(0.85_0.17_90/0.18)] text-center text-sm tracking-wide">
      <div className="w-[min(1200px,92%)] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="w-9 h-11" />
          <div className="leading-none text-left">
            <div className="font-display font-black text-cream">HILLTOP FC</div>
            <div className="text-[0.65rem] tracking-[0.3em] text-gold mt-1">RUIRU · KENYA</div>
          </div>
        </div>
        © {new Date().getFullYear()} Hilltop FC · Ruiru, Kenya · All Rights Reserved
      </div>
    </footer>
  );
}
