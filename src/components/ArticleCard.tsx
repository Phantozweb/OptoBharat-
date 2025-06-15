import Image from 'next/image';
import Link from 'next/link';
import type { Article, Category } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, CalendarDays, UserCircle } from 'lucide-react';
import { getCategoryBySlug } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getCategoryBySlug(article.categorySlug);
  const publicationDate = new Date(article.datePublished).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card">
      <CardHeader className="p-0">
        <Link href={article.originalUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read more about ${article.title}`}>
          <div className="relative w-full h-48">
            <Image
              src={article.imageUrl}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={article.imageHint || 'news article'}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        {category && (
          <Link href={`/category/${category.slug}`} legacyBehavior>
            <Badge variant="secondary" className="mb-2 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
              {category.icon && <category.icon className="mr-1.5 h-4 w-4" />}
              {category.name}
            </Badge>
          </Link>
        )}
        <CardTitle className="text-xl font-headline mb-2 leading-tight">
          <Link href={article.originalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {article.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
        
        <div className="text-xs text-muted-foreground space-y-1">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            <span>{publicationDate}</span>
          </div>
          {article.author && (
            <div className="flex items-center">
              <UserCircle className="mr-1.5 h-3.5 w-3.5" />
              <span>{article.author}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={article.originalUrl} target="_blank" rel="noopener noreferrer">
            Read Original <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
