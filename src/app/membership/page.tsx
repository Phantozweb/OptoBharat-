
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, ShieldCheck } from 'lucide-react';

export default function MembershipPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <UserPlus className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          MEMBERSHIP <span className="text-primary">OPTOBHARAT</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join India&apos;s largest optometry student community and unlock a world of opportunities.
        </p>
      </section>

      <section id="benefits">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">BENEFITS OF OPTOBHARAT MEMBERSHIP</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-4 text-muted-foreground px-4 md:px-6">
            <p>
              By joining OPTOBHARAT, you gain access to an exclusive community of optometry students across India, dedicated to learning, collaboration, and professional growth. Enjoy access to educational resources, networking opportunities, career guidance, and mentorship from experienced professionals. Connect with peers, mentors, and industry leaders to strengthen your academic foundation and prepare for a successful career in eye care. As a member, you’ll also get early access to exclusive webinars, workshops, and career-enhancing opportunities designed to empower the next generation of optometrists.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="how-to-join">
        <Card className="shadow-lg bg-primary/5">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center text-primary">How to Join</CardTitle>
          </CardHeader>
          <CardContent className="text-base space-y-6 text-muted-foreground px-4 md:px-6">
            <p className="text-center">
              Ready to be part of India’s first and largest optometry student community?
            </p>
            <p className="text-center">
              Simply fill out our membership form to unlock these exclusive benefits and connect with like-minded optometry students passionate about shaping the future of eye care.
            </p>
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="#membership-form"> {/* Placeholder link */}
                  Fill Membership Form
                </Link>
              </Button>
            </div>
            <p className="text-center font-semibold text-foreground">
              First, you need to fill out the membership form to become eligible to join the WhatsApp community group. Otherwise, we won&apos;t be able to grant you access.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="privacy-policy">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-center space-x-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-headline text-center">Privacy & Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-base text-muted-foreground text-center px-4 md:px-6">
            <p>
              At OPTOBHARAT, we prioritize your privacy. We are committed to safeguarding your personal information and ensuring a secure experience within our community. We do not send spam, nor do we sell or share user data with third parties. Your trust is our responsibility.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
