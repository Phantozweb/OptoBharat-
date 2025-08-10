
import { Trophy, type LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    badgeText,
    badgeColor,
  }: {
    place: string;
    name: string;
    projectTitle: string;
    description?: string;
    badgeText: string;
    badgeColor: string;
  }) => (
    <Card className="flex flex-col text-center h-full hover:shadow-xl transition-shadow duration-300 bg-primary/5">
        <CardHeader>
            <div className="mx-auto mb-4 relative">
                <Trophy className="h-20 w-20 text-primary/30" />
                <div className={`absolute -bottom-2 -right-2 flex items-center justify-center h-10 w-10 rounded-full ${badgeColor} text-white font-bold text-lg border-4 border-background`}>
                    {badgeText}
                </div>
            </div>
            <CardTitle className="text-xl font-headline text-primary">{place}</CardTitle>
            <CardDescription className="text-lg font-semibold text-foreground pt-1">{name}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center">
            <p className="font-semibold text-base text-muted-foreground">&quot;{projectTitle}&quot;</p>
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
            <section className="text-center">
                <h2 className="text-2xl font-bold font-headline text-primary mb-2">About Optopreneur 2025</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground">
                    Optopreneur 2025, organized by OPTOBHARAT and led by Founder Nizam Uddin SK, was a nationwide contest celebrating innovation and entrepreneurship among India’s brightest Optometry students. The event provided a platform for students to present groundbreaking ideas that could shape the future of eye care.
                </p>
            </section>
            
            <section>
                 <h2 className="text-2xl font-bold font-headline text-center mb-6">🏆 Official Winners Announcement 🏆</h2>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 my-8">
                    <WinnerCard
                        place="1st Place"
                        name="Sreesandhiya G"
                        projectTitle="Intelligent Contact Lens Dispensing System with Mobile-Integrated AI"
                        description="🧠 A groundbreaking idea that redefines smart vision solutions using AI technology."
                        badgeText="1"
                        badgeColor="bg-yellow-500"
                    />
                    <WinnerCard
                        place="2nd Place"
                        name="Anik Dingal"
                        projectTitle="A Smart, Portable IOP Device with Built-In Corneal Biomechanics Compensation"
                        description="🔬 A step forward in accessible glaucoma care through portable diagnostic innovation."
                        badgeText="2"
                        badgeColor="bg-slate-500"
                    />
                    <WinnerCard
                        place="3rd Place"
                        name="Mohd Khalid"
                        projectTitle="Emerging Ideas in Optometry and Clinical Advancements"
                        badgeText="3"
                        badgeColor="bg-yellow-700"
                    />
                </div>
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
