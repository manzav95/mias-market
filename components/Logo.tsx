import Image from "next/image";
import Link from "next/link";
import { LOGO_IMAGE_PATH, SITE_NAME } from "@/lib/constants";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const useImage = LOGO_IMAGE_PATH.length > 0;

  if (useImage) {
    /** Transparent PNG — width % is of the link block (grid column / footer cell). */
    const imageClass = isLight
      ? "h-auto w-[70%] max-w-full object-contain object-left"
      : "h-auto w-[50%] max-w-full object-contain object-left";
    return (
      <Link
        href="/"
        className={`block w-full max-w-full min-w-0 ${className}`}
        aria-label={`${SITE_NAME} home`}
      >
        <Image
          src={`/images/${LOGO_IMAGE_PATH}`}
          alt={SITE_NAME}
          width={512}
          height={512}
          className={imageClass}
          priority
          sizes="(max-width: 768px) 50vw, 200px"
        />
      </Link>
    );
  }

  const ink = isLight ? "text-white" : "text-grapemuted";
  const stem = isLight ? "bg-white" : "bg-grapemuted";

  return (
    <Link
      href="/"
      className={`inline-flex flex-col leading-none ${className}`}
      aria-label={`${SITE_NAME} home`}
    >
      <span
        className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${ink}`}
        aria-hidden
      >
        <span className="inline-flex items-end gap-0.5">
          <span>M</span>
          <span className="relative flex flex-col items-center pb-1">
            <FlowerIcon
              className={isLight ? "text-pink-100" : "text-fuchsia-400"}
            />
            <span
              className={`mt-0.5 h-4 w-1.5 rounded-full ${stem}`}
            />
          </span>
          <span>&rsquo;s</span>
        </span>
      </span>
      <span
        className={`mt-1 flex items-center gap-1 font-body text-sm font-bold tracking-wide md:text-base ${
          isLight ? "text-pink-100" : "text-pink-500"
        }`}
        aria-hidden
      >
        <HeartTiny className={isLight ? "text-pink-200" : "text-pink-400"} />
        mini market
        <HeartTiny className={isLight ? "text-pink-200" : "text-pink-400"} />
      </span>
    </Link>
  );
}

function HeartTiny({ className }: { className?: string }) {
  return (
    <svg
      className={`h-3 w-3 shrink-0 ${className ?? ""}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 21s-6.716-4.436-9-8.5C.5 8.5 2.5 5 6 5c2.1 0 3.6 1.3 4 2.1.4-.8 1.9-2.1 4-2.1 3.5 0 5.5 3.5 3 7.5-2.284 4.064-9 8.5-9 8.5Z" />
    </svg>
  );
}

function FlowerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 md:h-6 md:w-6 ${className ?? ""}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 3.2c.9 1.1 1.1 2.4.6 3.8.9-.3 1.9-.2 2.8.3-.9.5-1.5 1.3-1.7 2.3 1.3-.3 2.5.1 3.4 1-.9.6-2 .8-3.1.4.9.9 1.3 2.1 1.1 3.4-1.1-.2-2.1-.9-2.7-1.9.1 1.1-.3 2.2-1.1 3-1-.8-1.4-2-1.1-3.2-.7 1-1.7 1.7-2.9 1.9-.2-1.3.2-2.5 1.1-3.4-1.1.4-2.2.2-3.1-.4.9-.9 2.1-1.3 3.4-1-.2-1-.8-1.8-1.7-2.3.9-.5 1.9-.6 2.8-.3-.5-1.4-.3-2.7.6-3.8.5 1.1 1.5 1.9 2.7 2.1-.8-1-1-2.3-.6-3.6Z" />
    </svg>
  );
}
