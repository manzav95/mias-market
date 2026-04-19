import { PAYMENT_DETAILS } from "@/lib/constants";

type PaymentOptionsProps = {
  id?: string;
  /** Slightly tighter on shop page */
  compact?: boolean;
};

export function PaymentOptions({ id, compact }: PaymentOptionsProps) {
  return (
    <section
      id={id}
      className={`rounded-[2rem] border border-lilac/50 bg-gradient-to-br from-white via-lilac-soft/40 to-blush/60 shadow-card ${
        compact ? "p-6 md:p-8" : "p-8 md:p-10"
      }`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2
            id={id ? `${id}-heading` : undefined}
            className="font-display text-2xl font-semibold text-grape md:text-3xl"
          >
            How to Pay
          </h2>
          <p className="mt-2 max-w-2xl font-body text-grape/85">
            After you send your item request by email, payment can be sent
            through Venmo, Apple Pay, Zelle, or cash in person. Details below are
            instructions only — nothing here charges a card automatically.
          </p>
        </div>
        <span className="text-3xl" aria-hidden>
          💌
        </span>
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PaymentBadge
          label="Venmo"
          hint="Send to:"
          value={PAYMENT_DETAILS.venmo}
          className="from-sky-500 to-blue-600"
        />
        <PaymentBadge
          label="Apple Pay"
          hint="Reach us at:"
          value={PAYMENT_DETAILS.applePay}
          className="from-zinc-800 to-zinc-950"
        />
        <PaymentBadge
          label="Zelle"
          hint="Send to:"
          value={PAYMENT_DETAILS.zelle}
          className="from-violet-600 to-purple-800"
        />
        <li className="flex flex-col justify-center rounded-2xl border-2 border-dashed border-emerald-400 bg-emerald-50/80 p-4 text-center font-body text-sm font-semibold text-emerald-900 shadow-sm">
          <span className="font-display text-lg text-emerald-800">
            Cash in person
          </span>
          <p className="mt-2 text-left text-xs font-medium leading-relaxed text-emerald-900/90">
            {PAYMENT_DETAILS.cashNote}
          </p>
        </li>
      </ul>
    </section>
  );
}

function PaymentBadge({
  label,
  hint,
  value,
  className,
}: {
  label: string;
  hint: string;
  value: string;
  className: string;
}) {
  return (
    <li
      className={`rounded-2xl bg-gradient-to-br p-4 text-white shadow-md ${className}`}
    >
      <p className="font-display text-lg tracking-wide">{label}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/80">
        {hint}
      </p>
      <p className="mt-1 font-body text-sm font-bold leading-snug">{value}</p>
    </li>
  );
}
