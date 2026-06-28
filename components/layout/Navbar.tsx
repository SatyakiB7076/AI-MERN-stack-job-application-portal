import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/find-jobs", label: "Find Jobs" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  return (
    <header className="h-16 border-b border-border bg-surface">
      <div className="mx-auto flex h-full max-w-[1352px] items-center justify-between px-6">
        <Link href="/" aria-label="JobPilot home" className="flex items-center">
          <Image
            src="/public/logo.png"
            alt="JobPilot"
            width={118}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium leading-5 text-text-dark transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/login"
          className="rounded-md bg-overlay px-4 py-2 text-sm font-medium leading-5 text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-overlay-dark hover:shadow-card active:translate-y-0"
        >
          Start for free
        </Link>
      </div>
    </header>
  );
}
