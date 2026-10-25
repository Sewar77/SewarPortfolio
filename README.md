# Sewar Al-Shorman — Portfolio

A dark-first personal portfolio for Sewar Al-Shorman, Full Stack Developer and Software Development Trainer in Jordan. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Preview

<!-- Add a real screenshot after reviewing the deployed site. Example: ![Portfolio homepage](public/portfolio-screenshot.png) -->

Homepage sections include a small interactive terminal, selected work previews, about, skills, experience, teaching, current areas of study, GitHub, and contact. Two dedicated case studies live at `/work/training-center` and `/work/subh`.

The product previews are HTML/CSS concepts with **sample data**, not screenshots of the shipped products or evidence of project results.

## Stack and structure

- `src/app/` — App Router pages, global styles, metadata, Open Graph image, sitemap, robots, and manifest.
- `src/components/` — site navigation, animated reveals, previews, architecture diagram, and page sections.
- `src/data/portfolio.ts` — personal details, skills, experience, project summaries, and **all editable external links**.
- `src/data/case-studies.ts` — long-form case study copy.
- `public/projects/training-center/` and `public/projects/subh/` — locations for future product screenshots.

Most content renders as Server Components. Only navigation/theme state, terminal commands, and scroll reveals use Client Components.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before a release, run:

```bash
npm run typecheck
npm run lint
npm run build
```

Run `npm run format` to format the source files.

No backend, database, API keys, or secrets are required for this site.

## Customize before publishing

1. In `src/data/portfolio.ts`, replace `socials.email`, `socials.linkedin`, and `socials.cv`. Add your actual CV to `public/cv.pdf` and set `cv: "/cv.pdf"`, or use a hosted URL.
2. Add the real `github` and `demo` URL for each project in `src/data/portfolio.ts`. Until then, the UI labels the links as pending and does not send visitors to broken placeholder destinations.
3. Review every statement in `src/data/case-studies.ts` against the real implementation and replace conceptual wording with verified details where appropriate.
4. Add real screenshots to `public/projects/training-center/` and `public/projects/subh/`. Replace `<TrainingPreview />` and `<SubhPreview />` in `src/components/home-sections.tsx` and `src/app/work/[slug]/page.tsx` with `next/image` components. Use descriptive `alt` text and specify dimensions or `fill` with a sized container. The source components are in `src/components/project-previews.tsx`.
5. Set `NEXT_PUBLIC_SITE_URL` to your final HTTPS domain. It is used for canonical metadata, the sitemap, structured data, and social previews. Copy `.env.example` to `.env.local` for local testing if needed.
6. Add a homepage screenshot to this README after checking the final site on desktop and mobile.

## Deploy to Vercel

Push the repository to GitHub, import it at [Vercel](https://vercel.com/new), set `NEXT_PUBLIC_SITE_URL` to the final site URL, and deploy. Vercel detects Next.js automatically. After adding a custom domain, update the environment variable and redeploy so the canonical URLs and sitemap use that domain.

## Accessibility and performance notes

The site uses semantic sections, visible focus rings, a skip link, keyboard-operable navigation and terminal buttons, reduced-motion styles, and no remote content dependency. Previews use CSS rather than large images. When replacing them with screenshots, compress assets and use `next/image`.
