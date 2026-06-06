"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/SectionHeading";
import { TechTag } from "@/app/components/TechTag";
import { jobs } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="02" title="Experience" />

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-surface/50 rounded-xl p-6 md:p-8 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                    {job.company}
                    {job.url && (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h3>
                  <p className="text-sm text-accent font-medium mt-1">
                    {job.title}
                  </p>
                </div>
                <span className="text-sm font-mono text-muted shrink-0">
                  {job.range}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {job.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="text-sm text-muted leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-accent"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
