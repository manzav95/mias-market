import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ORDER_EMAIL, SITE_NAME } from "@/lib/constants";

const quick = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-grapemuted text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Logo variant="light" />
          <p className="mt-4 font-body text-sm leading-relaxed text-white/90">
            Adding a little sparkle &amp; happiness to your everyday life. Thank
            you for supporting handmade! <span aria-hidden>♡</span>
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold tracking-wide">
            QUICK LINKS
          </h2>
          <ul className="mt-4 space-y-2 font-body text-sm font-semibold">
            {quick.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/90 transition hover:text-white hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold tracking-wide">
            CONTACT
          </h2>
          <p className="mt-4 font-body text-sm text-white/90">
            Questions or order requests? Email us anytime.
          </p>
          <a
            href={`mailto:${ORDER_EMAIL}`}
            className="mt-3 inline-block font-body text-sm font-bold text-white underline decoration-white/60 underline-offset-4 transition hover:decoration-white"
          >
            {ORDER_EMAIL}
          </a>
          <p className="mt-6 font-body text-xs text-white/70">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-white/10 p-5">
          <span
            className="pointer-events-none absolute right-3 top-3 text-2xl"
            aria-hidden
          >
            💗
          </span>
          <h2 className="font-display text-lg font-semibold tracking-wide">
            PAYMENT OPTIONS
          </h2>
          <p className="mt-2 font-body text-sm text-white/90">
            After you select items, send payment using:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <MiniBadge className="bg-sky-500">Venmo</MiniBadge>
            <MiniBadge className="bg-zinc-900">Apple Pay</MiniBadge>
            <MiniBadge className="bg-violet-700">Zelle</MiniBadge>
            <MiniBadge className="bg-emerald-500 text-emerald-950">
              Cash Accepted
            </MiniBadge>
          </div>
          <p className="mt-4 font-body text-xs text-white/80">
            Questions?{" "}
            <a className="font-semibold underline" href={`mailto:${ORDER_EMAIL}`}>
              {ORDER_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function MiniBadge({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 font-display text-xs font-semibold text-white ${className}`}
    >
      {children}
    </span>
  );
}
