import Image from "next/image";
import Link from "next/link";
import { miaHeroIntrinsicSize, miaShowcase } from "@/lib/mia-showcase-assets";

/** Hero uses the banner at its natural aspect ratio (width / height from source file). */
export function HeroSection() {
  const { width, height } = miaHeroIntrinsicSize;

  return (
    <section className="border-b border-violet-300/40 bg-satin">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="relative w-full overflow-hidden">
          <Image
            src={miaShowcase.heroBanner}
            alt="Mia’s Mini Market — handmade accessories on lavender satin"
            width={width}
            height={height}
            priority
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="block h-auto w-full max-sm:scale-[1.02] max-sm:blur-sm max-sm:contrast-[0.97] align-middle"
          />
          {/* Mobile: blur-friendly plate so headline reads over busy photo */}
          <div
            className="pointer-events-none absolute inset-0 bg-[#ebe3fc]/45 backdrop-blur-md sm:hidden"
            aria-hidden
          />
          {/* sm+: left scrim over the satin side of the banner */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[42%] bg-gradient-to-r from-[#dfd5f8]/92 via-[#e8e0fc]/45 to-transparent sm:block"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center">
            <div className="flex w-full items-center px-4 py-5 sm:px-8 md:px-12 lg:px-16">
              <div className="max-w-[min(100%,22rem)] sm:max-w-md">
                <p className="font-display text-2xl font-bold leading-[1.1] tracking-tight text-grape drop-shadow-sm sm:text-4xl md:text-5xl lg:text-[2.75rem]">
                  PRETTY LITTLE THINGS{" "}
                  <span className="inline-block" aria-hidden>
                    💖
                  </span>
                </p>
                <p className="mt-2 font-body text-lg font-semibold italic text-pink-600 drop-shadow-sm sm:mt-3 sm:text-2xl md:text-3xl">
                  made just for you!
                </p>
                <p className="mt-3 font-body text-sm font-semibold leading-snug text-grape/90 drop-shadow-sm sm:mt-4 sm:text-base md:text-lg">
                  Handmade clay &amp; bedazzled accessories that add a little
                  magic to your day <span aria-hidden>✨</span>
                </p>
                <Link
                  href="/shop"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-grapemuted px-8 py-2.5 font-display text-base font-semibold text-white shadow-float transition hover:-translate-y-0.5 hover:bg-grape focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape sm:mt-8 sm:px-10 sm:py-3 sm:text-lg"
                >
                  SHOP NOW
                </Link>
              </div>
              <div className="hidden flex-1 sm:block" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
