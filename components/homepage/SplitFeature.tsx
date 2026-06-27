import Image from "next/image";

type FeatureItem = {
  title: string;
  description: string;
};

type SplitFeatureProps = {
  heading: string;
  imageAlt: string;
  imageHeight: number;
  imagePosition: "left" | "right";
  imageSrc: string;
  imageWidth: number;
  items: FeatureItem[];
};

export function SplitFeature({
  heading,
  imageAlt,
  imageHeight,
  imagePosition,
  imageSrc,
  imageWidth,
  items,
}: SplitFeatureProps) {
  const textPanel = (
    <div className="bg-subtle-grid">
      <div className="flex min-h-[520px] flex-col justify-center">
        <div className="px-8 py-14 md:px-16">
          <h2 className="max-w-[360px] text-[38px] font-semibold leading-[44px] text-text-slate">
            {heading}
          </h2>
        </div>
        <div className="border-y border-border bg-surface">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`border-border px-8 py-8 md:px-16 ${
                index > 0 ? "border-t" : "border-l-2 border-l-accent"
              }`}
            >
              <h3 className="text-base font-semibold leading-6 text-text-darker">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[430px] text-sm font-medium leading-6 text-text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

  const imagePanel = (
    <div className="flex min-h-[520px] items-center justify-center bg-surface-muted px-8 py-16 md:px-12">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full max-w-[620px]"
      />
    </div>
  );

  return (
    <section className="mx-auto max-w-[1352px] px-6">
      <div className="border-x border-b border-border">
        <div className="grid overflow-hidden md:grid-cols-2">
          {imagePosition === "left" ? imagePanel : textPanel}
          {imagePosition === "left" ? textPanel : imagePanel}
        </div>
        <div className="bg-diagonal-band h-20 border-t border-border" />
      </div>
    </section>
  );
}
