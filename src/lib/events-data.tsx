
import { Trophy, type LucideIcon, BrainCircuit, Microscope, Lightbulb, UserCheck, Calendar, Mail, Info, User, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    badgeColor,
    institution,
  }: {
    place: string;
    name: string;
    projectTitle: string;
    description?: string;
    badgeColor: string;
    institution: string;
  }) => (
    <Card className="flex flex-col text-center h-full hover:shadow-xl transition-shadow duration-300 bg-primary/5">
        <CardHeader>
             <div className="mx-auto mb-4">
                <Trophy className="h-16 w-16 text-primary/30" />
            </div>
            <CardTitle className={`text-xl font-headline text-white rounded-md py-1 px-3 ${badgeColor} self-center shadow-md`}>{place}</CardTitle>
            <CardDescription className="text-xl font-semibold text-foreground pt-4">{name}</CardDescription>
            <p className="text-xs text-muted-foreground pt-1">{institution}</p>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center">
            <p className="font-semibold text-base text-muted-foreground">&quot;{projectTitle}&quot;</p>
            {description && <p className="text-sm mt-2">{description}</p>}
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
    slug: 'optopreneur-2025',
    title: 'Optopreneur 2025',
    subtitle: 'Showcase: Nationwide Contest for Optometry Students',
    date: '10th June 2025',
    Icon: Trophy,
    content: (
        <div className="space-y-12">
            <section className="text-center">
                <h2 className="text-2xl font-bold font-headline text-primary mb-2">About Optopreneur 2025</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground">
                    Optopreneur 2025 was a premier nationwide contest designed to foster innovation and entrepreneurial spirit among Optometry students in India. The event provided a platform for students to showcase groundbreaking research, innovative concepts, and entrepreneurial proposals relevant to the field of optometry.
                </p>
                 <div className="mt-6">
                    <Card className="max-w-md mx-auto bg-primary/5 shadow-md">
                        <CardHeader>
                           <CardTitle className="text-lg font-headline text-primary flex items-center justify-center gap-2"><User className="h-5 w-5" /> Event Lead</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="font-semibold text-foreground">Janarthan Veeramani</p>
                            <p className="text-sm text-muted-foreground">Director of Administration, OPTOBHARAT</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

             <InfoCard icon={Star} title="Event Highlights">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                        <h3 className="text-3xl font-bold text-primary">75</h3>
                        <p className="text-muted-foreground font-semibold">Abstract Submissions Received</p>
                    </div>
                     <div className="p-4 bg-muted/50 rounded-lg">
                        <h3 className="text-xl font-bold text-destructive">Event Closed</h3>
                        <p className="text-muted-foreground font-semibold">Registrations are now closed.</p>
                    </div>
                </div>
            </InfoCard>

            <section>
                 <h2 className="text-2xl font-bold font-headline text-center mb-6">🏆 Official Winners Announcement 🏆</h2>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 my-8">
                    <WinnerCard
                        place="1st Place"
                        name="Sreesandhiya G"
                        institution="LOTUS INSTITUTE OF HEALTH SCIENCES AND MANAGEMENT Coimbatore, Tamil Nadu"
                        projectTitle="Intelligent Contact Lens Dispensing System with Mobile-Integrated AI"
                        badgeColor="bg-yellow-500"
                    />
                    <WinnerCard
                        place="2nd Place"
                        name="Anik Dingal"
                        institution="Vidyasagar college of optometry and vision science, Kolkata, West Bengal"
                        projectTitle="A Smart, Portable IOP Device with Built-In Corneal Biomechanics Compensation"
                        badgeColor="bg-slate-500"
                    />
                    <WinnerCard
                        place="3rd Place"
                        name="Mohd Khalid"
                        institution="Uttar Pradesh University of medical science saifai Etawah UP"
                        projectTitle="Emerging Ideas in Optometry and Clinical Advancements"
                        badgeColor="bg-yellow-700"
                    />
                </div>
            </section>

            <InfoCard icon={Info} title="Contest Details">
                <div className="space-y-4">
                    <p className="text-muted-foreground">The contest provided a platform for students to showcase groundbreaking research, innovative concepts, technological ideas, and entrepreneurial proposals relevant to the field of optometry via a poster presentation format.</p>
                    <div>
                        <h4 className="font-semibold text-lg">Registration Fees:</h4>
                         <ul className="list-disc list-inside text-muted-foreground">
                            <li>Optobharat Members: Rs 50</li>
                            <li>Non-Members: Rs 100</li>
                        </ul>
                    </div>
                </div>
            </InfoCard>
            
            <section className="text-center space-y-4">
                <p className="text-lg text-foreground">
                    These exceptional students have demonstrated forward-thinking ideas that could shape the future of optometric care in India and beyond. Their vision and dedication inspire us all! 💡✨
                </p>
                <p className="text-base text-muted-foreground">
                    👏 A big thank you to all participants for sharing your ideas and contributing to the growth of eye care innovation. For future event inquiries, please contact us.
                </p>
                <div className="pt-4">
                     <Button asChild variant="outline">
                        <a href="mailto:inquiry.optobharat@gmail.com">
                            <Mail className="mr-2 h-4 w-4" /> Inquiries
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    ),
  },
];
