"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

const gallerySections = [
  {
    id: "stairs",
    title: "Staircases & Railings",
    description: "Custom curved, spiral, and straight staircases — wrought iron, stainless steel, glass, and wood",
    images: [
      "/images/stock/stairs-1.jpg",
      "/images/stock/stairs-2.jpg",
      "/images/stock/stairs-stainless-steel.jpg",
      "/images/gallery/uk-villa-staircase.png",
      "/images/gallery/fitness-center.jpg",
      "/images/gallery/shopping-mall.jpg",
      "/images/gallery/nz-boutique-hotel.jpg",
    ],
  },
  {
    id: "stone-flooring",
    title: "Stone Flooring & Walls",
    description: "Marble, granite, quartz, and limestone — interior and exterior applications",
    images: [
      "/images/stock/stone-flooring-marble.png",
      "/images/stock/stone-flooring-2.jpg",
      "https://t4.ftcdn.net/jpg/05/19/71/33/360_F_519713382_18hplddKbojywZ1mHQHG5zNcbQJORPgy.jpg",
    ],
  },
  {
    id: "spc-flooring",
    title: "SPC Flooring",
    description: "Click-lock, glue-down, and lay-flat SPC flooring — custom thickness and wear layer",
    images: [
      "/images/stock/spc-flooring-1.jpg",
      "/images/stock/spc-flooring-2.jpg",
      "/images/stock/spc-flooring-3.jpg",
    ],
  },
  {
    id: "countertops",
    title: "Countertops & Slabs",
    description: "Granite, quartz, and marble countertops — custom fabricated to your specifications",
    images: [
      "https://static.vecteezy.com/system/resources/thumbnails/056/121/709/small/beige-granite-kitchen-counter-photo.jpg",
      "/images/stock/countertops-2.jpg",
      "https://t3.ftcdn.net/jpg/05/03/39/00/360_F_503390029_neeuMkAdFlk7NybORLlYveVV3naZ6YCc.jpg",
      "/images/stock/countertops-4.jpg",
      "/images/stock/countertops-5.jpg",
      "/images/stock/countertops-6.jpg",
      "/images/stock/countertops-7.jpg",
      "/images/stock/countertops-8.jpg",
    ],
  },
  {
    id: "cabinets",
    title: "Cabinets & Storage",
    description: "Kitchens, vanities, closets, wardrobes, and organizational storage — fully custom",
    images: [
      "/images/stock/cabinets-1.jpg",
      "/images/stock/cabinets-2.jpg",
      "/images/stock/cabinets-3.jpg",
      "/images/stock/cabinets-4.jpg",
      "/images/stock/cabinets-5.jpg",
      "/images/stock/cabinets-6.jpg",
    ],
  },
  {
    id: "vanities",
    title: "Vanities",
    description: "Custom bathroom vanities — sized to your space, finished to your style",
    images: [
      "/images/stock/vanity-1.jpg",
      "/images/stock/vanity-2.jpg",
    ],
  },
  {
    id: "bathrooms",
    title: "Hotel & Luxury Bathrooms",
    description: "Complete bathroom packages for hotels, resorts, and luxury residential",
    images: [
      "/images/stock/hotel-bathroom-1.jpg",
      "/images/stock/hotel-bathroom-2.jpg",
      "/images/stock/hotel-bathroom-3.jpg",
      "/images/stock/hotel-bathroom-4.jpg",
      "/images/stock/hotel-bathroom-5.jpg",
      "/images/stock/hotel-bathroom-6.jpg",
    ],
  },
  {
    id: "windows-doors",
    title: "Windows & Doors",
    description: "French slim steel, aluminum, wrought iron, and mixed material systems",
    images: [
      "https://fsmedia.rt7.media/2018/02/08020130/steel-doors.jpg",
      "https://goldenglass.com/wp-content/uploads/2020/11/iStock-129179692.jpg",
      "/images/stock/windows-mixed-materials.png",
      "/images/gallery/ohio-apartments.jpg",
    ],
  },
  {
    id: "gates",
    title: "Wrought Iron & Gates",
    description: "Custom designed gates, fencing, and architectural metalwork",
    images: [
      "/images/stock/gates-1.jpg",
      "/images/stock/gates-2.jpg",
      "/images/stock/gates-upload.jpg",
      "/images/gallery/arizona-estate.jpg",
    ],
  },
  {
    id: "garage-doors",
    title: "Commercial Garage Doors",
    description: "Custom fabricated garage doors — sized to fit, not standard sizes",
    images: [
      "/images/stock/garage-doors-1.jpg",
      "/images/stock/garage-doors-2.jpg",
      "/images/stock/garage-doors-3.jpg",
    ],
  },
  {
    id: "prefab",
    title: "Prefab Construction",
    description: "Hotels, apartments, and office buildings — volume builder pricing, factory direct",
    images: [
      "/images/stock/prefab-hotels.jpg",
      "/images/stock/prefab-apartments.jpg",
      "/images/stock/prefab-offices.jpg",
    ],
  },
  {
    id: "projects",
    title: "Global Projects",
    description: "Completed projects across the USA, Caribbean, Australia, and New Zealand",
    images: [
      "/images/gallery/tampa-residence.jpg",
      "/images/gallery/aruba-villa.jpg",
      "/images/gallery/australia-resort.jpg",
    ],
  },
];

export default function PromotionalGallery() {
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
            Ultimate-Buildings <span className="text-brand-primary">Project</span> Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Explore our showcase of custom architectural finishing products — stairs, flooring, countertops, cabinets, windows, doors, and more. All factory direct to your job site.
          </motion.p>
        </div>

        {gallerySections.map((section, sectionIndex) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.05 }}
            className="mb-20"
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
                <h2 className="text-2xl md:text-3xl font-display font-medium text-white whitespace-nowrap">
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
              </div>
              <p className="text-muted-foreground text-center text-sm max-w-2xl mx-auto">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.images.map((image, imageIndex) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: imageIndex * 0.05 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-500"
                >
                  <img
                    src={image}
                    alt={`${section.title} example`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of material experts and designers can help you create something extraordinary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Get a Custom Quote
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                Explore All Materials
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
