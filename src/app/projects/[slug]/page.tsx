import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { TechTag } from "@/app/components/TechTag";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>

        {project.cover && (
          <div className="relative aspect-video rounded-xl overflow-hidden bg-surface border border-border mb-10">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <p className="text-base text-muted leading-relaxed mb-8">
          {project.description}
        </p>

        {project.bullets && project.bullets.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="text-sm text-muted leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-accent"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors text-sm font-medium"
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent transition-colors text-sm font-medium"
            >
              <Github size={16} />
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
