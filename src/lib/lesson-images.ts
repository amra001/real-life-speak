import supermarkt from "@/assets/lesson-supermarkt.jpg";
import baeckerei from "@/assets/lesson-baeckerei.jpg";
import hausarzt from "@/assets/lesson-hausarzt.jpg";
import baustelle from "@/assets/lesson-baustelle.jpg";
import bewerbung from "@/assets/lesson-bewerbung.jpg";
import milch from "@/assets/lesson-milch.jpg";
import bus from "@/assets/lesson-bus.jpg";
import restaurant from "@/assets/lesson-restaurant.jpg";
import kleidung from "@/assets/lesson-kleidung.jpg";
import bank from "@/assets/lesson-bank.jpg";
import apotheke from "@/assets/lesson-apotheke.jpg";
import wohnung from "@/assets/lesson-wohnung.jpg";
import reparatur from "@/assets/lesson-reparatur.jpg";
import bahnhof from "@/assets/lesson-bahnhof.jpg";
import schule from "@/assets/lesson-schule.jpg";
import buero from "@/assets/lesson-buero.jpg";
import kueche from "@/assets/lesson-kueche.jpg";
import pflege from "@/assets/lesson-pflege.jpg";
import kasse from "@/assets/lesson-kasse.jpg";
import lager from "@/assets/lesson-lager.jpg";

export const LESSON_IMAGES: Record<string, string> = {
  supermarkt,
  baeckerei,
  hausarzt,
  baustelle,
  bewerbung,
  milch,
  bus,
  restaurant,
  kleidung,
  bank,
  apotheke,
  wohnung,
  reparatur,
  bahnhof,
  schule,
  buero,
  kueche,
  pflege,
  kasse,
  lager,
  arzt: hausarzt,
  sicherheit: baustelle,
  "patienten-ansprechen": pflege,
  "erster-arbeitstag": buero,
  "wohnung-besichtigen": wohnung,
  elternabend: schule,
};

export const THUMBNAIL_KEYS = Object.keys(LESSON_IMAGES);

export function lessonImage(key: string | null | undefined): string {
  if (key && LESSON_IMAGES[key]) return LESSON_IMAGES[key];
  return supermarkt;
}

export { milch as sceneImage };
