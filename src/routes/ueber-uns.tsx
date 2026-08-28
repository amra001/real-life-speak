import { createFileRoute } from "@tanstack/react-router";
import sceneImage from "@/assets/lesson-baeckerei.jpg";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – RealLife German" },
      {
        name: "description",
        content:
          "Warum RealLife German: Deutsch lernen an echten Alltags- und Berufssituationen statt an Grammatiktabellen.",
      },
      { property: "og:title", content: "Über uns – RealLife German" },
      {
        property: "og:description",
        content: "Unsere Idee: praxisnahe Deutsch-Lektionen für Alltag, Arbeit und Integration.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-3xl font-semibold md:text-4xl">Über RealLife German</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Viele Menschen lernen jahrelang Grammatik und stehen trotzdem sprachlos an der Kasse, beim
        Arzt oder im Bewerbungsgespräch. Genau da setzen wir an.
      </p>
      <img
        src={sceneImage}
        alt="Gespräch an der Theke einer deutschen Bäckerei"
        className="mt-10 aspect-[16/9] w-full rounded-3xl border border-border object-cover"
      />
      <div className="mt-10 space-y-5 text-base leading-relaxed">
        <p>
          Jede Lektion zeigt eine echte Situation: kurz, klar und in der Sprache, die auf der Straße
          gesprochen wird. Der deutsche Satz steht immer im Mittelpunkt, die Übersetzung steht
          klein darunter – auf Türkisch, Arabisch, Ukrainisch, BKS oder Rumänisch.
        </p>
        <p>
          Danach folgen Vokabeln, ein Dialog zum Nachsprechen und ein kurzes Quiz. So bleibt
          hängen, was du wirklich brauchst.
        </p>
        <p>
          Unsere Lektionen sind vorproduziert und redaktionell geprüft. Sie decken Alltag,
          Gesundheit, Wohnen, Verkehr, Schule und Familie sowie viele Berufsfelder ab – von der
          Pflege über die Gastronomie bis zur Baustelle. Für Deutschland und Österreich.
        </p>
      </div>
    </div>
  );
}
