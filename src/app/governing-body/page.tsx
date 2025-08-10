
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, UserCircle, Landmark, MapPin, School, Star } from 'lucide-react';

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

interface StudentAmbassador {
    name: string;
    institution: string;
}

const leadershipMembers: Member[] = [
  {
    name: 'NIZAM UDDIN SK',
    role: 'Founder and Director of OPTOBHARAT',
    avatarFallback: 'NS',
    dataAiHint: 'person portrait',
  },
  {
    name: 'JANARTHAN VEERAMANI',
    role: 'Director of Administration',
    avatarFallback: 'JV',
    dataAiHint: 'person portrait',
  },
  {
    name: 'MOHD ASAD',
    role: 'HEAD OF ACADEMIC, OPTOBHARAT',
    avatarFallback: 'MA',
    dataAiHint: 'person portrait',
  },
];

const zonalDirectors: Member[] = [
  {
    name: 'M. Mega Dharshini',
    role: 'MANAGING DIRECTOR OF SOUTHERN ZONE,INDIA, - OPTOBHARAT',
    avatarFallback: 'MD',
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

const stateHeads = {
  "Central Zone": [
    { name: "Rabjot Singh Gulati", state: "Uttar Pradesh" },
  ],
  "Southern Zone": [
    { name: "Gopika V.", state: "Kerala" },
    { name: "P.Kayal Vizhi", state: "Tamil Nadu" },
    { name: "Shobana Priya S.", state: "Andhra Pradesh" },
    { name: "Irbaz", state: "Karnataka" },
    { name: "Mugunthan", state: "Telangana" },
    { name: "Hariharn", state: "Pondicherry" },
  ],
  "North-Eastern Zone": [
    { name: "Haziel Rynjah", state: "Meghalaya" },
    { name: "Abhisek Buragohain", state: "Assam" },
    { name: "Be An H. Phom", state: "Nagaland" },
  ],
  "Western Zone": [],
  "Eastern Zone": [],
  "Northern Zone": [],
};

const moderator: Member = {
    name: 'SHREYASI NATH',
    role: 'MODERATOR, OPTOBHARAT',
    avatarFallback: 'SN',
    dataAiHint: 'person portrait',
};

const studentAmbassadors: StudentAmbassador[] = [
    // Add student ambassadors here
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

      <section id="leadership">
        <h2 className="text-3xl font-headline text-center mb-8 text-primary">Core Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {leadershipMembers.map((member) => (
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
      
      <section id="zonal-directors">
        <h2 className="text-3xl font-headline text-center mb-8 text-primary">Zonal Directors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {zonalDirectors.map((member) => (
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
        <h2 className="text-3xl font-headline text-center mt-12 mb-8 text-primary">State Heads</h2>
        <div className="space-y-8">
          {Object.entries(stateHeads).map(([zone, heads]) => (
            <Card key={zone} className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-card/50">
              <CardHeader className="flex flex-row items-center space-x-3 p-4 bg-primary/10">
                <Landmark className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-xl font-headline leading-tight text-primary">{zone}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {heads.length > 0 ? (
                    heads.map((head) => (
                       <div key={head.name} className="flex items-center space-x-3 p-3 rounded-md bg-background">
                          <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">{head.name}</p>
                            <p className="text-sm text-muted-foreground">{head.state}</p>
                          </div>
                       </div>
                    ))
                ) : (
                   <p className="text-sm text-muted-foreground col-span-full">
                    List of state heads for this zone will be updated soon.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section id="moderator">
        <h2 className="text-3xl font-headline text-center mb-8 text-primary">Moderator</h2>
        <div className="flex justify-center">
            <Card key={moderator.name} className="shadow-md text-center flex flex-col items-center p-6 hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-card/50 max-w-sm">
              <Avatar className="h-32 w-32 mb-4 border-4 border-primary">
                <AvatarImage src={moderator.imageUrl || `https://placehold.co/128x128.png`} alt={moderator.name} data-ai-hint={moderator.dataAiHint || "person portrait"} />
                <AvatarFallback className="text-3xl bg-muted text-muted-foreground">{moderator.avatarFallback}</AvatarFallback>
              </Avatar>
              <CardHeader className="p-2">
                <CardTitle className="text-xl font-headline leading-tight">{moderator.name}</CardTitle>
                <CardDescription className="text-sm text-primary font-semibold pt-1">{moderator.role}</CardDescription>
              </CardHeader>
            </Card>
        </div>
      </section>

      <section id="student-ambassadors">
        <h2 className="text-3xl font-headline text-center mt-12 mb-8 text-primary">Student Ambassadors</h2>
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-card/50">
            <CardHeader className="flex flex-row items-center space-x-3 p-4 bg-primary/10">
                <Star className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-xl font-headline leading-tight text-primary">Our Ambassadors</CardTitle>
            </CardHeader>
            <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {studentAmbassadors.length > 0 ? (
                    studentAmbassadors.map((ambassador) => (
                       <div key={ambassador.name} className="flex items-center space-x-3 p-3 rounded-md bg-background">
                          <School className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">{ambassador.name}</p>
                            <p className="text-sm text-muted-foreground">{ambassador.institution}</p>
                          </div>
                       </div>
                    ))
                ) : (
                   <p className="text-sm text-muted-foreground col-span-full">
                    The list of Student Ambassadors will be updated soon.
                  </p>
                )}
            </CardContent>
        </Card>
      </section>
    </div>
  );
}
