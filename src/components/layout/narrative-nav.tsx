"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function NarrativeNav() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="backdrop-blur-xl bg-background/60 border border-white/10 shadow-glass-md rounded-2xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl tracking-tighter text-brand-primary flex gap-2 items-center">
             <img src="/logo.png" alt="Ultimate Buildings Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
             Ultimate Buildings
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
            <Link href="/catalogs" className="text-foreground/80 hover:text-brand-primary transition-colors">
              Catalogs
            </Link>
            <Link href="/materials" className="text-foreground/80 hover:text-brand-primary transition-colors">
              Materials
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-brand-primary transition-colors">
              About GBTS
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-white/10 hover:bg-white/5 hover:text-brand-primary">
              Contact Us
            </Button>
            <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow">
              Get an Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
