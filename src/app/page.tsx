import Image from "next/image";
import { ProductCatalog } from "@/components/storefront/product-catalog";
import Link from "next/link";
import { Hero } from "@/components/storefront/hero";

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <main className="mx-auto w-full max-w-8xl flex-1 py-8">
      <Hero />
      <div className="mb-8 space-y-2 px-12">
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
