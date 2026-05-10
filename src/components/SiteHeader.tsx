import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Shield } from "./Shield";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/fixtures", label: "Fixtures" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[oklch(0.22_0.04_145/0.88)] border-b border-[oklch(0.85_0.17_90/0.18)]">
      <div className="w-[min(1200px,92%)] mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 text-cream" onClick={() => setOpen(false)}>
          <Shield className="w-9 h-11 shrink-0" />
          <div className="leading-none">
            <div className="font-display font-black text-lg tracking-wide text-cream">HILLTOP FC</div>
            <div className="text-[0.65rem] tracking-[0.3em] text-gold mt-1 font-medium">RUIRU · KENYA</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative uppercase tracking-[0.12em] text-sm font-medium transition-colors py-1.5 ${
                  active ? "text-gold" : "text-cream hover:text-gold"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  } group-hover:w-full`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-cream p-2"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-green-deep border-t border-[oklch(0.85_0.17_90/0.18)]">
          <div className="w-[min(1200px,92%)] mx-auto py-4 flex flex-col gap-3">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`uppercase tracking-[0.15em] text-sm font-medium py-2 ${
                  pathname === l.to ? "text-gold" : "text-cream"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
