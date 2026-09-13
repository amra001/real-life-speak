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
import elternsprechtagApproved from "@/lib/generated-elternsprechtag-image";
import kindergartenApproved from "@/lib/generated-kindergarten-image";
import schuleApproved from "@/lib/generated-schule-image";
import lehrerApproved from "@/lib/generated-lehrer-image";
import kindKrankApproved from "@/lib/generated-kind-krank-image";

/* Einheitlicher Bäckerei-Illustrationssatz: 01–10 */
import bakery01 from "@/assets/bakery-illustrated-01.webp";
import bakery02 from "@/assets/bakery-illustrated-02.webp";
import bakery03 from "@/assets/bakery-illustrated-03.webp";
import bakery04 from "@/assets/bakery-illustrated-04.webp";
import bakery05 from "@/assets/bakery-illustrated-05.webp";
import bakery06 from "@/assets/bakery-illustrated-06.webp";
import bakery07 from "@/assets/bakery-illustrated-07.webp";
import bakery08 from "@/assets/bakery-illustrated-08.webp";
import bakery09 from "@/assets/bakery-illustrated-09.webp";
import bakery10 from "@/assets/bakery-illustrated-10.webp";
import bakeryWindow from "@/assets/bakery-illustrated-window.jpg";
import bakeryStreet from "@/assets/bakery-illustrated-street.jpg";
import bakeryWallet from "@/assets/bakery-illustrated-wallet.jpg";
import bakeryReceipt from "@/assets/bakery-illustrated-receipt.jpg";
import bakeryWalkHome from "@/assets/bakery-illustrated-walk-home.jpg";
import friseurSalon from "@/assets/lessons/friseur-salon.png";

function placeDiagram(preposition: string): string {
  const positions: Record<string, { x: number; y: number; extra?: string }> = {
    auf: { x: 320, y: 72 },
    in: { x: 320, y: 185 },
    an: { x: 478, y: 185 },
    neben: { x: 520, y: 230 },
    hinter: { x: 320, y: 215 },
    vor: { x: 320, y: 300 },
    zwischen: { x: 320, y: 230, extra: "between" },
    "gegenüber": { x: 510, y: 230, extra: "opposite" },
  };
  const p = positions[preposition] ?? { x: 520, y: 230 };
  const between = p.extra === "between";
  const opposite = p.extra === "opposite";
  const ref1X = between ? 190 : opposite ? 190 : 255;
  const ref2 = between
    ? '<rect x="410" y="145" width="120" height="170" rx="18" fill="#ddd7cc" stroke="#292722" stroke-width="4"/>'
    : opposite
      ? '<rect x="430" y="145" width="120" height="170" rx="18" fill="#ddd7cc" stroke="#292722" stroke-width="4"/>'
      : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
    <rect width="640" height="360" fill="#f6f1e7"/>
    <rect x="${ref1X}" y="145" width="130" height="170" rx="18" fill="#ddd7cc" stroke="#292722" stroke-width="4"/>
    ${ref2}
    <circle cx="${p.x}" cy="${p.y}" r="38" fill="#c75b18" stroke="#292722" stroke-width="4"/>
    <text x="320" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#292722">${preposition.toUpperCase()}</text>
    <text x="320" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#6c675f">Orange = Position des Gegenstands</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

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
  schule: schuleApproved,
  buero,
  kueche,
  pflege,
  kasse,
  lager,
  elternsprechtag: elternsprechtagApproved,
  kindergarten: kindergartenApproved,
  lehrer: lehrerApproved,
  "kind-krank": kindKrankApproved,
  arzt: hausarzt,
  sicherheit: baustelle,
  "patienten-ansprechen": pflege,
  "erster-arbeitstag": buero,
  "wohnung-besichtigen": wohnung,
  elternabend: schuleApproved,
  "place-auf": placeDiagram("auf"),
  "place-in": placeDiagram("in"),
  "place-an": placeDiagram("an"),
  "place-neben": placeDiagram("neben"),
  "place-hinter": placeDiagram("hinter"),
  "place-vor": placeDiagram("vor"),
  "place-zwischen": placeDiagram("zwischen"),
  "place-gegenueber": placeDiagram("gegenüber"),
  "friseur-salon": friseurSalon,
};

export const THUMBNAIL_KEYS = Object.keys(LESSON_IMAGES);

export function lessonImage(key: string | null | undefined): string {
  if (key?.startsWith("data:image/")) return key;
  if (key && LESSON_IMAGES[key]) return LESSON_IMAGES[key];

  // Sequenzielle Szenenschlüssel wie kindergarten-02 oder kind-krank-11
  // dürfen niemals auf das allgemeine Supermarktbild zurückfallen.
  if (key) {
    const baseKey = key.replace(/-\d+$/, "");
    if (LESSON_IMAGES[baseKey]) return LESSON_IMAGES[baseKey];
  }

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

import apo_strasse from '@/assets/apo-strasse.jpg';
import apo_eingang from '@/assets/apo-eingang.jpg';
import apo_theke from '@/assets/apo-theke.jpg';
import apo_warten from '@/assets/apo-warten.jpg';
import apo_symptome from '@/assets/apo-symptome.jpg';
import apo_beratung from '@/assets/apo-beratung.jpg';
import apo_vergleich from '@/assets/apo-vergleich.jpg';
import apo_rezept from '@/assets/apo-rezept.jpg';
import apo_einnahme from '@/assets/apo-einnahme.jpg';
import apo_kasse from '@/assets/apo-kasse.jpg';
import apo_uebergabe from '@/assets/apo-uebergabe.jpg';
import apo_abschied from '@/assets/apo-abschied.jpg';

export const SCENE_IMAGES: Record<string,string> = {
  'apo-strasse': apo_strasse,
  'apo-eingang': apo_eingang,
  'apo-theke': apo_theke,
  'apo-warten': apo_warten,
  'apo-symptome': apo_symptome,
  'apo-beratung': apo_beratung,
  'apo-vergleich': apo_vergleich,
  'apo-rezept': apo_rezept,
  'apo-einnahme': apo_einnahme,
  'apo-kasse': apo_kasse,
  'apo-uebergabe': apo_uebergabe,
  'apo-abschied': apo_abschied,

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

  'baeck-eintreten': bakery02,
  'baeck-auslage': bakery02,
  'baeck-bestellen': bakery01,
  'baeck-schneiden': bakery07,
  'baeck-gebaeck': bakery04,
  'baeck-allergie': bakery03,
  'baeck-bezahlen': bakery09,
  'baeck-erhalten': bakery10,

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

  'baeck-fenster': bakeryWindow,
  'baeck-strasse': bakeryStreet,
  'baeck-wallet': bakeryWallet,
  'baeck-bon': bakeryReceipt,
  'baeck-heimweg': bakeryWalkHome,
};
Object.assign(LESSON_IMAGES, SCENE_IMAGES);
