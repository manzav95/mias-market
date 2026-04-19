import { ORDER_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-lilac-soft/60 to-cream py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="font-display text-4xl font-semibold text-grape md:text-5xl">
          Contact
        </h1>
        <p className="mt-4 font-body text-base leading-relaxed text-grape/85">
          Want to say hi, ask about custom colors, or check on an order? Email
          us, we read every message with care.
        </p>
        <a
          href={`mailto:${ORDER_EMAIL}`}
          className="mt-6 inline-flex rounded-full bg-grapemuted px-6 py-3 font-display text-base font-semibold text-white shadow-float transition hover:bg-grape"
        >
          Email {ORDER_EMAIL}
        </a>
        <p className="mt-6 font-body text-sm text-grape/75">
          You can copy the address above if your mail app does not open
          automatically.
        </p>
      </div>
    </div>
  );
}
