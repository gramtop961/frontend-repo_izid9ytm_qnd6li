import Hero from "./components/Hero";
import CodeSnippets from "./components/CodeSnippets";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Hero />
      <CodeSnippets />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/30 blur-2xl" />
        <h3 className="text-2xl font-semibold">Ready when you are</h3>
        <p className="mt-1 max-w-2xl text-white/80">Spin up passwordless in minutes. Keep your stack, keep your users — just remove the passwords.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#get-started" className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:opacity-90">Start free</a>
          <a href="#docs" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10">Read docs</a>
        </div>
      </div>
    </section>
  );
}
