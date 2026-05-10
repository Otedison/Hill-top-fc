import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hilltop FC" },
      { name: "description", content: "Get in touch with Hilltop FC in Ruiru, Kenya — join the club, sponsor us, or send a message." },
      { property: "og:title", content: "Contact — Hilltop FC" },
      { property: "og:description", content: "Reach Hilltop Football Club in Ruiru, Kiambu County." },
    ],
  }),
  component: ContactPage,
});

const items = [
  { Icon: MapPin, label: "Location", value: "Ruiru, Kiambu County, Kenya" },
  { Icon: Mail, label: "Email", value: "info@hilltopfc.co.ke" },
  { Icon: Phone, label: "Phone", value: "+254 700 000 000" },
  { Icon: Clock, label: "Training", value: "Tue, Thu & Sat — 5:00 PM · Ruiru Stadium" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader eyebrow="Get in touch" title="Contact Us" intro="Want to join the squad, sponsor the club, or just say hello? We'd love to hear from you." />
      <section className="py-20">
        <div className="w-[min(1200px,92%)] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
            <div className="bg-green-deep text-cream p-8 rounded-sm border-t-4 border-gold">
              <h3 className="text-gold text-2xl mb-6">Reach the Club</h3>
              {items.map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-4 mb-5 items-start">
                  <Icon className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-xs tracking-[0.2em] uppercase text-gold mb-1">{label}</strong>
                    <span className="text-cream-dim text-sm">{value}</span>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 mt-8 pt-6 border-t border-[oklch(0.85_0.17_90/0.2)]">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-full bg-[oklch(0.85_0.17_90/0.18)] text-gold flex items-center justify-center hover:bg-gold hover:text-green-deep hover:-translate-y-1 transition-all"
                    aria-label="Social"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                setSubmitted(true);
                (e.currentTarget as HTMLFormElement).reset();
                setTimeout(() => setSubmitted(false), 4000);
              }}
              className="bg-card p-8 rounded-sm grid gap-5 shadow-sm"
            >
              {submitted && (
                <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-3 rounded-sm text-sm">
                  Thanks! We'll be in touch soon. ⚽
                </div>
              )}
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-foreground/70 mb-2">Name</label>
                <input required type="text" placeholder="Your full name" className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:border-green-soft" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-foreground/70 mb-2">Email</label>
                <input required type="email" placeholder="you@example.com" className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:border-green-soft" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-foreground/70 mb-2">Subject</label>
                <select required className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:border-green-soft" defaultValue="">
                  <option value="" disabled>Select a topic…</option>
                  <option>Join the Club</option>
                  <option>Sponsorship</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-foreground/70 mb-2">Message</label>
                <textarea required placeholder="Tell us a bit more…" className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:border-green-soft min-h-32 resize-y" />
              </div>
              <button
                type="submit"
                className="justify-self-start inline-flex items-center gap-2 px-7 py-4 bg-gold text-green-deep font-bold uppercase tracking-[0.15em] text-sm rounded-sm hover:-translate-y-0.5 hover:shadow-glow transition-all"
              >
                Send Message →
              </button>
            </form>
          </div>

          <div
            className="mt-14 aspect-[21/9] rounded-sm overflow-hidden flex items-center justify-center text-gold font-display tracking-[0.15em]"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.17 90 / 0.1), transparent), repeating-linear-gradient(45deg, oklch(0.40 0.08 145) 0 12px, oklch(0.30 0.06 145) 12px 24px)",
            }}
            role="img"
            aria-label="Map of Ruiru Stadium"
          >
            <div className="bg-green-deep px-6 py-3 rounded-sm border border-gold flex items-center gap-2">
              <MapPin size={18} /> Ruiru Stadium
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
