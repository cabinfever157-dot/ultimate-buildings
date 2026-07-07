"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { CheckCircle, BookOpen } from "lucide-react";

// New simplified list of custom cabinet applications
const customCabinetApplications = [
  "Kitchens",
  "Islands",
  "Vanities",
  "Closets",
  "Wardrobes",
  "Garages",
  "Utility Rooms",
  "Storage Areas",
  "Office Spaces",
  "Meeting Rooms",
  "Entry Areas & Mudrooms",
  "Restaurants",
];

const imageGallery = [
    { src: "/images/stock/cabinets-1.jpg", alt: "Custom kitchen cabinetry" },
    { src: "/images/stock/cabinets-2.jpg", alt: "Custom organizational storage" },
    { src: "/images/stock/closets.jpg", alt: "Custom closet" },
    { src: "/images/stock/vanity-1.jpg", alt: "Custom vanity" },
]

export default function CabinetsPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24">
      <NarrativeNav />

      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6"
          >
            Your Vision, <span className="text-brand-primary">Custom-Built</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Everything is custom-made. We build to your exact specifications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-display font-medium text-brand-primary max-w-3xl mx-auto mb-4"
          >
            Factory Direct Pricing
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/products">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                ← Back to All Products
              </Button>
            </Link>
          <Link href="/quote-wizard">
            <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
              Get a Quote
            </Button>
          </Link>
          <Link href="/catalogs/wooden-doors" title="View Cabinets Catalog">
            <Button variant="outline" size="icon" className="border-white/10 hover:bg-brand-dark hover:text-brand-primary hover:border-brand-primary">
              <BookOpen className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

        {/* Image Gallery Section */}
        <motion.div
            className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.2 }}
        >
            {imageGallery.map((image, index) => (
                <motion.div
                    key={index}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-glass-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover"/>
                </motion.div>
            ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16 mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts will guide you through the entire process,
            <br className="hidden md:block" />
            from design to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Start Your Custom Project
              </Button>
            </Link>
            <Link href="/promotional-gallery#cabinets">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View Project Gallery
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
