"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { IntroSequence } from "@/components/layout/IntroSequence";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { BackgroundVideo } from "@/components/layout/BackgroundVideo";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ArrowRight, Box, CircleDashed, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [showBackgroundVideo, setShowBackgroundVideo] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
     <div className="relative min-h-screen bg-brand-dark overflow-hidden">
      
      {/* Dynamic Grid Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-0 h-full w-[150%] -skew-y-12 fixed z-0"
        )}
      />

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
        {showBackgroundVideo && <BackgroundVideo videoId="8jsXi_51B40" opacity={0.4} zIndex={0} playbackRate={0.5} startTime={13} />}
        
        {/* Main Content displays 2 seconds after background video appears */}
        {introComplete && (
         <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           transition={{ duration: 1.5 }}
           className="relative min-h-screen z-10"
         >
          <NarrativeNav />
          
          <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 mx-auto max-w-screen-2xl">
            {/* Hero Section */}
            <motion.section 
              style={{ y, opacity }}
              className="flex flex-col items-center justify-center text-center py-20 lg:py-40 relative z-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
                className="max-w-5xl"
              >
                <AnimatedGradientText className="mb-8 cursor-pointer">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                    )}
                  >
                    The 2026 Collection is now available
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>

                 <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-white mb-6 tracking-tighter leading-[0.9]">
                   Build Beyond <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-amber-200 to-brand-primary glow-yellow font-medium">Boundaries</span>
                 </h1>
                <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-body font-light">
                  From French Slim Steel Windows to Wrought Iron Doors and Quartz Decks. Discover the ultimate materials for your next masterpiece.
                </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     <Button size="lg" className="bg-gradient-to-r from-brand-primary to-amber-500 text-brand-dark hover:from-amber-400 hover:to-amber-300 text-lg px-10 py-8 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] flex gap-2 font-bold transition-all" onClick={() => window.location.href = '/catalogs'}>
                       Explore Catalogs <ArrowRight className="w-6 h-6" />
                     </Button>
                   </motion.div>
                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     <Button size="lg" variant="outline" className="border-white/20 bg-black/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 text-lg px-10 py-8 rounded-full backdrop-blur-xl transition-all shadow-glass-lg font-medium" onClick={() => window.location.href = '/quote-wizard'}>
                       Get Bid Quote
                     </Button>
                   </motion.div>
                 </div>
              </motion.div>
            </motion.section>

            {/* Bento Grid Features */}
            <section className="py-24 relative z-20">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20 text-center"
              >
                <h2 className="text-4xl md:text-6xl font-display font-light text-white tracking-tight">Engineering <span className="text-brand-primary font-medium">Excellence</span></h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent mt-8 mx-auto rounded-full opacity-50" />
              </motion.div>
              
              <BentoGrid className="max-w-7xl mx-auto">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.7, 
                      delay: i * 0.1,
                      type: "spring",
                      bounce: 0.3
                    }}
                    className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                  >
                   <BentoGridItem
                      title={feature.title}
                      header={feature.header}
                      icon={feature.icon}
                      href={feature.href}
                    />
                  </motion.div>
                ))}
              </BentoGrid>
            </section>
          </main>
          
          {/* Ambient background glows */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="fixed top-[20%] left-[5%] w-[50rem] h-[50rem] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="fixed bottom-[5%] right-[5%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" 
          />
        </motion.div>
      )}
    </div>
  );
}

const Skeleton = ({ src }: { src?: string }) => (
  <div className="flex flex-1 w-full min-h-[16rem] rounded-xl bg-[#0a0f18] border border-white/5 overflow-hidden relative group-hover/bento:shadow-[inset_0_0_50px_rgba(212,175,55,0.2)] transition-shadow duration-500">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover/bento:opacity-40 transition-opacity duration-500" />
      {src && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={src} className="absolute inset-0 object-cover w-full h-full opacity-70 group-hover/bento:opacity-100 group-hover/bento:scale-110 transition-all duration-1000 ease-out" alt="Preview"/>
      )}
  </div>
);

const features = [
  {
    title: "French Slim Steel Windows & Doors",
    header: <Skeleton src="/images/bento/modern-aluminum-window-systems-with-slim-profiles.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
    href: "/products/windows-doors",
  },
  {
    title: "Quartz & Granite Decks",
    header: <Skeleton src="/images/bento/Luxury-granite-marble-countertop.jpg" />,
    icon: <CircleDashed className="h-6 w-6 text-brand-primary" />,
    href: "/products/countertops",
  },
  {
    title: "Light Steel Prefab Construction",
    header: <Skeleton src="/images/bento/Light-Steel-Prefab-Construction.jpg" />,
    icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
    href: "/products",
  },
  {
    title: "Wrought Iron & Wooden Doors",
    header: <Skeleton src="/images/bento/wrought-iron-wooden-door.jpg" />,
    icon: <Sparkles className="h-6 w-6 text-brand-primary" />,
    href: "/products/windows-doors",
  },
  {
    title: "Stairs & Railings",
    header: <Skeleton src="/images/bento/elegant-granite-marble-kitchen-countertops.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
    href: "/products/stairs-railings",
  },
  {
    title: "Premium Cabinets",
    header: <Skeleton src="/images/bento/High-end-kitchen-cabinetry.jpg" />,
    icon: <CircleDashed className="h-6 w-6 text-brand-primary" />,
    href: "/products/cabinets",
  },
  {
    title: "Stone Countertops",
    header: <Skeleton src="/images/bento/Luxury-granite-marble-countertop.jpg" />,
    icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
    href: "/products/countertops",
  },
  {
    title: "Windows & Doors",
    header: <Skeleton src="/images/bento/modern-aluminum-window-systems-with-slim-profiles.jpg" />,
    icon: <Sparkles className="h-6 w-6 text-brand-primary" />,
    href: "/products/windows-doors",
  },
  {
    title: "Metal Fencing & Gates",
    header: <Skeleton src="/images/bento/Metal-Fencing-Gates.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
    href: "/products/metal-fencing-gates",
  },
];
