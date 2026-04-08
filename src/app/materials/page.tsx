"use client";

import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { ArrowRight, Info, CheckCircle } from "lucide-react";
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

// Material categories with their properties
export const materialsData = [
  {
    id: 'spc-flooring',
    title: 'SPC Flooring',
    category: 'Flooring',
    description: 'Stone Plastic Composite flooring — waterproof, durable, and factory direct. Perfect for high-traffic residential and commercial spaces.',
    image: '/images/projects/page08_img03.jpg',
    icon: 'FlooringIcon',
    properties: [
      '100% Waterproof',
      'Scratch & Dent Resistant',
      'Easy Click-Lock Installation',
      'Commercial Grade Durability',
      'Pet & Kid Friendly'
    ],
    applications: [
      'Residential Homes',
      'Commercial Spaces',
      'High-Traffic Areas',
      'Bathrooms & Kitchens'
    ],
    colors: ['Natural Oak', 'Gray Wood', 'Dark Walnut', 'White Wash', 'Custom Colors']
  },
  {
    id: 'natural-stone',
    title: 'Granite & Marble',
    category: 'Premium Materials',
    description: 'We own the quarry. Fully integrated from mine to fabrication. Premium stone surfaces with direct quality control.',
    image: '/images/projects/page05_img04.jpg',
    icon: 'StoneIcon',
    properties: [
      'Own the Mine',
      'Factory Direct',
      'Heat Resistant',
      'Stain Resistant',
      'Timeless Elegance',
      'Durable for Decades'
    ],
    applications: [
      'Kitchen Countertops',
      'Bathroom Vanities',
      'Floor Tiles',
      'Wall Cladding',
      'Outdoor Applications'
    ],
    types: ['Granite', 'Marble', 'Quartz', 'Limestone', 'Travertine']
  },
  {
    id: 'premium-wood',
    title: 'Premium Hardwoods',
    category: 'Natural Materials',
    description: 'Exotic and domestic hardwoods for luxury applications',
    icon: 'WoodIcon',
    properties: [
      'Sustainably Sourced',
      'Custom Finishes Available',
      'Durable Construction',
      'Natural Beauty',
      'Sound Insulation'
    ],
    applications: [
      'Custom Doors',
      'Luxury Cabinets',
      'Flooring',
      'Wall Paneling',
      'Furniture'
    ],
    species: ['Mahogany', 'Walnut', 'Oak', 'Maple', 'Cherry']
  },
  {
    id: 'aluminum-systems',
    title: 'Architectural Aluminum',
    category: 'Metal Systems',
    description: 'High-performance aluminum alloys for modern construction',
    icon: 'WindowIcon',
    properties: [
      'Thermal Break Technology',
      'Corrosion Resistant',
      'Lightweight & Strong',
      'Slim Profiles',
      'Energy Efficient'
    ],
    applications: [
      'Windows & Doors',
      'Curtain Walls',
      'Balustrades',
      'Structural Frames',
      'Custom Fabrications'
    ],
    finishes: ['Anodized', 'Powder Coated', 'Wood Grain', 'Matte', 'Gloss']
  },
  {
    id: 'wrought-iron',
    title: 'Artisan Wrought Iron',
    category: 'Metal Craftsmanship',
    description: 'Hand-forged ironwork for statement pieces',
    icon: 'DoorIcon',
    properties: [
      'Hand-Forged Designs',
      'Custom Patterns',
      'Durable Construction',
      'Security Enhanced',
      'Timeless Aesthetics'
    ],
    applications: [
      'Entry Doors',
      'Security Gates',
      'Railings',
      'Decorative Accents',
      'Furniture'
    ],
    styles: ['Classic', 'Modern', 'Art Deco', 'Spanish', 'Custom']
  },
  {
    id: 'granite-decking',
    title: 'Granite Deck Systems',
    category: 'Outdoor Materials',
    description: 'Premium granite solutions for outdoor living spaces',
    icon: 'StoneIcon',
    properties: [
      'Weather Resistant',
      'Slip-Resistant',
      'UV Stable',
      'Low Maintenance',
      'Natural Beauty'
    ],
    applications: [
      'Pool Decks',
      'Patios',
      'Walkways',
      'Outdoor Kitchens',
      'Landscaping Features'
    ],
    finishes: ['Polished', 'Honed', 'Flamed', 'Bush-Hammered', 'Leathered']
  }
];

