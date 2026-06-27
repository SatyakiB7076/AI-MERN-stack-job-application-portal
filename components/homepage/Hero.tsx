import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1352px] px-6 pt-16">
      <div className="overflow-hidden border border-border bg-surface">
        <div className="bg-soft-glow px-6 py-16 text-center md:px-10 md:py-20">
          <h1 className="mx-auto max-w-[720px] text-[42px] font-bold leading-[48px] text-text-slate md:text-[56px] md:leading-[64px]">
            Job hunting is hard. Your tools shouldn&apos;t be.
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-sm font-medium leading-5 text-text-secondary">
            Stop applying blind. JobPilot finds the jobs, researches the
            companies, and gives you everything you need to stand out.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/login"
              className="rounded-md bg-overlay px-6 py-3 text-sm font-medium leading-5 text-accent-foreground transition-colors hover:bg-overlay-dark"
            >
              Get Started &gt;
            </Link>
            <Link
              href="/find-jobs"
              className="rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium leading-5 text-text-primary transition-colors hover:bg-surface-secondary"
            >
              Find Your First Match
            </Link>
          </div>
        </div>
        <div className="border-t border-border bg-surface-tertiary px-6 py-14 md:px-16">
          <Image
            src="/public/images/dashboard-demo.png"
            alt="JobPilot dashboard preview with job stats, recent activity, and research activity chart"
            width={4788}
            height={2416}
            priority
            className="mx-auto w-full max-w-[1130px]"
          />
        </div>
      </div>
    </section>
  );
}
