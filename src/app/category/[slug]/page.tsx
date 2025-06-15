import { ArticleCard } from '@/components/ArticleCard';
import { getArticlesByCategory, getCategoryBySlug, categories as allCategories } from '@/lib/data';
import type { Article, Category } from '@/types';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ListX } from 'lucide-react';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const category: Category | undefined = getCategoryBySlug(slug);
  const articlesInCategory: Article[] = getArticlesByCategory(slug);

  if (!category) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <p className="text-muted-foreground">
          The category you are looking for does not exist.
        </p>
        <Link href="/" className="mt-6 inline-block text-primary hover:underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <section className="text-center py-8 bg-primary/10 rounded-lg">
        {category.icon && <category.icon className="mx-auto h-16 w-16 text-primary mb-4" />}
        <h1 className="text-4xl font-bold font-headline mb-2">{category.name}</h1>
        {category.description && <p className="text-lg text-muted-foreground max-w-xl mx-auto">{category.description}</p>}
      </section>
      
      {articlesInCategory.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesInCategory.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <Alert variant="default" className="max-w-md mx-auto">
          <ListX className="h-5 w-5" />
          <AlertTitle className="font-headline">No Articles Yet</AlertTitle>
          <AlertDescription>
            There are currently no articles in the {category.name} category. Please check back later!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }
  return {
    title: `${category.name} | BharatPulse`,
    description: category.description || `Articles related to ${category.name} on BharatPulse.`,
  };
}
