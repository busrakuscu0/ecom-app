import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pb-12 md:pb-20 overflow-hidden bg-secondary-foreground mb-8 md:mb-12">
      <Image
        width={500}
        height={500}
        src="/hero-image.avif"
        alt="Warm, minimal living room with large windows and organic furniture"
        className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-r from-chart-5/70 via-chart-5/60 to-transparent" />
      <div className="relative max-w-360 mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-lg">
          <p className="text-xs tracking-widest uppercase text-primary-foreground/70 mb-4 md:mb-6">
            Autumn Collection — 2026
          </p>
          <h1 className="text-5xl lg:text-7xl text-primary-foreground mb-4 md:mb-8">
            The Art of
            <br />
            <span className="text-primary">Coming Home</span>
          </h1>
          <p className="max-w-sm text-primary-foreground/90 mb-8">
            Pieces that wear their origins well. Designed to live with you, not
            just beside you.
          </p>
          <div className="flex gap-4 text-xs tracking-widest uppercase">
            <Link
              href="/products/collection"
              className="bg-primary-foreground text-secondary-foreground font-medium px-4 py-2 md:px-8 md:py-4 dark:bg-secondary dark:hover:bg-primary hover:bg-primary hover:text-primary-foreground"
            >
              Shop the Collection
            </Link>
            <Link
              href="/products/lookbok"
              className="border border-primary-foreground/50 text-primary-foreground font-medium px-8 py-4 hover:border-primary-foreground"
            >
              View Lookbook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
