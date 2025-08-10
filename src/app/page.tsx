
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Users, Award, FlaskConical, Trophy } from 'lucide-react';


export default function OptobharatHomePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <div className="relative inline-block">
            <svg
                className="absolute -top-8 -left-12 sm:-top-12 sm:-left-20 h-40 w-auto sm:h-48 text-primary/10 -z-0"
                fill="currentColor"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path d="M422.33,238.83,389,209.76a16,16,0,0,0-19.4,1.36,134.1,134.1,0,0,1-30.8,17.4C322,236.4,286,256,286,256s-44.17-21.73-45.79-22.39c-10.4-4.2-20.59-8.88-30.3-14.28-9.91-5.5-19.6-11.83-29-18.84-26.4-19.64-53.11-46-53.11-46L52.09,235.31c-16.7,11.53-20.25,35.43-7.53,49.27L178.6,446.09a34.12,34.12,0,0,0,45,7.56l52-30.13,38.2,25.6a16,16,0,0,0,19.4-1.36l108.53-91.86a24,24,0,0,0-18.4-40.43Z" />
                <path d="M370.21,56,346.3,86.63,322.39,64,306,83.33,266,79.5l-33.33-28L202,83.33l-24.67-33.5-22,12.83,16,21.34-22.67,16L126,83.33,143.5,48,112,32l93.33,33.33,30.67-16,38.67,49.33L322.39,80,344.5,96l42.17-48Z" />
            </svg>
            <h1 className="relative text-5xl md:text-6xl font-bold font-headline mb-6">
                OPTO<span className="text-primary">BHARAT</span>
            </h1>
        </div>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
          India&apos;s largest optometry student community, dedicated to uniting future optometrists across the nation and worldwide.
        </p>
        <Button asChild size="lg">
          <Link href="/membership#how-to-join">
            Join the Community <CheckCircle className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      {/* INTRODUCTION Section */}
      <section id="introduction">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">INTRODUCTION</CardTitle>
            <CardDescription className="text-center text-lg">THE OPTOBHARAT COMMUNITY</CardDescription>
          </CardHeader>
          <CardContent className="text-base space-y-4 text-muted-foreground px-4 md:px-6">
            <p>
              Welcome to OPTOBHARAT, India’s largest optometry student community, dedicated to uniting future optometrists across the nation and worldwide. We are committed to fostering collaboration, knowledge-sharing, and professional growth, empowering aspiring eye care professionals to shape the future of vision health in India and beyond.
            </p>
            <p>The name OPTOBHARAT is a fusion of two meaningful words:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>‘Opto’ is derived from the Greek word, meaning &apos;vision&apos; or ‘eye’ or ‘related to sight,’ often associated with the field of vision sciences and optometry or eye care and optics.</li>
              <li>‘Bharat’ is another name for India, derived from Sanskrit, representing the nation’s rich heritage and deep-rooted wisdom in healthcare and education.</li>
            </ul>
            <p>Together, OPTOBHARAT represents &quot;India’s Vision&quot;—a movement dedicated to advancing eye care education, awareness, and innovation.</p>
            <p>
              At OPTOBHARAT, we believe in learning, leading, and revolutionizing vision care. Through expert-led discussions, skill-building workshops, and networking opportunities, our mission is to equip optometry students with the knowledge and support they need to excel in their careers.
            </p>
            <p className="font-semibold text-foreground">Join us and be part of a movement that’s shaping the future of optometry in India and across the globe!</p>
          </CardContent>
        </Card>
      </section>

      {/* GOVERNING BODY Section */}
      <section id="governing-body">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">GOVERNING BODY</CardTitle>
            <CardDescription className="text-center text-lg">OPTOBHARAT Governing Body</CardDescription>
          </CardHeader>
          <CardContent className="text-base space-y-4 text-muted-foreground px-4 md:px-6">
            <p>
              The Governing Body of OPTOBHARAT consists of dedicated leaders committed to fostering a strong and collaborative optometry student community across India. With a vision to empower future optometrists, our team works towards knowledge-sharing, professional development, and strengthening the field of eye care. Together, we shape the future of optometry in India and beyond.
            </p>
            <div className="text-center">
              <Button variant="link" asChild>
                 <Link href="/governing-body">
                    Read more ...
                 </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">OPTOBHARAT Vision & Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-6 text-muted-foreground px-4 md:px-6">
            <div>
              <h3 className="text-xl font-semibold font-headline text-primary mb-2 flex items-center">
                <Trophy className="mr-2 h-6 w-6" /> Vision Statement:
              </h3>
              <p className="pl-8 italic">&quot;To be India’s leading optometry student community, fostering innovation, inclusivity, and continuous learning by connecting students with national and global experts to shape the future of eye care.&quot;</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold font-headline text-primary mb-2 flex items-center">
                <FlaskConical className="mr-2 h-6 w-6" /> Mission Statement:
              </h3>
              <p className="pl-8 italic">&quot;Empowering optometry students across India to connect, learn, and collaborate in advancing eye care excellence, while building bridges with national and global experts.&quot;</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">What We Do – OPTOBHARAT</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-4 text-muted-foreground px-4 md:px-6">
            <p className="font-semibold text-lg text-center text-foreground">
              Vision means opportunity, empowerment, and dignity – especially for students, women, and underserved communities.
            </p>
            <p>
              OPTOBHARAT is a volunteer-led community of optometry students from across India. Our members dedicate their time, energy, and skills to promote eye health awareness, conduct community outreach programs, organize educational webinars, and build bridges between students and global experts.
            </p>
            <p>
              We are proud to say that our members are self-driven changemakers—many of whom contribute while pursuing their education, managing responsibilities, and even funding their own initiatives. That’s what makes OPTOBHARAT truly special.
            </p>
            <p>
              Our volunteers include optometry students, educators, healthcare supporters, and passionate individuals from diverse backgrounds. Together, we organize awareness campaigns, vision screenings, leadership training, and collaborative events—both online and on-ground—across various zones in India.
            </p>
            <p className="font-semibold text-foreground">Our goal is simple: To build India’s most vibrant optometry student community, committed to excellence, compassion, and innovation in eye care.</p>
          </CardContent>
        </Card>
      </section>

      {/* JOIN THE COMMUNITY Section */}
      <section id="join-community">
        <Card className="shadow-lg bg-primary/5">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center text-primary">JOIN THE COMMUNITY</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-6 px-4 md:px-6">
            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-3">Why Join OPTOBHARAT?</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Connect with passionate optometry students across India.</li>
                <li>Gain access to educational resources and expert insights.</li>
                <li>Stay updated on the latest trends, career opportunities, and advancements in eye care.</li>
                <li>Participate in webinars and events featuring national and international experts.</li>
                <li>Engage in discussions, exclusive community events, free eye health camp as a volunteer and hands-on workshops.</li>
                <li>Network with top professionals, Entrepreneurs and mentors in the field.</li>
              </ul>
            </div>
            <div className="text-center mt-6">
                <Button asChild size="lg">
                    <Link href="/membership#how-to-join">
                        Become a Member <Users className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
             <p className="text-center text-muted-foreground mt-4">
              Follow us on our social platforms to stay connected! (Links in footer)
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
