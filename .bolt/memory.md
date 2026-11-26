# Project memory

## Product intent & audience

- Personal portfolio for Aymen Zagnouni — multidisciplinary developer spanning software, IoT, electronics, robotics, and STEM education.
- Positioned as "where software meets the physical world"; differentiator is breadth across connected systems, hardware, and practical problem-solving.
- Target visitors: recruiters, collaborators, potential clients evaluating technical depth.
- PowerTracker and DOMFIX are the two flagship projects; EduTech Academy, robotics, smart-home, and electrical experience reinforce the broader identity.

## Brand personality & voice

- Engineering-grade, premium, technically sophisticated, personal, memorable.
- Avoids generic developer-portfolio tropes, repetitive service cards, admin-dashboard aesthetics, excessive neon/glassmorphism.
- Factual and honest — no invented experience, stats, testimonials, fake screenshots, or fabricated commercial deployments; conceptual mockups clearly labeled.

## Visual design & UX direction

- Dark canvas `#0B0E11`; primary accent electric lime `#CDF200`; secondary cyan `#35D6E6`.
- Headings: Space Grotesk. Body: Inter. Arabic: Noto Sans Arabic.
- Each section uses a distinct composition (split hero, two-column editorial, numbered grid, alternating full-width flagship banners, vertical timeline, dotted "Beyond Software", split contact) to avoid visual monotony.
- Hero features an animated circuit diagram radiating from an "AZ" core with floating discipline chips; reduced-motion respected.
- Responsive targets: 375 / 768 / 1024 / 1440 px.
- Accessibility: semantic landmarks, labeled form fields, keyboard nav, visible focus, aria-pressed language buttons, contrast, alt text, RTL accessibility.
- SEO: per-page unique metadata in FR/EN/AR, canonical URLs, Open Graph, social previews, sitemap, robots.txt, proper heading hierarchy.
- Performance: static pages, optimized images, minimal JS (~114 kB home first load).

## Decisions, constraints & rationale

- Stack: Next.js App Router, React, TypeScript, Tailwind CSS, Lucide React.
- i18n implemented as a lightweight built-in dictionary (FR default, EN, AR) instead of next-intl to avoid an unnecessary dependency for a single-page experience; Arabic auto-switches to RTL with mirrored arrows; language persists across visits.
- Contact form uses a genuine `mailto:` fallback with validation and a pre-filled email — no fake success messages; no backend built.
- Contact details (authoritative): aymenzagnouni@gmail.com · linkedin.com/in/aymenzagnouni · github.com/aymen-afamm · WhatsApp +212609139119 (wa.me/212609139119). No other social profiles.
- Contact headline: "Have an Idea Worth Building?" with the specified supporting text.
- Project case studies live at `/projects/powertracker` (lime energy theme), `/projects/domfix` (cyan smart-home theme), `/projects/edutech-academy`, each with "Next project" navigation and illustrative-mockup labeling.
- Footer kept minimal and elegant; navigation easy to use without excessive space.
- Production build passes cleanly; fixed a Tailwind config bug where a duplicated `colors` block removed the `border` color.
- Do not deploy until user reviews and approves.

## Open questions & assumptions

- Real production domain still needed — sitemap, robots, and metadata currently use placeholder `https://aymenzagnouni.dev`.
- CMC Rabat training start year shown as 2023 — needs confirmation.
- Electrical experience date shown as "since ~2018" — needs confirmation.
- DEUG and Baccalauréat displayed without dates due to an inconsistency the user flagged — needs confirmation.
- QuickControl presented as an exploratory concept, not a finished product — confirm framing.
- PowerTracker version details (e.g., Kotlin 2.2.21) shown as project-snapshot info — worth verifying against current source.
- User requested next-intl; a built-in dictionary was substituted — confirm this trade-off is acceptable or revisit.
- User requested Motion for React; implementation status of that library unclear from the delivery — confirm whether it was used or omitted.
- Responsive screenshots and accessibility/performance audits still require user-side visual review; could not be captured in-environment.