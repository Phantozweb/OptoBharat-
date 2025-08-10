
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PartnershipPage() {
  const emailAddress = "inquiry.optobharat@gmail.com";

  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <Handshake className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Our Partners
        </h1>
        <p className="text-lg text-muted-foreground">Building strong alliances for a brighter future in eye care.</p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-center">Valued Partners</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-lg text-muted-foreground">
          <p>This page is currently under construction.</p>
          <p>We are actively working on showcasing our valued partners. Please check back soon!</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-primary/5">
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
    </div>
  );
}
