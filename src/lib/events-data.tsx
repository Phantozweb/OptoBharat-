
import { Trophy, type LucideIcon, Award, Medal, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface OptoEvent {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  Icon: LucideIcon;
  content: React.ReactNode;
}

const WinnerCard = ({
    place,
    name,
    projectTitle,
    description,
    Icon,
    badgeColor,
  }: {
    place: string;
    name: string;
    projectTitle: string;
    description?: string;
    Icon: LucideIcon;
    badgeColor: string;
  }) => (
    <Card className="flex flex-col text-center h-full hover:shadow-xl transition-shadow duration-300 bg-primary/5">
        <CardHeader>
            <div className="mx-auto mb-4">
                <div className={`flex items-center justify-center h-16 w-16 rounded-full ${badgeColor}`}>
                    <Icon className="h-10 w-10 text-white" />
                </div>
            </div>
            <CardTitle className="text-xl font-headline text-primary">{place}</CardTitle>
            <CardDescription className="text-lg font-semibold text-foreground pt-1">{name}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center">
            <p className="font-semibold text-base text-muted-foreground">{projectTitle}</p>
            {description && <p className="text-sm mt-2">{description}</p>}
        </CardContent>
    </Card>
);

export const events: OptoEvent[] = [
  {
    slug: 'optopreneur-2025',
    title: 'Optopreneur 2025',
    subtitle: 'Nationwide Contest for Optometry Students',
    date: '10th June 2025',
    Icon: Trophy,
    content: (
        <div className="space-y-12">
            <section>
                <h2 className="text-2xl font-bold font-headline text-center mb-2">Official Announcement – Optopreneur 2025 Winners 🏆</h2>
                <p className="text-center text-muted-foreground">
                We are proud to announce the Top 3 Winners of Optopreneur 2025, a nationwide contest celebrating innovation and entrepreneurship among India’s brightest Optometry students! 🌟
                </p>
            </section>
            
            <section className="grid md:grid-cols-3 gap-6 lg:gap-8 my-8">
                <WinnerCard
                    place="1st Place"
                    name="Sreesandhiya G"
                    projectTitle="“Intelligent Contact Lens Dispensing System with Mobile-Integrated AI”"
                    description="🧠 A groundbreaking idea that redefines smart vision solutions using AI technology."
                    Icon={Award}
                    badgeColor="bg-yellow-500"
                />
                <WinnerCard
                    place="2nd Place"
                    name="Anik Dingal"
                    projectTitle="“A Smart, Portable IOP Device with Built-In Corneal Biomechanics Compensation”"
                    description="🔬 A step forward in accessible glaucoma care through portable diagnostic innovation."
                    Icon={Medal}
                    badgeColor="bg-slate-500"
                />
                <WinnerCard
                    place="3rd Place"
                    name="Mohd Khalid"
                    projectTitle="“Emerging Ideas in Optometry and Clinical Advancements”"
                    Icon={Star}
                    badgeColor="bg-yellow-700"
                />
            </section>
            
            <section className="text-center space-y-4">
                <p className="text-lg text-foreground">
                These exceptional students have demonstrated forward-thinking ideas that could shape the future of optometric care in India and beyond. Their vision and dedication inspire us all! 💡✨
                </p>
                <p className="text-base text-muted-foreground">
                👏 A big thank you to all participants for sharing your ideas and contributing to the growth of eye care innovation.
                </p>
            </section>
        </div>
    ),
  },
];
