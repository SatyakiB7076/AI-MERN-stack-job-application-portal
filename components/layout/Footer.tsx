import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Condition" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex min-h-36 max-w-[1352px] flex-col items-start justify-between gap-8 px-6 py-10 md:flex-row md:items-end">
        <Link href="/" aria-label="JobPilot home" className="flex items-center">
          <Image
            src="/public/logo.png"
            alt="JobPilot"
            width={118}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-8"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium leading-5 text-text-dark transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
