"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroSequence } from "@/components/layout/IntroSequence";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { BackgroundVideo } from "@/components/layout/BackgroundVideo";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Script from "next/script";
import { ArrowRight, Box, CircleDashed, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [showBackgroundVideo, setShowBackgroundVideo] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro has already been played in this session
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('cinematicIntroPlayed') === 'true') {
        setShowIntro(false);
        setShowBackgroundVideo(true);
        setIntroComplete(true);
      }
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowBackgroundVideo(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('cinematicIntroPlayed', 'true');
    }
  };

  // Delay main content appearance by 2 seconds after background video appears
  useEffect(() => {
    if (showBackgroundVideo) {
      const contentTimer = setTimeout(() => {
        setIntroComplete(true);
      }, 2000);
      
      return () => clearTimeout(contentTimer);
    }
  }, [showBackgroundVideo]);

   return (
     <div className="relative min-h-screen bg-brand-dark">
       {/* YouTube API for video playback control */}
       <Script src="https://www.youtube.com/iframe_api" strategy="beforeInteractive" />
      {/* Intro Sequence Overlay */}
      <AnimatePresence>
        {showIntro && (
           <IntroSequence
             text="Ultimate Buildings. Engineering Tomorrow's Infrastructure."
             videoId="FFwm_-HXYEY"
             onComplete={handleIntroComplete}
             playbackRate={0.5}
             startTime={7}
           />
        )}
      </AnimatePresence>

        {/* Background Video - fades in as intro completes (half speed) */}
        {showBackgroundVideo && <BackgroundVideo videoId="8jsXi_51B40" opacity={0.5} zIndex={0} playbackRate={0.5} startTime={13} />}
        
        {/* Main Content displays 2 seconds after background video appears */}
        {introComplete && (
         <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           transition={{ duration: 1 }}
           className="relative min-h-screen z-10"
         >
          <NarrativeNav />
          
          <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 mx-auto max-w-screen-2xl">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 lg:py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span>The 2026 Collection is now available</span>
                </div>
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 tracking-tight">
                   Build Beyond <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-200 glow-yellow">Boundaries</span>
                 </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
                  From French Slim Steel Windows to Wrought Iron Doors and Quartz Decks. Discover the ultimate materials for your next masterpiece.
                </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                   <Button size="lg" className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 text-lg px-8 py-6 rounded-xl shadow-glass-glow flex gap-2" onClick={() => window.location.href = '/catalogs'}>
                     Explore Catalogs <ArrowRight className="w-5 h-5" />
                   </Button>
                   <Button size="lg" variant="outline" className="border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-white text-lg px-8 py-6 rounded-xl backdrop-blur-md" onClick={() => window.location.href = '/materials'}>
                     Request Materials
                   </Button>
                 </div>
              </motion.div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-20">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white">Engineering Excellence</h2>
                <div className="w-24 h-1 bg-brand-primary mt-6 mx-auto rounded-full mix-blend-screen" />
              </div>
              
              <BentoGrid className="max-w-6xl mx-auto">
                {features.map((feature, i) => (
                  <BentoGridItem
                    key={i}
                    title={feature.title}
                    description={feature.description}
                    header={feature.header}
                    icon={feature.icon}
                    className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                  />
                ))}
              </BentoGrid>
            </section>
          </main>
          
          {/* Ambient background glows */}
          <div className="fixed top-[20%] left-[10%] w-[40rem] h-[40rem] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none -z-10 mix-blend-screen" />
          <div className="fixed bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10 mix-blend-screen" />
        </motion.div>
      )}
    </div>
  );
}

const Skeleton = ({ src }: { src?: string }) => (
  <div className="flex flex-1 w-full min-h-[14rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 overflow-hidden relative">
      {src && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={src} className="absolute inset-0 object-cover w-full h-full opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700" alt="Preview"/>
      )}
  </div>
);

const features = [
  {
    title: "French Slim Steel Windows & Doors",
    description: "Ultra-narrow sightlines providing maximum light and minimalist aesthetics for modern architecture.",
    header: <Skeleton src="/images/bento/modern-aluminum-window-systems-with-slim-profiles.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
  },
  {
    title: "Quartz & Granite Decks",
    description: "Engineered stone and natural granite designed for extreme durability and timeless luxury.",
    header: <Skeleton src="/images/bento/Luxury-granite-marble-countertop.jpg" />,
    icon: <CircleDashed className="h-6 w-6 text-brand-primary" />,
  },
  {
    title: "Light Steel Prefab Construction",
    description: "High-efficiency, rapid-assembly prefab frameworks that reduce build times while maintaining structural integrity.",
    header: <Skeleton src="/images/bento/Light-Steel-Prefab-Construction.jpg" />,
    icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
  },
  {
    title: "Wrought Iron & Wooden Doors",
    description: "Handcrafted entrances blending security, tradition, and custom design for statement pieces.",
    header: <Skeleton src="/images/bento/wrought-iron-wooden-door.jpg" />,
    icon: <Sparkles className="h-6 w-6 text-brand-primary" />,
  },
  {
    title: "Stairs & Railings",
    description: "Custom-designed staircases and railings combining safety with elegant architectural design.",
    header: <Skeleton src="/images/bento/elegant-granite-marble-kitchen-countertops.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
  },
  {
    title: "Premium Cabinets",
    description: "Luxury cabinetry solutions with custom finishes and precision craftsmanship.",
    header: <Skeleton src="/images/bento/High-end-kitchen-cabinetry.jpg" />,
    icon: <CircleDashed className="h-6 w-6 text-brand-primary" />,
  },
  {
    title: "Stone Countertops",
    description: "Durable and elegant countertop solutions in granite, quartz, and marble.",
    header: <Skeleton src="/images/bento/Luxury-granite-marble-countertop.jpg" />,
    icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
  },
  {
    title: "Windows & Doors",
    description: "Energy-efficient window and door systems with premium materials and finishes.",
    header: <Skeleton src="/images/bento/modern-aluminum-window-systems-with-slim-profiles.jpg" />,
    icon: <Sparkles className="h-6 w-6 text-brand-primary" />,
  },
  {
    title: "Metal Fencing & Gates",
    description: "Custom wrought iron and steel fencing solutions for security and curb appeal.",
    header: <Skeleton src="/images/bento/Metal-Fencing-Gates.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
  },
];
