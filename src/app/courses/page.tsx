
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookMarked, ClipboardPenLine, Orbit, Award, Lightbulb, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses & Certifications - OPTOBHARAT',
  description: 'Explore optometry courses, participate in quiz competitions with automatic certification, and discover upcoming learning opportunities in specialized fields like contact lenses.',
  keywords: ['optometry courses', 'optometry quiz competition', 'optometry certification', 'contact lens course', 'online optometry education'],
};

export default function CoursesPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <BookMarked className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Courses & Certifications
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4">
          Advance your knowledge and skills with our curated educational programs, from academic resources to specialized training.
        </p>
      </section>

      <section id="academic-education">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
              <Lightbulb className="mr-3 h-8 w-8 text-primary" /> Academic for Optometry Education
            </CardTitle>
             <CardDescription className="text-center text-muted-foreground pt-1">
                Your foundation for excellence in vision science.
             </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-lg text-muted-foreground">
             <p>This section is dedicated to providing core academic resources, study materials, and foundational knowledge for optometry students. We are working on building a comprehensive library to support your educational journey.</p>
             <p className="font-semibold text-primary mt-4">Coming soon...</p>
          </CardContent>
        </Card>
      </section>

      <section id="quiz-competition">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
                <ClipboardPenLine className="mr-3 h-8 w-8 text-primary" /> Quiz Competition
            </CardTitle>
             <CardDescription className="text-center text-muted-foreground pt-1">
                Test your knowledge and earn recognition.
             </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4 px-4 md:px-6">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are developing an exciting new feature: an automated quiz platform! Sharpen your skills, compete with peers, and earn a certificate upon successful completion.
            </p>
            <div className="p-6 bg-primary/5 rounded-lg max-w-lg mx-auto">
                 <h4 className="text-xl font-headline text-primary flex items-center justify-center">
                    <Award className="mr-2 h-6 w-6"/> Automatic Certification
                 </h4>
                 <p className="text-muted-foreground mt-2">
                    Participants who score <strong className="text-foreground">80% or higher</strong> in our quiz competitions will automatically receive a digital certificate of achievement to recognize their expertise.
                 </p>
            </div>
            <p className="font-semibold text-primary mt-4 text-lg">
              This interactive learning tool is under construction. Stay tuned for its launch!
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="upcoming-courses">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
                <Orbit className="mr-3 h-8 w-8 text-primary" /> Upcoming Courses
            </CardTitle>
             <CardDescription className="text-center text-muted-foreground pt-1">
                Specialize and grow with advanced topics.
             </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4 px-4 md:px-6">
             <p className="text-muted-foreground max-w-2xl mx-auto">
               OPTOBHARAT is committed to providing continuous learning opportunities. We are planning to roll out specialized courses to help you advance in your career.
             </p>
             <div className="flex justify-center flex-wrap gap-4 pt-4">
                <div className="p-4 border rounded-md bg-background shadow-sm">
                    <p className="font-semibold text-foreground flex items-center"><TrendingUp className="mr-2 h-5 w-5 text-primary"/>Contact Lens Practice</p>
                </div>
                 <div className="p-4 border rounded-md bg-background shadow-sm">
                    <p className="font-semibold text-foreground flex items-center"><TrendingUp className="mr-2 h-5 w-5 text-primary"/>Low Vision Aids</p>
                </div>
                 <div className="p-4 border rounded-md bg-background shadow-sm">
                    <p className="font-semibold text-foreground flex items-center"><TrendingUp className="mr-2 h-5 w-5 text-primary"/>Clinical Skills</p>
                </div>
             </div>
             <p className="font-semibold text-primary mt-6 text-lg">
                More details and enrollment information will be available soon.
             </p>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}
