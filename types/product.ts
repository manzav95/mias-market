export type ProductCategory =
  | "Hair Claw Clips"
  | "Pipe Cleaner Animals"
  | "Clay Items"
  | "Pipe Cleaner Bouquet"
  | "Clay Keychains"
  | "Balloon Squishies"
  | "Bracelets"
  | "Bedazzled Items";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  /** Display string, e.g. "$5" or "$3 small / $5 big" */
  price: string;
  image: string;
  description: string;
};

export type CategoryShowcase = {
  id: string;
  title: string;
  price: string;
  image: string;
  /** Links to first product id in shop or category anchor */
  productId: string;
  cardTint: "blush" | "lilac" | "cream" | "sky";
};
