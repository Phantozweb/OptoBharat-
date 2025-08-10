
import { notFound } from 'next/navigation';
import { events, type OptoEvent } from '@/lib/events-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const event = getEventFromParams(params.slug);

  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The event you are looking for does not exist.',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${event.title} - OPTOBHARAT Events`,
    description: `Details about the ${event.title} event by OPTOBHARAT, conducted on ${event.date}. ${event.subtitle}`,
    keywords: [event.title, 'OPTOBHARAT event', 'optometry webinar', 'optometry contest', event.subtitle],
    openGraph: {
      title: `${event.title} - OPTOBHARAT Events`,
      description: event.subtitle,
      // You can add specific images for each event here if available
      // images: ['/path/to/event-image.jpg', ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

function getEventFromParams(slug: string): OptoEvent | undefined {
  return events.find((event) => event.slug === slug);
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEventFromParams(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <event.Icon className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">
          {event.title}
        </h1>
        <p className="text-lg text-muted-foreground">{event.subtitle}</p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
            <div className="flex items-center text-sm text-muted-foreground justify-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Conducted on {event.date}</span>
            </div>
        </CardHeader>
        <CardContent>
            {event.content}
        </CardContent>
      </Card>
    </div>
  );
}
