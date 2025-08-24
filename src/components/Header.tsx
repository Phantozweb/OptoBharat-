
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, HomeIcon, Users, UserPlus, MessageSquare, Info, Mail, BookOpen, ChevronDown, Handshake, CalendarDays, Book, BookMarked } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';


const aboutSubLinks = [
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/governing-body', label: 'Governing Body', icon: Users },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

const communitySubLinks = [
    { href: '/membership', label: 'Membership', icon: UserPlus },
    { href: '/forum', label: 'Forum', icon: MessageSquare },
    { href: '/alliances', label: 'Alliances', icon: Handshake },
];

const learningSubLinks = [
    { href: '/blogs', label: 'Blogs & Learning', icon: Book },
    { href: '/events', label: 'Events & Webinars', icon: CalendarDays },
    { href: '/courses', label: 'Courses & Certifications', icon: BookMarked },
    { href: '/practice-guide', label: 'Practice Guide', icon: BookOpen },
];


const allMobileNavLinks = [
    { href: '/', label: 'Home', icon: HomeIcon },
    ...aboutSubLinks,
    ...communitySubLinks,
    ...learningSubLinks
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

  const NavDropdown = ({ title, links }: { title: string, links: {href: string, label: string, icon: React.ElementType}[] }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary data-[state=open]:text-primary">
                    {title}
                    <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {links.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                        <Link href={link.href} className="flex items-center gap-2">
                            {link.icon && <link.icon className="h-4 w-4" />}
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
  };


  return (
    <header className="w-full border-b border-border/40 bg-background/95 sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink href="/" label="Home" />
          <NavDropdown title="About" links={aboutSubLinks} />
          <NavDropdown title="Community Hub" links={communitySubLinks} />
          <NavDropdown title="Learning Hub" links={learningSubLinks} />
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
                        key={link.href + link.label}
                        variant="ghost" 
                        asChild 
                        className={cn("text-foreground hover:text-primary transition-colors w-full justify-start text-base", { "bg-muted text-primary": pathname === link.href})}
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
