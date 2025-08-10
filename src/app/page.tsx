
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 924.44"
              className="absolute inset-0 m-auto h-full w-auto text-primary/10 -z-0"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M642.74,924.44c-11.45,0-22.9-2.29-34.34-6.87-10.28-4.2-19.4-10.28-26.24-18.25L421.3,710.25,283,744.59c-10.28,2.29-21.68,3.43-34.34,3.43-30.8,0-59.9-12.55-81-34.34-21.11-21.68-33.19-50.77-33.19-82.15V438.31l-114.07-56c-13.69-6.87-23.96-19.39-28.52-34.34-4.56-14.94-3.43-30.8,3.43-44.5,6.87-13.69,18.25-23.96,33.19-28.52l121.95-35.49L108.9,122.95c-7.99-9.13-11.41-21.68-9.13-33.19,2.28-11.41,9.13-20.54,19.39-26.24L229,4.56C243.55-1.52,259.88-1.52,274.43,4.56l87.86,51.34,1.43-4.56c2.28-7.99,8-14.83,16-19.39,7.99-4.56,17.11-6.87,26.24-6.87,14.94,0,28.52,5.7,38.78,16l45.63,47.91,5.7-16c3.43-7.99,10.28-13.69,19.39-16,9.13-2.29,18.25-1.14,26.24,4.56l11.41,7.99c9.13,6.87,14.83,17.11,16,27.38,1.14,10.28-2.29,20.54-9.13,28.52l-21.68,25.09,21.68,1.14c11.41,0,21.68,4.56,28.52,11.41,6.87,8,9.13,18.25,6.87,28.52l-9.13,40.95,30.8,6.87c10.28,2.28,19.39,8,26.24,16,6.87,8,10.28,18.25,10.28,28.52l-20.54,124.34,44.5,13.69c11.41,3.43,20.54,9.13,27.38,18.25,6.87,9.13,10.28,20.54,9.13,31.94l-10.28,78.73,50.19,101.55c6.87,14.94,6.87,31.94,0,46.78-6.87,14.94-19.39,26.24-35.49,29.66l-91.27,19.39-43.34,70.74c-6.87,10.28-17.11,17.11-28.52,19.39-11.41,2.29-22.81,1.14-33.19-4.56l-33.19-18.25-41.08,50.19c-8,9.13-18.25,14.83-30.8,17.11-12.55,2.28-25.09,1.14-36.5-4.57Z"/>
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
