"use client";

import { NarrativeNav } from "@/components/layout/narrative-nav";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SpcFlooringPage() {
  const [mounted, setMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (mounted && iframeRef.current) {
      iframeRef.current.src = "/flipbooks/spc-flooring/index.html";
    }
  }, [mounted]);

  return (
    <div className="relative min-h-screen bg-background">
      <NarrativeNav />
      <div className="fixed top-16 left-0 right-0 z-[60] flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-xl border-b border-white/10">
        <Link href="/catalogs" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Catalogs
        </Link>
        <span className="text-sm font-medium text-white truncate max-w-[60%] text-right">SPC Flooring</span>
      </div>
      {!mounted && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-background" style={{ marginTop: "100px" }}>
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-muted-foreground">Loading catalog...</p>
          </div>
        </div>
      )}
      <iframe ref={iframeRef} className="w-full border-none" style={{ height: "calc(100vh - 100px)", marginTop: "100px", display: mounted ? "block" : "none" }} title="SPC Flooring" allow="fullscreen" />
    </div>
  );
}
