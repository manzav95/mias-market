import type { CategoryShowcase } from "@/types/product";
import { miaShowcase } from "@/lib/mia-showcase-assets";

const T = miaShowcase.tiles;

/** Home page “Shop by Category” cards — tiles match the composite grid (left→right, top then bottom row). */
export const categoryShowcase: CategoryShowcase[] = [
  {
    id: "cat-hair-claws",
    title: "Hair Claw Clips",
    price: "$3 small / $5 big",
    image: T.hairClips,
    productId: "p-hair-claw-small",
    cardTint: "blush",
  },
  {
    id: "cat-pipe-animals",
    title: "Pipe Cleaner Animals",
    price: "$3 each",
    image: T.plush,
    productId: "p-pipe-fox",
    cardTint: "lilac",
  },
  {
    id: "cat-clay",
    title: "Clay Items",
    price: "$3 – $5",
    image: T.charms,
    productId: "p-clay-mushroom",
    cardTint: "cream",
  },
  {
    id: "cat-bouquet",
    title: "Pipe Cleaner Bouquet",
    price: "$7 – $10",
    image: T.bouquet,
    productId: "p-bouquet-mini",
    cardTint: "sky",
  },
  {
    id: "cat-keychains",
    title: "Clay Keychains",
    price: "$3 – $5",
    image: T.keychains,
    productId: "p-keychain-star",
    cardTint: "blush",
  },
  {
    id: "cat-squishies",
    title: "Balloon Squishies",
    price: "2 for $3",
    image: T.balloons,
    productId: "p-squishy-pastel",
    cardTint: "lilac",
  },
  {
    id: "cat-bracelets",
    title: "Bracelets",
    price: "$1 – $2",
    image: T.bracelets,
    productId: "p-bracelet-beads",
    cardTint: "cream",
  },
  {
    id: "cat-bedazzled",
    title: "Bedazzled Items",
    price: "$3 – $6",
    image: T.bedazzled,
    productId: "p-bedazzle-case",
    cardTint: "sky",
  },
];
