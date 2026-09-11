import { ProductCatalog } from "@/components/storefront/product-catalog";
import { Hero } from "@/components/storefront/hero";

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <main className="mx-auto w-full max-w-8xl flex-1 px-4 py-6 md:px-6 md:py-8">
      <Hero />
      <div className="mb-6 md:mb-8 space-y-2 px-8 md:px-12">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Products
        </h1>
        <p className="text-sm text-muted-foreground">
          Browse our catalog. Filter by category or sort by name and price.
        </p>
      </div>
      <ProductCatalog searchParams={resolvedSearchParams} />
    </main>
  );
}
