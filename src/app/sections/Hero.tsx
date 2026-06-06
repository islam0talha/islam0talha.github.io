"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-mono text-accent text-sm md:text-base mb-4">
            Hello, my name is
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted tracking-tight mb-8"
        >
          {siteConfig.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl text-base md:text-lg text-muted leading-relaxed mb-10"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors text-sm font-medium"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent transition-colors text-sm font-medium"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
