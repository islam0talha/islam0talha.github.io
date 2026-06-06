"use client";

import { motion } from "framer-motion";

interface TechTagProps {
  name: string;
}

export function TechTag({ name }: TechTagProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-surface text-muted border border-border hover:border-accent hover:text-accent transition-colors cursor-default">
      {name}
    </span>
  );
}
