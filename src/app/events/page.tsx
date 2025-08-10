
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { events } from '@/lib/events-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events & Webinars - OPTOBHARAT',
  description: 'Explore past and upcoming events, webinars, and workshops hosted by OPTOBHARAT. Join us for continuous learning and professional growth in the field of optometry.',
  keywords: ['OPTOBHARAT events', 'optometry webinars', 'eye care workshops', 'optometry conferences India', 'student events'],
};

export default function EventsPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <CalendarDays className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">
          Events & Webinars
        </h1>
        <p className="text-lg text-muted-foreground">OPTOBHARAT</p>
      </section>

      <section id="upcoming-events">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              We are busy planning our next event. Stay tuned for announcements!
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="past-events">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">Past Events</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.slug} className="flex flex-col bg-primary/5 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                     <event.Icon className="h-10 w-10 text-primary flex-shrink-0" />
                     <div>
                        <CardTitle className="text-xl font-headline text-primary">{event.title}</CardTitle>
                        <CardDescription>{event.subtitle}</CardDescription>
                     </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">
                    Conducted on: {event.date}
                  </p>
                  <Button asChild variant="outline">
                    <Link href={`/events/${event.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
