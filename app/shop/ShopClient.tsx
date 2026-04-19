"use client";

import { useMemo, useState } from "react";
import { PaymentOptions } from "@/components/PaymentOptions";
import { ProductCard } from "@/components/ProductCard";
import { useSelectedItems } from "@/context/SelectedItemsContext";
import { productsByCategory } from "@/data/products";
import type { Product, ProductCategory } from "@/types/product";

const allLabel = "All";

export function ShopClient() {
  const { addOrIncrement } = useSelectedItems();
  const grouped = useMemo(() => productsByCategory(), []);
  const categories = useMemo(
    () => [allLabel, ...Object.keys(grouped)] as const,
    [grouped],
  );
  const [filter, setFilter] = useState<(typeof categories)[number]>(allLabel);

  const visible = useMemo(() => {
    if (filter === allLabel) {
      return Object.entries(grouped) as [ProductCategory, Product[]][];
    }
    const key = filter as ProductCategory;
    return [[key, grouped[key] ?? []] as [ProductCategory, Product[]]];
  }, [filter, grouped]);

  return (
    <div className="bg-gradient-to-b from-lilac-soft/50 to-cream pb-16 pt-10">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-grape/60">
          Browse the market
        </p>
        <h1
          id="browse"
          className="mt-2 text-center font-display text-4xl font-semibold text-grape md:text-5xl"
        >
          Shop
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center font-body text-base text-grape/80">
          Pick your favorites, then tap{" "}
          <span className="font-semibold text-grapemuted">Select Items</span> and
          use{" "}
          <span className="font-semibold text-grapemuted">Selected Items</span>{" "}
          in the header to email your order. No checkout wizard — just cute stuff
          and good vibes.
        </p>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter by category"
        >
          {categories.map((cat) => {
            const selected = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 font-body text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape ${
                  selected
                    ? "bg-grapemuted text-white shadow-md"
                    : "bg-white/80 text-grape hover:bg-lilac-soft"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="mt-12 space-y-14">
          {visible.map(([category, list]) =>
            list.length ? (
              <section key={category} aria-labelledby={`cat-${category}`}>
                <h2
                  id={`cat-${category}`}
                  className="font-display text-2xl font-semibold text-grape"
                >
                  {category}
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelect={(p) =>
                        addOrIncrement({
                          id: p.id,
                          name: p.name,
                          price: p.price,
                        })
                      }
                    />
                  ))}
                </div>
              </section>
            ) : null,
          )}
        </div>

        <div className="mt-16">
          <PaymentOptions id="payment-shop" compact />
        </div>
      </div>
    </div>
  );
}
