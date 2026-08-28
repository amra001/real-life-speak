import { Languages } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TRANSLATION_LANGS, type TranslationLang } from "@/lib/taxonomy";

export function TranslationControls({
  lang,
  setLang,
  visible,
  setVisible,
}: {
  lang: TranslationLang;
  setLang: (l: TranslationLang) => void;
  visible: boolean;
  setVisible: (v: boolean) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card px-4 py-3">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <Languages className="h-4 w-4" /> Übersetzung
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch id="tr-toggle" checked={visible} onCheckedChange={setVisible} />
          <Label htmlFor="tr-toggle" className="text-sm">
            {visible ? "An" : "Aus"}
          </Label>
        </div>
        <Select value={lang} onValueChange={(v) => setLang(v as TranslationLang)}>
          <SelectTrigger className="w-60">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {TRANSLATION_LANGS.map((l) => (
              <SelectItem key={l.code} value={l.code}>
                {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
