"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NarrativeNav() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="backdrop-blur-xl bg-background/60 border border-white/10 shadow-glass-md rounded-2xl px-6 py-4 flex items-center justify-between">
           <Link href="/" className="font-display font-bold text-xl tracking-tighter text-brand-primary flex gap-2 items-center">
             <img src="/logo.png" alt="Ultimate-Buildings Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
             Ultimate-Buildings
          </Link>

           <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/80 hover:text-brand-primary transition-colors bg-transparent hover:bg-transparent focus:bg-transparent">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                        <li>
                            <Link href="/products/stone-flooring" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">Stone Flooring & Walls</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Marble, Granite, Quartz - Interior & Exterior solutions
                              </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/products/spc-flooring" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">SPC Flooring</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Click-Lock, Glue-Down, Lay-Flat — 5-week production
                              </p>
                            </Link>
                        </li>
                        <li>
                             <Link href="/products/stairs-railings" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                               <div className="text-sm font-medium leading-none">Stairs & Railings</div>
                               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                 Custom-designed staircases and railings
                               </p>
                             </Link>
                        </li>
                        <li>
                             <Link href="/products/cabinets" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                               <div className="text-sm font-medium leading-none">Cabinets & Storage</div>
                               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                 Kitchen, bath, wardrobe, and walk-in storage
                               </p>
                             </Link>
                        </li>
                        <li>
                             <Link href="/products/countertops" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                               <div className="text-sm font-medium leading-none">Countertops & Slabs</div>
                               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                 Slabs, fabrication, and custom countertops
                               </p>
                             </Link>
                        </li>
                        <li>
                             <Link href="/products/windows-doors" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                               <div className="text-sm font-medium leading-none">Windows & Doors</div>
                               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                 Custom fabricated — residential & commercial
                               </p>
                             </Link>
                        </li>
                        <li>
                             <Link href="/products/metal-products" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                               <div className="text-sm font-medium leading-none">Metal Products</div>
                               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                 Fencing, gates, partitions & garage doors
                               </p>
                             </Link>
                        </li>
                        <li>
                            <Link href="/products/prefab-construction" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">Prefab Construction</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Hotels, apartments, offices — volume builder pricing
                              </p>
                            </Link>
                        </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/quote-wizard" className="text-foreground/80 hover:text-brand-primary transition-colors">
              Quote Wizard
            </Link>
            <Link href="/promotional-gallery" className="text-foreground/80 hover:text-brand-primary transition-colors">
              Promotional Gallery
            </Link>
             <Link href="/about" className="text-foreground/80 hover:text-brand-primary transition-colors">
               About
             </Link>
          </nav>

           <div className="flex items-center gap-4">
             <a href="tel:5138001980">
               <Button variant="outline" className="hidden md:flex border-white/10 hover:bg-white/5 hover:text-brand-primary">
                 Contact Us
               </Button>
             </a>
             <Link href="/quote-wizard">
               <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow">
                 Get an Estimate
               </Button>
             </Link>
           </div>
        </div>
      </div>
    </header>
  );
}