export default function MaterialsPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24">
      <NarrativeNav />

      {/* Background glow effect */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/8 blur-[100px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[300px] bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

      <main className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6"
          >
            Premium <span className="text-brand-primary">Materials</span> Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Explore our curated selection of high-performance materials designed for durability, beauty, and innovation.
            From natural stone to advanced composites, each material is selected for its exceptional quality and suitability
            for modern architecture and design.
          </motion.p>
        </div>

        {/* Material Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {materialsData.map((material, i) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col rounded-2xl glass-panel border border-white/10 hover:border-brand-primary/30 transition-all overflow-hidden"
            >
              {/* Material image */}
              {material.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-1">
              {/* Material icon with glow */}
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:border-brand-primary/30 transition-all">
                {getIconComponent(material.icon)}
              </div>

              <h3 className="text-2xl font-display font-medium text-white mb-3">
                {material.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-[1.6] flex-1">
                {material.description}
              </p>

              {/* Properties */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-brand-primary mb-3 font-medium">Key Properties</h4>
                <div className="flex flex-wrap gap-2">
                  {material.properties.map((property, propIndex) => (
                    <span key={propIndex} className="px-3 py-1 bg-white/5 rounded-full text-xs text-muted-foreground border border-white/10 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-brand-primary" />
                      {property}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-brand-primary mb-3 font-medium">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {material.applications.map((app, appIndex) => (
                    <span key={appIndex} className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learn More Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-white/5 hover:bg-brand-primary hover:text-brand-dark transition-all py-3 px-6 rounded-xl border border-white/10 hover:border-brand-primary/50 flex items-center justify-center gap-2 text-sm font-medium"
              >
                Explore {material.title} <ArrowRight className="w-4 h-4" />
              </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Related Catalogs Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-white mb-12 text-center"
          >
            Related Product Catalogs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogsData.slice(0, 3).map((catalog, i) => (
              <motion.div
                key={catalog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl overflow-hidden glass-panel border border-white/10 hover:border-brand-primary/30 transition-all group"
              >
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-brand-primary/10 to-transparent z-10" />
                <div className="relative z-20 p-6 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                    {getIconComponent(catalog.icon)}
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-2">
                    {catalog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {catalog.description}
                  </p>
                  <button className="mt-auto text-sm text-brand-primary hover:text-brand-primary/80 transition-colors flex items-center gap-1">
                    View Catalog <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Material Comparison Table */}
        <div className="glass-panel rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-display font-medium text-white mb-6 text-center">
            Material Comparison Guide
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 text-muted-foreground uppercase tracking-wider text-xs">Material</th>
                  <th className="text-left py-3 text-muted-foreground uppercase tracking-wider text-xs">Durability</th>
                  <th className="text-left py-3 text-muted-foreground uppercase tracking-wider text-xs">Maintenance</th>
                  <th className="text-left py-3 text-muted-foreground uppercase tracking-wider text-xs">Best For</th>
                  <th className="text-left py-3 text-muted-foreground uppercase tracking-wider text-xs">Price Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 text-white font-medium">SPC Flooring</td>
                  <td className="py-4"><span className="text-brand-primary">⭐⭐⭐⭐⭐</span></td>
                  <td className="py-4 text-muted-foreground">Low</td>
                  <td className="py-4 text-muted-foreground">High Traffic Areas</td>
                  <td className="py-4 text-muted-foreground">$$</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 text-white font-medium">Natural Stone</td>
                  <td className="py-4"><span className="text-brand-primary">⭐⭐⭐⭐⭐</span></td>
                  <td className="py-4 text-muted-foreground">Medium</td>
                  <td className="py-4 text-muted-foreground">Luxury Surfaces</td>
                  <td className="py-4 text-muted-foreground">$$$</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 text-white font-medium">Premium Wood</td>
                  <td className="py-4"><span className="text-brand-primary">⭐⭐⭐⭐</span></td>
                  <td className="py-4 text-muted-foreground">Medium-High</td>
                  <td className="py-4 text-muted-foreground">Custom Furniture</td>
                  <td className="py-4 text-muted-foreground">$$$</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 text-white font-medium">Aluminum Systems</td>
                  <td className="py-4"><span className="text-brand-primary">⭐⭐⭐⭐⭐</span></td>
                  <td className="py-4 text-muted-foreground">Low</td>
                  <td className="py-4 text-muted-foreground">Windows & Doors</td>
                  <td className="py-4 text-muted-foreground">$$-$$$</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 text-white font-medium">Wrought Iron</td>
                  <td className="py-4"><span className="text-brand-primary">⭐⭐⭐⭐⭐</span></td>
                  <td className="py-4 text-muted-foreground">Low-Medium</td>
                  <td className="py-4 text-muted-foreground">Security & Decor</td>
                  <td className="py-4 text-muted-foreground">$$$</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 text-white font-medium">Granite Decks</td>
                  <td className="py-4"><span className="text-brand-primary">⭐⭐⭐⭐⭐</span></td>
                  <td className="py-4 text-muted-foreground">Low</td>
                  <td className="py-4 text-muted-foreground">Outdoor Spaces</td>
                  <td className="py-4 text-muted-foreground">$$$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}