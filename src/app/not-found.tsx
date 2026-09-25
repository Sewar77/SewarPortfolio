import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() { return <main id="main-content" className="not-found shell"><p className="kicker">404 / NOT FOUND</p><h1>This page isn&apos;t here.</h1><p>The work you&apos;re looking for may have moved.</p><Link className="button button-primary" href="/"><ArrowLeft size={16}/> Back home</Link></main>; }
