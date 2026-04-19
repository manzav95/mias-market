import type { PaymentPreference, SelectedLine } from "@/context/SelectedItemsContext";
import {
  computeOrderSubtotal,
  formatUsd,
  lineSubtotalDollars,
} from "@/lib/order-price";

export function buildOrderRequestBody(
  lines: SelectedLine[],
  payment: PaymentPreference,
  customerName: string,
): string {
  const list = lines
    .map((l) => {
      const sub = lineSubtotalDollars(l);
      const pricePart = sub !== null ? ` — ${formatUsd(sub)}` : "";
      let block = `• ${l.name} x ${l.quantity} (${l.price})${pricePart}`;
      const note = l.note.trim();
      if (note) block += `\n  Note: ${note}`;
      return block;
    })
    .join("\n\n");

  const subtotalInfo = computeOrderSubtotal(lines);
  const totalBlock =
    subtotalInfo !== null
      ? subtotalInfo.isEstimate
        ? `\nEstimated subtotal (ranges use a midpoint): ${formatUsd(subtotalInfo.subtotal)}`
        : `\nEstimated subtotal: ${formatUsd(subtotalInfo.subtotal)}`
      : "\nEstimated subtotal: (see prices above; Mia will confirm the total)";

  return `Hi! I would like to purchase the following item(s):

${list}
${totalBlock}

Preferred payment method:
${payment}

From:
${customerName}

Thank you!`;
}

/**
 * Build mailto URL. Uses encodeURIComponent (spaces → %20) so clients show real
 * spaces — URLSearchParams uses + which many mail apps display literally.
 */
export function orderRequestMailtoHref(
  to: string,
  lines: SelectedLine[],
  payment: PaymentPreference,
  customerName: string,
): string {
  const subject = "Mia’s Mini Market Order Request";
  const body = buildOrderRequestBody(lines, payment, customerName);
  const q = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${to}?${q}`;
}
