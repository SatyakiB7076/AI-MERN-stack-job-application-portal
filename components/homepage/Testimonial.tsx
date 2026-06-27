import Image from "next/image";

export function Testimonial() {
  return (
    <section className="mx-auto max-w-[1352px] px-6">
      <div className="border-x border-b border-border bg-surface px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase leading-4 tracking-[0.14em] text-accent">
          Success Stories
        </p>
        <blockquote className="mx-auto mt-6 max-w-[820px] text-[28px] font-medium leading-[38px] text-text-darker">
          &quot;I used to spend my evenings copy-pasting resumes. Now I open my
          dashboard to see interviews waiting. It feels like cheating. Had 3
          offers on the table simultaneously.&quot;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Image
            src="/public/images/user-icon.png"
            alt="Tom Wilson"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <div className="text-left">
            <p className="text-sm font-semibold leading-5 text-text-primary">
              Tom Wilson
            </p>
            <p className="text-xs font-medium leading-4 text-text-secondary">
              Junior Developer
            </p>
          </div>
        </div>
      </div>
      <div className="bg-diagonal-band h-20 border-x border-b border-border" />
    </section>
  );
}
