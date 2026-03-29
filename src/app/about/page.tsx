"use client";

import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { CheckCircle, Star, Globe, Factory, ShieldCheck, Truck, Home, Building, Users, ArrowRight, Award } from "lucide-react";

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

// Company information
const companyStats = [
  { value: "2020", label: "Founded", icon: <Home className="w-6 h-6" /> },
  { value: "50+", label: "Products", icon: <Building className="w-6 h-6" /> },
  { value: "1000+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
  { value: "Global", label: "Reach", icon: <Globe className="w-6 h-6" /> },
];

// Our values
const ourValues = [
  {
    title: "Quality",
    description: "We only work with Tier 1 well financed established factories",
    icon: <Star className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Reliability",
    description: "Delivering as promised so we all sleep well at night",
    icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Value",
    description: "Our factories understand every penny counts, that is why we have factory direct pricing",
    icon: <Factory className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Flexibility",
    description: "Our goal is to deliver your customized needs",
    icon: <Award className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "CX",
    description: "The Cornerstone of our Buyer relationship with live USA Customer Support",
    icon: <Users className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Teamwork",
    description: "We are 1 team together and only grow together via our execution",
    icon: <Users className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Our Team",
    description: "We have employee/partner oversight at every factory production step to ensure desired results",
    icon: <Building className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Appreciation",
    description: "Thank you for putting your projects trust in us, we value your business",
    icon: <CheckCircle className="w-8 h-8 text-brand-primary" />,
  },
];

// What sets us apart
const differentiators = [
  {
    title: "Factory Direct Pricing",
    description: "Eliminating middlemen to provide competitive pricing without sacrificing quality.",
  },
  {
    title: "Complete Logistics",
    description: "Handling all shipping, duties, tariffs, and delivery to your job site.",
  },
  {
    title: "Custom Solutions",
    description: "Your size, your colors, your details - tailored to your exact specifications.",
  },
  {
    title: "Global Sourcing",
    description: "Premium materials from top quarries and manufacturers worldwide.",
  },
];

// Leadership team
const leadershipTeam = [
  {
    name: "John Smith",
    title: "CEO & Founder",
    bio: "20+ years in construction and building materials industry. Visionary leader with expertise in global sourcing.",
  },
  {
    name: "Sarah Johnson",
    title: "Director of Operations",
    bio: "15 years managing complex logistics and supply chain operations for international projects.",
  },
  {
    name: "Michael Chen",
    title: "Head of Product Development",
    bio: "Innovator with 12 years experience in architectural materials and custom product design.",
  },
  {
    name: "Emily Rodriguez",
    title: "Customer Experience Director",
    bio: "10 years ensuring client satisfaction and delivering exceptional service experiences.",
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
                Ultimate Buildings
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
            Discover the story behind Ultimate Buildings - where innovation meets craftsmanship
            in creating exceptional building materials for modern architecture and design.
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-[1.7] mb-8"
            >
              Founded in 2020, Ultimate Buildings emerged from a vision to revolutionize the building materials industry
              by combining premium quality with innovative design. What started as a small operation has grown into a
              global provider of architectural materials, serving residential and commercial projects worldwide.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-[1.7] mb-8"
            >
              Our mission is simple: <span className="text-brand-primary font-medium">Deliver exceptional quality, innovative solutions,
              and unparalleled service</span> to architects, builders, and homeowners who demand the best. We believe that
              every project deserves materials that inspire, perform, and endure.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground leading-[1.7]"
            >
              With a commitment to sustainability, craftsmanship, and customer satisfaction, we've built a reputation for
              excellence in the industry. Our factory-direct model ensures competitive pricing while maintaining the
              highest standards of quality and service.
            </motion.div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {companyStats.map((stat, i) => (
              <FloatAnimation key={stat.label} delay={0.2 + i * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.3 } }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                  className="glass-panel rounded-xl p-6 border border-white/10 text-center relative overflow-hidden"
                >
                    <Shimmer>
                      <div className="text-3xl md:text-4xl font-display font-medium text-white mb-2 relative flex justify-center">
                        {stat.icon}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-sm"
                        />
                      </div>
                    </Shimmer>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-4xl md:text-5xl font-display font-medium text-white mb-2 text-center"
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="text-brand-primary text-sm mb-3 text-center uppercase tracking-widest"
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                </FloatAnimation>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-white mb-12 text-center"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourValues.map((value, i) => (
              <FloatAnimation key={value.title} delay={0.1 + i * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20, rotateY: 10 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  whileHover={{ y: -8, rotateY: -5, transition: { duration: 0.3 } }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                  className="glass-panel rounded-xl p-6 border border-white/10 hover:border-brand-primary/30 transition-all cursor-pointer relative overflow-hidden"
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

        {/* What Sets Us Apart */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-white mb-12 text-center"
          >
            What Sets Us Apart
          </motion.h2>

          <div className="space-y-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="glass-panel rounded-xl p-6 border border-white/10 flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-white mb-12 text-center"
          >
            Leadership Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, i) => (
              <FloatAnimation key={member.name} delay={0.1 + i * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                  className="glass-panel rounded-xl p-6 border border-white/10 hover:border-brand-primary/20 transition-all relative overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                    className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto relative"
                  >
                    <span className="text-2xl font-display text-white z-10">👤</span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.4, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-brand-primary/15 to-transparent rounded-full blur-sm"
                    />
                    </motion.div>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-xl font-display font-medium text-white mb-2 text-center"
                  >
                    {member.name}
                  </motion.div>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-brand-primary text-sm mb-3 text-center"
                  >
                    {member.title}
                  </motion.div>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-muted-foreground text-sm leading-[1.6] text-center"
                  >
                    <Shimmer>
                      {member.bio}
                    </Shimmer>
                  </motion.div>
                </motion.div>
              </FloatAnimation>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 relative">
          <FloatAnimation delay={0.2}>
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-3xl md:text-4xl font-display font-medium text-white mb-6 relative"
            >
              Experience the Ultimate Buildings Difference
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0.5], scale: [0, 1.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gradient-to-r from-transparent via-brand-primary to-transparent rounded-full blur-sm"
              />
            </motion.h2>
          </FloatAnimation>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Discover why architects, builders, and homeowners trust us for their most ambitious projects.
            Contact us today to learn how we can bring your vision to life.
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <motion.button
              initial={{ boxShadow: "0 0 0 0 rgba(212, 175, 55, 0)" }}
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(212, 175, 55, 0)",
                  "0 0 15px 5px rgba(212, 175, 55, 0.3)",
                  "0 0 0 0 rgba(212, 175, 55, 0)"
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 text-lg px-8 py-4 rounded-xl shadow-glass-glow flex items-center gap-2 mx-auto relative"
            >
              <span className="relative z-10">
                Contact Our Team
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: [0, 0.5, 0], x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-2xl"
                >
                  →
                </motion.span>
              </span>
              <ArrowRight className="w-5 h-5 z-10" />
            </motion.button>
          </motion.div>
        </section>
      </main>
    </div>
  );
}