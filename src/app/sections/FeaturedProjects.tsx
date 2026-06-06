"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/SectionHeading";
import { TechTag } from "@/app/components/TechTag";
import { featuredProjects } from "@/lib/data";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="03"
          title="Featured Projects"
          subtitle="Some of the projects I've worked on recently."
        />

        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-video rounded-xl overflow-hidden bg-surface border border-border ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {project.cover ? (
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted text-sm">
                    No preview available
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm font-mono text-accent mb-2">
                  {project.featured ? "Featured Project" : "Project"}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <TechTag key={tech} name={tech} />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                  )}
                  <a
                    href={`/projects/${project.slug}/`}
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                  >
                    Details
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
