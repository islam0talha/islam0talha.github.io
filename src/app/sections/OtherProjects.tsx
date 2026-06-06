"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/SectionHeading";
import { TechTag } from "@/app/components/TechTag";
import { otherProjects } from "@/lib/data";
import { ExternalLink, ArrowRight, Folder } from "lucide-react";

export function OtherProjects() {
  if (otherProjects.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="04"
          title="Other Projects"
          subtitle="More things I've built."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface/50 rounded-xl p-6 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder size={24} className="text-accent" />
                <div className="flex items-center gap-3">
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                      aria-label="View live"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a
                    href={`/projects/${project.slug}/`}
                    className="text-muted hover:text-accent transition-colors"
                    aria-label="View details"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
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
