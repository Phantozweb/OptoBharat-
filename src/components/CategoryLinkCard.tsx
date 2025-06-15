import Link from 'next/link';
import type { Category } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface CategoryLinkCardProps {
  category: Category;
}

export function CategoryLinkCard({ category }: CategoryLinkCardProps) {
  return (
    <Link href={`/category/${category.slug}`} className="group block">
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover:border-primary">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-headline group-hover:text-primary transition-colors">
            {category.name}
          </CardTitle>
          {category.icon && <category.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />}
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {category.description || `Explore articles related to ${category.name}.`}
          </p>
          <div className="text-sm font-medium text-primary group-hover:underline flex items-center">
            View Articles <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
