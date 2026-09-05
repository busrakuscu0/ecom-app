export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 overflow-hidden bg-[#2C2A27]">
      <img
        src="https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1800&h=1200&fit=crop&auto=format"
        alt="Warm, minimal living room with large windows and organic furniture"
        className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105"
        style={{ transformOrigin: "center center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C2A27]/70 via-[#2C2A27]/30 to-transparent" />
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-xl">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#FAF8F4]/70 mb-4">
            Autumn Collection — 2026
          </p>
          <h1 className="font-serif text-5xl lg:text-7xl font-300 text-[#FAF8F4] leading-[1.05] mb-6">
            The Art of
            <br />
            <em className="not-italic text-[#C4704A]">Coming Home</em>
          </h1>
          <p className="font-sans text-base text-[#FAF8F4]/80 leading-relaxed mb-8 max-w-sm">
            Pieces that wear their origins well. Designed to live with you, not
            just beside you.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FAF8F4] text-[#2C2A27] font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#C4704A] hover:text-[#FAF8F4] transition-colors duration-200">
              Shop the Collection
            </button>
            <button className="border border-[#FAF8F4]/60 text-[#FAF8F4] font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-[#FAF8F4] transition-colors duration-200">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 lg:right-12 flex items-center gap-2 text-[#FAF8F4]/60">
        <div className="w-12 h-px bg-[#FAF8F4]/40" />
        <span className="font-sans text-xs tracking-widest uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}
