import Link from "next/link";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-[1352px] px-6">
      <div className="bg-soft-glow border-x border-b border-border px-6 py-20 text-center md:py-24">
        <h2 className="mx-auto max-w-[720px] text-[42px] font-semibold leading-[48px] text-text-slate md:text-[50px] md:leading-[58px]">
          Your next job search can feel a lot less overwhelming
        </h2>
        <p className="mx-auto mt-7 max-w-[640px] text-sm font-medium leading-5 text-text-secondary">
          Set up your profile, upload your resume, and start finding matches in
          minutes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/login"
            className="rounded-md bg-overlay px-6 py-3 text-sm font-medium leading-5 text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-overlay-dark hover:shadow-card active:translate-y-0"
          >
            Get Started &gt;
          </Link>
          <Link
            href="/find-jobs"
            className="rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium leading-5 text-text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-surface-secondary hover:shadow-card active:translate-y-0"
          >
            Find Your First Match
          </Link>
        </div>
      </div>
      <div className="bg-diagonal-band h-20 border-x border-b border-border" />
    </section>
  );
}
