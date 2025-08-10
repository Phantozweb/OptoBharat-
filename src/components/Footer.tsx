
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from 'lucide-react';    

export function Footer() {
  const socialLinks = [
    { name: 'X', href: 'https://x.com/optobharat?t=u6gxL49iiIYR5lVaz3784A&s=09', icon: Twitter },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/optobharat/', icon: Linkedin },
    { name: 'Facebook', href: 'https://www.facebook.com/share/15SA2emDi3/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/optobharat?igsh=MWxpMWxjcHhyZ2U2Nw==', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@optobharat?si=nM1pCgKaM_fXzDXE', icon: Youtube },
    { name: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029Vb5XGSX1t90TXG5ws60E', icon: Send },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <div className="mb-4 flex justify-center space-x-4">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  aria-label={`OPTOBHARAT on ${social.name}`}>
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} OPTOBHARAT. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          India's Largest Optometry Student Community.
        </p>
      </div>
    </footer>
  );
}
