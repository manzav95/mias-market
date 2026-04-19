"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Logo } from "@/components/Logo";
import { useSelectedItems } from "@/context/SelectedItemsContext";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const { totalCount, setDrawerOpen } = useSelectedItems();

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      <AnnouncementBar />
      <div className="border-b border-lilac/40 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:py-4">
          <div className="shrink-0">
            <Logo />
          </div>
          <nav
            className="mx-auto hidden flex-1 justify-center gap-6 font-body text-sm font-bold text-grape md:flex lg:gap-8 lg:text-base"
            aria-label="Main"
          >
            {nav.map(({ href, label }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative transition hover:text-grapemuted ${
                    active ? "text-grapemuted" : ""
                  }`}
                >
                  {label}
                  {active ? (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-lilac-deep" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <IconLink href="/shop#browse" label="Search shop">
              <IconSearch />
            </IconLink>
            <IconLink href="/contact" label="Contact / profile">
              <IconUser />
            </IconLink>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="relative rounded-full p-2 text-grape transition hover:bg-lilac-soft hover:text-grapemuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape"
              aria-label={`Selected items, ${totalCount} selected`}
            >
              <IconBag />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-grapemuted px-1 text-[10px] font-bold text-white">
                {totalCount > 99 ? "99+" : totalCount}
              </span>
            </button>
          </div>
        </div>
        <div className="border-t border-lilac/30 bg-cream/95 px-4 pb-3 md:hidden">
          <nav
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-body text-sm font-bold text-grape"
            aria-label="Main mobile"
          >
            {nav.map(({ href, label }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-3 py-1 ${
                    active ? "bg-lilac-soft text-grapemuted" : ""
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-full p-2 text-grape transition hover:bg-lilac-soft hover:text-grapemuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape"
      aria-label={label}
    >
      {children}
    </Link>
  );
}

function IconSearch() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path d="m20 20-3-3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7" r="4" strokeWidth="2" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        d="M6 7h15l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 7V5a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
