
import { BrainCircuit, type LucideIcon, Trophy, User, Info, Mail, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface OptoEvent {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  Icon: LucideIcon;
  content: React.ReactNode;
}

export const winners = {
    'MAMTA BISHNOI': '1st Place, National Quiz Competition 2025',
    'REBEKAH R': '2nd Place, National Quiz Competition 2025',
    'VASU RAJVANSHI': '3rd Place, National Quiz Competition 2025',
    'HARIHARAN T': 'Winner, National Quiz Competition 2025',
    'SUNNY HANT': 'Winner, National Quiz Competition 2025',
    'NAVEEN M': 'Winner, National Quiz Competition 2025',
};

const WinnerCard = ({
    place,
    name,
    badgeColor,
  }: {
    place: string;
    name: string;
    badgeColor: string;
  }) => (
    <Card className="text-center hover:shadow-xl transition-shadow duration-300 bg-primary/5">
        <CardHeader>
            <div className={`mx-auto mb-4 p-3 rounded-full ${badgeColor}`}>
                <Trophy className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-xl font-headline text-primary">{place}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-xl font-semibold text-foreground">{name}</p>
        </CardContent>
    </Card>
);

const InfoCard = ({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) => (
    <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
            <Icon className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl font-headline text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

export const events: OptoEvent[] = [
  {
    slug: 'national-quiz-competition-2025',
    title: 'National Quiz Competition 2025',
    subtitle: 'Theme: "In Pursuit of a Perfect Gaze"',
    date: '18th May 2025',
    Icon: BrainCircuit,
    content: (
        <div className="space-y-12">
            <section className="text-center">
                <h2 className="text-2xl font-bold font-headline text-primary mb-2">About the Quiz Competition</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground">
                    This national-level quiz competition challenged the brightest optometry students on their knowledge, critical thinking, and passion for vision science, centered around the theme "In Pursuit of a Perfect Gaze."
                </p>
                 <div className="mt-6">
                    <Card className="max-w-md mx-auto bg-primary/5 shadow-md">
                        <CardHeader>
                           <CardTitle className="text-lg font-headline text-primary flex items-center justify-center gap-2"><User className="h-5 w-5" /> Event Coordinator</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="font-semibold text-foreground">Mohd Asad</p>
                            <p className="text-sm text-muted-foreground">Head of Academic, OPTOBHARAT</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

             <InfoCard icon={Star} title="Event Status">
                 <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-destructive">Event Concluded</h3>
                    <p className="text-muted-foreground font-semibold">The winners have been announced.</p>
                </div>
            </InfoCard>

            <section>
                 <h2 className="text-2xl font-bold font-headline text-center mb-6">🏆 Competition Winners 🏆</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 my-8">
                    <WinnerCard
                        place="1st Place"
                        name="Mamta Bishnoi"
                        badgeColor="bg-yellow-500"
                    />
                    <WinnerCard
                        place="2nd Place"
                        name="Rebekah R"
                        badgeColor="bg-slate-500"
                    />
                    <WinnerCard
                        place="3rd Place"
                        name="Vasu Rajvanshi"
                        badgeColor="bg-yellow-700"
                    />
                     <WinnerCard
                        place="Winner"
                        name="Hariharan T"
                        badgeColor="bg-primary/80"
                    />
                     <WinnerCard
                        place="Winner"
                        name="Sunny Hant"
                        badgeColor="bg-primary/80"
                    />
                     <WinnerCard
                        place="Winner"
                        name="Naveen M"
                        badgeColor="bg-primary/80"
                    />
                </div>
            </section>
            
            <section className="text-center space-y-4">
                <p className="text-lg text-foreground">
                   Congratulations to our brilliant winners for their outstanding performance and deep knowledge of optometry.
                </p>
                <p className="text-base text-muted-foreground">
                    Thank you to all who participated and made this event a grand success. We look forward to seeing you at our next event!
                </p>
                <div className="pt-4">
                     <Button asChild variant="outline">
                        <a href="mailto:inquiry.optobharat@gmail.com">
                            <Mail className="mr-2 h-4 w-4" /> Contact for future events
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    ),
  },
];
