
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, User, Crown, MapPin, Shield, Trophy } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


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
  zone: string;
  imageUrl?: string;
}

interface StudentAmbassador {
    name: string;
    institution: string;
}

const leadershipMembers: Member[] = [
  {
    name: 'NIZAM UDDIN SK',
    role: 'Founder and Director',
    imageUrl: 'https://iili.io/FL4tAgI.png',
    avatarFallback: 'NS',
    dataAiHint: 'person portrait',
  },
  {
    name: 'JANARTHAN VEERAMANI',
    role: 'Director of Administration',
    imageUrl: 'https://iili.io/FL4G8XV.jpg',
    avatarFallback: 'JV',
    dataAiHint: 'person portrait',
  },
  {
    name: 'MOHD ASAD',
    role: 'HEAD OF ACADEMIC',
    imageUrl: 'https://iili.io/FL4keWu.png',
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
    imageUrl: 'https://iili.io/FL46kcg.png',
    avatarFallback: 'MK',
    dataAiHint: 'person portrait',
  },
  {
    name: 'ANSHI JHA',
    role: 'MANAGING DIRECTOR OF CENTRAL ZONE,INDIA - OPTOBHARAT',
    imageUrl: 'https://iili.io/FL4gFu2.jpg',
    avatarFallback: 'AJ',
    dataAiHint: 'person portrait',
  },
  {
    name: 'MEHETAB HUSSAIN',
    role: 'MANAGING DIRECTOR OF NORTH-EASTERN ZONE,INDIA - OPTOBHARAT',
    imageUrl: 'https://iili.io/FL445EF.jpg',
    avatarFallback: 'MH',
    dataAiHint: 'person portrait',
  },
  {
    name: 'PRITAM KARMAKAR',
    role: 'MANAGING DIRECTOR OF EASTERN ZONE,INDIA. - OPTOBHARAT',
    imageUrl: 'https://iili.io/FL4sn6P.jpg',
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

const stateHeads: StateHead[] = [
    { name: "Rabjot Singh Gulati", state: "Uttar Pradesh", zone: "Central Zone", imageUrl: "https://iili.io/FL4yJcl.png" },
    { name: "Gopika V.", state: "Kerala", zone: "Southern Zone" },
    { name: "P.Kayal Vizhi", state: "Tamil Nadu", zone: "Southern Zone" },
    { name: "Shobana Priya S.", state: "Andhra Pradesh", zone: "Southern Zone" },
    { name: "Irbaz", state: "Karnataka", zone: "Southern Zone" },
    { name: "Mugunthan", state: "Telangana", zone: "Southern Zone" },
    { name: "Hariharn", state: "Pondicherry", zone: "Southern Zone" },
    { name: "Haziel Rynjah", state: "Meghalaya", zone: "North-Eastern Zone" },
    { name: "Abhisek Buragohain", state: "Assam", zone: "North-Eastern Zone", imageUrl: 'https://iili.io/FL6wZ7I.png' },
    { name: "Be An H. Phom", state: "Nagaland", zone: "North-Eastern Zone", imageUrl: 'https://iili.io/FL6zzQf.png' },
];


const moderator: Member = {
    name: 'SHREYASI NATH',
    role: 'MODERATOR, OPTOBHARAT',
    imageUrl: 'https://iili.io/FL4bLfR.md.jpg',
    avatarFallback: 'SN',
    dataAiHint: 'person portrait',
};

const studentAmbassadors: StudentAmbassador[] = [
    // Add student ambassadors here
];

const LeadershipMemberCard = ({ member }: { member: Member }) => (
    <Card className="text-center flex flex-col items-center p-6 bg-primary/5 hover:shadow-lg transition-shadow">
        <Avatar className="h-24 w-24 border-4 border-primary mb-4 shadow-md">
            <AvatarImage 
                src={member.imageUrl} 
                alt={member.name} 
                data-ai-hint={member.dataAiHint || "person portrait"} 
                className="object-cover" 
                style={{ objectPosition: member.name === 'MOHD ASAD' ? '50% 20%' : 'center' }}
            />
            <AvatarFallback className="text-3xl bg-muted text-primary shadow-inner">
                <User className="h-12 w-12" /> 
            </AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-headline">{member.name}</CardTitle>
        <CardDescription className="text-primary font-semibold text-sm mt-1">{member.role}</CardDescription>
    </Card>
);

const MemberListItem = ({ member }: { member: Member }) => (
    <div className="flex items-center space-x-4 p-3 rounded-md transition-colors hover:bg-muted/50">
        <Avatar className="h-14 w-14 border-2 border-primary">
             <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.dataAiHint || "person portrait"} className="object-cover"/>
            <AvatarFallback className="text-xl bg-muted text-primary shadow-inner">
                 <User className="h-8 w-8" />
            </AvatarFallback>
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
      <section>
        <div className="flex items-center justify-center space-x-3 mb-6">
          <Crown className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-headline text-primary text-center">Core Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {leadershipMembers.map((member) => (
                <LeadershipMemberCard key={member.name} member={member} />
            ))}
        </div>
      </section>
      
      {/* Zonal Directors */}
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-3 bg-primary/10">
          <Users className="h-7 w-7 text-primary" />
          <CardTitle className="text-2xl font-headline text-primary">Zonal Directors</CardTitle>
        </CardHeader>
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {zonalDirectors.map((member) => (
            <MemberListItem key={member.name} member={member} />
          ))}
        </CardContent>
      </Card>

      {/* State, Community, and Student Leadership Table */}
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-3 bg-primary/10">
            <MapPin className="h-7 w-7 text-primary" />
            <CardTitle className="text-2xl font-headline text-primary">State & Community Leadership</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[180px]">Role</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {stateHeads.map((head, index) => (
                        <TableRow key={`${head.name}-${index}`}>
                            {index === 0 ? <TableCell className="font-semibold align-top" rowSpan={stateHeads.length}>State Heads</TableCell> : null}
                            <TableCell className="flex items-center gap-2">
                                <Avatar className="h-10 w-10 border-2 border-primary">
                                    <AvatarImage 
                                        src={head.imageUrl} 
                                        alt={head.name} 
                                        data-ai-hint="person portrait" 
                                        className="object-cover"
                                        style={{ objectPosition: head.name === 'Rabjot Singh Gulati' ? '50% 20%' : 'center' }}
                                    />
                                    <AvatarFallback className="text-sm bg-muted text-primary shadow-inner">
                                        <User className="w-5 h-5"/>
                                    </AvatarFallback>
                                </Avatar>
                                {head.name}
                            </TableCell>
                            <TableCell>{head.state} <span className="text-xs text-muted-foreground">({head.zone})</span></TableCell>
                        </TableRow>
                    ))}
                    <TableRow className="bg-muted/30">
                        <TableCell className="font-semibold"><div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Moderator</div></TableCell>
                        <TableCell className="flex items-center gap-2">
                             <Avatar className="h-10 w-10 border-2 border-primary">
                                <AvatarImage src={moderator.imageUrl} alt={moderator.name} data-ai-hint="person portrait" className="object-cover" />
                                <AvatarFallback className="text-sm bg-muted text-primary shadow-inner">{moderator.avatarFallback}</AvatarFallback>
                            </Avatar>
                            {moderator.name}
                        </TableCell>
                        <TableCell>{moderator.role}</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-semibold"><div className="flex items-center gap-2"><Trophy className="h-4 w-4"/> Student Ambassadors</div></TableCell>
                        <TableCell colSpan={2} className="text-muted-foreground italic">
                            Our student ambassador list is being updated and will be published soon.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
