"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  initialValue?: string;
  placeholder?: string;
  className?: string;
}

export function SearchInput({ 
  initialValue = "", 
  placeholder = "Search articles...",
  className 
}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const router = useRouter();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      // For now, we don't have a dedicated search page. 
      // This could navigate to /search?q=searchTerm or filter in place if on a list page.
      // console.log("Search term:", searchTerm);
      // alert(`Search functionality for "${searchTerm}" is not fully implemented yet.`);
      // Example navigation: router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className={`relative ${className}`}>
      <Input
        type="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearchChange}
        className="pl-10 pr-4 py-2 rounded-full border-2 border-muted focus:border-primary transition-colors"
        aria-label="Search articles"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
    </form>
  );
}
