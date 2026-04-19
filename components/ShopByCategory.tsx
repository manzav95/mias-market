"use client";

import { categoryShowcase } from "@/data/categories";
import { getProductById } from "@/data/products";
import { CategoryCard } from "@/components/CategoryCard";
import { useSelectedItems } from "@/context/SelectedItemsContext";

export function ShopByCategory() {
  const { addOrIncrement } = useSelectedItems();
  const firstRow = categoryShowcase.slice(0, 5);
  const secondRow = categoryShowcase.slice(5);

  const handleSelect = (productId: string, fallbackTitle: string, price: string) => {
    const product = getProductById(productId);
    if (product) {
      addOrIncrement({
        id: product.id,
        name: product.name,
        price: product.price,
      });
    } else {
      addOrIncrement({
        id: productId,
        name: fallbackTitle,
        price,
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-cream py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl font-semibold text-grape md:text-4xl">
          <span aria-hidden>💖 </span>
          SHOP BY CATEGORY
          <span aria-hidden> 💖</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
          {firstRow.map((c) => (
            <CategoryCard
              key={c.id}
              image={c.image}
              title={c.title}
              price={c.price}
              cardTint={c.cardTint}
              onSelect={() =>
                handleSelect(c.productId, c.title, c.price)
              }
            />
          ))}
        </div>
        <div className="mx-auto mt-6 flex max-w-4xl justify-center">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5">
            {secondRow.map((c) => (
              <CategoryCard
                key={c.id}
                image={c.image}
                title={c.title}
                price={c.price}
                cardTint={c.cardTint}
                onSelect={() =>
                  handleSelect(c.productId, c.title, c.price)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
