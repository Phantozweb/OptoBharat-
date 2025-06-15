import type { LucideIcon } from 'lucide-react';

export interface Category {
  slug: string;
  name: string;
  description?: string;
  icon?: LucideIcon; // Or specific icon name if using a fixed set
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Full content for summarizer
  imageUrl: string;
  imageHint?: string; // For data-ai-hint
  categorySlug: string;
  originalUrl: string;
  datePublished: string; // ISO date string
  author?: string;
}
