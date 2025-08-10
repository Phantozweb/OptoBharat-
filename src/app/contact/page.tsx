
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Users, HelpCircle, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const faqs = [
    {
      id: "faq1",
      question: "Q1. Who can join OPTOBHARAT?",
      answer: "Anyone interested in optometry—students, professionals, and educators.",
    },
    {
      id: "faq2",
      question: "Q2. Are the webinars free?",
      answer: "Yes! Most webinars are free. Future paid courses will offer advanced learning.",
    },
    {
      id: "faq3",
      question: "Q3. How can I contribute?",
      answer: "You can write blog articles, conduct webinars, or mentor students.",
    },
  ];

  const emailAddress = "inquiry.optobharat@gmail.com";

  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <MessageCircle className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">
          CONTACT US
        </h1>
        <p className="text-lg text-muted-foreground">OPTOBHARAT</p>
      </section>

      <section id="contact-information">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline text-center flex items-center justify-center">
              <Mail className="mr-3 h-7 w-7 text-primary" /> Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-4 md:px-6">
            <p className="text-muted-foreground text-center">
              Have questions or feedback? We’d love to hear from you! Connect with us via email at{' '}
              <Link href={`mailto:${emailAddress}`} className="text-primary hover:underline">
                {emailAddress}
              </Link>
              . Let’s build the future of optometry together!
            </p>

            <div className="text-center">
              <Button asChild>
                <Link href={`mailto:${emailAddress}`}>
                  <Send className="mr-2 h-5 w-5" /> Contact us by Email
                </Link>
              </Button>
            </div>

            <div className="space-y-4 pt-6 border-t border-border mt-6">
              <h3 className="text-xl font-semibold font-headline text-center text-foreground">Or Send us a Message (Direct Email Recommended)</h3>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Your Email address:</Label>
                <Input type="email" id="contact-email" placeholder="your.email@example.com" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-subject">The subject of your message:</Label>
                <Input type="text" id="contact-subject" placeholder="Subject" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Your message:</Label>
                <Textarea id="contact-message" placeholder="Your message here..." rows={5} disabled />
              </div>
              <div className="text-center">
                <Button disabled>Send Message (Form Inactive)</Button>
              </div>
               <p className="text-xs text-muted-foreground text-center pt-2">
                Note: The form above is a visual placeholder. For a faster response, please use the &quot;Contact us by Email&quot; button above.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="collaboration">
        <Card className="shadow-lg bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline text-center text-primary flex items-center justify-center">
              <Users className="mr-3 h-7 w-7" /> Collaboration & Partnerships
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 text-center">
            <p className="text-muted-foreground mb-4">
              Interested in partnering with OPTOBHARAT? Email us to discuss collaboration opportunities.
            </p>
            <Button asChild>
              <Link href={`mailto:${emailAddress}?subject=Collaboration Inquiry with OPTOBHARAT`}>
                <Send className="mr-2 h-5 w-5" /> Email for Collaboration
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section id="faqs">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline text-center flex items-center justify-center">
              <HelpCircle className="mr-3 h-7 w-7 text-primary" /> FAQs (Frequently Asked Questions)
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            {faqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem value={faq.id} key={faq.id}>
                    <AccordionTrigger className="text-left hover:no-underline text-base font-semibold text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-muted-foreground text-center">No FAQs available at the moment.</p>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-6">
        <Button asChild size="lg">
          <Link href={`mailto:${emailAddress}?subject=Inquiry from OPTOBHARAT Website`}>
             <Mail className="mr-2 h-5 w-5" /> Contact Us Now
          </Link>
        </Button>
      </section>
    </div>
  );
}
