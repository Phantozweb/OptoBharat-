
import type { LucideIcon } from 'lucide-react';
import { Trophy } from 'lucide-react';

export interface OptoEvent {
  slug: string;
  title: string;
  subtitle: string;
  date: string; // "Month Day, Year" format for display
  Icon: LucideIcon;
  content: React.ReactNode;
}

export const events: OptoEvent[] = [
  {
    slug: 'optopreneur-2025-winners',
    title: 'Official Announcement – Optopreneur 2025 Winners',
    subtitle: 'Organized by OPTOBHARAT',
    date: 'July 25, 2024',
    Icon: Trophy,
    content: (
        <div className="space-y-6 text-muted-foreground">
            <p>We are proud to announce the Top 3 Winners of Optopreneur 2025, a nationwide contest celebrating innovation and entrepreneurship among India’s brightest Optometry students! 🌟</p>
            <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-background/50">
                    <p className="font-semibold text-lg text-foreground">🥇 1st Place: Sreesandhiya G</p>
                    <p className="font-medium text-primary">Project Title: “Intelligent Contact Lens Dispensing System with Mobile-Integrated AI”</p>
                    <p className="mt-1">🧠 A groundbreaking idea that redefines smart vision solutions using AI technology.</p>
                </div>
                <div className="p-4 border rounded-lg bg-background/50">
                    <p className="font-semibold text-lg text-foreground">🥈 2nd Place: Anik Dingal</p>
                    <p className="font-medium text-primary">Project Title: “A Smart, Portable IOP Device with Built-In Corneal Biomechanics Compensation”</p>
                    <p className="mt-1">🔬 A step forward in accessible glaucoma care through portable diagnostic innovation.</p>
                </div>
                <div className="p-4 border rounded-lg bg-background/50">
                    <p className="font-semibold text-lg text-foreground">🥉 3rd Place: Mohd Khalid</p>
                    <p className="font-medium text-primary">Project Title: “Emerging Ideas in Optometry and Clinical Advancements”</p>
                </div>
            </div>
            <hr className="my-6 border-border" />
            <p className="text-base">
                These exceptional students have demonstrated forward-thinking ideas that could shape the future of optometric care in India and beyond. Their vision and dedication inspire us all! 💡✨
            </p>
            <p className="text-base">
                👏 A big thank you to all participants for sharing your ideas and contributing to the growth of eye care innovation.
            </p>
        </div>
    ),
  },
  // Add future events here...
];
