"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const commands = [
  { command: "whoami", output: ["Sewar Al-Shorman", "Full Stack Developer", "Jordan"] },
  { command: "skills", output: ["React · Next.js · TypeScript", "Node.js · Express", "PostgreSQL · MongoDB"] },
  { command: "focus", output: ["Clean UX. Reliable architecture.", "Products that solve real problems."] },
];

export function Terminal() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return <div className="terminal" aria-label="Interactive developer terminal">
    <div className="terminal-top"><div className="terminal-dots"><i /><i /><i /></div><span>sewar / terminal</span><span className="terminal-status">●&nbsp; online</span></div>
    <div className="terminal-body">
      <p className="terminal-muted">Last login: today from Jordan</p>
      <div className="terminal-command"><span>~</span> $ {commands[active].command}<span className="terminal-caret" /></div>
      <AnimatePresence mode="wait"><motion.div key={active} className="terminal-output" initial={reduced ? false : { opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>{commands[active].output.map(line => <p key={line}>{line}</p>)}</motion.div></AnimatePresence>
      <div className="terminal-bottom"><span>Try a command</span><div>{commands.map((item, index) => <button key={item.command} onClick={() => setActive(index)} aria-pressed={active === index}>{item.command}</button>)}</div></div>
    </div>
  </div>;
}
