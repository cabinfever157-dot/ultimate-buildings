"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { IntroSequence } from "@/components/layout/IntroSequence";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { BackgroundVideo } from "@/components/layout/BackgroundVideo";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { ArrowRight, Box, CircleDashed, ShieldCheck, Sparkles } from "lucide-react";
import { CoreValues } from "@/components/sections/CoreValues";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('cinematicIntroPlayed') === 'true') {
        setShowIntro(false);
        setIntroComplete(true);
      }
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('cinematicIntroPlayed', 'true');
    }
    setTimeout(() => setIntroComplete(true), 500);
  };

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

      {/* Persistent Background Video - always present, never reloads */}
      <BackgroundVideo videoId="1194248578" platform="vimeo" opacity={0.4} zIndex={0} />

      {/* Intro Sequence Overlay - sits on top of the persistent video */}
      <AnimatePresence>
        {showIntro && (
          <IntroSequence
            text="Ultimate-Buildings. Factory Direct to Your Job Site."
            onComplete={handleIntroComplete}
          />
        )}
      </AnimatePresence>
        
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
                  <p className="mb-4 text-[1.125rem] md:text-[1.25rem] font-body font-medium text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]">
                    Contact Us: 833-224-2940
                  </p>

                  <p className="mb-8 text-2xl md:text-3xl font-display font-light text-white/80 drop-shadow-[0_0_12px_rgba(0,0,0,0.9)] leading-tight">
                    Interior and Exterior<br/>Custom Architectural Finishing Products
                  </p>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-white mb-6 tracking-tighter leading-[0.9]">
                    <br className="hidden md:block" />Factory <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-amber-200 to-brand-primary glow-yellow font-medium">Direct</span> to Your Job Site
                  </h1>

                <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-6 font-body font-light">
                  Quality - Reliability - Value<br/>We handle Production, Logistics, Customs, and Delivery.
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

            {/* Factory Direct Process Section */}
            <section className="py-24 relative z-20">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
              >
                <h2 className="text-4xl md:text-6xl font-display font-light text-white tracking-tight">
                  Factory Direct <span className="text-brand-primary font-medium">to Your Job Site</span>
                </h2>
                  <p className="text-lg text-white/60 mt-4 max-w-2xl mx-auto">
                  We handle everything from concept to delivery.
                </p>
                <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent mt-8 mx-auto rounded-full opacity-50" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    step: "1",
                    title: "Inquire & Design",
                    desc: "Share your project requirements, drawings or visualizations or we can help you.",
                    icon: "📐"
                  },
                  {
                    step: "2",
                    title: "Produce & QC",
                    desc: "Pre production samples,\nFactory production updates.",
                    icon: "🏭"
                  },
                  {
                    step: "3",
                    title: "Deliver",
                    desc: "We handle logistics, customs, tariffs, and delivery to your job site. Door-to-door service.",
                    icon: "🚚"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="glass-panel rounded-2xl p-8 text-center"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="text-3xl font-display text-brand-primary mb-3">Step {item.step}</div>
                    <h3 className="text-xl font-display text-white mb-3">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
             </section>

{/* Core Values Section */}
              <CoreValues />

            {/* Experience the Ultimate Buildings Difference */}
            <section className="py-24 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-display font-light text-white tracking-tight mb-8">
                  Experience the <span className="text-brand-primary font-medium">Ultimate Buildings</span> Difference
                </h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent mt-4 mx-auto rounded-full opacity-50" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel rounded-2xl p-8 md:p-12 mt-12 max-w-5xl mx-auto border border-white/10"
              >
                <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                  Discover why architects, designers, contractors, builders, commercial property owners, retailers and wholesale distributors trust us for their most ambitious projects.
                </p>

                <div className="mb-8">
                  <p className="text-brand-primary font-medium mb-4 text-lg">Project Types:</p>
                  <p className="text-white/80 leading-relaxed">
                    Apartments — Dorms/Nursing Homes — Hotels — Office Buildings — Remodels — Multi Home<br/>
                    Restaurants/Entertainment Venues — Schools — Retail Centers/Retailers
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <p className="text-lg text-white leading-relaxed mb-4">
                    Contact us today to learn how we can bring your vision to life for:
                  </p>
                  <p className="text-brand-primary leading-relaxed">
                    Stone Floor & Walls — SPC Flooring — Countertops — Cabinets & Storage — Stairs & Railings<br/>
                    Windows — Interior & Exterior Doors — Metal Gates & Fencing — Prefab Buildings
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center mt-12"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-primary to-amber-500 text-brand-dark hover:from-amber-400 hover:to-amber-300 text-lg px-10 py-8 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] flex gap-2 font-bold transition-all mx-auto"
                  onClick={() => window.location.href = '/quote-wizard'}
                >
                  Contact Our Team <ArrowRight className="w-6 h-6" />
                </Button>
              </motion.div>
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

const Skeleton = ({ src, objectPosition = "center" }: { src?: string; objectPosition?: string }) => (
  <div className="flex flex-1 w-full min-h-[16rem] rounded-xl bg-[#0a0f18] border border-white/5 overflow-hidden relative group-hover/bento:shadow-[inset_0_0_50px_rgba(212,175,55,0.2)] transition-shadow duration-500">
      {src && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={src} style={{ objectPosition }} className="absolute inset-0 object-cover w-full h-full group-hover/bento:scale-110 transition-transform duration-1000 ease-out" alt="Preview"/>
      )}
  </div>
);

