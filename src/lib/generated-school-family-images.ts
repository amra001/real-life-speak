import elternsprechtag from "@/lib/generated-elternsprechtag-image";
import kindergarten from "@/lib/generated-kindergarten-image";
import schule from "@/lib/generated-schule-image";
import lehrer from "@/lib/generated-lehrer-image";
import kindKrank from "@/lib/generated-kind-krank-image";

const GENERATED_SCHOOL_FAMILY_IMAGES: Record<string, string> = {
  elternsprechtag,
  kindergarten,
  schule,
  lehrer,
  "kind-krank": kindKrank,
};

export function generatedSchoolFamilyImage(topicSlug: string | null | undefined): string | undefined {
  if (!topicSlug) return undefined;
  return GENERATED_SCHOOL_FAMILY_IMAGES[topicSlug];
}
