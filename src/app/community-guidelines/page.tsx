
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Eye, CheckCircle, AlertTriangle, ShieldCheck, GraduationCap, Stethoscope, Microscope, BookCopy, Users, Award } from 'lucide-react';

export default function CommunityGuidelinesPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <ShieldCheck className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Community Guidelines & Professional Standards
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4">
          Fostering a responsible, recognized, and regulated professional community.
        </p>
      </section>

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
              <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center"><i className="inline-block w-5 h-5 mr-2" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'lucide lucide-glasses\'%3E%3Cpath d=\'M6 15h12\'/%3E%3Cpath d=\'M12 15v-2.5\'/%3E%3Cpath d=\'M9.3 5.5a3.5 3.5 0 0 0 5.4 0\'/%3E%3Cpath d=\'M2 13.2a3 3 0 0 0-1.5 2.8c0 1.7 1.3 3 3 3h3.5\'/%3E%3Cpath d=\'M22 13.2a3 3 0 0 1 1.5 2.8c0 1.7-1.3 3-3 3h-3.5\'/%3E%3C/svg%3E')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></i>Optical Management & Functional Care</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4">
                  <li>Prescription of spectacles, contact lenses, prisms, and low vision aids.</li>
                  <li>Binocular vision therapy and rehabilitation.</li>
                  <li>Management of pediatric and occupational vision issues.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center"><i className="inline-block w-5 h-5 mr-2" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'lucide lucide-pilcrow-right\'%3E%3Cpath d=\'M10 10v10\'/%3E%3Cpath d=\'M10 10H6\'/%3E%3Cpath d=\'M14 4.5a4.5 4.5 0 0 0-8.72 1.14\'/%3E%3Cpath d=\'M18 4.5a4.5 4.5 0 0 1-8.72 1.14\'/%3E%3Cpath d=\'m16 10 3-3-3-3\'/%3E%3C/svg%3E')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></i>Medical Management</h3>
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
            <p className="text-destructive-foreground/90">To uphold the integrity of our profession, community members must distinguish between qualified professionals and those with inadequate training. This community advocates for:</p>
            <ul className="list-disc list-inside space-y-2 text-destructive-foreground/80 pl-4">
                <li><strong className="text-destructive-foreground">Consulting University-Qualified Professionals:</strong> Patients should only consult practitioners holding a full-time Bachelor of Optometry (B.Optom) degree.</li>
                <li><strong className="text-destructive-foreground">Avoiding Misrepresentation:</strong> Be aware of individuals with short-term technical diplomas who may falsely represent themselves as optometrists.</li>
                <li><strong className="text-destructive-foreground">Ethical Practice:</strong> Optical shops should not provide medical or diagnostic services without a registered optometrist on-site.</li>
            </ul>
             <p className="font-semibold text-destructive-foreground mt-4">Optometrists are not assistants; they are primary independent medical eye care professionals—extensively trained, nationally recognized, and clinically accountable. This community is built on that standard.</p>
        </CardContent>
      </Card>
    </div>
  );
}
