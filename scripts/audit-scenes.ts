/**
 * Audit aller Bild-Lektionen: Szenenanzahl je Niveau (Referenz = Bäckerei),
 * Bildabdeckung und offene Motive. Aufruf: bun scripts/audit-scenes.ts
 */
import { createClient } from "@supabase/supabase-js";
import { applyTopicSceneImages, REFERENCE_LEVEL_SCENES, TOPIC_SCENE_IMAGES } from "../src/lib/scene-types";

const supabase = createClient(process.env["VITE_SUPABASE_URL"]!, process.env["VITE_SUPABASE_PUBLISHABLE_KEY"]!);

const { data: lessons, error } = await supabase
  .from("lessons")
  .select("id,slug,topic_slug,topic_title,level,thumbnail_key")
  .order("topic_slug");
if (error) throw error;

const { data: allScenes } = await supabase
  .from("lesson_scenes")
  .select("lesson_id,position,german_text,image_key")
  .order("position");

const byLesson = new Map<string, any[]>();
for (const s of (allScenes ?? []) as any[]) {
  const list = byLesson.get(s.lesson_id) ?? [];
  list.push(s);
  byLesson.set(s.lesson_id, list);
}

type Row = { topic: string; level: string; scenes: number; soll: number; ownSet: boolean; open: number[] };
const rows: Row[] = [];

for (const l of (lessons ?? []) as any[]) {
  const raw = byLesson.get(l.id) ?? [];
  const resolved = applyTopicSceneImages(l.topic_slug, l.thumbnail_key, raw as any);
  rows.push({
    topic: l.topic_slug ?? l.slug,
    level: l.level,
    scenes: raw.length,
    soll: REFERENCE_LEVEL_SCENES[l.level] ?? 0,
    ownSet: !!TOPIC_SCENE_IMAGES[l.topic_slug],
    open: resolved.filter((s) => s.needs_image).map((s) => s.position),
  });
}

const topics = [...new Set(rows.map((r) => r.topic))].sort();
console.log("Thema".padEnd(24), "Niveau", "Szenen/Soll", "Bildsatz", "offene Motive");
for (const t of topics) {
  for (const lvl of ["A1", "A2", "B1", "B2"]) {
    const r = rows.find((x) => x.topic === t && x.level === lvl);
    if (!r) continue;
    console.log(
      t.padEnd(24),
      lvl.padEnd(6),
      `${r.scenes}/${r.soll}`.padEnd(11),
      (r.ownSet ? "eigen" : "FEHLT").padEnd(8),
      r.open.length ? r.open.join(",") : "0",
    );
  }
}
console.log("\nThemen mit eigenem Bildsatz:", Object.keys(TOPIC_SCENE_IMAGES).join(", "));
console.log("Referenz je Niveau:", JSON.stringify(REFERENCE_LEVEL_SCENES));
