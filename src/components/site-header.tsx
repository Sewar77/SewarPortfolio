"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const links = [{ label: "Home", href: "/#home" }, { label: "Work", href: "/#work" }, { label: "About", href: "/#about" }, { label: "Experience", href: "/#experience" }, { label: "Contact", href: "/#contact" }];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(() => setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark"));
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="nav-inner shell">
      <Link className="wordmark" href="/#home" onClick={() => setOpen(false)} aria-label="Sewar Al-Shorman, home">Sewar<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(link => <Link key={link.label} href={link.href}>{link.label}</Link>)}</nav>
      <div className="nav-actions">
        <button className="icon-button theme-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button>
        <a className="icon-button desktop-social" href={portfolio.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
        {portfolio.socials.linkedin ? <a className="icon-button desktop-social" href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a> : <span className="icon-button desktop-social unavailable" title="Add LinkedIn URL in src/data/portfolio.ts"><Linkedin size={17} /></span>}
        <button className="menu-toggle icon-button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={reduced ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reduced ? undefined : { opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
      <div className="shell mobile-nav-content">{links.map((link, index) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}<ArrowUpRight size={18} /></Link>)}<p>Based in Jordan · Open to opportunities</p></div>
    </motion.nav>}</AnimatePresence>
  </header>;
}
