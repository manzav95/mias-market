import type { SelectedLine } from "@/context/SelectedItemsContext";

/** Parse a display price label into one “unit” dollar amount for subtotals. */
export function parseUnitDollarsFromPriceLabel(price: string): number | null {
  const trimmed = price.trim();
  const twoFor = trimmed.match(/^(\d+)\s+for\s+\$(\d+(?:\.\d+)?)/i);
  if (twoFor) {
    const count = parseInt(twoFor[1], 10);
    const total = parseFloat(twoFor[2]);
    if (count > 0 && !Number.isNaN(total)) return total / count;
  }
  const amounts = [...trimmed.matchAll(/\$(\d+(?:\.\d+)?)/g)].map((m) =>
    parseFloat(m[1]),
  );
  if (amounts.length === 0) return null;
  if (amounts.length === 1) return amounts[0];
  const min = Math.min(...amounts);
  const max = Math.max(...amounts);
  return (min + max) / 2;
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function lineSubtotalDollars(line: SelectedLine): number | null {
  const unit = parseUnitDollarsFromPriceLabel(line.price);
  if (unit === null) return null;
  return unit * line.quantity;
}

export type OrderSubtotalResult = {
  subtotal: number;
  /** True when the label contained more than one $ amount or a “N for $X” bundle. */
  isEstimate: boolean;
};

function priceLabelLooksLikeRangeOrBundle(price: string): boolean {
  if (/^\d+\s+for\s+\$/i.test(price.trim())) return true;
  const dollarSigns = price.match(/\$/g);
  return (dollarSigns?.length ?? 0) > 1;
}

/**
 * Sum line subtotals when every line parses. Marks estimate when any label was
 * a range or bundle string.
 */
export function computeOrderSubtotal(
  lines: SelectedLine[],
): OrderSubtotalResult | null {
  if (lines.length === 0) return null;
  let sum = 0;
  let isEstimate = false;
  for (const line of lines) {
    const sub = lineSubtotalDollars(line);
    if (sub === null) return null;
    sum += sub;
    if (priceLabelLooksLikeRangeOrBundle(line.price)) isEstimate = true;
  }
  return { subtotal: sum, isEstimate };
}
