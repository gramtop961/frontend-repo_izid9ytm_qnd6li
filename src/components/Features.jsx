import { Shield, Zap, Fingerprint, Code2 } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Biometric by default",
    desc: "Passkeys on the web, Face ID/Touch ID on mobile — no passwords, no OTPs.",
  },
  {
    icon: Shield,
    title: "Battle‑tested security",
    desc: "FIDO2 and WebAuthn under the hood with device-bound keys and phishing resistance.",
  },
  {
    icon: Code2,
    title: "One line integration",
    desc: "Drop-in SDKs for the platforms you ship. Keep your existing user model.",
  },
  {
    icon: Zap,
    title: "Instant UX win",
    desc: "Sign-in completes in under a second. Users convert, support tickets vanish.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-b from-indigo-500/20 to-purple-500/20 text-indigo-300">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
