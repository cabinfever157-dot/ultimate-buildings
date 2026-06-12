"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { Info, Send } from "lucide-react";

interface ContactFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  materialsNeeded: string;
  message: string;
}

const initialFormData: ContactFormData = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  materialsNeeded: "",
  message: "",
};

export default function QuoteWizard() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // proceed to thank-you even if fetch fails
    }

    router.push("/thank-you");
  };

  const isFormValid = formData.companyName.trim() && formData.contactName.trim() && formData.email.trim() && formData.phone.trim();

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      <NarrativeNav />

      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[1000px] h-[800px] bg-brand-primary/30 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[700px] bg-amber-600/30 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-blue-900/40 blur-[180px] rounded-full mix-blend-screen"
        />
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
              Bid{" "}
              <span className="text-brand-primary font-medium bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-amber-300">
                Quote Portal
              </span>
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
            Direct factory pricing including all logistics, customs, and duties. Tell us what you need and we&apos;ll get back to you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 hidden lg:block sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-glass-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors duration-500" />
              <div className="flex items-start gap-3 text-brand-primary mb-4 relative z-10">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <h4 className="font-display font-semibold text-sm tracking-widest uppercase">The 3 C&apos;s</h4>
              </div>
              <ul className="space-y-3 text-sm text-white/70 font-body relative z-10">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" /> Custom Sizes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" /> Custom Colors
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" /> Custom Detailing
                </li>
              </ul>
            </motion.div>
          </div>

          <Card className="lg:col-span-9 bg-[#05070a]/60 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden rounded-[2rem] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-brand-primary/5 pointer-events-none" />

            <div className="p-8 md:p-14 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-display font-medium text-white mb-3"
                  >
                    Request a Quote
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/60 text-lg mb-12"
                  >
                    Fill out the form below and we&apos;ll follow up with pricing and details.
                  </motion.p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="space-y-3"
                      >
                        <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                          placeholder="Your company name"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-3"
                      >
                        <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Contact Name</label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                          placeholder="Your full name"
                          required
                        />
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="space-y-3"
                      >
                        <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                          placeholder="your@email.com"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-3"
                      >
                        <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
                          placeholder="(555) 123-4567"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                      className="space-y-3"
                    >
                      <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Materials Needed</label>
                      <textarea
                        name="materialsNeeded"
                        value={formData.materialsNeeded}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner resize-none"
                        placeholder="e.g. SPC Flooring, Custom Cabinetry, Windows & Doors..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-3"
                    >
                      <label className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner resize-none"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="pt-4"
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          type="submit"
                          disabled={!isFormValid}
                          className="w-full bg-gradient-to-r from-green-500 to-emerald-400 text-brand-dark hover:from-green-400 hover:to-emerald-300 py-7 rounded-2xl text-lg font-bold shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                        >
                          Submit Quote Request <Send className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </motion.div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
