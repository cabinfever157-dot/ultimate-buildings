"use client";

import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { ArrowRight, Download } from "lucide-react";
import React from "react";
import { catalogsData } from "../../content/catalogsData";
import {
  WindowIcon,
  DoorIcon,
  StoneIcon,
  WoodIcon,
  PrefabIcon,
  FlooringIcon,
  PowerIcon
} from "../../content/catalogIcons";

// Icon mapping function
const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    WindowIcon,
    DoorIcon,
    StoneIcon,
    WoodIcon,
    PrefabIcon,
    FlooringIcon,
    PowerIcon
  };
  
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className="w-6 h-6 text-brand-primary" /> : null;
};

export default function CatalogsPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24">
      <NarrativeNav />

      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6"
          >
            The 2026 <span className="text-brand-primary">Collections</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl font-body leading-[1.7]"
          >
            Download our comprehensive catalogs to explore the ultimate materials available for modern, high-end infrastructure and residential projects.
          </motion.p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {catalogsData.map((catalog, i) => (
             <motion.div
               key={catalog.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 + 0.2 }}
               whileHover={{ y: -5 }}
               className="group relative flex flex-col p-8 rounded-2xl glass-panel border border-white/10 hover:border-brand-primary/50 transition-colors overflow-hidden"
             >
               {/* Subtle gradient overlay on hover */}
               <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
               <div className="relative z-10 flex-1">
                 <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20">
                   {getIconComponent(catalog.icon)}
                 </div>
                 <h3 className="text-2xl font-display font-medium text-white mb-3">
                   {catalog.title}
                 </h3>
                 <p className="text-muted-foreground mb-8 text-sm leading-[1.6]">
                   {catalog.description}
                 </p>
                 {catalog.types && catalog.types.length > 0 && (
                   <div className="flex flex-wrap gap-2 mt-4">
                      {catalog.types.map((type: string, typeIndex: number) => (
                       <span key={typeIndex} className="px-3 py-1 bg-white/5 rounded-full text-xs text-muted-foreground border border-white/10">
                         {type}
                       </span>
                     ))}
                   </div>
                 )}
               </div>
 
               <div className="relative z-10 mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                 <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Jan 2026 Edition</span>
                 <a
                    href={`/catalogs/${encodeURIComponent((catalog as any).pdfFile || (catalog as any).brochure || '')}`}
                   download
                   className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-brand-primary hover:text-brand-dark transition-all text-white"
                   title={`Download ${catalog.title} Catalog`}
                 >
                   <Download className="w-4 h-4" />
                 </a>
               </div>
             </motion.div>
           ))}
         </div>
      </main>
    </div>
  );
}


 
