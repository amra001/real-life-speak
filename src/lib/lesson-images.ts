import supermarkt from "@/assets/lesson-supermarkt.jpg";
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

/* Einheitlicher Bäckerei-Illustrationssatz: 01–10 */
import bakery01 from "@/assets/bakery-illustrated-01.webp"; // Begrüßung / Gespräch an der Theke
import bakery02 from "@/assets/bakery-illustrated-02.webp"; // Mara schaut die Auslage an
import bakery03 from "@/assets/bakery-illustrated-03.webp"; // Verkäuferin zeigt zwei Kuchenoptionen
import bakery04 from "@/assets/bakery-illustrated-04.webp"; // Mara wählt / zeigt auf Gebäck
import bakery05 from "@/assets/bakery-illustrated-05.webp"; // Übergabe eines Kuchenstücks
import bakery06 from "@/assets/bakery-illustrated-06.webp"; // Brot + Schneidemaschine, vor dem Schneiden
import bakery07 from "@/assets/bakery-illustrated-07.webp"; // Brot wird tatsächlich geschnitten
import bakery08 from "@/assets/bakery-illustrated-08.webp"; // Kasse / Tüte / Preis
import bakery09 from "@/assets/bakery-illustrated-09.webp"; // Kartenzahlung
import bakery10 from "@/assets/bakery-illustrated-10.webp"; // Tüte nehmen / Verabschiedung

export const LESSON_IMAGES: Record<string, string> = {
  supermarkt,
  baeckerei: bakery02,
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

/* --- Weitere Fotostorys --- */
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

  /* Semantische Bäckerei-Schlüssel */
  'baeck-eintreten': bakery02,
  'baeck-auslage': bakery02,
  'baeck-bestellen': bakery01,
  'baeck-schneiden': bakery07,
  'baeck-gebaeck': bakery04,
  'baeck-allergie': bakery03,
  'baeck-bezahlen': bakery09,
  'baeck-erhalten': bakery10,

  /* Die bestehenden sequenziellen Keys werden nach Szeneninhalt gemappt. */
  'baeck-new-01': bakery02,
  'baeck-new-02': bakery02,
  'baeck-new-03': bakery02,
  'baeck-new-04': bakery01,
  'baeck-new-05': bakery04,
  'baeck-new-06': bakery05,
  'baeck-new-07': bakery06,
  'baeck-new-08': bakery06,
  'baeck-new-09': bakery06,
  'baeck-new-10': bakery07,
  'baeck-new-11': bakery08,
  'baeck-new-12': bakery08,
  'baeck-new-13': bakery03,
  'baeck-new-14': bakery09,
  'baeck-new-15': bakery10,

  /* Direkte Keys für spätere exakte Zuordnung. */
  'baeck-ill-01': bakery01,
  'baeck-ill-02': bakery02,
  'baeck-ill-03': bakery03,
  'baeck-ill-04': bakery04,
  'baeck-ill-05': bakery05,
  'baeck-ill-06': bakery06,
  'baeck-ill-07': bakery07,
  'baeck-ill-08': bakery08,
  'baeck-ill-09': bakery09,
  'baeck-ill-10': bakery10,
};
Object.assign(LESSON_IMAGES, SCENE_IMAGES);
