
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  Library,
  Briefcase,
  Users,
  Globe,
  Activity,
  Lightbulb,
  Building,
  Award,
  CalendarDays,
  MessageCircleQuestion,
  ClipboardCheck,
  Info
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OPTOBHARAT Forum - Discussions & Community',
  description: 'Join the OPTOBHARAT forum to engage in discussions on resources, career guidance, mentorship, clinical skills, research, and more. Connect with the optometry community.',
  keywords: ['OPTOBHARAT forum', 'optometry discussion board', 'student optometrist network', 'career guidance optometry', 'clinical skills discussion', 'research and innovation'],
};

export default function OptobharatForumPage() {
  const forumSections = [
    {
      icon: Library,
      title: 'RESOURCES',
      description: 'Access a curated collection of articles, research papers, and educational materials to support your academic studies and professional development in optometry.',
    },
    {
      icon: Briefcase,
      title: 'CAREER GUIDANCE',
      description: 'Navigate your optometry career path with confidence through our comprehensive career guidance resources, including job listings, internships, and mentorship programs tailored for optometry students.',
    },
    {
      icon: Users,
      title: 'MENTORSHIP & NETWORKING',
      description: 'Connect with experienced optometrists, educators, startup CEOs, and industry experts to gain valuable insights, career advice, and business mentorship.',
    },
    {
      icon: Globe,
      title: 'GLOBAL OPTOMETRY EXPERTS & WEBINARS',
      description: 'Engage with renowned optometrists from around the world through expert-led webinars and discussions on cutting-edge advancements, best practices, and career opportunities in optometry.',
    },
    {
      icon: Activity,
      title: 'SKILLS & CLINICAL TRAINING',
      description: 'Enhance your practical skills through discussions on clinical techniques, optometry procedures, and patient management.',
    },
    {
      icon: Lightbulb,
      title: 'RESEARCH & INNOVATION',
      description: 'Stay updated with the latest research, case studies, and technological advancements shaping the future of optometry.',
    },
    {
      icon: Building,
      title: 'ENTREPRENEURSHIP & STARTUPS',
      description: 'Learn how to build and grow your own optometry-related business. Engage with startup CEOs, business mentors, and industry leaders through exclusive webinars and discussions.',
    },
    {
      icon: Award,
      title: 'LEADERSHIP & ADVOCACY',
      description: 'Participate in leadership programs, advocacy initiatives, and projects that contribute to the advancement of the optometry profession.',
    },
    {
      icon: CalendarDays,
      title: 'WEBINARS & EVENTS',
      description: 'Explore upcoming webinars, workshops, and courses on optometry, business, and healthcare innovation to expand your knowledge and skills.',
    },
    {
      icon: MessageCircleQuestion,
      title: 'FEEDBACK & SUGGESTIONS',
      description: 'Help improve OPTOBHARAT by sharing your ideas and suggestions.',
    },
  ];

  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <MessageSquare className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          OPTOBHARAT FORUM
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Engage in meaningful conversations with fellow optometry students, share insights, ask questions, and collaborate on projects related to the field of optometry.
        </p>
      </section>

      <section id="discussion-boards">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">DISCUSSION BOARDS</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4 px-4 md:px-6">
            <p className="text-muted-foreground">
              Engage in meaningful conversations with fellow optometry students, share insights, ask questions, and collaborate on projects related to the field of optometry.
            </p>
            <p className="text-sm text-muted-foreground">
              To ensure a respectful and constructive community environment, please review our OPTOBHARAT community guidelines before participating in discussions.
            </p>
            <Button asChild size="lg">
              <Link href="#community-guidelines">
                <ClipboardCheck className="mr-2 h-5 w-5" />
                View Community Guidelines
              </Link>
            </Button>
            <p className="font-semibold text-primary mt-4 text-lg">
              Join the OPTOBHARAT Community today!
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="forum-topics" aria-labelledby="forum-topics-heading">
        <h2 id="forum-topics-heading" className="sr-only">Forum Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {forumSections.map((section) => (
            <Card key={section.title} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col rounded-lg overflow-hidden bg-primary/5">
              <CardHeader className="flex flex-row items-center space-x-3 pb-3 p-4">
                <section.icon aria-hidden="true" className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-xl font-headline leading-tight">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="community-guidelines" aria-labelledby="community-guidelines-heading">
        <Card className="shadow-lg bg-primary/5 rounded-lg overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-center space-x-3 p-4 md:p-6">
             <Info aria-hidden="true" className="h-8 w-8 text-primary" />
            <CardTitle id="community-guidelines-heading" className="text-2xl md:text-3xl font-headline text-center text-primary">COMMUNITY GUIDELINES</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-4 md:p-6">
            <p className="text-center text-muted-foreground">
              Check the community for the guidelines.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-sm md:text-base pl-4">
              <li>
                <strong className="font-semibold text-foreground">Respect & Professionalism:</strong> Treat all members with respect, no hate speech, harassment, or discrimination. Maintain a professional and positive attitude in discussions.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Constructive Discussions:</strong> Stay on topic and contribute meaningful insights. Share only credible and verified information.
              </li>
              <li>
                <strong className="font-semibold text-foreground">No Spam or Unauthorized Promotions:</strong> Unsolicited promotions, advertisements, or irrelevant links are prohibited. Business promotions require admin approval.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Privacy & Confidentiality:</strong> Do not share personal, patient, or confidential information. Respect the privacy of all members.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Ethical Conduct:</strong> Follow ethical standards, especially in clinical discussions. No medical diagnoses or treatment advice should be given.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Active Participation:</strong> Engage in discussions, webinars, and community events. Promote collaboration and knowledge-sharing.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Webinars & Discussions:</strong> Respect guest speakers and experts during live sessions. No disruptive behavior; ask relevant and constructive questions.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Reporting Violations:</strong> Report any rule violations to the admin team. Repeated violations may lead to removal from the community.
              </li>
            </ol>
            <p className="text-center font-semibold text-foreground mt-6">
              By being part of OPTOBHARAT, you commit to following these guidelines to ensure a positive and enriching experience for all members.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-8">
        <h2 className="text-xl md:text-2xl font-headline text-primary mb-4">
          Join OPTOBHARAT and become part of India&apos;s largest optometry student community!
        </h2>
      </section>
    </div>
  );
}
