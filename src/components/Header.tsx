"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, HomeIcon, Users, UserPlus, MessageSquare, NewspaperIcon, Info, Mail, Gavel, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const navLinks = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/governing-body', label: 'Governing Body', icon: Users },
  { href: '/membership', label: 'Membership', icon: UserPlus },
  { 
    href: '/forum', 
    label: 'Optobharat Forum', 
    icon: MessageSquare,
    submenu: [
      { href: '/forum#community-guidelines', label: 'Community Guidelines', icon: Gavel },
    ]
  },
  { href: '/blogs-events', label: 'Blogs & Events', icon: NewspaperIcon },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-border/40 bg-background/95 sticky top-0 z-40">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center space-x-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0 pt-10 bg-background">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <nav className="flex flex-col space-y-2 p-6 pt-0">
                  {navLinks.map((link) => (
                    link.submenu ? (
                      <Accordion type="single" collapsible className="w-full" key={link.label}>
                        <AccordionItem value="item-1" className="border-b-0">
                          <AccordionTrigger className="w-full justify-start py-2 font-medium text-base text-foreground hover:text-primary transition-colors hover:no-underline [&[data-state=open]>svg]:rotate-180">
                             <Button variant="ghost" className="p-0 text-base" asChild>
                               <Link href={link.href} onClick={(e) => {
                                 // Allow navigation but prevent accordion trigger from being blocked
                                 if (e.target === e.currentTarget) {
                                     setIsMobileMenuOpen(false);
                                 }
                               }}>
                                 {link.icon && <link.icon className="mr-2 h-5 w-5" />}
                                 {link.label}
                               </Link>
                             </Button>
                          </AccordionTrigger>
                          <AccordionContent className="pb-0 pl-4">
                            <nav className="flex flex-col space-y-2 pt-2">
                              {link.submenu.map(sublink => (
                                <Button 
                                  key={sublink.label} 
                                  variant="ghost" 
                                  asChild 
                                  className="text-foreground hover:text-primary transition-colors w-full justify-start text-base"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <Link href={sublink.href}>
                                    {sublink.icon && <sublink.icon className="mr-2 h-5 w-5" />}
                                    {sublink.label}
                                  </Link>
                                </Button>
                              ))}
                            </nav>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Button 
                        key={link.label} 
                        variant="ghost" 
                        asChild 
                        className="text-foreground hover:text-primary transition-colors w-full justify-start text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href={link.href}>
                          {link.icon && <link.icon className="mr-2 h-5 w-5" />}
                          {link.label}
                        </Link>
                      </Button>
                    )
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
