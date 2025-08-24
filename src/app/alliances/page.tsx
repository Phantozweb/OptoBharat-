
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Users2, Gem, Mail } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alliances - OPTOBHARAT',
  description: 'Explore partnership, collaboration, and sponsorship opportunities with OPTOBHARAT. Join us in our mission to advance the field of optometry and empower the next generation of eye care professionals.',
  keywords: ['OPTOBHARAT alliances', 'optometry partnership', 'optometry collaboration', 'optometry sponsorship', 'support eye care education'],
};

export default function AlliancesPage() {
  const emailAddress = "inquiry.optobharat@gmail.com";

  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <Handshake className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Alliances
        </h1>
        <p className="text-lg text-muted-foreground">Building strong alliances for a brighter future in eye care.</p>
      </section>

      {/* Partnership Section */}
      <section id="partnership">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
              <Handshake className="mr-3 h-8 w-8 text-primary" /> Our Partners
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg text-muted-foreground">
             <p>This section is currently under construction.</p>
             <p>We are actively working on showcasing our valued partners. Please check back soon!</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-primary/5 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline text-center text-primary">Become a Partner</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We are always looking for synergistic partnerships to advance the field of optometry. If your organization shares our vision, we would love to hear from you.
            </p>
            <Button asChild size="lg">
              <Link href={`mailto:${emailAddress}?subject=Partnership Inquiry with OPTOBHARAT`}>
                <Mail className="mr-2 h-5 w-5" /> Contact for Partnership
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
                <Users2 className="mr-3 h-8 w-8 text-primary" /> Opportunities for Collaboration
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg text-muted-foreground">
            <p>This page is currently under construction.</p>
            <p>We are preparing details on how you can collaborate with us. Please check back soon!</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-primary/5 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline text-center text-primary">Collaborate With Us</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Collaboration is at the heart of innovation. If you are interested in working with our community on projects, research, or events, please reach out.
            </p>
            <Button asChild size="lg">
              <Link href={`mailto:${emailAddress}?subject=Collaboration Inquiry with OPTOBHARAT`}>
                <Mail className="mr-2 h-5 w-5" /> Contact for Collaboration
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorship">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center flex items-center justify-center">
                <Gem className="mr-3 h-8 w-8 text-primary" /> Our Sponsors
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg text-muted-foreground">
            <p>This section is currently under construction.</p>
            <p>We are preparing to feature the sponsors who make our work possible. Please check back soon!</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-primary/5 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline text-center text-primary">Become a Sponsor</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our work is made possible by the generous support of our sponsors. If you would like to help us empower the next generation of optometrists, we would be honored to have your support.
            </p>
            <Button asChild size="lg">
              <Link href={`mailto:${emailAddress}?subject=Sponsorship Inquiry with OPTOBHARAT`}>
                <Mail className="mr-2 h-5 w-5" /> Contact for Sponsorship
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}
