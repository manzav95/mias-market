import { faqs } from "@/data/faq";

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
          Local pickup only — we do not ship. Order by email using Select Items on
          this site. General topics first, then one question per product category.
        </p>
        <dl className="mt-10 space-y-6">
          {faqs.map((item) => (
            <div
              key={item.id}
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
