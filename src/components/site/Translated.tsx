/** Übersetzung mit klar sichtbarer Hilfssprache: "Ukrainisch: …". */
export function Translated({
  text,
  langLabel,
  className,
}: {
  text: string;
  langLabel: string;
  className?: string;
}) {
  if (!text) return null;
  return (
    <div className={className ?? "mt-1 text-sm text-muted-foreground"}>
      <span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground/80">
        {langLabel}:
      </span>
      <span dir="auto">{text}</span>
    </div>
  );
}
