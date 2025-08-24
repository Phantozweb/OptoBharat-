"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, HomeIcon, Users, UserPlus, MessageSquare, NewspaperIcon, Info, Mail, ShieldCheck, BookOpen, ChevronDown, Handshake, Gem, Users2, CalendarDays, Book } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';


const mainNavLinks = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/governing-body', label: 'Governing Body', icon: Users },
  { href: '/membership', label: 'Membership', icon: UserPlus },
  { href: '/forum', label: 'Forum', icon: MessageSquare },
];

const contentSubLinks = [
    { href: '/blogs', label: 'Blogs', icon: Book },
    { href: '/events', label: 'Events', icon: CalendarDays },
];

const alliancesSubLinks = [
    { href: '/alliances#partnership', label: 'Partnership', icon: Handshake },
    { href: '/alliances#collaboration', label: 'Collaboration', icon: Users2 },
    { href: '/alliances#sponsorship', label: 'Sponsorship', icon: Gem },
];

const practiceGuideSubLinks = [
    { href: '/practice-guide#community-guidelines', label: 'Community Guidelines', icon: ShieldCheck },
    { href: '/practice-guide#resources', label: 'Resources', icon: BookOpen },
];


const moreNavLinks = [
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

const allMobileNavLinks = [
    ...mainNavLinks,
    ...contentSubLinks,
    { href: '/alliances', label: 'Alliances', icon: Handshake },
    { href: '/practice-guide', label: 'Practice Guide', icon: BookOpen },
    ...moreNavLinks
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, className }: { href: string, label: string, className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground",
          className
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full border-b border-border/40 bg-background/95 sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {mainNavLinks.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary data-[state=open]:text-primary">
                    Content & Info
                    <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {contentSubLinks.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                        <Link href={link.href} className="flex items-center gap-2">
                            {link.icon && <link.icon className="h-4 w-4" />}
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary data-[state=open]:text-primary">
                    Alliances
                    <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {alliancesSubLinks.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                        <Link href={link.href} className="flex items-center gap-2">
                            {link.icon && <link.icon className="h-4 w-4" />}
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary data-[state=open]:text-primary">
                    Practice Guide
                    <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {practiceGuideSubLinks.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                        <Link href={link.href} className="flex items-center gap-2">
                            {link.icon && <link.icon className="h-4 w-4" />}
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary data-[state=open]:text-primary">
                More
                <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {moreNavLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                   <Link href={link.href} className="flex items-center gap-2">
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                   </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
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
                  {allMobileNavLinks.map((link) => (
                      <Button 
                        key={link.href + link.label} // Use a more unique key for items with same href
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
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
