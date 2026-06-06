"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-4">
        {number && (
          <span className="text-accent font-mono text-sm">{number}</span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          {title}
        </h2>
        <div className="h-[1px] flex-1 bg-border max-w-xs" />
      </div>
      {subtitle && (
        <p className="text-muted max-w-2xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
