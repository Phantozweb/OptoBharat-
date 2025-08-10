
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, UserCircle, Landmark, MapPin, School, Star, Crown, Shield, BookUser, Building, User, Users2 } from 'lucide-react';

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

const MemberListItem = ({ member }: { member: Member }) => (
    <div className="flex items-center space-x-4 p-3 rounded-md transition-colors hover:bg-muted/50">
        <Avatar className="h-14 w-14 border-2 border-primary">
            <AvatarImage src={member.imageUrl || `https://placehold.co/128x128.png`} alt={member.name} data-ai-hint={member.dataAiHint || "person portrait"} />
            <AvatarFallback className="text-xl bg-muted text-muted-foreground">{member.avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
            <p className="font-bold text-lg text-foreground">{member.name}</p>
            <p className="text-sm text-primary font-semibold">{member.role}</p>
        </div>
    </div>
);


export default function GoverningBodyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <Users className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">
          GOVERNING BODY
        </h1>
        <p className="text-lg text-muted-foreground">OPTOBHARAT Leadership & Hierarchy</p>
      </section>

      {/* Core Leadership */}
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-3 bg-primary/10">
          <Crown className="h-7 w-7 text-primary" />
          <CardTitle className="text-2xl font-headline text-primary">Core Leadership</CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          {leadershipMembers.map((member) => (
            <MemberListItem key={member.name} member={member} />
          ))}
        </CardContent>
      </Card>
      
      {/* Zonal Directors */}
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-3 bg-primary/10">
          <Building className="h-7 w-7 text-primary" />
          <CardTitle className="text-2xl font-headline text-primary">Zonal Directors</CardTitle>
        </CardHeader>
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {zonalDirectors.map((member) => (
            <MemberListItem key={member.name} member={member} />
          ))}
        </CardContent>
      </Card>

      {/* State Heads */}
       <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-3 bg-primary/10">
            <MapPin className="h-7 w-7 text-primary" />
            <CardTitle className="text-2xl font-headline text-primary">State Heads</CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-6">
          {Object.entries(stateHeads).map(([zone, heads]) => (
            <div key={zone}>
              <h3 className="font-headline text-xl text-foreground mb-3 border-b pb-2 flex items-center">
                <Landmark className="mr-3 h-5 w-5 text-muted-foreground" /> {zone}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {heads.length > 0 ? (
                    heads.map((head) => (
                       <div key={head.name} className="flex items-center space-x-3 p-2 rounded-md bg-background hover:bg-muted/50">
                          <UserCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">{head.name}</p>
                            <p className="text-sm text-muted-foreground">{head.state}</p>
                          </div>
                       </div>
                    ))
                ) : (
                   <p className="text-sm text-muted-foreground col-span-full italic">
                    Heads for this zone will be announced soon.
                  </p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      
      {/* Moderator */}
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-3 bg-primary/10">
          <Shield className="h-7 w-7 text-primary" />
          <CardTitle className="text-2xl font-headline text-primary">Moderator</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
            <MemberListItem member={moderator} />
        </CardContent>
      </Card>

      {/* Student Ambassadors */}
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-3 bg-primary/10">
            <Star className="h-7 w-7 text-primary" />
            <CardTitle className="text-2xl font-headline text-primary">Student Ambassadors</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
            {studentAmbassadors.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {studentAmbassadors.map((ambassador) => (
                   <div key={ambassador.name} className="flex items-center space-x-3 p-2 rounded-md bg-background hover:bg-muted/50">
                      <School className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{ambassador.name}</p>
                        <p className="text-sm text-muted-foreground">{ambassador.institution}</p>
                      </div>
                   </div>
                ))}
                </div>
            ) : (
               <p className="text-muted-foreground text-center italic py-4">
                Our student ambassador list is being updated and will be published soon.
              </p>
            )}
        </CardContent>
      </Card>
    </div>
  );
}

    