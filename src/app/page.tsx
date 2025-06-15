import { ArticleCard } from '@/components/ArticleCard';
import { CategoryLinkCard }from '@/components/CategoryLinkCard';
import { articles, categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Rss } from 'lucide-react';

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3); // Show first 3 articles as featured

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-sm">
        <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6">
          Bharat<span className="text-primary">Pulse</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your Finger on India&apos;s Beat: Curated insights, news, and AI-powered summaries from across the nation.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/summarizer">
              <Lightbulb className="mr-2 h-5 w-5" /> AI Summarizer
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#categories">
              <Rss className="mr-2 h-5 w-5" /> Explore Topics
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section>
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Thematic Categories Section */}
      <section id="categories">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryLinkCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
