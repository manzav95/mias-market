export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-blush/40 to-cream py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-grape/60">
          My story
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-grape md:text-5xl">
          About me
        </h1>
        <div className="mt-8 space-y-5 text-left font-body text-lg leading-relaxed text-grape/85">
          <p>
            I&apos;m Mia, and Mia&apos;s Mini Market is the little shop I dreamed
            up. I&apos;m ten and excited to run my own mini market. I spend my
            time making things I genuinely love, and I want those creations to
            land in your hands so they can make you smile, too.
          </p>
          <p>
            Every piece is handmade with care: clay charms and keychains, pipe
            cleaner bouquets and fuzzy friends, sparkly bracelets, balloon
            squishies, bedazzled goodies, and more, often with my own playful
            twist. Many items can be{" "}
            <span className="font-semibold text-grape">made to order</span> or{" "}
            <span className="font-semibold text-grape">customized</span>; if you
            have a color, theme, or idea in mind, say so in your email and
            we&apos;ll see what&apos;s possible together.
          </p>
          <p>
            There are no factory rows here, just glue, glitter, patience, and
            the fun of building something tiny that feels special. Thank you for
            cheering me on and supporting handmade work. When you order, my mom and dad help me with email and pickup so everything stays smooth and
            safe.
          </p>
          <p className="text-center font-body text-base italic text-grape/75">
            Happy making, happy gifting, welcome to the market.{" "}
            <span aria-hidden>✨</span>
          </p>
        </div>
      </div>
    </div>
  );
}
