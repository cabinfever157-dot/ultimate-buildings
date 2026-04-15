"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

const prefabTypes = [
  {
    id: "hotels",
    title: "Hotel Construction",
    description: "Complete prefab hotel packages — structural frame, panels, interior finishes. Volume builder pricing with factory direct delivery.",
    image: "/images/bento/Light-Steel-Prefab-Construction.jpg",
    properties: [
      "Light steel frame construction",
      "Prefabricated wall and floor panels",
      "Interior finish packages available",
      "Volume builder pricing",
    ],
    features: ["Custom room configurations", "Integrated MEP systems", "Rapid on-site assembly"],
  },
  {
    id: "apartments",
    title: "Apartment Buildings",
    description: "Multi-unit prefab apartment construction. Custom layouts, code compliant, factory direct to job site.",
    image: "/images/bento/Light-Steel-Prefab-Construction.jpg",
    properties: [
      "Multi-story structural systems",
      "Prefabricated bathroom pods",
      "Custom unit layouts",
      "Code compliant design",
    ],
    features: ["Standardized for speed", "On-site assembly crews", "Integrated plumbing/electrical"],
  },
  {
    id: "offices",
    title: "Office Buildings",
    description: "Prefab office construction with flexible layouts. From shell to fully finished — factory direct.",
    image: "/images/bento/Light-Steel-Prefab-Construction.jpg",
    properties: [
      "Open plan and private office layouts",
      "Structural steel frame",
      "Facade and glazing packages",
      "Complete interior fit-out",
    ],
    features: ["Scalable floor plans", "Professional finishes", "Turnkey delivery available"],
  },
];

const processSteps = [
  {
    step: "1",
    title: "Consultation & Design",
    desc: "Share your project requirements. We provide recommendations, measurements, and project drawings.",
  },
  {
    step: "2",
    title: "Order & Production",
    desc: "Deposit confirms order. Shop drawings and 3D visualizations approved. Production begins with QC progress reports.",
  },
  {
    step: "3",
    title: "Logistics & Delivery",
    desc: "Freight rate proposals, forwarder coordination, customs handling. Factory direct to your job site.",
  },
];

export default function PrefabConstructionPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24">
      <NarrativeNav />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6"
          >
            <span className="text-brand-primary">Prefab</span> Construction
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Custom prefab construction components for hotels, apartments, and offices. Volume builder pricing. Factory direct to your job site.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/products">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                &larr; Back to All Products
              </Button>
            </Link>
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prefabTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-panel border border-white/10 shadow-glass-md overflow-hidden hover:shadow-glass-lg transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                  <p className="text-foreground/80 mb-4">{type.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Properties:</h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {type.properties.map((p, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">&bull;</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((f, i) => (
                        <span key={i} className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Factory Direct to <span className="text-brand-primary">Job Site</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-medium text-brand-primary">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Card className="glass-panel border border-white/10 p-8 mb-16">
          <h2 className="text-2xl font-display font-medium text-white mb-6">Custom Design & Sizing</h2>
          <p className="text-foreground/80 mb-6">Every prefab project is custom — your size, your colors, your details. We do not sell standard sizes. Our engineering team designs to your exact specifications and local building codes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">What We Provide</h3>
              <ul className="text-foreground/80 space-y-2">
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>Structural engineering and shop drawings</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>3D visualizations prior to production</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>QC photos and trial installation proof</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Quality Assurance</h3>
              <ul className="text-foreground/80 space-y-2">
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>Employee/partner oversight at every step</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>3rd party inspection available</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>Your rep can inspect at factory</span></li>
              </ul>
            </div>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            Start your prefab construction project
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Volume builder pricing. Factory direct to your job site. Contact us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Get Prefab Consultation
              </Button>
            </Link>
            <Link href="/catalogs">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View Catalogs
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}