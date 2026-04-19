import Image from "next/image";

const tintClass: Record<string, string> = {
  blush: "from-blush to-white",
  lilac: "from-lilac-soft to-white",
  cream: "from-amber-50 to-white",
  sky: "from-sky-100 to-white",
};

export type CategoryCardProps = {
  image: string;
  title: string;
  price: string;
  cardTint: keyof typeof tintClass;
  onSelect: () => void;
};

export function CategoryCard({
  image,
  title,
  price,
  cardTint,
  onSelect,
}: CategoryCardProps) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-b ${tintClass[cardTint]} p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float`}
    >
      <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-3xl bg-white/60">
        <Image
          src={image}
          alt=""
          role="presentation"
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
      <h3 className="mt-4 text-center font-body text-lg font-bold text-grape">
        {title}
      </h3>
      <p className="mt-1 text-center font-body text-sm font-semibold text-grape/70">
        {price}
      </p>
      <div className="mt-4 flex flex-1 items-end justify-center">
        <button
          type="button"
          onClick={onSelect}
          className="w-full rounded-full bg-grapemuted px-4 py-2 font-display text-sm font-semibold text-white shadow-sm transition hover:bg-grape focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape"
        >
          Select Items
        </button>
      </div>
    </article>
  );
}