const features = [
  {
    title: "Flooring Solutions",
    header: <Skeleton src="/images/projects/page12_img01.jpg" objectPosition="bottom" />,
    icon: <CircleDashed className="h-6 w-6 text-brand-primary" />,
    href: "/materials",
  },
  {
    title: "Stone Countertops",
    header: <Skeleton src="/images/bento/countertops.jpg" />,
    icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
    href: "/products/countertops",
  },
  {
    title: "Cabinets",
    header: <Skeleton src="/images/bento/cabinets.jpg" />,
    icon: <CircleDashed className="h-6 w-6 text-brand-primary" />,
    href: "/products/cabinets",
  },
  {
    title: "Wrought Iron & Metal Gates",
    header: <Skeleton src="/images/bento/Metal-Fencing-Gates.jpg" />,
    icon: <Sparkles className="h-6 w-6 text-brand-primary" />,
    href: "/products/windows-doors",
  },
  {
    title: "Staircases & Railings",
    header: <Skeleton src="/images/bento/staircases_railings..jpg" />,
    icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
    href: "/products/stairs-railings",
  },
  {
    title: "Windows",
    header: <Skeleton src="/images/bento/windows.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
    href: "/products/windows-doors",
  },
  {
    title: "Doors",
    header: <Skeleton src="/images/bento/hero_door.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
    href: "/products/windows-doors",
  },
  {
    title: (
      <>
        Custom Vanities,
        <br className="hidden md:block" />
        Closets & Cabinets
      </>
    ),
    header: <Skeleton src="/images/bento/closets.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
    href: "/products/cabinets",
  },
  {
    title: "Metal Fencing & Gates",
    header: <Skeleton src="/images/stock/gates-upload.jpg" />,
    icon: <Box className="h-6 w-6 text-brand-primary" />,
    href: "/products/metal-products",
  },
  {
    title: "Prefab Construction",
    header: <Skeleton src="/images/bento/prefab.jpg" />,
    icon: <Sparkles className="h-6 w-6 text-brand-primary" />,
    href: "/products/prefab-construction",
  },
  {
    title: "Factory Direct Pricing",
    header: <Skeleton src="/images/bento/factorydirect.jpg" />,
    icon: <Sparkles className="h-6 w-6 text-brand-primary" />,
    href: "/quote-wizard",
  },
];
