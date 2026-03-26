"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

// Countertop materials data
const countertopMaterials = [
  {
    id: "granite",
    title: "Granite Countertops",
    description: "Natural stone with exceptional durability and unique patterns",
    image: "/images/bento/elegant-granite-marble-kitchen-countertops.jpg",
    properties: [
      "Extremely hard and scratch resistant",
      "Heat resistant up to 1200°F",
      "Unique natural patterns and colors",
      "Long-lasting with proper sealing",
    ],
    applications: [
      "Kitchen countertops",
      "Bathroom vanities",
      "Outdoor kitchens",
      "Bar tops",
    ],
    colors: ["Absolute Black", "Ubatuba", "Santa Cecilia", "Bianco Antico", "Blue Pearl"],
    finishes: ["Polished", "Honed", "Leathered", "Flamed"],
    edgeProfiles: ["Eased", "Bevel", "Bullnose", "Ogee", "Waterfall"],
  },
  {
    id: "quartz",
    title: "Quartz Countertops",
    description: "Engineered stone with consistent patterns and low maintenance",
    image: "/images/bento/Luxury-granite-marble-countertop.jpg",
    properties: [
      "Non-porous and hygienic",
      "Highly scratch and stain resistant",
      "Consistent color and pattern",
      "Low maintenance (no sealing required)",
    ],
    applications: [
      "Kitchen countertops",
      "Bathroom vanities",
      "Commercial surfaces",
      "Backsplashes",
    ],
    colors: ["Calacatta", "Carrara", "Statuario", "Volga Blue", "Nero Marquina"],
    finishes: ["Polished", "Matte", "Suede"],
    edgeProfiles: ["Straight", "Bevel", "Bullnose", "Ogee", "Mitered"],
  },
  {
    id: "marble",
    title: "Marble Countertops",
    description: "Luxurious natural stone with timeless elegance",
    image: "/images/bento/Luxury-granite-marble-countertop.jpg",
    properties: [
      "Timeless beauty with unique veining",
      "Cooler surface ideal for baking",
      "Softer than granite (more susceptible to etching)",
      "Requires regular sealing and maintenance",
    ],
    applications: [
      "Bathroom vanities",
      "Kitchen islands (lower use areas)",
      "Fireplace surrounds",
      "Furniture tops",
    ],
    colors: ["Carrara", "Calacatta", "Statuario", "Emperador", "Crema Marfil"],
    finishes: ["Polished", "Honed", "Brushed"],
    edgeProfiles: ["Eased", "Bevel", "Bullnose", "Ogee", "Chiseled"],
  },
  {
    id: "solid-surface",
    title: "Solid Surface Countertops",
    description: "Seamless and versatile engineered material",
    image: "/images/bento/elegant-granite-marble-kitchen-countertops.jpg",
    properties: [
      "Seamless installation possible",
      "Repairable surface",
      "Non-porous and hygienic",
      "Wide range of colors and patterns",
    ],
    applications: [
      "Kitchen countertops",
      "Bathroom vanities",
      "Integrated sinks",
      "Commercial applications",
    ],
    brands: ["Corian", "Hi-Macs", "Staron", "Avonite"],
    finishes: ["Matte", "Semi-gloss", "Textured"],
    edgeProfiles: ["Square", "Bevel", "Bullnose", "Cove"],
  },
];

// Care and maintenance tips
const careTips = [
  {
    material: "Granite",
    tips: [
      "Seal annually with high-quality sealer",
      "Clean with pH-neutral stone cleaner",
      "Avoid acidic cleaners (vinegar, lemon, etc.)",
      "Use cutting boards to prevent scratches",
      "Wipe up spills promptly",
    ],
  },
  {
    material: "Quartz",
    tips: [
      "Clean with mild soap and water",
      "Avoid abrasive cleaners and pads",
      "Use trivets for hot pots and pans",
      "No sealing required",
      "Remove stains with baking soda paste",
    ],
  },
  {
    material: "Marble",
    tips: [
      "Seal every 3-6 months",
      "Use coasters for all drinks",
      "Clean spills immediately to prevent etching",
      "Avoid acidic substances (wine, citrus, vinegar)",
      "Use specialized marble cleaner",
    ],
  },
  {
    material: "Solid Surface",
    tips: [
      "Clean with mild detergent",
      "Use soft cloth or sponge",
      "Minor scratches can be sanded out",
      "Avoid harsh abrasives",
      "Rinse thoroughly after cleaning",
    ],
  },
];

export default function CountertopsPage() {
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
            <span className="text-brand-primary">Countertops</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Premium countertop solutions for kitchens, bathrooms, and commercial spaces
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
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {countertopMaterials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-panel border border-white/10 shadow-glass-md overflow-hidden hover:shadow-glass-lg transition-all duration-300 h-full flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {material.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {material.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Key Properties:
                    </h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {material.properties.map((property, propIndex) => (
                        <li key={propIndex} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{property}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Applications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {material.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      {material.colors ? "Popular Colors:" : material.brands ? "Premium Brands:" : "Options:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(material.colors || material.brands)?.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-white/10 text-foreground text-xs rounded-full border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Edge Profiles:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {material.edgeProfiles?.map((profile, profileIndex) => (
                        <span
                          key={profileIndex}
                          className="px-3 py-1 bg-white/10 text-foreground text-xs rounded-full border border-white/10"
                        >
                          {profile}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Material Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Countertop Material Comparison
          </h2>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-glass-lg rounded-lg">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Granite
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Quartz
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Marble
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Solid Surface
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/5 divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Material Type
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Natural Stone
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Engineered Stone
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Natural Stone
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Synthetic
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Porosity
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Porous (needs sealing)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Non-porous
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Porous (needs sealing)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Non-porous
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Heat Resistance
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Excellent (1200°F+)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Good (up to 300°F)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Moderate
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Moderate
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Scratch Resistance
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Excellent
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Excellent
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Moderate
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Good
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Stain Resistance
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Good (when sealed)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Excellent
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Moderate (etching possible)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Excellent
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Maintenance
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Annual sealing
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Very Low
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        High (frequent sealing)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Low
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Price Range
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        $$-$$$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        $$-$$$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        $$$-$$$$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        $-$$
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Care and Maintenance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {careTips.map((tip, index) => (
            <Card key={index} className="glass-panel border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {tip.material}
              </h3>
              <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-3">
                Care Tips:
              </h4>
              <ol className="text-sm text-foreground/80 space-y-2">
                {tip.tips.map((t, tipIndex) => (
                  <li key={tipIndex} className="flex">
                    <span className="text-brand-primary mr-2">
                      {tipIndex + 1}.
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            Upgrade your kitchen or bathroom today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our countertop specialists can help you choose the perfect material and design for your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Get Countertop Consultation
              </Button>
            </Link>
            <Link href="/materials">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                Compare All Materials
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}