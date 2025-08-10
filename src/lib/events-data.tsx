
import { Trophy, type LucideIcon, BrainCircuit, Microscope, Lightbulb, UserCheck, Calendar, Wallet, Link as LinkIcon, Mail } from 'lucide-react';
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
  }: {
    place: string;
    name: string;
    projectTitle: string;
    description?: string;
    badgeColor: string;
  }) => (
    <Card className="flex flex-col text-center h-full hover:shadow-xl transition-shadow duration-300 bg-primary/5">
        <CardHeader>
             <div className="mx-auto mb-4">
                <Trophy className="h-16 w-16 text-primary/30" />
            </div>
            <CardTitle className={`text-xl font-headline text-white rounded-md py-1 px-3 ${badgeColor} self-center shadow-md`}>{place}</CardTitle>
            <CardDescription className="text-xl font-semibold text-foreground pt-4">{name}</CardDescription>
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
    subtitle: 'Nationwide Contest for Optometry Students',
    date: '10th June 2025',
    Icon: Trophy,
    content: (
        <div className="space-y-12">
            <section className="text-center">
                <h2 className="text-2xl font-bold font-headline text-primary mb-2">About Optopreneur 2025</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground">
                    Optopreneur 2025, organized by OPTOBHARAT and led by Janarthan V (Director of Southern zone, India), was a premier nationwide contest designed to foster innovation and entrepreneurial spirit among Optometry students in India. The event provided a platform for students to showcase groundbreaking research, innovative concepts, and entrepreneurial proposals relevant to the field of optometry via a poster presentation format.
                </p>
            </section>

             <InfoCard icon={Lightbulb} title="Need Inspiration? Ideas are Limitless!">
                <p className="text-muted-foreground mb-6">The possibilities within optometric entrepreneurship are vast. To spark your thinking, consider these examples, but remember, your own unique vision is what we truly seek:</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-lg flex items-center mb-2"><BrainCircuit className="mr-2 h-5 w-5 text-primary"/>Example Tech Innovations:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>AI tools for preliminary screening assistance.</li>
                            <li>Low-cost, portable diagnostic device prototypes.</li>
                            <li>Mobile apps enhancing patient engagement.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-lg flex items-center mb-2"><UserCheck className="mr-2 h-5 w-5 text-primary"/>Example New Service Models:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>Business plans for specialized niche practices.</li>
                            <li>Subscription models for comprehensive eye care.</li>
                            <li>Tele-optometry concepts for underserved areas.</li>
                        </ul>
                    </div>
                </div>
                 <p className="text-sm font-semibold text-center mt-6 text-primary/80">
                    Important: These are just illustrative examples. We strongly encourage you to submit your own original concepts. Think outside the box!
                </p>
            </InfoCard>

             <InfoCard icon={Calendar} title="Key Information">
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-lg">Abstract Submission Period:</h4>
                        <p className="text-muted-foreground">🗓️ May 5 – May 25</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg flex items-center"><Wallet className="mr-2 h-5 w-5 text-primary"/>Registration Fees:</h4>
                         <ul className="list-disc list-inside text-muted-foreground">
                            <li>Optobharat Members: 50₹</li>
                            <li>Non-Members: 100₹</li>
                        </ul>
                    </div>
                     <div className="text-center pt-4">
                        <Button asChild>
                            <a href="https://optopreneur.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <LinkIcon className="mr-2 h-4 w-4" /> Visit Event Website
                            </a>
                        </Button>
                     </div>
                </div>
            </InfoCard>

            <section>
                 <h2 className="text-2xl font-bold font-headline text-center mb-6">🏆 Official Winners Announcement 🏆</h2>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 my-8">
                    <WinnerCard
                        place="1st Place"
                        name="Sreesandhiya G"
                        projectTitle="Intelligent Contact Lens Dispensing System with Mobile-Integrated AI"
                        description="🧠 A groundbreaking idea that redefines smart vision solutions using AI technology."
                        badgeColor="bg-yellow-500"
                    />
                    <WinnerCard
                        place="2nd Place"
                        name="Anik Dingal"
                        projectTitle="A Smart, Portable IOP Device with Built-In Corneal Biomechanics Compensation"
                        description="🔬 A step forward in accessible glaucoma care through portable diagnostic innovation."
                        badgeColor="bg-slate-500"
                    />
                    <WinnerCard
                        place="3rd Place"
                        name="Mohd Khalid"
                        projectTitle="Emerging Ideas in Optometry and Clinical Advancements"
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
