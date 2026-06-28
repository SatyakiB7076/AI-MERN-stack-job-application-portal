# UI Registry

Living document. Updated after every component is built. Read this before building any new component - match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes - match its exact classes
3. If no - build it following ui-rules.md and ui-tokens.md, then add it here

After building any component - update this file with the component name, file path, and exact classes used.

---

## Components

### Navbar

File: components/layout/Navbar.tsx
Last updated: 2026-06-27

| Property         | Class                                                 |
| ---------------- | ----------------------------------------------------- |
| Background       | `bg-surface`                                          |
| Border           | `border-b border-border`                              |
| Border radius    | none                                                  |
| Text - primary   | `text-text-dark`                                      |
| Text - secondary | none                                                  |
| Spacing          | `h-16`, `px-6`, `gap-9`                               |
| Hover state      | `hover:text-accent`, `hover:-translate-y-0.5`, `hover:bg-overlay-dark`, `hover:shadow-card`, `active:translate-y-0` |
| Shadow           | none                                                  |
| Accent usage     | `bg-overlay`, `text-accent-foreground`, `text-accent` |

**Pattern notes:**
Top navigation is full width with a centered `max-w-[1352px]` inner row. Primary nav links use compact 14px medium text with color-only hover treatment. The primary CTA uses the dark overlay token with white foreground.

### Footer

File: components/layout/Footer.tsx
Last updated: 2026-06-27

| Property         | Class                            |
| ---------------- | -------------------------------- |
| Background       | `bg-surface`                     |
| Border           | `border-t border-border`         |
| Border radius    | none                             |
| Text - primary   | `text-text-dark`                 |
| Text - secondary | none                             |
| Spacing          | `px-6 py-10`, `gap-8`            |
| Hover state      | `hover:text-accent`              |
| Shadow           | none                             |
| Accent usage     | `hover:text-accent`              |

**Pattern notes:**
Footer mirrors the navbar width and logo treatment, with compact tokenized links aligned to the bottom on desktop and stacked on small screens.

### Hero

File: components/homepage/Hero.tsx
Last updated: 2026-06-27

| Property         | Class                                                 |
| ---------------- | ----------------------------------------------------- |
| Background       | `bg-surface`, `bg-soft-glow`, `bg-surface-tertiary`   |
| Border           | `border border-border`, `border-t border-border`      |
| Border radius    | none                                                  |
| Text - primary   | `text-text-slate`                                     |
| Text - secondary | `text-text-secondary`                                 |
| Spacing          | `px-6 pt-16`, `py-16`, `md:py-20`, `py-14`            |
| Hover state      | `hover:-translate-y-0.5`, `hover:bg-overlay-dark`, `hover:bg-surface-secondary`, `hover:border-accent`, `hover:shadow-card`, `active:translate-y-0` |
| Shadow           | image asset includes its own preview shadow           |
| Accent usage     | `bg-overlay`, `text-accent-foreground`                |

**Pattern notes:**
Landing hero uses the shared `bg-soft-glow` utility for the blue/pink ambient panel and keeps CTAs consistent with the navbar button pattern. Dashboard detail is rendered from the public asset for screenshot fidelity.

### SplitFeature

File: components/homepage/SplitFeature.tsx
Last updated: 2026-06-27

| Property         | Class                                                   |
| ---------------- | ------------------------------------------------------- |
| Background       | `bg-subtle-grid`, `bg-surface`, `bg-surface-muted`      |
| Border           | `border-x border-b border-border`, `border-t`           |
| Border radius    | none                                                    |
| Text - primary   | `text-text-slate`, `text-text-darker`                   |
| Text - secondary | `text-text-secondary`                                   |
| Spacing          | `px-8 py-14`, `md:px-16`, `px-8 py-8`, `md:px-12 py-16` |
| Hover state      | none                                                    |
| Shadow           | image assets include their own framed shadows           |
| Accent usage     | `border-l-2 border-l-accent`                            |

**Pattern notes:**
Split feature sections use a two-column editorial grid with one text panel and one muted image panel. The first feature item gets an accent left rule; following items are separated with token borders.

### Testimonial

File: components/homepage/Testimonial.tsx
Last updated: 2026-06-27

| Property         | Class                                   |
| ---------------- | --------------------------------------- |
| Background       | `bg-surface`                            |
| Border           | `border-x border-b border-border`       |
| Border radius    | `rounded-full` for avatar only          |
| Text - primary   | `text-text-darker`, `text-text-primary` |
| Text - secondary | `text-text-secondary`                   |
| Spacing          | `px-6 py-24`, `gap-3`                   |
| Hover state      | none                                    |
| Shadow           | none                                    |
| Accent usage     | `text-accent`                           |

**Pattern notes:**
Testimonial is centered and minimal. Eyebrow text uses accent color and uppercase tracking; quote text is larger than dashboard body text because this is a landing-page proof section.

### FinalCta

File: components/homepage/FinalCta.tsx
Last updated: 2026-06-27

| Property         | Class                                                 |
| ---------------- | ----------------------------------------------------- |
| Background       | `bg-soft-glow`                                        |
| Border           | `border-x border-b border-border`                     |
| Border radius    | none                                                  |
| Text - primary   | `text-text-slate`                                     |
| Text - secondary | `text-text-secondary`                                 |
| Spacing          | `px-6 py-20`, `md:py-24`, `gap-4`                     |
| Hover state      | `hover:-translate-y-0.5`, `hover:bg-overlay-dark`, `hover:bg-surface-secondary`, `hover:border-accent`, `hover:shadow-card`, `active:translate-y-0` |
| Shadow           | none                                                  |
| Accent usage     | `bg-overlay`, `text-accent-foreground`                |

**Pattern notes:**
Final CTA repeats the hero glow and CTA button treatments so the top and bottom conversion areas feel like the same component family.
