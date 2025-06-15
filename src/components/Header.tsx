"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';
import { SearchInput } from './SearchInput';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Newspaper, BotMessageSquare, HomeIcon } from 'lucide-react';
import { categories } from '@/lib/data'; // Import categories for nav

const navLinks = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/summarizer', label: 'AI Summarizer', icon: BotMessageSquare },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Button key={link.label} variant="ghost" asChild className="text-foreground hover:text-primary transition-colors w-full md:w-auto justify-start md:justify-center">
          <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
            <link.icon className="mr-2 h-5 w-5" />
            {link.label}
          </Link>
        </Button>
      ))}
      <div className="md:hidden border-t border-border my-2"></div>
      <h3 className="md:hidden text-sm font-semibold text-muted-foreground px-4 mt-2 mb-1">Categories</h3>
      {categories.map((category) => (
         <Button key={category.slug} variant="ghost" asChild className="text-foreground hover:text-primary transition-colors w-full md:w-auto justify-start md:justify-center">
          <Link href={`/category/${category.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
            {category.icon && <category.icon className="mr-2 h-5 w-5" />}
            {category.name}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <NavContent />
        </nav>
        <div className="flex items-center space-x-2">
          <SearchInput className="hidden sm:block w-48 lg:w-64" />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-6 pt-10 bg-background">
                <nav className="flex flex-col space-y-3">
                  <SearchInput className="sm:hidden mb-4" />
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
