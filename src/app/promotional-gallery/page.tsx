"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { BookOpen } from "lucide-react";

const gallerySections = [
  {
    id: "stairs",
    title: "Staircases & Railings",
    description: "Custom curved, spiral, and straight staircases — wrought iron, stainless steel, glass, and wood",
    catalogLinks: [] as { href: string; label: string }[],
    images: [
      "/images/stock/stairs-1.jpg",
      "/images/stock/stairs-stainless-steel.jpg",
      "/images/gallery/uk-villa-staircase.png",
      "/images/gallery/fitness-center.jpg",
      "/images/gallery/shopping-mall.jpg",
      "/images/gallery/nz-boutique-hotel.jpg",
      "https://goldenglass.com/wp-content/uploads/2020/11/iStock-129179692.jpg",
      "https://www.arasbar.com/wp-content/uploads/2020/07/fascinating-custom-wood-stairs-picture-900.jpg",
      "https://t3.ftcdn.net/jpg/10/55/16/00/240_F_1055160047_ZgmdYP24AJ60E755QOPZO5tyV0wpi2g9.jpg",
      "https://t3.ftcdn.net/jpg/04/78/05/54/240_F_478055404_sS4JLE3310THKZJfWfF9Wolt1IiTef27.jpg",
    ],
  },
  {
    id: "stone-flooring",
    title: "Stone Flooring & Walls",
    description: "Marble, granite, and quartz — interior and exterior applications",
    catalogLinks: [
      { href: "/catalogs/granite-marble", label: "Granite & Marble Catalog" },
      { href: "/catalogs/quartz", label: "Quartz Catalog" },
    ],
    images: [
      "/images/stock/stone-flooring-marble.png",
      "/images/stock/stone-flooring-1.jpg",
      "/images/stock/stone-flooring-2.jpg",
      "/images/stock/stone-flooring-3.jpg",
      "https://t4.ftcdn.net/jpg/05/19/71/33/360_F_519713382_18hplddKbojywZ1mHQHG5zNcbQJORPgy.jpg",
      "https://t3.ftcdn.net/jpg/13/12/52/26/240_F_1312522611_FjbgstFkiyru1IwIsMIZIHDkwaQGZiea.jpg",
      "https://t4.ftcdn.net/jpg/16/02/73/89/240_F_1602738990_5aaM7ssdifu3zHM4hnEZuOzDWibWEMTQ.jpg",
      "https://t3.ftcdn.net/jpg/12/65/99/74/240_F_1265997444_4mfna2XoXuyRTQywq2fSUbrLysr85HET.jpg",
    ],
  },
  {
    id: "spc-flooring",
    title: "SPC Flooring",
    description: "Click-lock, glue-down, and lay-flat SPC flooring — custom thickness and wear layer",
    catalogLinks: [
      { href: "/catalogs/spc-flooring", label: "SPC Flooring Catalog" },
    ],
    images: [
      "/images/stock/spc-flooring-1.jpg",
      "/images/stock/spc-flooring-2.jpg",
      "/images/stock/spc-flooring-3.jpg",
      "https://t4.ftcdn.net/jpg/06/64/61/07/240_F_664610713_DHTjTvAevO6qaTYDDu8KeEaoT3xllBxZ.jpg",
      "https://t4.ftcdn.net/jpg/09/85/27/17/240_F_985271771_bmEcd9guM6LFTTmLNkAYtqu9mJ2gvE3q.jpg",
      "https://t4.ftcdn.net/jpg/12/51/28/69/240_F_1251286922_D1laQezzYfLzoWSNLj7lZrmBM4z2yA89.jpg",
    ],
  },
  {
    id: "countertops",
    title: "Countertops & Slabs",
    description: "Granite, quartz, and marble countertops — custom fabricated to your specifications",
    catalogLinks: [
      { href: "/catalogs/granite-marble", label: "Granite & Marble Catalog" },
      { href: "/catalogs/quartz", label: "Quartz Catalog" },
    ],
    images: [
      "/images/stock/countertops-1.jpg",
      "/images/stock/countertops-2.jpg",
      "/images/stock/countertops-3.jpg",
      "/images/stock/countertops-4.jpg",
      "/images/stock/countertops-5.jpg",
      "/images/stock/countertops-6.jpg",
      "/images/stock/countertops-7.jpg",
      "https://t4.ftcdn.net/jpg/05/67/44/15/240_F_567441573_mdINncJhdTQDsrVybM8yYOXjzemEGGNC.jpg",
      "https://t3.ftcdn.net/jpg/06/63/22/88/240_F_663228827_PL2tD3KL5UAj6afVi9PGwdqiV2qKzUmO.jpg",
      "https://t3.ftcdn.net/jpg/16/27/01/24/240_F_1627012411_kMlhvMIC5JUuEjp03tSMGwQXGCToexZ4.jpg",
      "https://t3.ftcdn.net/jpg/15/26/21/18/240_F_1526211852_i71UWR0yvt2mFLRs9ZoGhi862ofj382V.jpg",
      "https://t3.ftcdn.net/jpg/12/87/31/58/240_F_1287315814_JGMbLK49f3WxcL8tY9BeMS7GagzZMZQB.jpg",
      "https://t4.ftcdn.net/jpg/10/48/58/25/240_F_1048582522_7LeJayAGPD2Oj1dwOaxvnZEXGX6NMIc2.jpg",
      "https://t4.ftcdn.net/jpg/11/52/69/87/240_F_1152698710_wlStuFy2Szp7wB8NcvfIngQExO4vWeoR.jpg",
      "https://t3.ftcdn.net/jpg/18/26/81/74/240_F_1826817424_p5TLgYmN8hgbO3DC3RWsNDnXbVFZAJsz.jpg",
    ],
  },
  {
    id: "cabinets",
    title: "Cabinets, Vanities & Storage",
    description: "Kitchens, vanities, closets, wardrobes, and organizational storage — fully custom",
    catalogLinks: [] as { href: string; label: string }[],
    images: [
      "/images/stock/cabinets-1.jpg",
      "/images/stock/cabinets-6.jpg",
      "/images/stock/cabinets-3.jpg",
      "/images/stock/cabinets-4.jpg",
      "/images/stock/cabinets-5.jpg",
      "/images/stock/closets.jpg",
      "/images/stock/vanity-1.jpg",
      "/images/stock/vanity-2.jpg",
      "https://t4.ftcdn.net/jpg/03/15/22/19/240_F_315221981_b8jIDpHXJJuKOB6ozPxvimO9C0y6Lgdm.jpg",
      "https://t3.ftcdn.net/jpg/18/67/71/56/240_F_1867715612_V045nOdRK4XbKLKQOYuLaaQoflBSR6SX.jpg",
      "https://t3.ftcdn.net/jpg/08/06/73/76/240_F_806737603_Q8YpQuMKwZ20KeDjK6GeFubDejMGrFGJ.jpg",
      "https://t3.ftcdn.net/jpg/10/98/07/90/240_F_1098079067_IuFDeYDJneZF8331C8Tpx6skE7NCeRyA.jpg",
      "https://t3.ftcdn.net/jpg/02/72/98/66/240_F_272986603_4pJSgslRHDbsFABtQ6KBznAJxjErGmHB.jpg",
      "https://t3.ftcdn.net/jpg/08/30/22/28/240_F_830222803_tLxTTbIRinlJKbdlXaSYlErg950fvbIx.jpg",
    ],
  },
  {
    id: "bathrooms",
    title: "Hotel & Luxury Bathrooms",
    description: "Complete bathroom packages for hotels, resorts, and luxury residential",
    catalogLinks: [] as { href: string; label: string }[],
    images: [
      "/images/stock/hotel-bathroom-1.jpg",
      "/images/stock/hotel-bathroom-2.jpg",
      "/images/stock/hotel-bathroom-3.jpg",
      "/images/stock/hotel-bathroom-4.jpg",
      "/images/stock/hotel-bathroom-5.jpg",
      "/images/stock/hotel-bathroom-6.jpg",
      "https://t3.ftcdn.net/jpg/02/28/13/52/240_F_228135288_sPV6O8K9px6d9oSKM2yWR3WclAUjVAYD.jpg",
      "https://t4.ftcdn.net/jpg/06/33/36/81/240_F_633368137_ozrNwnkCl0ZO43ryDMSfARs07s7BxIpU.jpg",
      "https://t4.ftcdn.net/jpg/02/98/78/93/240_F_298789312_3GKu1HrB1X65wVa99pQjl7bZ0NeHN7OG.jpg",
      "https://t4.ftcdn.net/jpg/10/97/50/73/240_F_1097507319_H2UYCkIBl3ob2dzcIo372ymyOyhVTP1a.jpg",
      "https://t3.ftcdn.net/jpg/07/07/90/48/240_F_707904804_u38954M9OqDSbZ633ogJCycgFt1u1vNL.jpg",
      "https://t4.ftcdn.net/jpg/04/97/16/69/240_F_497166923_k8svzGnmrRRRzuhjuVJS7n33ynIWwclG.jpg",
    ],
  },
  {
    id: "windows-doors",
    title: "Windows & Doors",
    description: "French slim steel, aluminum, wrought iron, and mixed material systems",
    catalogLinks: [
      { href: "/catalogs/french-steel", label: "French Slim Steel Catalog" },
      { href: "/catalogs/aluminum-doors-windows", label: "Aluminum Doors & Windows Catalog" },
      { href: "/catalogs/wrought-iron-doors", label: "Wrought Iron Doors Catalog" },
      { href: "/catalogs/wooden-doors", label: "Wooden Doors Catalog" },
    ],
    images: [
      "/images/stock/windows-1.jpg",
      "/images/stock/windows-2.jpg",
      "/images/stock/windows-3.jpg",
      "/images/stock/wrought-iron-door.jpg",
      "/images/stock/windows-mixed-materials.png",
      "/images/gallery/ohio-apartments.jpg",
      "/images/stock/wood-entry-door-1.jpg",
      "/images/stock/wood-entry-door-2.png",
      "https://t3.ftcdn.net/jpg/02/56/45/58/240_F_256455890_qye58OWMmdeDKIHEBDhjYoTD6eB14HQl.jpg",
      "https://t3.ftcdn.net/jpg/08/77/69/74/240_F_877697412_wpDcsxrqiNpbSEHLNC388giZoBxPKS2b.jpg",
    ],
  },
  {
    id: "gates",
    title: "Metalwork, Gates & Garage Doors",
    description: "Custom gates, fencing, architectural metalwork, and commercial garage doors",
    catalogLinks: [
      { href: "/catalogs/wrought-iron-doors", label: "Wrought Iron Doors Catalog" },
    ],
    images: [
      "/images/stock/gates-1.jpg",
      "/images/stock/gates-2.jpg",
      "/images/stock/gates-upload.jpg",
      "/images/stock/security-fence.jpg",
      "/images/gallery/arizona-estate.jpg",
      "/images/stock/garage-doors-1.jpg",
      "/images/stock/garage-doors-2.jpg",
      "/images/stock/garage-doors-3.jpg",
      "https://t4.ftcdn.net/jpg/03/20/63/53/240_F_320635312_QPY4k7ES8WXi2cSBp6LCUPlklh5ekpy0.jpg",
      "https://t3.ftcdn.net/jpg/18/57/72/50/240_F_1857725025_9sGQGCkf2i3Ea0d0kRJRFCPomrh2466i.jpg",
      "https://t4.ftcdn.net/jpg/03/51/77/23/240_F_351772324_XdehXoDinFoPHWxygTELooealeUPug7H.jpg",
      "https://t4.ftcdn.net/jpg/03/47/03/03/240_F_347030388_2aogrN9g0Pz0Bhqih2xKQpnCsNarAr73.jpg",
      "https://as1.ftcdn.net/v2/jpg/03/29/74/32/1000_F_329743259_L8BpstF5tCVwCHAbWQ0tWTgtboXxkllv.jpg",
    ],
  },
  {
    id: "prefab",
    title: "Prefab Construction",
    description: "Hotels, apartments, and office buildings — volume builder pricing, factory direct",
    catalogLinks: [
      { href: "/catalogs/prefab-construction", label: "Prefab Construction Catalog" },
    ],
    images: [
      "/images/stock/prefab-hotels.jpg",
      "/images/stock/prefab-apartments.jpg",
      "/images/stock/prefab-offices.jpg",
    ],
  },
  /* Global Projects - removed per client feedback
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
  */
];

export default function PromotionalGallery() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
    };

    const t1 = setTimeout(scrollToHash, 400);
    const t2 = setTimeout(scrollToHash, 1000);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

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
            Ultimate-Buildings <span className="text-brand-primary">Product</span> Gallery
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
            id={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.05 }}
            className="mb-20 scroll-mt-32"
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
              {section.catalogLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {section.catalogLinks.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-brand-primary hover:text-brand-dark border border-white/10 hover:border-brand-primary transition-all text-xs font-medium text-white"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
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
                Explore All Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
