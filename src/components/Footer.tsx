import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BharatPulse. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          An initiative to bring curated insights from India.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* Placeholder for social links or other links */}
          <a href="#" className="hover:text-primary transition-colors" aria-label="External Link Example">
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
