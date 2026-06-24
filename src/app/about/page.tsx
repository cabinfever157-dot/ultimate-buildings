"use client";

import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { CheckCircle, Star, Globe, Factory, ShieldCheck, Truck, Users, Award } from "lucide-react";

// Magic sparkle effect
const Sparkle = ({ size = 20, color = "#d4af37", delay = 0, style = {} }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ 
        duration: 2 + Math.random() * 2,
        delay: delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }}
      style={{ 
        position: "absolute",
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 20%, transparent 70%)`,
        borderRadius: "50%",
        filter: "blur(1px)",
        zIndex: 0,
        ...style
      }}
    />
  );
};

// Floating animation
const FloatAnimation = ({ children, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8,
        delay: delay,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
};

// Shimmer effect
const Shimmer = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.8, 0.3] }}
      transition={{ 
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }}
    >
      {children}
    </motion.div>
  );
};



// Our values - Ultimate-Buildings Core Pillars
const ourValues = [
  {
    title: "Quality",
    description: "We only work with Tier 1 well financed established factories",
    icon: <Factory className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Reliability",
    description: "Delivering as promised so we all sleep well at night",
    icon: <Truck className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Value",
    description: "Our factories understand every penny counts, that is why we have factory direct pricing",
    icon: <Star className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Flexibility",
    description: "Our goal is to deliver your customized needs",
    icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "CX",
    description: "The Cornerstone of our Buyer relationship with live USA Customer Support",
    icon: <Award className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Teamwork",
    description: "We are 1 team together and only grow together via our execution",
    icon: <Users className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Our Team",
    description: "We have partner employee oversight, in factory, at every production step to ensure desired results",
    icon: <CheckCircle className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Appreciation",
    description: "Thank you for putting your projects trust in us, we value your business",
    icon: <Globe className="w-8 h-8 text-brand-primary" />,
  },
];

// What sets us apart - Ultimate-Buildings Differentiators
const differentiators = [
  {
    title: "Factory Direct Pricing",
    description: "Eliminating middlemen to provide competitive pricing without sacrificing quality. Supply chain services straight to your project.",
  },
  {
    title: "Complete Logistics Included",
    description: "We handle all shipping, customs clearance, duties, tariffs, and delivery directly to your job site. No LC required.",
  },
  {
    title: "Custom Solutions",
    description: "Your size, your colors, your details — tailored to exact specifications meeting local building codes with shop drawings and 3D visualizations included.",
  },
  {
    title: "Pre-Production Proof",
    description: "Customers authorize preproduction samples just to make sure all is ok.",
  },
  {
    title: "Flexible Quality Control",
    description: "Inspections by our partners employees, a respected third-party inspection company, or your employees — your choice.",
  },
];



export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24">
      <NarrativeNav />

      {/* Background glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

      <main className="max-w-screen-xl mx-auto px-6 md:px-12 relative">
        {/* Magic sparkles - scattered throughout the page */}
        <Sparkle size={24} color="#d4af37" delay={0} style={{ top: '10%', left: '15%' }} />
        <Sparkle size={20} color="#d4af37" delay={0.5} style={{ top: '25%', right: '20%' }} />
        <Sparkle size={28} color="#d4af37" delay={1} style={{ bottom: '30%', left: '10%' }} />
        <Sparkle size={22} color="#d4af37" delay={1.5} style={{ bottom: '15%', right: '15%' }} />
        <Sparkle size={26} color="#d4af37" delay={2} style={{ top: '50%', left: '5%' }} />
        <Sparkle size={30} color="#d4af37" delay={2.5} style={{ top: '65%', right: '5%' }} />
        {/* Floating background orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.7, 1.1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl -z-10"
        />
        {/* Hero Section */}
        <section className="text-center py-20 lg:py-32 relative">
          <FloatAnimation delay={0.2}>
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-4xl md:text-6xl font-display font-medium text-white mb-6 relative"
            >
              About <span className="text-brand-primary relative">
                Ultimate-Buildings
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0.5], scale: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-4 w-12 h-12 bg-gradient-to-r from-transparent via-brand-primary to-transparent rounded-full blur-xl"
                />
                {/* More visible sparkle */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-2 -left-4 w-8 h-8 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full blur-md"
                />
              </span>
            </motion.h1>
          </FloatAnimation>
          {/* Animated underline (plays once) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent w-full mx-auto mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Discover Ultimate-Buildings — where quality meets factory-direct pricing for custom architectural finishing products.
          </motion.div>
        </section>

        {/* Company Overview */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-white mb-12 text-center"
          >
            Our Story
          </motion.h2>

           <div className="glass-panel rounded-2xl p-8 md:p-12 border border-white/10">
             <div className="text-muted-foreground leading-[1.8] text-lg space-y-6 max-w-3xl mx-auto">
               <p>
                 Ultimate-Buildings was founded on a simple principle: deliver custom architectural
                 finishing products at factory-direct pricing — without the layers of middlemen that
                 drive up costs and complicate timelines. By working directly with Tier 1, well-financed
                 factories and managing the entire supply chain ourselves, we pass significant savings
                 to our clients while maintaining uncompromising quality control at every stage of production.
               </p>
               <p>
                 From the moment your order is confirmed, we handle everything. Our team manages all
                 shipping, customs clearance, duties, tariffs, and final delivery straight to your job site —
                 with no letter of credit required. Every product is custom-fabricated to your exact
                 specifications: your sizes, your colors, your details, all meeting local building codes.
                 We provide shop drawings and 3D visualizations so you see exactly what you&apos;re getting
                 before a single cut is made. Pre-production samples are authorized by your team, and
                 quality inspections can be conducted by our partner employees, a respected third-party
                 inspection company, or your own staff — whichever gives you the most confidence.
               </p>
               <p>
                 With completed projects across North America, Europe, the UK, Australia, New Zealand, and
                 the Caribbean, we&apos;ve earned the trust of architects, designers, contractors, builders,
                 commercial property owners, retailers, and wholesale distributors. From apartments and
                 dormitories to hotels, office buildings, restaurants, schools, and retail centers — we
                 supply the finishing products that define a space.
               </p>
             </div>

             <div className="mt-12 pt-8 border-t border-white/10 text-center">
               <p className="text-muted-foreground leading-[1.6]">
                  Stone Floor & Walls – SPC Flooring – Countertops – Cabinets & Storage – Windows & Doors
                  <br />
                  Stairs & Railings – Interior & Exterior Doors – Metal Gates & Fencing – Prefab Buildings
               </p>
             </div>
           </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-white mb-12 text-center"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ourValues.map((value, i) => (
              <FloatAnimation key={value.title} delay={0.1 + i * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20, rotateY: 10 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  whileHover={{ y: -8, rotateY: -5, transition: { duration: 0.3 } }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                  className="glass-panel rounded-xl p-6 border border-white/10 hover:border-brand-primary/30 transition-all cursor-pointer relative overflow-hidden flex flex-col"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="mb-4 relative"
                  >
                    {value.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-full blur-sm"
                    />
                  </motion.div>
                  <Shimmer>
                    <h3 className="text-xl font-display font-medium text-white mb-3">
                      {value.title}
                    </h3>
                  </Shimmer>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-muted-foreground text-sm leading-[1.6]"
                  >
                    {value.description}
                  </motion.div>
                </motion.div>
              </FloatAnimation>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}