import { createFileRoute } from "@tanstack/react-router";
import { StandardLessonPage } from "@/components/site/StandardLessonPage";

export const Route = createFileRoute("/lektion/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Lektion: ${params.slug.replace(/-/g, " ")} – RealLife German` },
      { name: "description", content: "Deutsch lernen mit 15 Alltagssituationen, Wortschatz, Bildaufgaben, Dialogen, Grammatik, Übungen und Abschlusstest." },
    ],
  }),
  component: LessonRoute,
});

function LessonRoute() {
  const { slug } = Route.useParams();
  return <StandardLessonPage slug={slug} />;
}
