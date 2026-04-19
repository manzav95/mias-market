import Image from "next/image";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-lilac/40 bg-white/90 p-4 shadow-card transition hover:-translate-y-1 hover:shadow-float">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-blush/40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
      </div>
      <h3 className="mt-4 font-body text-lg font-bold text-grape">
        {product.name}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 font-body text-sm text-grape/80">
        {product.description}
      </p>
      <p className="mt-3 font-body text-sm font-bold text-grapemuted">
        {product.price}
      </p>
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="mt-4 w-full rounded-full bg-grapemuted py-2.5 font-display text-sm font-semibold text-white transition hover:bg-grape focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape"
      >
        Select Items
      </button>
    </article>
  );
}
