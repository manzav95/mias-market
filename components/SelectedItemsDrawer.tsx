"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import {
  type PaymentPreference,
  useSelectedItems,
} from "@/context/SelectedItemsContext";
import { ORDER_EMAIL } from "@/lib/constants";
import { orderRequestMailtoHref } from "@/lib/mailto";

const paymentChoices: PaymentPreference[] = [
  "Venmo",
  "Apple Pay",
  "Zelle",
  "Cash in person",
];

export function SelectedItemsDrawer() {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const {
    items,
    drawerOpen,
    setDrawerOpen,
    removeLine,
    setQuantity,
    setNote,
    paymentPreference,
    setPaymentPreference,
  } = useSelectedItems();

  const onClose = useCallback(() => setDrawerOpen(false), [setDrawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen, onClose]);

  const mailto =
    items.length > 0
      ? orderRequestMailtoHref(ORDER_EMAIL, items, paymentPreference)
      : undefined;

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        drawerOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!drawerOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-grape/40 backdrop-blur-sm transition-opacity ${
          drawerOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        tabIndex={drawerOpen ? 0 : -1}
        aria-label="Close selected items"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-lilac/40 bg-white/80 px-5 py-4">
          <div>
            <h2
              id={titleId}
              className="font-display text-xl font-semibold text-grape"
            >
              Selected Items
            </h2>
            <p className="mt-1 font-body text-sm text-grape/75">
              No checkout here — email us your wish list when you&apos;re ready.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-full bg-lilac-soft px-3 py-1 font-body text-sm font-bold text-grape transition hover:bg-lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-lilac-deep/30 bg-white/70 p-6 text-center font-body text-sm text-grape/80">
              Tap{" "}
              <span className="font-semibold text-grapemuted">
                Select Items
              </span>{" "}
              on the home page or in the shop — your picks will show up here.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((line) => (
                <li
                  key={line.id}
                  className="rounded-2xl border border-lilac/50 bg-white/90 p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-body text-base font-bold text-grape">
                        {line.name}
                      </p>
                      <p className="font-body text-sm font-semibold text-grapemuted">
                        {line.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(line.id)}
                      className="shrink-0 rounded-full px-2 py-1 text-xs font-bold text-pink-600 underline-offset-2 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <label className="mt-3 block font-body text-xs font-bold uppercase tracking-wide text-grape/70">
                    Qty
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={line.quantity}
                      onChange={(e) =>
                        setQuantity(line.id, Number(e.target.value))
                      }
                      className="mt-1 w-24 rounded-xl border border-lilac/60 bg-white px-2 py-1 font-body text-sm text-grape"
                    />
                  </label>
                  <label className="mt-3 block font-body text-xs font-bold uppercase tracking-wide text-grape/70">
                    Note <span className="font-medium">(optional)</span>
                    <input
                      type="text"
                      value={line.note}
                      onChange={(e) => setNote(line.id, e.target.value)}
                      placeholder="Color, charm style, pickup time…"
                      className="mt-1 w-full rounded-xl border border-lilac/60 bg-white px-3 py-2 font-body text-sm text-grape"
                    />
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-lilac/40 bg-white/90 px-5 py-4">
          <p className="font-body text-xs font-bold uppercase tracking-wide text-grape/70">
            Preferred payment method
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {paymentChoices.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPaymentPreference(p)}
                className={`rounded-full px-3 py-1.5 font-body text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape ${
                  paymentPreference === p
                    ? "bg-grapemuted text-white"
                    : "bg-lilac-soft text-grape hover:bg-lilac"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          {items.length > 0 && mailto ? (
            <a
              href={mailto}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-grapemuted py-3 font-display text-base font-semibold text-white shadow-float transition hover:bg-grape focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape"
            >
              Email My Order Request
            </a>
          ) : (
            <span className="mt-4 flex w-full cursor-not-allowed items-center justify-center rounded-full bg-grape/30 py-3 font-display text-base font-semibold text-white/90">
              Email My Order Request
            </span>
          )}
          <p className="mt-2 text-center font-body text-[11px] text-grape/60">
            Opens your email app to {ORDER_EMAIL}
          </p>
        </div>
      </aside>
    </div>
  );
}
