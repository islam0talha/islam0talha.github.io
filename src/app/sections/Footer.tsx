"use client";

import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Islam Talha. All rights reserved.
        </p>
        <p className="text-sm text-muted flex items-center gap-2">
          Built with Next.js & Tailwind CSS
          <a
            href="https://github.com/islam0talha/islam0talha.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="View source on GitHub"
          >
            <Github size={16} />
          </a>
        </p>
      </div>
    </footer>
  );
}
