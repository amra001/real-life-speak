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

/* --- Foto-Storys: mehrere Bilder pro Lektion (visuelle Szenengruppen) --- */
import s_bus_haltestelle from '@/assets/scene-bus-haltestelle.jpg';
import s_bus_ankunft from '@/assets/scene-bus-ankunft.jpg';
import s_bus_einsteigen from '@/assets/scene-bus-einsteigen.jpg';
import s_bus_fahrer from '@/assets/scene-bus-fahrer.jpg';
import s_bus_bezahlen from '@/assets/scene-bus-bezahlen.jpg';
import s_bus_fahrkarte from '@/assets/scene-bus-fahrkarte.jpg';
import s_bus_sitzplatz from '@/assets/scene-bus-sitzplatz.jpg';
import s_bus_sitzen from '@/assets/scene-bus-sitzen.jpg';
import s_bus_fahrgast from '@/assets/scene-bus-fahrgast.jpg';
import s_bus_aussteigen from '@/assets/scene-bus-aussteigen.jpg';
import s_markt_eingang from '@/assets/scene-markt-eingang.jpg';
import s_markt_wagen from '@/assets/scene-markt-wagen.jpg';
import s_markt_brot from '@/assets/scene-markt-brot.jpg';
import s_markt_milch from '@/assets/scene-markt-milch.jpg';
import s_markt_mitarbeiter from '@/assets/scene-markt-mitarbeiter.jpg';
import s_markt_obst from '@/assets/scene-markt-obst.jpg';
import s_markt_kasse from '@/assets/scene-markt-kasse.jpg';
import s_markt_karte from '@/assets/scene-markt-karte.jpg';
import s_markt_ausgang from '@/assets/scene-markt-ausgang.jpg';
import s_baeck_eintreten from '@/assets/scene-baeck-eintreten.jpg';
import s_baeck_auslage from '@/assets/scene-baeck-auslage.jpg';
import s_baeck_bestellen from '@/assets/scene-baeck-bestellen.jpg';
import s_baeck_schneiden from '@/assets/scene-baeck-schneiden.jpg';
import s_baeck_gebaeck from '@/assets/scene-baeck-gebaeck.jpg';
import s_baeck_allergie from '@/assets/scene-baeck-allergie.jpg';
import s_baeck_bezahlen from '@/assets/scene-baeck-bezahlen.jpg';
import s_baeck_erhalten from '@/assets/scene-baeck-erhalten.jpg';

/* --- Neue, geprüfte Bäckerei-Fotostory: 15 unterschiedliche Fotos --- */
import s_bakery_01 from '@/assets/scene-bakery-01.webp';
import s_bakery_02 from '@/assets/scene-bakery-02.webp';
import s_bakery_03 from '@/assets/scene-bakery-03.webp';
import s_bakery_04 from '@/assets/scene-bakery-04.webp';
import s_bakery_05 from '@/assets/scene-bakery-05.webp';
import s_bakery_06 from '@/assets/scene-bakery-06.webp';
import s_bakery_07 from '@/assets/scene-bakery-07.webp';
import s_bakery_08 from '@/assets/scene-bakery-08.webp';
import s_bakery_09 from '@/assets/scene-bakery-09.webp';
import s_bakery_10 from '@/assets/scene-bakery-10.webp';
import s_bakery_11 from '@/assets/scene-bakery-11.webp';
import s_bakery_12 from '@/assets/scene-bakery-12.webp';
import s_bakery_13 from '@/assets/scene-bakery-13.webp';
import s_bakery_14 from '@/assets/scene-bakery-14.webp';
import s_bakery_15 from '@/assets/scene-bakery-15.webp';

export const SCENE_IMAGES: Record<string,string> = {
  'bus-haltestelle': s_bus_haltestelle,
  'bus-ankunft': s_bus_ankunft,
  'bus-einsteigen': s_bus_einsteigen,
  'bus-fahrer': s_bus_fahrer,
  'bus-bezahlen': s_bus_bezahlen,
  'bus-fahrkarte': s_bus_fahrkarte,
  'bus-sitzplatz': s_bus_sitzplatz,
  'bus-sitzen': s_bus_sitzen,
  'bus-fahrgast': s_bus_fahrgast,
  'bus-aussteigen': s_bus_aussteigen,
  'markt-eingang': s_markt_eingang,
  'markt-wagen': s_markt_wagen,
  'markt-brot': s_markt_brot,
  'markt-milch': s_markt_milch,
  'markt-mitarbeiter': s_markt_mitarbeiter,
  'markt-obst': s_markt_obst,
  'markt-kasse': s_markt_kasse,
  'markt-karte': s_markt_karte,
  'markt-ausgang': s_markt_ausgang,
  'baeck-eintreten': s_baeck_eintreten,
  'baeck-auslage': s_baeck_auslage,
  'baeck-bestellen': s_baeck_bestellen,
  'baeck-schneiden': s_baeck_schneiden,
  'baeck-gebaeck': s_baeck_gebaeck,
  'baeck-allergie': s_baeck_allergie,
  'baeck-bezahlen': s_baeck_bezahlen,
  'baeck-erhalten': s_baeck_erhalten,
  'baeck-new-01': s_bakery_01,
  'baeck-new-02': s_bakery_02,
  'baeck-new-03': s_bakery_03,
  'baeck-new-04': s_bakery_04,
  'baeck-new-05': s_bakery_05,
  'baeck-new-06': s_bakery_06,
  'baeck-new-07': s_bakery_07,
  'baeck-new-08': s_bakery_08,
  'baeck-new-09': s_bakery_09,
  'baeck-new-10': s_bakery_10,
  'baeck-new-11': s_bakery_11,
  'baeck-new-12': s_bakery_12,
  'baeck-new-13': s_bakery_13,
  'baeck-new-14': s_bakery_14,
  'baeck-new-15': s_bakery_15,
};
Object.assign(LESSON_IMAGES, SCENE_IMAGES);
