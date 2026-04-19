import { ORDER_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-lilac-soft/60 to-cream py-14 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold text-grape md:text-5xl">
            Contact
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-grape/85">
            Want to say hi, ask about custom colors, or check on an order? Email
            us — we read every message with care.
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
        <div className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-card">
          <h2 className="font-display text-2xl font-semibold text-grape">
            Send a note (preview)
          </h2>
          <p className="mt-2 font-body text-sm text-grape/75">
            This form is a visual mock — it does not post anywhere yet. Use the
            email button or your own mail app for real messages.
          </p>
          <div className="mt-6 space-y-4" role="group" aria-label="Contact form preview">
            <label className="block font-body text-xs font-bold uppercase tracking-wide text-grape/70">
              Name
              <input
                className="mt-1 w-full rounded-xl border border-lilac/60 bg-cream/60 px-3 py-2 font-body text-sm text-grape"
                placeholder="Your name"
              />
            </label>
            <label className="block font-body text-xs font-bold uppercase tracking-wide text-grape/70">
              Email
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-lilac/60 bg-cream/60 px-3 py-2 font-body text-sm text-grape"
                placeholder="you@example.com"
              />
            </label>
            <label className="block font-body text-xs font-bold uppercase tracking-wide text-grape/70">
              Message
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border border-lilac/60 bg-cream/60 px-3 py-2 font-body text-sm text-grape"
                placeholder="Tell us what you are dreaming up…"
              />
            </label>
            <button
              type="button"
              className="w-full rounded-full bg-lilac-deep/90 py-3 font-display text-sm font-semibold text-white opacity-70"
              disabled
            >
              Send (connect later)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
