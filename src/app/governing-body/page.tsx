
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, UserCircle, Landmark, MapPin } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  imageUrl?: string;
  avatarFallback: string;
  dataAiHint?: string;
}

interface StateHead {
  name: string;
  state: string;
}

interface StateHeadSection {
  title: string;
  heads: StateHead[];
}

const governingBodyMembers: Member[] = [
  {
    name: 'NIZAM UDDIN SK',
    role: 'FOUNDER, OPTOBHARAT',
    avatarFallback: 'NS',
    dataAiHint: 'person portrait',
  },
  {
    name: 'MOHD ASAD',
    role: 'Director of Alliances & Partnerships - OPTOBHARAT',
    avatarFallback: 'MA',
    dataAiHint: 'person portrait',
  },
  {
    name: 'SHREYASI NATH',
    role: 'MODERATOR, OPTOBHARAT',
    avatarFallback: 'SN',
    dataAiHint: 'person portrait',
  },
  {
    name: 'JANARTHAN VEERAMANI',
    role: 'MANAGING DIRECTOR OF SOUTHERN ZONE,INDIA, - OPTOBHARAT',
    avatarFallback: 'JV',
    dataAiHint: 'person portrait',
  },
  {
    name: 'MUZAHID KAMAL',
    role: 'Managing Director of Western Zone,India - OPTOBHARAT',
    avatarFallback: 'MK',
    dataAiHint: 'person portrait',
  },
  {
    name: 'ANSHI JHA',
    role: 'MANAGING DIRECTOR OF CENTRAL ZONE,INDIA - OPTOBHARAT',
    avatarFallback: 'AJ',
    dataAiHint: 'person portrait',
  },
  {
    name: 'MEHETAB HUSSAIN',
    role: 'MANAGING DIRECTOR OF NORTH-EASTERN ZONE,INDIA - OPTOBHARAT',
    avatarFallback: 'MH',
    dataAiHint: 'person portrait',
  },
  {
    name: 'PRITAM KARMAKAR',
    role: 'MANAGING DIRECTOR OF EASTERN ZONE,INDIA. - OPTOBHARAT',
    avatarFallback: 'PK',
    dataAiHint: 'person portrait',
  },
  {
    name: 'MOHD ADNAN',
    role: 'MANAGING DIRECTOR OF NORTHERN ZONE,INDIA- OPTOBHARAT',
    avatarFallback: 'MA',
    dataAiHint: 'person portrait',
  },
];

const stateHeadSections: StateHeadSection[] = [
  { 
    title: "Central Zone",
    heads: [
      { name: "Rabjot Singh Gulati", state: "Uttar Pradesh" },
    ]
  },
  { 
    title: "Southern Zone",
    heads: [
      { name: "Gopika V.", state: "Kerala" },
      { name: "M. Mega Dharshini", state: "Tamil Nadu" },
      { name: "Shobana Priya S.", state: "Andhra Pradesh" },
      { name: "Irbaz", state: "Karnataka" },
      { name: "Mugunthan", state: "Telangana" },
      { name: "Hariharn", state: "Pondicherry" },
    ]
  },
   { 
    title: "North-Eastern Zone",
    heads: [
      { name: "Haziel Rynjah", state: "Meghalaya" },
      { name: "Abhisek Buragohain", state: "Assam" },
      { name: "Be An H. Phom", state: "Nagaland" },
    ]
  },
];

export default function GoverningBodyPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <Users className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">
          GOVERNING BODY
        </h1>
        <p className="text-lg text-muted-foreground">OPTOBHARAT Governing Body</p>
      </section>

      <section id="introduction">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">Our Leadership</CardTitle>
          </CardHeader>
          <CardContent className="text-base text-muted-foreground px-4 md:px-6 text-center">
            <p>
              The Governing Body of OPTOBHARAT consists of dedicated leaders committed to fostering a strong and collaborative optometry student community across India. With a vision to empower future optometrists, our team works towards knowledge-sharing, professional development, and strengthening the field of eye care. Together, we shape the future of optometry in India and beyond.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="members">
        <h2 className="text-3xl font-headline text-center mb-8 text-primary">Meet the Directors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {governingBodyMembers.map((member) => (
            <Card key={member.name} className="shadow-md text-center flex flex-col items-center p-6 hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-card/50">
              <Avatar className="h-32 w-32 mb-4 border-4 border-primary">
                <AvatarImage src={member.imageUrl || `https://placehold.co/128x128.png`} alt={member.name} data-ai-hint={member.dataAiHint || "person portrait"} />
                <AvatarFallback className="text-3xl bg-muted text-muted-foreground">{member.avatarFallback}</AvatarFallback>
              </Avatar>
              <CardHeader className="p-2">
                <CardTitle className="text-xl font-headline leading-tight">{member.name}</CardTitle>
                <CardDescription className="text-sm text-primary font-semibold pt-1">{member.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="state-heads">
        <h2 className="text-3xl font-headline text-center mt-12 mb-8 text-primary">Zonal State Heads</h2>
        <div className="space-y-8">
          {stateHeadSections.map((section) => (
            <Card key={section.title} className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-card/50">
              <CardHeader className="flex flex-row items-center space-x-3 p-4 bg-primary/10">
                <Landmark className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-xl font-headline leading-tight text-primary">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.heads.map((head) => (
                   <div key={head.name} className="flex items-center space-x-3 p-3 rounded-md bg-background">
                      <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{head.name}</p>
                        <p className="text-sm text-muted-foreground">{head.state}</p>
                      </div>
                   </div>
                ))}
                {section.heads.length === 0 && (
                   <p className="text-sm text-muted-foreground col-span-full">
                    Detailed list of state heads for this zone will be updated soon.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
           <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-card/50">
              <CardHeader className="flex flex-row items-center space-x-3 p-4 bg-primary/10">
                <Landmark className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-xl font-headline leading-tight text-primary">STATE HEAD LIST SOUTHERN ZONE, INDIA-OPTOBHARAT</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-sm text-muted-foreground">
                  Detailed list of state heads for this zone will be updated soon.
                </p>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
