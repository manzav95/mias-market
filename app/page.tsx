import { HeroSection } from "@/components/HeroSection";
import { PaymentOptions } from "@/components/PaymentOptions";
import { ShopByCategory } from "@/components/ShopByCategory";
import { ValuePropsSection } from "@/components/ValuePropsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShopByCategory />
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <PaymentOptions id="payment-home" />
        </div>
      </section>
      <ValuePropsSection />
    </>
  );
}
