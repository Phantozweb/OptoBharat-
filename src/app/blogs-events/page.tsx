
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Rss, BookOpen, CheckCircle, UsersRound, Video, FileText, TrendingUp, Newspaper, Trophy } from 'lucide-react';

export default function BlogsEventsPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <div className="flex justify-center items-center mb-4">
          <Newspaper className="h-12 w-12 text-primary mr-3" />
          <BookOpen className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">
          BLOGS & EVENTS
        </h1>
        <p className="text-lg text-muted-foreground">OPTOBHARAT</p>
      </section>

      <section id="upcoming-and-blogs">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
              <CalendarDays className="mr-3 h-8 w-8 text-primary" /> Upcoming Events, Webinars & Blogs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 px-4 md:px-6">
            <div>
              <h3 className="text-2xl font-semibold font-headline text-primary mb-3">Upcoming Events & Webinars – Stay Inspired, Stay Ahead!</h3>
              <p className="text-muted-foreground mb-4">
                At OPTOBHARAT, we believe in continuous learning and professional growth. Our upcoming events, webinars, and expert-led discussions are designed to equip you with the latest knowledge, skills, and motivation to excel in optometry.
              </p>
              <h4 className="text-xl font-semibold font-headline text-foreground mb-2">What to Expect?</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li><strong className="text-foreground">Expert Webinars:</strong> Insights from leading professionals on clinical advancements, technology, and best practices.</li>
                <li><strong className="text-foreground">Hands-on Workshops:</strong> Practical skill-building sessions to enhance your clinical expertise.</li>
                <li><strong className="text-foreground">Career & Leadership Talks:</strong> Guidance from mentors on shaping a successful future in optometry.</li>
                <li><strong className="text-foreground">Global Networking:</strong> Connect with students and professionals worldwide to exchange ideas and collaborate.</li>
                <li><strong className="text-foreground">Motivational Discussions:</strong> Inspirational stories and interactive sessions to fuel your passion and confidence in the field.</li>
              </ul>
              <p className="text-muted-foreground mt-4">Stay tuned for updates and registrations!</p>
            </div>
            <hr className="my-6 border-border" />
            <div>
              <h3 className="text-2xl font-semibold font-headline text-primary mb-3">Explore Our Blogs – Knowledge, Innovation & Inspiration</h3>
              <p className="text-muted-foreground mb-4">
                Our blog section is a knowledge hub, offering insights and thought-provoking discussions on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li><strong className="text-foreground">Latest Research & Trends:</strong> Stay ahead with cutting-edge updates in optometry.</li>
                <li><strong className="text-foreground">Clinical Insights & Case Studies:</strong> Learn from real-world applications and expert perspectives.</li>
                <li><strong className="text-foreground">Career & Growth Strategies:</strong> Get tips on personal and professional development.</li>
                <li><strong className="text-foreground">Motivational Articles:</strong> Find inspiration through success stories and thought leadership.</li>
                <li><strong className="text-foreground">Student Perspectives:</strong> Engage in discussions that reflect the voice of future optometrists.</li>
              </ul>
              <p className="text-muted-foreground mt-4">Join the conversation—read, learn, and contribute to shaping the future of optometry!</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="events-specifics">
         <Card className="shadow-lg bg-primary/5 rounded-lg overflow-hidden">
            <CardHeader>
                 <CardTitle className="text-2xl md:text-3xl font-headline text-center text-primary flex items-center justify-center">
                    <CalendarDays className="mr-3 h-7 w-7" /> Events & Webinars Details
                 </CardTitle>
                 <CardDescription className="text-center text-muted-foreground pt-1">
                    Upcoming & Past Events, registration forms, and recorded videos.
                 </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-4 md:p-6">
                <div>
                    <h4 className="text-xl font-semibold font-headline text-foreground mb-2 flex items-center">
                        <UsersRound className="mr-2 h-5 w-5 text-primary" /> Upcoming Webinars & Events:
                    </h4>
                    <p className="text-muted-foreground pl-7">Coming soon.....</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold font-headline text-foreground mb-2 flex items-center">
                        <Video className="mr-2 h-5 w-5 text-primary" /> Past Events & Recordings:
                    </h4>
                     <Card className="mt-4 shadow-sm bg-background">
                      <CardHeader>
                        <CardTitle className="text-lg font-headline text-primary flex items-center">
                          <Trophy className="mr-2 h-5 w-5" /> Official Announcement – Optopreneur 2025 Winners
                        </CardTitle>
                        <CardDescription>Organized by OPTOBHARAT</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm text-muted-foreground">
                        <p>We are proud to announce the Top 3 Winners of Optopreneur 2025, a nationwide contest celebrating innovation and entrepreneurship among India’s brightest Optometry students! 🌟</p>
                        <div className="space-y-3">
                          <p><strong className="text-foreground">🥇 1st Place: Sreesandhiya G</strong><br />Project Title: “Intelligent Contact Lens Dispensing System with Mobile-Integrated AI”<br />🧠 A groundbreaking idea that redefines smart vision solutions using AI technology.</p>
                          <p><strong className="text-foreground">🥈 2nd Place: Anik Dingal</strong><br />Project Title: “A Smart, Portable IOP Device with Built-In Corneal Biomechanics Compensation”<br />🔬 A step forward in accessible glaucoma care through portable diagnostic innovation.</p>
                          <p><strong className="text-foreground">🥉 3rd Place: Mohd Khalid</strong><br />Project Title: “Emerging Ideas in Optometry and Clinical Advancements”</p>
                        </div>
                        <hr className="my-3" />
                        <p>These exceptional students have demonstrated forward-thinking ideas that could shape the future of optometric care in India and beyond. Their vision and dedication inspire us all! 💡✨</p>
                        <p>👏 A big thank you to all participants for sharing your ideas and contributing to the growth of eye care innovation.</p>
                      </CardContent>
                    </Card>
                </div>
                 <div className="text-center mt-4">
                    <Button variant="outline" disabled>
                        Registration Form (Coming Soon)
                    </Button>
                </div>
            </CardContent>
         </Card>
      </section>

      <section id="resources-blog-links">
        <Card className="shadow-lg bg-primary/5 rounded-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline text-center text-primary flex items-center justify-center">
                <BookOpen className="mr-3 h-7 w-7" /> Resources & Blog Topics
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
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
