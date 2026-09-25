import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";
const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, ...portfolio.projects.map(project => ({ url: `${base}/work/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))]; }
