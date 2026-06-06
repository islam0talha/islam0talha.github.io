"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/SectionHeading";
import { SocialLinks } from "@/app/components/SocialLinks";
import { contactContent, siteConfig } from "@/lib/data";
import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="05" title={contactContent.heading} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-10">
            {contactContent.body}
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors text-base font-medium mb-12"
          >
            <Mail size={20} />
            {contactContent.cta}
            <ArrowUpRight size={18} />
          </a>

          <div className="flex items-center gap-6">
            <span className="text-sm text-muted">Or find me on</span>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
