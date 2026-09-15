"use client";

import { NarrativeNav } from "@/components/layout/narrative-nav";
import { CatalogLoader } from "@/components/layout/catalog-loader";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function WroughtIronDoorsPage() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (mounted && iframeRef.current) {
      iframeRef.current.src = "/flipbooks/wrought-iron-doors/index.html";
    }
  }, [mounted]);

  return (
    <div className="relative min-h-screen bg-background">
      <NarrativeNav />
      <div className="fixed top-16 left-0 right-0 z-[60] flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-xl border-b border-white/10">
        <Link href="/catalogs" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Catalogs
        </Link>
        <span className="text-sm font-medium text-white truncate max-w-[60%] text-right">Wrought Iron Doors</span>
      </div>
      {!loaded && (
        <CatalogLoader title="Wrought Iron Doors" onComplete={() => setLoaded(true)} />
      )}
      <iframe ref={iframeRef} className="w-full border-none" style={{ height: "calc(100vh - 100px)", marginTop: "100px", display: loaded ? "block" : "none" }} title="Wrought Iron Doors" allow="fullscreen" />
    </div>
  );
}
