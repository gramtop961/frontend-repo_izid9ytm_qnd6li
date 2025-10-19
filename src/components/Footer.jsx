export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-white" />
          <span className="font-medium text-white">Vanish</span>
          <span className="hidden sm:inline">•</span>
          <span>Auth that disappears.</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          <a className="hover:text-white" href="#docs">Docs</a>
          <a className="hover:text-white" href="#security">Security</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
