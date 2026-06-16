"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-primary overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="section-label">08 / Connect</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-none mb-2">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="text-text-secondary text-sm max-w-lg">
            Whether you&apos;re a recruiter, startup founder, or fellow developer — I&apos;d love to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left — Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            <div className="bg-card border border-white/[0.07] rounded-2xl p-7 flex-1 flex flex-col justify-between hover:border-white/[0.12] shadow-card hover:shadow-card-hover transition-colors duration-300">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-3">
                  Let&apos;s work together.
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  Whether you are a recruiter looking to hire, a startup founder looking for builders, or a fellow developer interested in collaboration, drop me a message.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {/* Email */}
                <a
                  href="mailto:naveenkumar.p2024aids@sece.ac.in"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-elevated border border-white/[0.07] group-hover:border-accent/25 group-hover:text-accent flex items-center justify-center text-text-muted transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest block">Email</span>
                    <span className="text-xs md:text-sm text-white group-hover:text-accent transition-colors font-medium">
                      naveenkumar.p2024aids@sece.ac.in
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:8825568542"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-elevated border border-white/[0.07] group-hover:border-accent/25 group-hover:text-accent flex items-center justify-center text-text-muted transition-all duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest block">Phone</span>
                    <span className="text-xs md:text-sm text-white group-hover:text-accent transition-colors font-medium">
                      +91 8825568542
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-elevated border border-white/[0.07] flex items-center justify-center text-text-muted">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest block">Location</span>
                    <span className="text-xs md:text-sm text-white font-medium">
                      Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-white/[0.07] rounded-2xl p-7 relative overflow-hidden hover:border-white/[0.12] shadow-card hover:shadow-card-hover transition-colors duration-300">
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block mb-6">
                Send a Message
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={cn("glass-input rounded-xl px-4 py-3 text-sm text-white", errors.name && "border-red-500")}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={cn("glass-input rounded-xl px-4 py-3 text-sm text-white", errors.email && "border-red-500")}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={cn("glass-input rounded-xl px-4 py-3 text-sm text-white", errors.subject && "border-red-500")}
                    placeholder="Inquiry / Opportunities"
                  />
                  {errors.subject && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={cn("glass-input rounded-xl px-4 py-3 text-sm text-white resize-none", errors.message && "border-red-500")}
                    placeholder="Write your message here..."
                  />
                  {errors.message && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="mt-2 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent hover:bg-accent-dim text-white font-bold text-sm shadow-sm transition-all disabled:opacity-50 shimmer-btn"
                >
                  {isSending ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Success overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-card/97 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center z-10 rounded-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", damping: 15 }}
                      className="h-14 w-14 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4"
                    >
                      <CheckCircle2 className="h-7 w-7" />
                    </motion.div>
                    <h3 className="text-xl font-bold font-display text-white mb-2">
                      Message Sent
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                      Thank you! Your message has been sent. Naveenkumar will connect with you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
