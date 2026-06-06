import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
        404
      </h1>
      <p className="text-lg text-muted mb-8 text-center">
        This page does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent transition-colors text-sm font-medium"
      >
        <ArrowLeft size={16} />
        Back Home
      </Link>
    </div>
  );
}
