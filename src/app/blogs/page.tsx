
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rss, BookOpen, CheckCircle, FileText, TrendingUp, Newspaper, CalendarDays, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs & Learning Hub - OPTOBHARAT',
  description: 'Explore the OPTOBHARAT blog for the latest research, clinical insights, case studies, and career strategies in optometry. Join the conversation and contribute to the future of eye care.',
  keywords: ['optometry blog', 'optometry research', 'clinical insights', 'eye care trends', 'optometry student resources', 'learning hub', 'career guidance'],
};

export default function BlogsPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <div className="flex justify-center items-center mb-4">
          <Newspaper className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">
          BLOGS & LEARNING
        </h1>
        <p className="text-lg text-muted-foreground">OPTOBHARAT</p>
      </section>

      <section id="blogs">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
              <BookOpen className="mr-3 h-8 w-8 text-primary" /> Explore Our Blogs – Knowledge, Innovation & Inspiration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 px-4 md:px-6">
              <p className="text-muted-foreground text-center mb-4">
                Our blog section is a knowledge hub, offering insights and thought-provoking discussions on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4 max-w-3xl mx-auto">
                <li><strong className="text-foreground">Latest Research & Trends:</strong> Stay ahead with cutting-edge updates in optometry.</li>
                <li><strong className="text-foreground">Clinical Insights & Case Studies:</strong> Learn from real-world applications and expert perspectives.</li>
                <li><strong className="text-foreground">Career & Growth Strategies:</strong> Get tips on personal and professional development.</li>
                <li><strong className="text-foreground">Motivational Articles:</strong> Find inspiration through success stories and thought leadership.</li>
                <li><strong className="text-foreground">Student Perspectives:</strong> Engage in discussions that reflect the voice of future optometrists.</li>
              </ul>
              <p className="text-muted-foreground text-center mt-4">Join the conversation—read, learn, and contribute to shaping the future of optometry!</p>
               <p className="text-center text-lg font-semibold text-primary pt-4">Blog section coming soon...</p>
          </CardContent>
        </Card>
      </section>

       <section id="events-link">
         <Card className="shadow-lg bg-primary/5 rounded-lg overflow-hidden">
            <CardHeader>
                 <CardTitle className="text-2xl md:text-3xl font-headline text-center text-primary flex items-center justify-center">
                    <CalendarDays className="mr-3 h-7 w-7" /> Events & Webinars
                 </CardTitle>
                 <CardDescription className="text-center text-muted-foreground pt-1">
                    Explore our past and upcoming events.
                 </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-4 md:p-6 text-center">
                <p className="text-muted-foreground">
                    At OPTOBHARAT, we believe in continuous learning and professional growth. Our events, webinars, and expert-led discussions are designed to equip you with the latest knowledge, skills, and motivation to excel in optometry.
                </p>
                 <div className="text-center mt-4">
                    <Button asChild size="lg">
                        <Link href="/events">
                            View All Events <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
         </Card>
      </section>


      <section id="resources-blog-links">
        <Card className="shadow-lg bg-primary/5 rounded-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline text-center text-primary flex items-center justify-center">
                <BookOpen className="mr-3 h-7 w-7" /> Resources & Topics
            </CardTitle>
             <CardDescription className="text-center text-muted-foreground pt-1">
                Learning & Knowledge Sharing.
             </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-4 md:p-6">
            <div>
              <h4 className="text-xl font-semibold font-headline text-foreground mb-2 flex items-center">
                <Rss className="mr-2 h-5 w-5 text-primary" /> Latest Articles & Research
              </h4>
              <ul className="list-none space-y-2 text-muted-foreground pl-7">
                <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" /> The Future of Optometry in India</li>
                <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" /> Career Paths for Optometrists</li>
                <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" /> Understanding Myopia Control</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold font-headline text-foreground mb-2 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary" /> Study Materials for Students
              </h4>
              <ul className="list-none space-y-2 text-muted-foreground pl-7">
                <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" /> Free PDF guides & presentations</li>
                <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" /> Clinical case studies & exam prep</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold font-headline text-foreground mb-2 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" /> Industry Trends & News
              </h4>
              <ul className="list-none space-y-2 text-muted-foreground pl-7">
                <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" /> Emerging technologies in optometry</li>
                <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" /> Updates on eye health policies</li>
              </ul>
            </div>
             <div className="text-center mt-6">
                <Button variant="outline" asChild>
                    <Link href="/resources">
                        View All Resources
                    </Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
