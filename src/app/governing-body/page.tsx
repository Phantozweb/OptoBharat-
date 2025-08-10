
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, UserCircle, Landmark, MapPin, School, Star, Crown, Shield, BookUser, Building, User, Users2, UserCheck } from 'lucide-react';
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

const stateHeads: StateHead[] = [
    { name: "Rabjot Singh Gulati", state: "Uttar Pradesh", zone: "Central Zone" },
    { name: "Gopika V.", state: "Kerala", zone: "Southern Zone" },
    { name: "P.Kayal Vizhi", state: "Tamil Nadu", zone: "Southern Zone" },
    { name: "Shobana Priya S.", state: "Andhra Pradesh", zone: "Southern Zone" },
    { name: "Irbaz", state: "Karnataka", zone: "Southern Zone" },
    { name: "Mugunthan", state: "Telangana", zone: "Southern Zone" },
    { name: "Hariharn", state: "Pondicherry", zone: "Southern Zone" },
    { name: "Haziel Rynjah", state: "Meghalaya", zone: "North-Eastern Zone" },
    { name: "Abhisek Buragohain", state: "Assam", zone: "North-Eastern Zone" },
    { name: "Be An H. Phom", state: "Nagaland", zone: "North-Eastern Zone" },
];


const moderator: Member = {
    name: 'SHREYASI NATH',
    role: 'MODERATOR, OPTOBHARAT',
    avatarFallback: 'SN',
    dataAiHint: 'person portrait',
};

const studentAmbassadors: StudentAmbassador[] = [
    // Add student ambassadors here
];

const LeadershipMemberCard = ({ member }: { member: Member }) => (
    <Card className="text-center flex flex-col items-center p-6 bg-primary/5 hover:shadow-lg transition-shadow">
        <Avatar className="h-24 w-24 border-4 border-primary mb-4">
            <AvatarImage src={member.imageUrl || `https://placehold.co/128x128.png`} alt={member.name} data-ai-hint={member.dataAiHint || "person portrait"} />
            <AvatarFallback className="text-3xl bg-muted text-muted-foreground">{member.avatarFallback}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-headline">{member.name}</CardTitle>
        <CardDescription className="text-primary font-semibold text-sm mt-1">{member.role}</CardDescription>
    </Card>
);

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
          <Building className="h-7 w-7 text-primary" />
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
                            <TableCell>{head.name}</TableCell>
                            <TableCell>{head.state} <span className="text-xs text-muted-foreground">({head.zone})</span></TableCell>
                        </TableRow>
                    ))}
                    <TableRow className="bg-muted/30">
                        <TableCell className="font-semibold flex items-center gap-2"><Shield className="h-4 w-4"/> Moderator</TableCell>
                        <TableCell>{moderator.name}</TableCell>
                        <TableCell>{moderator.role}</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-semibold flex items-center gap-2"><Star className="h-4 w-4"/> Student Ambassadors</TableCell>
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
