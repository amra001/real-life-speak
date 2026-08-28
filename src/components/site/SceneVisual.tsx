type SceneVisualProps = {
  text: string;
  fallbackSrc: string;
  alt: string;
};

function visualFor(text: string) {
  const t = text.toLowerCase();
  if (t.includes("einkaufswagen")) return { emoji: "🛒", label: "Einkaufswagen", sub: "Am Eingang" };
  if (t.includes("brot")) return { emoji: "🥖", label: "Brot", sub: "Im Brotregal" };
  if (t.includes("milch")) return { emoji: "🥛", label: "Milch", sub: "Im Kühlregal" };
  if (t.includes("äpfel") || t.includes("apfel")) return { emoji: "🍎", label: "Äpfel", sub: "Obst & Gemüse" };
  if (t.includes("karte")) return { emoji: "💳", label: "Mit Karte bezahlen", sub: "An der Kasse" };
  if (t.includes("kasse")) return { emoji: "🧾", label: "Kasse", sub: "Bezahlen" };
  if (t.includes("wiedersehen")) return { emoji: "👋", label: "Auf Wiedersehen!", sub: "Der Einkauf ist fertig" };
  if (t.includes("danke")) return { emoji: "🙂", label: "Danke", sub: "Höflich sprechen" };
  if (t.includes("supermarkt")) return { emoji: "🏪", label: "Supermarkt", sub: "Wir gehen einkaufen" };
  return null;
}

export function SceneVisual({ text, fallbackSrc, alt }: SceneVisualProps) {
  const visual = visualFor(text);

  if (!visual) {
    return <img src={fallbackSrc} alt={alt} className="aspect-video w-full object-cover" />;
  }

  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-emerald-50 px-6 text-center">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(0,0,0,.05) 0 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative z-10 rounded-3xl border border-black/5 bg-white/85 px-10 py-8 shadow-sm backdrop-blur-sm">
        <div className="text-7xl md:text-8xl" aria-hidden>{visual.emoji}</div>
        <div className="mt-5 font-serif text-3xl font-semibold md:text-4xl">{visual.label}</div>
        <div className="mt-2 text-sm text-muted-foreground md:text-base">{visual.sub}</div>
      </div>
    </div>
  );
}
