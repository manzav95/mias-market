const faqs = [
  {
    q: "How do I order?",
    a: "Browse the Shop page or home categories, tap Select Items, then open the Selected Items panel from the header. When you are ready, press Email My Order Request — your mail app opens with everything listed for you.",
  },
  {
    q: "Do you ship or offer local pickup?",
    a: "This demo site does not process shipping. When you email us, tell us your ZIP code or city and whether you prefer mail or local pickup. We will reply with what is possible for your area.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Venmo, Apple Pay, Zelle, and cash in person for local meets. After we confirm your order by email, we will share the right payment details for the method you choose.",
  },
  {
    q: "Are items really handmade?",
    a: "Yes! Pieces are assembled and finished by hand, so tiny variations are normal — that is part of the charm.",
  },
  {
    q: "Can I request custom items?",
    a: "Absolutely. Add notes next to each selected item, or send a longer message in your email. Custom work depends on timing and materials, and we will always confirm before making anything special.",
  },
] as const;

export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <div className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-center font-display text-4xl font-semibold text-grape md:text-5xl">
          FAQ
        </h1>
        <p className="mt-3 text-center font-body text-grape/80">
          Quick answers about ordering, payments, and handmade goodies.
        </p>
        <dl className="mt-10 space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[1.75rem] border border-lilac/50 bg-white/90 p-6 shadow-card"
            >
              <dt className="font-body text-lg font-bold text-grape">{item.q}</dt>
              <dd className="mt-2 font-body text-sm leading-relaxed text-grape/80">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
