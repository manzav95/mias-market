import { publicUrl } from "@/lib/publicUrl";

/**
 * Product photography derived from `public/images/mia-showcase-composite.png`.
 * The composite was split with macOS `sips` (hero = top ~50%, row2 = five tiles, row3 = three tiles).
 * Replace `mia-showcase-composite.png` and re-run the crop commands in README if you update the master art.
 */
/** Natural pixel size of `mia-hero-source.png` — update if you replace the file. */
export const miaHeroIntrinsicSize = { width: 1024, height: 409 } as const;

export const miaShowcase = {
  composite: publicUrl("/images/mia-showcase-composite.png"),
  /** Full-resolution wide banner — displayed at native aspect ratio (not stretched). */
  heroBanner: publicUrl("/images/mia-hero-source.png"),
  tiles: {
    /** Dedicated product shot (replaces composite tile). */
    hairClips: publicUrl("/images/mia-hair-claw-clips.png"),
    /** Dedicated product shot for Pipe Cleaner Animals (replaces composite tile). */
    plush: publicUrl("/images/mia-pipe-cleaner-animals.png"),
    /** Dedicated product shot for Clay Items (replaces composite tile). */
    charms: publicUrl("/images/mia-clay-items.png"),
    /** Dedicated product shot for Pipe Cleaner Bouquet (replaces composite tile). */
    bouquet: publicUrl("/images/mia-pipe-cleaner-bouquet.png"),
    /** Dedicated product shot for Clay Keychains (replaces composite tile). */
    keychains: publicUrl("/images/mia-clay-keychains.png"),
    /** Dedicated product shot for Balloon Squishies (replaces composite tile). */
    balloons: publicUrl("/images/mia-balloon-squishies.png"),
    /** Dedicated product shot for Bracelets (replaces composite tile). */
    bracelets: publicUrl("/images/mia-bracelets.png"),
    /** Dedicated product shot for Bedazzled Items (replaces composite tile). */
    bedazzled: publicUrl("/images/mia-bedazzled-items.png"),
  },
} as const;
