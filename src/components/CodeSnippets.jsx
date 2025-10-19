import { useMemo, useState } from "react";
import { Copy, Check, Code2 } from "lucide-react";

const tabs = [
  { id: "javascript", label: "JavaScript" },
  { id: "react-native", label: "React Native" },
  { id: "curl", label: "cURL" },
];

export default function CodeSnippets() {
  const [active, setActive] = useState("javascript");
  const [copied, setCopied] = useState(false);

  const code = useMemo(() => {
    switch (active) {
      case "react-native":
        return `import { Auth } from "@vanish/auth";

export default function App() {
  return (
    <Button
      title="Sign in"
      onPress={async () => {
        const user = await Auth.passkey();
        console.log(user); // { id, email }
      }}
    />
  );
}`;
      case "curl":
        return `curl -X POST \
  "$BACKEND/auth/verify" \
  -H "Content-Type: application/json" \
  -d '{"challenge":"<client_response>"}'`;
      default:
        return `import { auth } from "@vanish/auth";

await auth(); // one line. passwordless. done.`;
    }
  }, [active]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (_) {
      // ignore
    }
  };

  return (
    <section id="get-started" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
        <Code2 className="h-3.5 w-3.5 text-indigo-400" />
        <span>Drop-in snippet</span>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Add biometrics in one line</h2>
          <p className="mt-1 text-white/70">Copy, paste, and ship. Works on web and mobile. Bring your own backend.</p>
        </div>

        <div className="flex rounded-lg border border-white/10 bg-white/5 p-1 text-sm">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-md px-3 py-1.5 transition ${
                active === t.id ? "bg-white text-black" : "text-white/80 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0f]">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            <span>vanish.ts</span>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 transition hover:bg-white/10"
            aria-label="Copy snippet"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-white/90">
          <code>
            {code}
          </code>
        </pre>
      </div>

      <p className="mt-3 text-xs text-white/50">Use the environment variable from your workspace to point to your API. No secrets in the client.</p>
    </section>
  );
}
