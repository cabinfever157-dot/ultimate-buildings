"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { 
  CheckCircle2, 
  ShieldAlert, 
  UploadCloud, 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Calendar, 
  Box, 
  PenTool, 
  Building2,
  AlertTriangle,
  Info
} from "lucide-react";

// Extended Form Data based on new business logic
interface QuoteFormData {
  termsAccepted: boolean;
  projectName: string;
  projectAddress: string;
  deliveryAddress: string;
  biddingDate: string;
  awardingDate: string;
  deliveryPeriod: string;
  multiDeliveryFlow: string;
  productCategory: string;
  quantityByDate: string;
  brandPreference: string;
  colorNameSource: string;
  sizes: string;
  materialsDescription: string;
  softwareIdentification: string;
  buyerComments: string;
  companyName: string;
  billingAddress: string;
  directBuyerContactName: string;
  directBuyerContactPhone: string;
  directBuyerContactEmail: string;
  managementContactName: string;
  managementContactPhone: string;
  managementContactEmail: string;
}

const steps = [
  { id: 1, title: "Purchasing Rules", icon: ShieldAlert },
  { id: 2, title: "Project Schedule", icon: Calendar },
  { id: 3, title: "Product Requirements", icon: Box },
  { id: 4, title: "Documentation", icon: PenTool },
  { id: 5, title: "Billing & Contact", icon: Building2 },
];

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    termsAccepted: false,
    projectName: "",
    projectAddress: "",
    deliveryAddress: "",
    biddingDate: "",
    awardingDate: "",
    deliveryPeriod: "",
    multiDeliveryFlow: "",
    productCategory: "",
    quantityByDate: "",
    brandPreference: "",
    colorNameSource: "",
    sizes: "",
    materialsDescription: "",
    softwareIdentification: "",
    buyerComments: "",
    companyName: "",
    billingAddress: "",
    directBuyerContactName: "",
    directBuyerContactPhone: "",
    directBuyerContactEmail: "",
    managementContactName: "",
    managementContactPhone: "",
    managementContactEmail: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    alert("Thank you for your comprehensive quote request! Our USA Customer Service team will review your details.");
  };

  const nextStep = () => {
    if (step === 1 && !formData.termsAccepted) {
      alert("Please acknowledge the purchasing rules to continue.");
      return;
    }
    setStep(step + 1);
  };
  
  const prevStep = () => setStep(step - 1);

  // Advanced Animation variants for staggered reveals
  const containerVariants = {
    initial: { opacity: 0 },
    in: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
    out: { 
      opacity: 0, 
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    in: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    out: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.2 } }
  };

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      <NarrativeNav />

      {/* Dynamic Animated Cinematic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[1000px] h-[800px] bg-brand-primary/30 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -60, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[700px] bg-amber-600/30 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-blue-900/40 blur-[180px] rounded-full mix-blend-screen" 
        />
        
        {/* Subtle blueprint grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-6 tracking-tight relative inline-block">
              Bid <span className="text-brand-primary font-medium bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-amber-300">Quote Portal</span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Direct factory pricing including all logistics, customs, and duties.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Progress Sidebar */}
          <div className="lg:col-span-3 hidden lg:block sticky top-32">
            <nav className="space-y-3 relative before:absolute before:inset-0 before:ml-[25px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const isActive = step === s.id;
                const isPassed = step > s.id;
                
                return (
                  <motion.div 
                    key={s.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                    className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 overflow-hidden group ${
                      isActive ? "bg-brand-primary/10 border border-brand-primary/40 text-brand-primary shadow-[0_0_20px_rgba(212,175,55,0.15)]" :
                      isPassed ? "text-white/80 bg-white/5 border border-white/10 hover:border-brand-primary/30" : "text-white/30 border border-transparent"
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`p-2.5 rounded-full relative z-10 transition-colors duration-500 ${isActive ? 'bg-brand-primary/20 text-brand-primary shadow-[0_0_15px_rgba(212,175,55,0.4)]' : isPassed ? 'bg-green-500/20 text-green-400' : 'bg-white/5 border border-white/10 group-hover:bg-white/10'}`}>
                      {isPassed ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className="font-medium font-display text-sm uppercase tracking-wider relative z-10">{s.title}</span>
                  </motion.div>
                )
              })}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-glass-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors duration-500" />
              <div className="flex items-start gap-3 text-brand-primary mb-4 relative z-10">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <h4 className="font-display font-semibold text-sm tracking-widest uppercase">The 3 C&apos;s</h4>
              </div>
              <ul className="space-y-3 text-sm text-white/70 font-body relative z-10">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" /> Custom Sizes</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" /> Custom Colors</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" /> Custom Detailing</li>
              </ul>
            </motion.div>
          </div>

          {/* Main Form Area */}
          <Card className="lg:col-span-9 bg-[#05070a]/60 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden rounded-[2rem] relative">
            
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-brand-primary/5 pointer-events-none" />

            {/* Progress Bar (Mobile) */}
            <div className="lg:hidden h-1.5 w-full bg-white/5 absolute top-0 left-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-brand-primary to-amber-300"
                initial={{ width: 0 }}
                animate={{ width: `${(step / steps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="p-8 md:p-14 relative z-10">
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={containerVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                      className="space-y-8"
                    >
                      <motion.div variants={itemVariants} className="mb-10">
                        <h2 className="text-4xl font-display font-medium text-white mb-3">Purchasing Rules & Terms</h2>
                        <p className="text-white/60 text-lg">Please review our business model to ensure a perfect fit for your project.</p>
                      </motion.div>

                      <div className="grid gap-6">
                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-3xl hover:border-brand-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 group">
                          <h3 className="flex items-center gap-4 text-xl font-medium text-white mb-4">
                            <div className="p-2.5 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:scale-110 transition-transform">
                              <Box className="w-6 h-6" />
                            </div>
                            Container Lots Only
                          </h3>
                          <p className="text-white/60 text-base leading-relaxed pl-14">
                            Purchases by Product Type must be in container lots (except entrance doors). Different products from different origins cannot be combined in the same container.
                          </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-3xl hover:border-brand-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 group">
                          <h3 className="flex items-center gap-4 text-xl font-medium text-white mb-4">
                            <div className="p-2.5 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:scale-110 transition-transform">
                              <MapPin className="w-6 h-6" />
                            </div>
                            True Factory Direct
                          </h3>
                          <p className="text-white/60 text-base leading-relaxed pl-14">
                            Pricing includes all logistics from factory to job site/warehouse, customs clearance, and duties. You do not need to open an LC or handle international shipping.
                          </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-3xl hover:border-brand-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 group">
                          <h3 className="flex items-center gap-4 text-xl font-medium text-white mb-4">
                            <div className="p-2.5 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:scale-110 transition-transform">
                              <ShieldAlert className="w-6 h-6" />
                            </div>
                            Payment Flow
                          </h3>
                          <ul className="text-white/60 text-base space-y-3 leading-relaxed pl-14">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" /> 50% down payment to start production.</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" /> Balance due before the factory ships.</li>
                            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2" /> <span><span className="text-green-400 font-medium">Optional:</span> Payment Guarantee Insurance available (allows paying once goods clear customs, subject to credit approval).</span></li>
                          </ul>
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 mt-8">
                        <label className="flex items-start gap-5 cursor-pointer group p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                          <div className="relative flex items-center mt-1.5">
                            <input
                              type="checkbox"
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleInputChange}
                              className="peer sr-only"
                            />
                            <div className="w-7 h-7 rounded-lg border-2 border-white/20 peer-checked:bg-brand-primary peer-checked:border-brand-primary transition-all group-hover:border-brand-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0)] peer-checked:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                              {formData.termsAccepted && <CheckCircle2 className="w-5 h-5 text-brand-dark" />}
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-white text-lg font-medium block mb-1 group-hover:text-brand-primary transition-colors">I understand and accept the purchasing rules</span>
                            <span className="text-white/50 text-base">By checking this box, I acknowledge the container lot requirements and payment terms.</span>
                          </div>
                        </label>
                      </motion.div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={containerVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                      className="space-y-8"
                    >
                      <motion.div variants={itemVariants} className="mb-10">
                        <h2 className="text-4xl font-display font-medium text-white mb-3">Project Logistics</h2>
                        <p className="text-white/60 text-lg">Where and when is this project happening?</p>
                      </motion.div>

                      <div className="space-y-8">
                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Project Name</label>
                            <input
                              type="text"
                              name="projectName"
                              value={formData.projectName}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                              placeholder="e.g. Skyline Towers Phase 2"
                              required
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Bidding Period Date</label>
                            <input
                              type="date"
                              name="biddingDate"
                              value={formData.biddingDate}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner [color-scheme:dark]"
                              required
                            />
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Project Address</label>
                          <input
                            type="text"
                            name="projectAddress"
                            value={formData.projectAddress}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                            placeholder="Full physical address of the site"
                            required
                          />
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Delivery Address (if different)</label>
                          <input
                            type="text"
                            name="deliveryAddress"
                            value={formData.deliveryAddress}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                            placeholder="Warehouse or staging location"
                          />
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Project Award Date</label>
                            <input
                              type="date"
                              name="awardingDate"
                              value={formData.awardingDate}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner [color-scheme:dark]"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Desired Delivery Period</label>
                            <input
                              type="text"
                              name="deliveryPeriod"
                              value={formData.deliveryPeriod}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                              placeholder="e.g. Q3 2026 or August 2026"
                              required
                            />
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Multi-Delivery Flow (If Applicable)</label>
                          <textarea
                            name="multiDeliveryFlow"
                            value={formData.multiDeliveryFlow}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner resize-none"
                            placeholder="Describe flow of delivery dates on multi-delivery projects..."
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      variants={containerVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                      className="space-y-8"
                    >
                      <motion.div variants={itemVariants} className="mb-10">
                        <h2 className="text-4xl font-display font-medium text-white mb-3">Product Requirements</h2>
                        <p className="text-white/60 text-lg">Detail the specific products, colors, and sizes you need.</p>
                      </motion.div>

                      <div className="space-y-8">
                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Product Category</label>
                            <div className="relative">
                              <select
                                name="productCategory"
                                value={formData.productCategory}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner appearance-none cursor-pointer"
                                required
                              >
                                <option value="" className="bg-brand-dark text-white">Select Category</option>
                                <option value="windows" className="bg-brand-dark text-white">Windows & Glass</option>
                                <option value="doors" className="bg-brand-dark text-white">Doors (Interior/Exterior)</option>
                                <option value="flooring" className="bg-brand-dark text-white">Flooring</option>
                                <option value="fencing" className="bg-brand-dark text-white">Fencing & Gates</option>
                                <option value="cabinetry" className="bg-brand-dark text-white">Cabinetry & Millwork</option>
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/50">
                                <ChevronRight className="w-4 h-4 rotate-90" />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Quantity by Date</label>
                            <input
                              type="text"
                              name="quantityByDate"
                              value={formData.quantityByDate}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                              placeholder="e.g. 500 units by Oct 1"
                              required
                            />
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Brand Preference</label>
                            <input
                              type="text"
                              name="brandPreference"
                              value={formData.brandPreference}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                              placeholder="Leave blank if open to alternatives"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Color Name / Source</label>
                            <input
                              type="text"
                              name="colorNameSource"
                              value={formData.colorNameSource}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                              placeholder="e.g. SW 7006 Extra White"
                            />
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Sizes</label>
                          <textarea
                            name="sizes"
                            value={formData.sizes}
                            onChange={handleInputChange}
                            rows={2}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner resize-none"
                            placeholder="Provide standard or custom dimensions"
                            required
                          />
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Materials Description</label>
                          <textarea
                            name="materialsDescription"
                            value={formData.materialsDescription}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner resize-none"
                            placeholder="Detail the material specifications, finishes, and quality requirements"
                            required
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      variants={containerVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                      className="space-y-8"
                    >
                      <motion.div variants={itemVariants} className="mb-10">
                        <h2 className="text-4xl font-display font-medium text-white mb-3">Files & Documentation</h2>
                        <p className="text-white/60 text-lg">Upload drawings and provide software details.</p>
                      </motion.div>

                      <div className="space-y-8">
                        {/* File Upload Zone */}
                        <motion.div variants={itemVariants} className="border-2 border-dashed border-white/20 rounded-3xl p-14 text-center hover:border-brand-primary transition-all duration-300 bg-gradient-to-br from-white/5 to-white/0 group relative overflow-hidden">
                          <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <motion.div 
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="inline-block"
                          >
                            <UploadCloud className="w-16 h-16 text-white/30 mx-auto mb-6 group-hover:text-brand-primary transition-colors duration-500" />
                          </motion.div>
                          <h4 className="text-white font-medium text-2xl mb-3 relative z-10">Upload Architectural Drawings</h4>
                          <p className="text-white/50 text-base mb-8 max-w-md mx-auto relative z-10">
                            Drag & drop 2D/3D CAD files, PDFs, or detailed hand drawings here.
                          </p>
                          <Button type="button" variant="outline" className="border-white/20 hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl relative z-10 bg-transparent text-white font-medium tracking-wide">
                            Select Files to Upload
                          </Button>
                          <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" multiple />
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-2xl p-6 flex gap-5 items-start">
                          <div className="p-3 bg-amber-500/20 rounded-xl">
                            <AlertTriangle className="text-amber-500 w-6 h-6 flex-shrink-0" />
                          </div>
                          <div>
                            <h5 className="text-amber-400 font-medium text-lg mb-2">Missing detailed drawings?</h5>
                            <p className="text-amber-500/70 text-base leading-relaxed">
                              If you do not have architectural drawings, you will need a personal consultation with our USA Customer Service team (California/Ohio) to proceed with your quote.
                            </p>
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Software Identification</label>
                          <input
                            type="text"
                            name="softwareIdentification"
                            value={formData.softwareIdentification}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                            placeholder="Name of software or plus codes used to find info"
                          />
                          <p className="text-sm text-white/40 mt-2 italic">UB will review free of charge but won't purchase software to bid.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-3">
                          <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Buyer Comments on Details</label>
                          <textarea
                            name="buyerComments"
                            value={formData.buyerComments}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner resize-none"
                            placeholder="Add notes about specific details in the drawings..."
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div
                      key="step5"
                      variants={containerVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                      className="space-y-8"
                    >
                      <motion.div variants={itemVariants} className="mb-10">
                        <h2 className="text-4xl font-display font-medium text-white mb-3">Billing & Contacts</h2>
                        <p className="text-white/60 text-lg">Final step to submit your quote request.</p>
                      </motion.div>

                      <div className="space-y-12">
                        {/* Company Info */}
                        <motion.div variants={itemVariants} className="space-y-6">
                          <h3 className="text-xl font-medium text-brand-primary border-b border-white/10 pb-4 inline-block w-full">Billing Information</h3>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Company Name</label>
                              <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                                required
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Billing Address</label>
                              <input
                                type="text"
                                name="billingAddress"
                                value={formData.billingAddress}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                                required
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Direct Buyer */}
                        <motion.div variants={itemVariants} className="space-y-6">
                          <h3 className="text-xl font-medium text-brand-primary border-b border-white/10 pb-4 inline-block w-full">Direct Buyer Contact</h3>
                          <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-3">
                              <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Full Name</label>
                              <input
                                type="text"
                                name="directBuyerContactName"
                                value={formData.directBuyerContactName}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                                required
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Phone</label>
                              <input
                                type="tel"
                                name="directBuyerContactPhone"
                                value={formData.directBuyerContactPhone}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                                required
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Email</label>
                              <input
                                type="email"
                                name="directBuyerContactEmail"
                                value={formData.directBuyerContactEmail}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                                required
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Management Contact */}
                        <motion.div variants={itemVariants} className="space-y-6">
                          <h3 className="text-xl font-medium text-brand-primary border-b border-white/10 pb-4 inline-block w-full">Management Direct Contact</h3>
                          <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-3">
                              <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Full Name</label>
                              <input
                                type="text"
                                name="managementContactName"
                                value={formData.managementContactName}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                                required
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Phone</label>
                              <input
                                type="tel"
                                name="managementContactPhone"
                                value={formData.managementContactPhone}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                                required
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Email</label>
                              <input
                                type="email"
                                name="managementContactEmail"
                                value={formData.managementContactEmail}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                                required
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Navigation Footer */}
                <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between relative z-20">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="ghost"
                    className={`text-white hover:text-white hover:bg-white/10 transition-all px-6 py-6 rounded-xl text-lg ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" /> Back
                  </Button>
                  
                  {step < steps.length ? (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 px-10 py-7 rounded-2xl text-lg font-bold shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all hover:shadow-[0_0_60px_rgba(212,175,55,0.6)]"
                      >
                        Continue <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-green-500 to-emerald-400 text-brand-dark hover:from-green-400 hover:to-emerald-300 px-10 py-7 rounded-2xl text-lg font-bold shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all hover:shadow-[0_0_60px_rgba(34,197,94,0.6)]"
                      >
                        Submit Quote Request <CheckCircle2 className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}