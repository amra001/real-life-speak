import supermarkt from "@/assets/lesson-supermarkt.jpg";
import baeckerei from "@/assets/lesson-baeckerei.jpg";
import hausarzt from "@/assets/lesson-hausarzt.jpg";
import baustelle from "@/assets/lesson-baustelle.jpg";
import bewerbung from "@/assets/lesson-bewerbung.jpg";
import milch from "@/assets/lesson-milch.jpg";

export const LESSON_IMAGES: Record<string, string> = {
  supermarkt,
  baeckerei,
  hausarzt,
  baustelle,
  bewerbung,
  milch,
};

export const THUMBNAIL_KEYS = Object.keys(LESSON_IMAGES);

export function lessonImage(key: string | null | undefined): string {
  if (key && LESSON_IMAGES[key]) return LESSON_IMAGES[key];
  return supermarkt;
}

export { milch as sceneImage };
