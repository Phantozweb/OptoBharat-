
import type { LucideIcon } from 'lucide-react';

// The Category and Article types were specific to the previous 'BharatPulse' app structure.
// They are removed as the new 'OPTOBHARAT' content and structure do not use them in the same way.
// If you introduce new data structures for articles, events, members, etc., for OPTOBHARAT,
// define their types here.

// Example of new types you might need:
/*
export interface OptoEvent {
  id: string;
  title: string;
  date: string; // ISO date string
  description: string;
  location?: string; // For physical events
  url?: string; // For online events or more info
  icon?: LucideIcon;
}

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  timestamp: string; // ISO date string
  replies: number;
}
*/

// You can keep LucideIcon if you plan to use icons elsewhere.
// export type { LucideIcon };
