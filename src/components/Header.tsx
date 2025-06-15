
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, HomeIcon, Users, UserPlus, MessageSquare, NewspaperIcon, Info, Mail } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/governing-body', label: 'Governing Body', icon: Users },
  { href: '/membership', label: 'Membership', icon: UserPlus },
  { href: '/forum', label: 'Optobharat Forum', icon: MessageSquare },
  { href: '/blogs-events', label: 'Blogs & Events', icon: NewspaperIcon },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Button 
          key={link.label} 
          variant="ghost" 
          asChild 
          className="text-foreground hover:text-primary transition-colors w-full md:w-auto justify-start md:justify-center text-sm lg:text-base"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link href={link.href}>
            {link.icon && <link.icon className="mr-2 h-5 w-5" />}
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="w-full border-b border-border/40 bg-background/95">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <NavContent />
        </nav>
        <div className="flex items-center space-x-2">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-6 pt-10 bg-background">
                <nav className="flex flex-col space-y-2">
                  <NavContent />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
