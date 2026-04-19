import type { Product, ProductCategory } from "@/types/product";
import { miaShowcase } from "@/lib/mia-showcase-assets";

const T = miaShowcase.tiles;

const imageByCategory: Record<ProductCategory, string> = {
  "Hair Claw Clips": T.hairClips,
  "Pipe Cleaner Animals": T.plush,
  "Clay Items": T.charms,
  "Pipe Cleaner Bouquet": T.bouquet,
  "Clay Keychains": T.keychains,
  "Balloon Squishies": T.balloons,
  Bracelets: T.bracelets,
  "Bedazzled Items": T.bedazzled,
};

function imageForCategory(category: ProductCategory): string {
  return imageByCategory[category];
}

function p(
  partial: Omit<Product, "image"> & { category: ProductCategory },
): Product {
  return { ...partial, image: imageForCategory(partial.category) };
}

/** Full shop inventory — each item uses the matching tile from Mia’s showcase composite. */
export const products: Product[] = [
  p({
    id: "p-hair-claw-small",
    name: "Small Hair Claw Clip",
    category: "Hair Claw Clips",
    price: "$3",
    description: "Tiny claws in candy colors — perfect for half-ups and pigtails.",
  }),
  p({
    id: "p-hair-claw-big",
    name: "Big Hair Claw Clip",
    category: "Hair Claw Clips",
    price: "$5",
    description: "Extra hold for thick hair, still lightweight and comfy.",
  }),
  p({
    id: "p-pipe-fox",
    name: "Pipe Cleaner Fox Friend",
    category: "Pipe Cleaner Animals",
    price: "$3",
    description: "Fluffy little desk buddy made by hand.",
  }),
  p({
    id: "p-pipe-bunny",
    name: "Pipe Cleaner Bunny",
    category: "Pipe Cleaner Animals",
    price: "$3",
    description: "Soft pastels and the sweetest ears.",
  }),
  p({
    id: "p-clay-mushroom",
    name: "Clay Mushroom Charm",
    category: "Clay Items",
    price: "$4",
    description: "Glossy glaze and dreamy cottage-core vibes.",
  }),
  p({
    id: "p-clay-bow",
    name: "Clay Bow Trinket Dish",
    category: "Clay Items",
    price: "$5",
    description: "Catch rings and tiny treasures on your nightstand.",
  }),
  p({
    id: "p-bouquet-mini",
    name: "Mini Pipe Cleaner Bouquet",
    category: "Pipe Cleaner Bouquet",
    price: "$7",
    description: "Pastel stems wrapped in ribbon — adorable on a shelf.",
  }),
  p({
    id: "p-bouquet-deluxe",
    name: "Deluxe Pipe Cleaner Bouquet",
    category: "Pipe Cleaner Bouquet",
    price: "$10",
    description: "More blooms, more sparkle, more joy.",
  }),
  p({
    id: "p-keychain-star",
    name: "Clay Star Keychain",
    category: "Clay Keychains",
    price: "$3",
    description: "Chunky star with a glossy finish and sturdy ring.",
  }),
  p({
    id: "p-keychain-heart",
    name: "Clay Heart Keychain",
    category: "Clay Keychains",
    price: "$4",
    description: "Puffy heart in your choice of pastel (note in request).",
  }),
  p({
    id: "p-squishy-pastel",
    name: "Pastel Balloon Squishy Pair",
    category: "Balloon Squishies",
    price: "$3",
    description: "Two tiny squishies — great for party favors.",
  }),
  p({
    id: "p-bracelet-beads",
    name: "Beaded Stretch Bracelet",
    category: "Bracelets",
    price: "$2",
    description: "Stretchy, stackable, and full of happy colors.",
  }),
  p({
    id: "p-bracelet-charm",
    name: "Charm Bracelet",
    category: "Bracelets",
    price: "$1",
    description: "Dainty chain with a single cute charm.",
  }),
  p({
    id: "p-bedazzle-case",
    name: "Bedazzled Phone Case (template)",
    category: "Bedazzled Items",
    price: "$6",
    description: "Sparkle-forward case — tell us your phone model in notes.",
  }),
  p({
    id: "p-bedazzle-compact",
    name: "Bedazzled Compact Mirror",
    category: "Bedazzled Items",
    price: "$5",
    description: "Pocket mirror that shines like a disco dream.",
  }),
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function productsByCategory(): Record<string, Product[]> {
  return products.reduce<Record<string, Product[]>>((acc, product) => {
    const key = product.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
  }, {});
}
