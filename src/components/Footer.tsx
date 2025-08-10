
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';    

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M16.6,14.2c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.6,0.8-0.8,0.9c-0.1,0.2-0.3,0.2-0.5,0.1 c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.2,0.2-0.4 c0.1-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.6-1.5-0.8-2c-0.2-0.5-0.4-0.5-0.6-0.5c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0.1-0.8,0.4 c-0.3,0.3-1.1,1.1-1.1,2.6c0,1.5,1.1,3.1,1.3,3.3c0.2,0.2,2.2,3.4,5.4,4.7c0.7,0.3,1.3,0.5,1.7,0.6c0.7,0.2,1.3,0.2,1.8,0.1 c0.5-0.1,1.5-0.6,1.7-1.2c0.2-0.6,0.2-1.1,0.2-1.2C17.2,14.7,16.9,14.6,16.6,14.2z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10 c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20.5c-4.7,0-8.5-3.8-8.5-8.5c0-2.3,0.9-4.4,2.5-6l-1.6,4.8l4.9-1.6c1.6,1.4,4,2.3,6.2,2.3 c4.7,0,8.5-3.8,8.5-8.5C20.5,7.8,16.7,4,12,4c-1.1,0-2.2,0.2-3.2,0.6L10,5.7l-1-0.3c0,0,0,0,0,0c0,0-0.1,0-0.1,0L8.7,5.1C7.1,6.3,6,8,6,10 c0,3.3,2.7,6,6,6s6-2.7,6-6c0-0.7-0.1-1.4-0.4-2l-0.8,0.4l-0.3-0.8l0.4-0.2C17.7,6.8,17.5,6,17.5,6C15.8,4.8,14,4,12,4 c-4.7,0-8.5,3.8-8.5,8.5c0,4.7,3.8,8.5,8.5,8.5c2.3,0,4.4-0.9,6-2.5l1.6-4.8l-4.9,1.6C13.6,18.1,12.8,18.5,12,18.5 c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.5,2-4.8l-1.2-3.7c3.3-2,7.5-1,9.5,2.3c2,3.3,1,7.5-2.3,9.5C15.5,19.6,13.8,20.5,12,20.5z" />
    </svg>
);

export function Footer() {
  const socialLinks = [
    { name: 'X', href: 'https://x.com/optobharat?t=u6gxL49iiIYR5lVaz3784A&s=09', icon: Twitter },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/optobharat/', icon: Linkedin },
    { name: 'Facebook', href: 'https://www.facebook.com/share/15SA2emDi3/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/optobharat?igsh=MWxpMWxjcHhyZ2U2Nw==', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@optobharat?si=nM1pCgKaM_fXzDXE', icon: Youtube },
    { name: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029Vb5XGSX1t90TXG5ws60E', icon: WhatsAppIcon },
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
