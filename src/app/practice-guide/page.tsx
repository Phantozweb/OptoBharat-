
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, CheckCircle, AlertTriangle, ShieldCheck, GraduationCap, Stethoscope, Microscope, BookCopy, Users, PilcrowRight, Glasses, Download, BookText, Folder, Building2, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice Guide - Community Guidelines & Resources - OPTOBHARAT',
  description: 'Access the official OPTOBHARAT practice guide, including community guidelines, professional standards, and essential resources for optometrists in India. Find NCAHP documents, government circulars, and the defined scope of practice.',
  keywords: ['optometry practice guide', 'optometry community guidelines', 'professional standards optometry', 'optometry resources', 'NCAHP Act 2021', 'scope of practice optometrist', 'qualified optometrist India', 'ethical optometry', 'government communications optometry'],
};


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
      href: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:ab9b13f9-59a2-4c73-808b-5445192c4ed6'
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

export default function PracticeGuidePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <BookOpen className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Practice Guide
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4">
          An essential guide to professional standards, guidelines, and official resources for the OPTOBHARAT community.
        </p>
      </section>

      {/* Community Guidelines Section */}
      <section id="community-guidelines">
        <h2 className="text-3xl font-headline text-primary text-center mb-8 flex items-center justify-center">
            <ShieldCheck className="mr-4 h-9 w-9" />
            Community Guidelines & Professional Standards
        </h2>
        <div className="space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary flex items-center"><Eye className="mr-3 h-7 w-7" />Defining Optometry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                <p>Optometry is an autonomous healthcare profession dedicated to examining, diagnosing, treating, and managing disorders of the eye and visual system. As first-contact clinical professionals, optometrists provide comprehensive medical and optical care.</p>
                <p>They are integral to the early detection of sight-threatening diseases, managing non-surgical eye conditions, and bridging the gap to advanced ophthalmic services, thereby preventing avoidable blindness and promoting public health.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-primary flex items-center"><GraduationCap className="mr-3 h-7 w-7" />The Standard for a Qualified Optometrist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                <p>A qualified optometrist is defined by a high standard of education and clinical training, which includes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Successful completion of a Bachelor of Optometry (B.Optom)—a minimum four-year, full-time program from a UGC-recognized university.</li>
                    <li>A full year of mandatory, hands-on clinical internship at a tertiary-level eye care facility.</li>
                </ul>
                <p>This rigorous training equips optometrists as independent frontline practitioners capable of diagnosing and managing a wide spectrum of ocular and visual conditions.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary flex items-center"><Stethoscope className="mr-3 h-7 w-7" />Professional Scope of Practice</CardTitle>
                <CardDescription>The core clinical and medical responsibilities recognized for optometrists.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center"><Microscope className="mr-2 h-5 w-5"/>Clinical Examination & Diagnosis</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4">
                        <li>Visual function assessment (acuity, color vision).</li>
                        <li>Anterior segment examination via slit lamp.</li>
                        <li>Visual field testing and fundus examination.</li>
                        <li>Diagnostic testing for conditions such as refractive errors, cataract, glaucoma, diabetic retinopathy, and more.</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center"><Glasses className="mr-2 h-5 w-5"/>Optical Management & Functional Care</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4">
                        <li>Prescription of spectacles, contact lenses, prisms, and low vision aids.</li>
                        <li>Binocular vision therapy and rehabilitation.</li>
                        <li>Management of pediatric and occupational vision issues.</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center"><PilcrowRight className="mr-2 h-5 w-5"/>Medical Management</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4">
                        <li>Prescription of diagnostic and therapeutic agents including antibiotics, antihistamines, NSAIDs, vitamins, miotics, and lubricants.</li>
                        <li>Medical management of conditions like conjunctivitis, dry eye, and certain eyelid problems.</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center"><Users className="mr-2 h-5 w-5"/>Referral & Co-management</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4">
                        <li>Referral of surgical or advanced cases to ophthalmologists.</li>
                        <li>Identification of systemic conditions via ocular signs and referral to appropriate specialists.</li>
                        <li>Co-management of post-operative cases.</li>
                    </ul>
                    </div>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary flex items-center"><BookCopy className="mr-3 h-7 w-7" />Recognition under NCAHP Act, 2021</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>The National Commission for Allied and Healthcare Professions (NCAHP) Act, 2021 officially recognizes Optometry as a healthcare profession, assigning it ISCO Code 2267. This aligns Indian optometry with global standards.</p>
                    <p>This recognition solidifies the role of optometrists as independent, regulated professionals tasked with diagnosing and managing eye diseases, prescribing medications and optical aids, and advising on visual health.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg bg-destructive/10 border-destructive/20">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-destructive flex items-center"><AlertTriangle className="mr-3 h-7 w-7" />Public & Community Awareness</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-destructive/90">To uphold the integrity of our profession, community members must distinguish between qualified professionals and those with inadequate training. This community advocates for:</p>
                    <ul className="list-disc list-inside space-y-2 text-destructive/80 pl-4">
                        <li><strong className="text-destructive">Consulting University-Qualified Professionals:</strong> Patients should only consult practitioners holding a full-time Bachelor of Optometry (B.Optom) degree.</li>
                        <li><strong className="text-destructive">Avoiding Misrepresentation:</strong> Be aware of individuals with short-term technical diplomas who may falsely represent themselves as optometrists.</li>
                        <li><strong className="text-destructive">Ethical Practice:</strong> Optical shops should not provide medical or diagnostic services without a registered optometrist on-site.</li>
                    </ul>
                    <p className="font-semibold text-destructive mt-4">Optometrists are not assistants; they are primary independent medical eye care professionals—extensively trained, nationally recognized, and clinically accountable. This community is built on that standard.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <div className="my-16 border-t-2 border-dashed border-border"></div>

      {/* Resources Section */}
      <section id="resources">
        <h2 className="text-3xl font-headline text-primary text-center mb-8 flex items-center justify-center">
            <BookOpen className="mr-4 h-9 w-9" />
            Resources & Official Documents
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
          This section provides official documents related to the scope of practice of Optometrists in Assam and India. These documents are vital for institutional verification, law enforcement, and public awareness.
        </p>
        <div className="space-y-8">
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

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-primary">Duties & Responsibilities of OPTOMETRIST</CardTitle>
                    <CardDescription>As per Tripura State Allied & Healthcare Council, 22nd March, 2023.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>The profession of Optometry is a part of Modern Medical Science. It is an independent Healthcare Profession like Medicine, Surgery, Dentistry, Homeopathy, Ayurved etc. Optometrists are primary Eye Care Professional deals with Eye & Vision.</p>
                    <p><strong className="text-foreground">Optometry</strong> means a healthcare profession that is autonomous and concerned especially with examining the eye defects and faults of Refraction, with prescribing correctional lenses, eye exercises and vision rehabilitation care for visually impaired, with diagnosing diseases of the Eye and with treating such diseases or referring them to other healthcare/medical professional for better treatment. Optometry play a leading role in Eye-care provision at the primary level, and also help at Secondary and Tertiary levels, working with Ophthalmologists and other Healthcare Providers towards the unified goal of combating Blindness.</p>
                    
                    <h3 className="font-semibold text-lg text-foreground pt-4">Point to Point Duties & Responsibilities of OPTOMETRISTS are as follows:</h3>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>To test visual acuity. (Distant vision, Near vision, Colour vision)</li>
                        <li>To test field of vision (peripheral field of vision & central field of vision)</li>
                        <li>Comprehensive Eye examination (i.e. Cataract, Glaucoma, Corneal Ulcer /Opacity, Retinopathy, ARMD, Trachoma, Uveities, Squint/Strabismus, Amblyopia/Lazy Eye, etc.).</li>
                        <li>Prescribe Eye glasses to correct Refractive error. (Myopia, Hypermetropia, Presbiopia and Astigmatism)</li>
                        <li>Prescribe Contact Lenses to correct Refractive error and other eye condition.</li>
                        <li>Prescribe Prism to correct Squint/ Strabismus.</li>
                        <li>Prescribe Low-visual aid to the partially sighted person.</li>
                        <li>Binocular Vision Therapy.</li>
                        <li>Geriatric Vision Therapy & Paediatric Vision Therapy.</li>
                        <li>Sports Vision Therapy & Occupational Vision Therapy.</li>
                        <li>Vision Screening for School going children for early detection of Refractive Error, Squint, Amblyopia and other paediatric eye condition.</li>
                        <li>
                            Treatment and Medical intervention at Primary level.
                            <ul className="list-[lower-alpha] list-inside pl-6 mt-2 space-y-1">
                                <li>Conjunctivitis</li>
                                <li>Trachoma</li>
                                <li>Eye allergies</li>
                                <li>Dry Eye</li>
                                <li>Eye lid problem (Stye, Chalazion, Blepharities)</li>
                                <li>Lachrymal system disorder</li>
                                <li>Superficial corneal foreign body</li>
                                <li>Vit.-A deficiency</li>
                            </ul>
                        </li>
                        <li>
                            Uses of Medication.
                             <ul className="list-[lower-alpha] list-inside pl-6 mt-2 space-y-1">
                                <li>Basic antibiotic eye drops</li>
                                <li>Myotics</li>
                                <li>Mydriatics & Cycloplegic</li>
                                <li>Vitamins & Minerals</li>
                                <li>Topical anaesthetics</li>
                                <li>Pain killer, anti-histamine, antiallergic.</li>
                            </ul>
                        </li>
                        <li>
                            Minor surgical procedure.
                             <ul className="list-[lower-alpha] list-inside pl-6 mt-2 space-y-1">
                                <li>Superficial foreign body removal</li>
                                <li>Epilation for Trichiasis</li>
                            </ul>
                        </li>
                        <li>Enucleation of Eye-ball for Corneal Transplantation.</li>
                        <li>Pre and Post Operative follow-up for Eye surgeries.</li>
                        <li>Eye Health Education at primary level for peripheral staff.</li>
                        <li>Referral of patients to other Healthcare Professional.</li>
                    </ol>
                </CardContent>
            </Card>

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
        </div>
      </section>
    </div>
  );
}

    