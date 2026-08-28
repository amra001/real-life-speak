import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SERVICE_PAGES, servicePage } from "@/lib/services";

export const Route = createFileRoute("/job-bewerbung/$slug")({
  loader: ({ params }) => {
    const page = servicePage(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Nicht gefunden" }, { name: "robots", content: "noindex" }] };
    }
    const { page } = loaderData;
    const title = `${page.title} – RealLife German`;
    return {
      meta: [
        { title },
        { name: "description", content: page.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: page.metaDescription },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { page } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        to="/job-bewerbung"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="mr-1 h-4 w-4" /> Job &amp; Bewerbung
      </Link>

      <h1 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">{page.headline}</h1>
      <p className="mt-3 text-muted-foreground md:text-lg">{page.intro}</p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {page.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button asChild size="lg">
          <a href="#anfrage">{page.ctaLabel}</a>
        </Button>
      </div>

      <div className="mt-12">
        <InquiryForm
          kind="bewerbung"
          {...(page.productSlug ? { productSlug: page.productSlug } : {})}
          title={page.ctaLabel}
          compact
        />
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-xl font-semibold">Weitere Leistungen</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {SERVICE_PAGES.filter((s) => s.slug !== page.slug).map((s) => (
            <Link
              key={s.slug}
              to="/job-bewerbung/$slug"
              params={{ slug: s.slug }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-muted"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
