import { ArrowRight, Shield, Fingerprint } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[100px]" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Shield className="h-3.5 w-3.5 text-emerald-400" />
          <span>Passkeys • Face ID • Touch ID</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-[1.05] text-transparent sm:text-6xl">
          Auth that disappears.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">
          Passwordless authentication your users actually enjoy. Add biometrics to your app with one line of code — no OTPs, no friction, just magic.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black shadow/20 shadow-black/20 transition hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Get started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#docs"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            View docs
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12">
          <p className="text-xs uppercase tracking-widest text-white/40">Trusted by builders at</p>
          <div className="mt-4 grid grid-cols-2 gap-6 opacity-80 sm:grid-cols-4">
            <Logo text="Acme" />
            <Logo text="Hyper" />
            <Logo text="Northwind" />
            <Logo text="Pulse" />
          </div>
        </div>

        {/* Biometric card */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <div className="flex items-center gap-3 text-white/80">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10">
              <Fingerprint className="h-4 w-4 text-emerald-400" />
            </span>
            <div>
              <p className="text-sm font-medium">Biometric-first</p>
              <p className="text-xs text-white/60">Works out of the box with passkeys on all modern devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logo({ text }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
      <div className="h-5 w-5 rounded bg-white/20" />
      <span className="text-sm font-medium text-white/70">{text}</span>
    </div>
  );
}
