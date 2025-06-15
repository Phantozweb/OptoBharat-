
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from 'lucide-react';    

export function Footer() {
  const socialLinks = [
    { name: 'X', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Telegram', href: '#', icon: Send },
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
          India&apos;s Largest Optometry Student Community.
        </p>
      </div>
    </footer>
  );
}
