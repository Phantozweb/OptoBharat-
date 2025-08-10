
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gem, Mail } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsor OPTOBHARAT',
  description: 'Support the next generation of optometrists by sponsoring OPTOBHARAT. Your contribution empowers our mission to provide education, resources, and opportunities to students across India.',
  keywords: ['sponsor OPTOBHARAT', 'optometry sponsorship', 'support eye care education', 'corporate sponsorship India', 'empower students'],
};

export default function SponsorsPage() {
  const emailAddress = "inquiry.optobharat@gmail.com";

  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <Gem className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Our Sponsors
        </h1>
        <p className="text-lg text-muted-foreground">Empowering our mission through generous support.</p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-center">Valued Sponsors</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-lg text-muted-foreground">
          <p>This page is currently under construction.</p>
          <p>We are preparing to feature the sponsors who make our work possible. Please check back soon!</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-primary/5">
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
    </div>
  );
}
