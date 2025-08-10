
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, BookText, FileText, Folder, Building2, BookOpen } from 'lucide-react';

interface ResourceItemProps {
  title: string;
  description: string;
  href?: string;
}

const ResourceItem = ({ title, description, href }: ResourceItemProps) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b last:border-b-0">
    <div className="flex-grow mb-4 sm:mb-0 sm:mr-4">
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
    <Button asChild={!!href} disabled={!href} variant="outline" size="sm" className="flex-shrink-0">
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Download Now
        </a>
    </Button>
  </div>
);

const govCommunications = [
    {
      title: 'Directorate of Health Services, Assam – Independent Practice Rights of Optometrists',
      description: 'DHS, Assam and Director and HOD, Regional Institute of Ophthalmology, Guwahati report regarding the independent practice rights of Optometrists',
    },
    {
      title: 'Directorate of Medical Education, Assam – Roles and Scopes of Independent Practice of Optometrist in Assam',
      description: 'DME, Assam committee report on the Roles and Scopes of Independent Practice of Optometrist in Assam',
    },
    {
      title: 'Tripura Ophthalmic Science Council – Roles and Responsibilities of Optometrists',
      description: 'Outlines practice roles and responsibilities of Optometrists by Tripura State Allied and Healthcare Council',
    },
    {
      title: 'DGHS, MoHFW, New Delhi – RTI Reply on Optometry Practice',
      description: 'RTI response by Directorate General of Health, Ministry of Health And Family Welfare, Govt of India, regarding optometry practice',
    },
];

const ncahpDocs = [
    {
        title: 'NCAHP Act, 2021 – Full Text',
        description: 'Contains the National Commission For Allied and Healthcare Professions, Act 2021',
    },
    {
        title: 'Optometry Curriculum (2025) – NCAHP',
        description: 'Approved competency based curriculum (approved syllabus) for Optometry, by NCAHP',
    },
    {
        title: 'Optometry Definition – Under NCAHP Act, 2021',
        description: 'Definition of Optometry as per NCAHP Act, 2021',
    },
    {
        title: 'List of Allied and Healthcare Professions under NCAHP',
        description: 'Full list of Allied and Healthcare Professions as categorised by NCAHP',
    },
    {
        title: 'NCAHP Circular – Optometry is Not Paramedical',
        description: 'NCAHP Orders to discontinue the term paramedical to address professions like Optometry',
    },
];

const miscDocs = [
    {
        title: 'ISCO Code 2267 – Optometrists Task Statement',
        description: 'NCAHP assigns ISCO Code 2267 for optometrists. This contains ILO task stat for optometrists as per global standards.',
    },
];


export default function ResourcesPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <BookOpen className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          RESOURCES
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4">
          This section provides official documents related to the scope of practice of Optometrists in Assam and India. These documents are vital for institutional verification, law enforcement, and public awareness.
        </p>
      </section>
      
      <section id="gov-communications">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-3">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
                <CardTitle className="text-2xl font-headline text-primary">Optometry Scope of Practice – Government Communications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
             {govCommunications.map((doc) => (
                <ResourceItem key={doc.title} title={doc.title} description={doc.description} href={doc.href} />
             ))}
          </CardContent>
        </Card>
      </section>

      <section id="ncahp-docs">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-3">
            <BookText className="h-8 w-8 text-primary" />
            <div>
                <CardTitle className="text-2xl font-headline text-primary">NCAHP – Official Documents and Circulars</CardTitle>
                <CardDescription>National Commission for Allied and Healthcare Professions</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {ncahpDocs.map((doc) => (
                <ResourceItem key={doc.title} title={doc.title} description={doc.description} href={doc.href} />
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="misc-docs">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center space-x-3">
            <Folder className="h-8 w-8 text-primary" />
            <div>
                <CardTitle className="text-2xl font-headline text-primary">Miscellaneous</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
             {miscDocs.map((doc) => (
                <ResourceItem key={doc.title} title={doc.title} description={doc.description} href={doc.href} />
             ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
