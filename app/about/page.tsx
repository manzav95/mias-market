export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-blush/40 to-cream py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-grape/60">
          Our story
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-grape md:text-5xl">
          About Mia&apos;s Mini Market
        </h1>
        <div className="mt-8 space-y-5 text-left font-body text-lg leading-relaxed text-grape/85">
          <p>
            Mia&apos;s Mini Market is a tiny handmade studio filled with sparkly
            ideas, soft colors, and lots of love. We make clay charms, pipe cleaner
            friends, bracelets, and bedazzled goodies that feel like little gifts
            to your future self.
          </p>
          <p>
            Everything here is crafted slowly and cheerfully — no factory lines,
            just scissors, glitter, and big dreams. Thank you for supporting a
            small business and letting us sprinkle a bit of magic into your day.
          </p>
        </div>
      </div>
    </div>
  );
}
