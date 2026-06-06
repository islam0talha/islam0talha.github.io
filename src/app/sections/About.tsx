"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/SectionHeading";
import { TechTag } from "@/app/components/TechTag";
import { aboutContent, skills } from "@/lib/data";
import { GraduationCap, ExternalLink } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="01" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base text-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Education */}
            <div className="pt-6 space-y-4">
              <h3 className="text-sm font-mono text-accent flex items-center gap-2">
                <GraduationCap size={16} />
                Education
              </h3>
              {aboutContent.education.map((edu, index) => (
                <div key={index} className="group">
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    <span className="text-sm font-medium">{edu.school}</span>
                    <ExternalLink
                      size={14}
                      className="mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                  <p className="text-sm text-muted">
                    {edu.degree} · {edu.range}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-sm font-mono text-accent mb-6">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <TechTag key={skill.name} name={skill.name} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
