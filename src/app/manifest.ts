import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "Sewar Al-Shorman — Portfolio", short_name: "Sewar", description: "Full Stack Developer based in Jordan", start_url: "/", display: "standalone", background_color: "#0b0d11", theme_color: "#0b0d11", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] }; }
