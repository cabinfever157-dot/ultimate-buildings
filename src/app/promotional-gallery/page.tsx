"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { NarrativeNav } from "@/components/layout/narrative-nav";

// Project data for the promotional gallery - Ultimate-Buildings Global Projects
const projectTypes = [
  {
    id: "multi-unit",
    title: "Multi-Unit Projects",
    description: "Large-scale residential and commercial developments",
    projects: [
      {
        id: "tampa-home",
        title: "Tampa Bay Residence",
        description: "Complete kitchen cabinetry package for luxury waterfront home",
        location: "Tampa, Florida",
        size: "Custom Residential",
        materials: ["Kitchen Cabinets", "Quartz Countertops", "Custom Cabinetry"],
        image: "/images/projects/page05_img03.jpg",
      },
      {
        id: "ohio-apartments",
        title: "Ohio Apartment Complex",
        description: "Multi-unit development with complete window, door, staircase and railing package",
        location: "Ohio, USA",
        size: "Multi-Family Residential",
        materials: ["Windows", "Doors", "Staircases", "Railings"],
        image: "/images/projects/page07_img02.jpg",
      },
      {
        id: "aruba-full-home",
        title: "Aruba Caribbean Villa",
        description: "Complete architectural finishing package for luxury island home",
        location: "Aruba",
        size: "Luxury Villa",
        materials: ["Cabinets", "Doors", "Windows", "Staircase", "Railings", "Vanities"],
        image: "/images/projects/page12_img01.jpg",
      },
    ],
  },
  {
    id: "public",
    title: "International Projects",
    description: "Global projects showcasing international craftsmanship",
    projects: [
      {
        id: "uk-villa",
        title: "UK Country Villa",
        description: "Custom curved staircase for elegant country estate",
        location: "United Kingdom",
        size: "Luxury Residential",
        materials: ["Custom Staircase", "Premium Materials", "Precision Craftsmanship"],
        image: "/images/projects/page13_img02.jpg",
      },
      {
        id: "australia-hotel",
        title: "Australian Resort Hotel",
        description: "Walk-in closets and bathroom vanities for boutique resort",
        location: "Australia",
        size: "Resort Hospitality",
        materials: ["Walk-in Closets", "Bathroom Vanities", "Custom Cabinetry"],
        image: "/images/projects/page16_img02.jpg",
      },
      {
        id: "nz-hotel",
        title: "New Zealand Boutique Hotel",
        description: "Sweeping curved staircase as signature architectural feature",
        location: "New Zealand",
        size: "Boutique Hospitality",
        materials: ["Curved Staircase", "Custom Design", "Structural Engineering"],
        image: "/images/projects/page14_img02.jpg",
      },
    ],
  },
  {
    id: "private",
    title: "Specialty Projects",
    description: "Unique commercial and residential commissions",
    projects: [
      {
        id: "arizona-estate",
        title: "Arizona Desert Estate",
        description: "Custom cabinetry and wrought iron entry doors for southwestern luxury home",
        location: "Arizona, USA",
        size: "Luxury Estate",
        materials: ["Custom Cabinetry", "Wrought Iron Doors", "Designer Hardware"],
        image: "/images/projects/page18_img02.jpg",
      },
      {
        id: "us-shopping-mall",
        title: "Regional Shopping Mall",
        description: "Architectural staircase and railing system for premier retail destination",
        location: "USA",
        size: "Commercial Retail",
        materials: ["Staircase", "Railings", "Architectural Metalwork"],
        image: "/images/projects/page15_img02.jpg",
      },
      {
        id: "fitness-gym",
        title: "Premium Fitness Center",
        description: "Modern staircase and glass railings for luxury gym facility",
        location: "USA",
        size: "Commercial Fitness",
        materials: ["Custom Staircase", "Glass Railings", "Metal Accents"],
        image: "/images/projects/page11_img02.jpg",
      },
    ],
  },
];

export default function PromotionalGallery() {
  const [activeCategory, setActiveCategory] = useState("multi-unit");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const currentCategory = projectTypes.find((category) => category.id === activeCategory) || projectTypes[0];

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

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
            Ultimate-Buildings <span className="text-brand-primary">Project</span> Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Explore our global portfolio of completed projects across the USA, UK, Australia, New Zealand, and beyond. Factory-direct architectural finishing products delivered worldwide.
          </motion.p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {projectTypes.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-brand-primary text-brand-dark shadow-glass-glow"
                    : "border-white/10 hover:bg-white/5 hover:text-brand-primary"
                }`}
              >
                {category.title}
              </Button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-2">
              {currentCategory.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentCategory.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-background/80 backdrop-blur-xl border-white/10 shadow-glass-md overflow-hidden hover:shadow-glass-lg transition-all duration-300 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.materials.map((material, matIndex) => (
                      <span
                        key={matIndex}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-foreground/60">
                    <span>{project.location}</span>
                    <span>{project.size}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-panel border border-white/10 rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 overflow-y-auto flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-foreground flex-1">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={closeProjectModal}
                    className="text-foreground/60 hover:text-foreground text-2xl ml-4"
                  >
                    ×
                  </button>
                </div>

                <p className="text-foreground/80 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
                      Location
                    </h4>
                    <p className="text-foreground">{selectedProject.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
                      Size
                    </h4>
                    <p className="text-foreground">{selectedProject.size}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-3">
                    Materials Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materials.map((material: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Link
                    href="/quote-wizard"
                    className="flex-1"
                  >
                    <Button className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow">
                      Get Quote for Similar Project
                    </Button>
                  </Link>
                  <Button
                    onClick={closeProjectModal}
                    variant="outline"
                    className="flex-1 border-white/10 hover:bg-white/5"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Call to Action Section */}
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