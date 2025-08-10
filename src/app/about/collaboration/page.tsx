
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users2, Mail } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collaboration with OPTOBHARAT',
  description: 'Explore collaboration opportunities with OPTOBHARAT. Work with our community on innovative projects, research, and events to advance the field of optometry in India and beyond.',
  keywords: ['OPTOBHARAT collaboration', 'optometry research partnership', 'eye care innovation', 'optometry projects India', 'student community collaboration'],
};

export default function CollaborationPage() {
  const emailAddress = "inquiry.optobharat@gmail.com";

  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <Users2 className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Collaboration
        </h1>
        <p className="text-lg text-muted-foreground">Working together to innovate and advance optometry.</p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-center">Opportunities for Collaboration</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-lg text-muted-foreground">
          <p>This page is currently under construction.</p>
          <p>We are preparing details on how you can collaborate with us. Please check back soon!</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-primary/5">
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
    </div>
  );
}
