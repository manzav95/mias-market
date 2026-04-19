import type { PaymentPreference, SelectedLine } from "@/context/SelectedItemsContext";

export function buildOrderRequestBody(
  lines: SelectedLine[],
  payment: PaymentPreference,
): string {
  const list = lines
    .map((l) => {
      const line = `• ${l.name} x ${l.quantity}`;
      const note = l.note.trim();
      return note ? `${line}\n  Note: ${note}` : line;
    })
    .join("\n");

  return `Hi! I would like to purchase the following item(s):

${list}

Preferred payment method:
${payment}

My name:
[Your name here]

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
): string {
  const subject = "Mia’s Mini Market Order Request";
  const body = buildOrderRequestBody(lines, payment);
  const q = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${to}?${q}`;
}
