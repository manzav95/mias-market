const items = [
  {
    title: "Handmade with Love",
    body: "Each piece is made by hand with care & creativity.",
    icon: "heart",
  },
  {
    title: "Cute & Unique",
    body: "Fun, colorful designs you won't find anywhere else!",
    icon: "flower",
  },
  {
    title: "Perfect for Gifting",
    body: "Sweet little pieces that make the best gifts.",
    icon: "sparkle",
  },
  {
    title: "Small Business",
    body: "Supporting big dreams & a happy heart.",
    icon: "bolt",
  },
] as const;

export function ValuePropsSection() {
  return (
    <section className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl font-semibold text-grape md:text-4xl">
          <span aria-hidden>💖 </span>
          WHY YOU&apos;LL LOVE IT HERE
          <span aria-hidden> 💖</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-lilac/40 bg-white/90 p-6 text-center shadow-card transition hover:-translate-y-0.5"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac-soft text-grapemuted">
                <ValueIcon type={item.icon} />
              </div>
              <h3 className="font-body text-lg font-bold text-grape">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-grape/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueIcon({ type }: { type: (typeof items)[number]["icon"] }) {
  switch (type) {
    case "heart":
      return (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 21s-6.716-4.436-9-8.5C.5 8.5 2.5 5 6 5c2.1 0 3.6 1.3 4 2.1.4-.8 1.9-2.1 4-2.1 3.5 0 5.5 3.5 3 7.5-2.284 4.064-9 8.5-9 8.5Z" />
        </svg>
      );
    case "flower":
      return (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 3.2c.9 1.1 1.1 2.4.6 3.8.9-.3 1.9-.2 2.8.3-.9.5-1.5 1.3-1.7 2.3 1.3-.3 2.5.1 3.4 1-.9.6-2 .8-3.1.4.9.9 1.3 2.1 1.1 3.4-1.1-.2-2.1-.9-2.7-1.9.1 1.1-.3 2.2-1.1 3-1-.8-1.4-2-1.1-3.2-.7 1-1.7 1.7-2.9 1.9-.2-1.3.2-2.5 1.1-3.4-1.1.4-2.2.2-3.1-.4.9-.9 2.1-1.3 3.4-1-.2-1-.8-1.8-1.7-2.3.9-.5 1.9-.6 2.8-.3-.5-1.4-.3-2.7.6-3.8.5 1.1 1.5 1.9 2.7 2.1-.8-1-1-2.3-.6-3.6Z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path
            className="text-amber-400"
            d="M12 2l1.2 4.2L17 8l-3.8 1.8L12 14l-1.2-4.2L7 8l3.8-1.8L12 2Zm6 10l.8 2.8 2.8.8-2.8.8-.8 2.8-.8-2.8-2.8-.8 2.8-.8.8-2.8Z"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
        </svg>
      );
    default:
      return null;
  }
}
