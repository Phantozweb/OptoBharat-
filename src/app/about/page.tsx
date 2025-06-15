
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Users, Briefcase, BookOpen, Award, Eye } from 'lucide-react';

export default function AboutOptobharatPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <Eye className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          ABOUT <span className="text-primary">OPTOBHARAT</span>
        </h1>
      </section>

      <section id="overview">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">OVERVIEW</CardTitle>
            <CardDescription className="text-center text-lg text-muted-foreground">
              Uniting Optometry Students Across India & Beyond
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base space-y-4 text-muted-foreground px-4 md:px-6">
            <p>
              OPTOBHARAT is India’s largest and most impactful optometry student community, dedicated to empowering the next generation of eye care professionals. With a vision that extends beyond borders, we connect students, educators, and professionals to foster education, innovation, and collaboration in optometry.
            </p>
            <p>
              Our community serves as a hub for knowledge-sharing, skill enhancement, and professional networking, ensuring that students receive the support and resources needed to excel in their academic and clinical pursuits. Through expert-led discussions, workshops, and global interactions, OPTOBHARAT bridges the gap between learning and real-world practice, preparing students for leadership in the evolving field of vision care.
            </p>
            <p className="font-semibold text-foreground">
              With a strong foundation in excellence and innovation, OPTOBHARAT is shaping the future of optometry in India and making a global impact on eye health.
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section id="why-optobharat">
          <Card className="shadow-lg h-full bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-center text-primary flex items-center justify-center">
                <Award className="mr-3 h-7 w-7" /> Why OPTOBHARAT?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base space-y-3 text-muted-foreground px-4 md:px-6">
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Largest student-driven optometry network in India.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Exclusive webinars, courses, and career guidance.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Connect with experts & industry professionals.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="who-can-join">
          <Card className="shadow-lg h-full bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-center text-primary flex items-center justify-center">
                <Users className="mr-3 h-7 w-7" /> Who Can Join?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base space-y-3 text-muted-foreground px-4 md:px-6">
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <Users className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Optometry students.</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Practicing optometrists.</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Educators & researchers.</span>
                </li>
                <li className="flex items-start">
                  <Users className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Eye care industry professionals.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
