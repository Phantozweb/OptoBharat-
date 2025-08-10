
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users2 } from 'lucide-react';

export default function CollaborationPage() {
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
    </div>
  );
}
