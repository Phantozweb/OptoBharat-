
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, ExternalLink, Facebook, Instagram, Linkedin, Send, Twitter, Youtube, Users, Award, MessageSquare, NewspaperIcon, Info, Mail, Briefcase, Palette, Trophy, FlaskConical, Cpu, Landmark } from 'lucide-react';

// Placeholder for a logo image if you have one, e.g., '/optobharat-logo.png'
// For now, text logo is handled by the Header component.
// const logoUrl = 'https://placehold.co/200x100.png'; 

export default function OptobharatHomePage() {
  const socialLinks = [
    { name: 'X', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Telegram', href: '#', icon: Send },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        {/* If you have a logo image, you can uncomment and use it here */}
        {/* <Image src={logoUrl} alt="OPTOBHARAT Logo" width={150} height={75} className="mx-auto mb-4" data-ai-hint="logo optometry" /> */}
        <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6">
          OPTO<span className="text-primary">BHARAT</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          India&apos;s largest optometry student community, dedicated to uniting future optometrists across the nation and worldwide.
        </p>
        <Button asChild size="lg">
          <Link href="#join-community">
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
          <CardContent className="text-base space-y-4 text-muted-foreground">
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
          <CardContent className="text-base space-y-4 text-muted-foreground">
            <p>
              The Governing Body of OPTOBHARAT consists of dedicated leaders committed to fostering a strong and collaborative optometry student community across India. With a vision to empower future optometrists, our team works towards knowledge-sharing, professional development, and strengthening the field of eye care. Together, we shape the future of optometry in India and beyond.
            </p>
            <p className="text-center italic text-primary">Read more ...</p> {/* Placeholder for potential link */}
          </CardContent>
        </Card>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">OPTOBHARAT Vision & Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold font-headline text-primary mb-2">🌟 Vision Statement:</h3>
              <p className="pl-4 italic">&quot;To be India’s leading optometry student community, fostering innovation, inclusivity, and continuous learning by connecting students with national and global experts to shape the future of eye care.&quot;</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold font-headline text-primary mb-2">🎯 Mission Statement:</h3>
              <p className="pl-4 italic">&quot;Empowering optometry students across India to connect, learn, and collaborate in advancing eye care excellence, while building bridges with national and global experts.&quot;</p>
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
          <CardContent className="text-base space-y-4 text-muted-foreground">
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
          <CardContent className="text-base space-y-6">
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
            <div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-4 text-center">Join Our Platforms:</h3>
              <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
                {socialLinks.map((social) => (
                  <Button key={social.name} variant="outline" size="lg" asChild>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`OPTOBHARAT on ${social.name}`}>
                      <social.icon className="mr-2 h-5 w-5" /> {social.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
