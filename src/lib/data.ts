import type { Article, Category } from '@/types';
import { Landmark, Cpu, Palette, Briefcase, Trophy, FlaskConical, Newspaper, TrendingUp, Globe } from 'lucide-react';

export const categories: Category[] = [
  { slug: 'politics', name: 'Politics', description: 'Latest political developments and analysis.', icon: Landmark },
  { slug: 'technology', name: 'Technology', description: 'Innovations and trends in the tech world.', icon: Cpu },
  { slug: 'culture', name: 'Culture', description: 'Exploring arts, heritage, and societal trends.', icon: Palette },
  { slug: 'business', name: 'Business', description: 'Market insights, economic news, and entrepreneurship.', icon: Briefcase },
  { slug: 'sports', name: 'Sports', description: 'Updates and stories from the world of sports.', icon: Trophy },
  { slug: 'science', name: 'Science', description: 'Discoveries and advancements in science.', icon: FlaskConical },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'India\'s Digital Leap: A Decade of Transformation',
    excerpt: 'Exploring the rapid digitization across India and its impact on various sectors.',
    content: 'The last decade has witnessed an unprecedented digital transformation in India. Propelled by increased internet penetration, affordable smartphones, and government initiatives like Digital India, the nation has made significant strides. From digital payments revolutionizing commerce to e-governance making public services more accessible, the changes are palpable. This article delves into the key drivers, challenges, and future outlook of India\'s digital journey, highlighting success stories and areas needing further attention to ensure inclusive growth.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'digital india',
    categorySlug: 'technology',
    originalUrl: '#',
    datePublished: '2024-07-28T10:00:00Z',
    author: 'Tech Correspondent',
  },
  {
    id: '2',
    title: 'The Changing Landscape of Indian Politics',
    excerpt: 'An analysis of recent trends and shifts in the Indian political arena.',
    content: 'Indian politics is a dynamic and ever-evolving domain. Recent years have seen significant shifts in electoral patterns, party ideologies, and voter demographics. This piece examines the rise of regional parties, the impact of social media on political discourse, and the key policy debates shaping the nation\'s future. It also touches upon the challenges of federalism and the evolving role of youth in political engagement. Understanding these trends is crucial for anyone following the Indian political narrative.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'parliament delhi',
    categorySlug: 'politics',
    originalUrl: '#',
    datePublished: '2024-07-27T14:30:00Z',
    author: 'Political Analyst',
  },
  {
    id: '3',
    title: 'Revival of Traditional Indian Arts',
    excerpt: 'A look into the efforts to preserve and promote India\'s rich artistic heritage.',
    content: 'India, a land of diverse cultures, boasts a rich tapestry of traditional arts and crafts. However, many of these art forms face the threat of extinction due to modernization and lack of patronage. This article highlights the initiatives by artists, communities, and organizations to revive and sustain these invaluable cultural expressions. From folk music and dance to intricate handicrafts and textile traditions, the efforts to ensure their continuity for future generations are explored, emphasizing the importance of cultural preservation in a globalized world.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'indian art',
    categorySlug: 'culture',
    originalUrl: '#',
    datePublished: '2024-07-26T09:15:00Z',
    author: 'Culture Critic',
  },
  {
    id: '4',
    title: 'Start-up Ecosystem in India: Fueling Innovation',
    excerpt: 'An overview of the booming start-up culture and its contribution to the economy.',
    content: 'India has emerged as one of the world\'s largest and most vibrant start-up hubs. With a young population, a growing domestic market, and supportive government policies, the ecosystem is thriving. This feature explores the key sectors attracting investment, the challenges faced by entrepreneurs, and the impact of these start-ups on job creation and technological innovation. It also looks at the role of venture capital and incubators in nurturing new ideas and fostering a culture of risk-taking and enterprise.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'startup office',
    categorySlug: 'business',
    originalUrl: '#',
    datePublished: '2024-07-25T16:45:00Z',
    author: 'Business Reporter',
  },
  {
    id: '5',
    title: 'The Rise of Indian Athletes on the Global Stage',
    excerpt: 'Celebrating the achievements of Indian sportspersons in international arenas.',
    content: 'Indian athletes are increasingly making their mark in a diverse range of sports globally. From cricket and badminton to athletics and shooting, their performances have brought laurels to the nation. This article celebrates these achievements, examines the factors contributing to this rise, such as improved infrastructure, coaching, and sports science adoption. It also discusses the challenges that remain in broadening the sports base and creating a sustainable pipeline of talent to compete at the highest levels.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sports stadium',
    categorySlug: 'sports',
    originalUrl: '#',
    datePublished: '2024-07-24T11:00:00Z',
    author: 'Sports Journalist',
  },
   {
    id: '6',
    title: 'India\'s Space Missions: Reaching for the Stars',
    excerpt: 'A summary of India\'s ambitious space program and its recent accomplishments.',
    content: 'The Indian Space Research Organisation (ISRO) has consistently pushed the boundaries of space exploration with its cost-effective and innovative missions. From launching satellites for communication and earth observation to undertaking complex interplanetary missions like Chandrayaan and Mangalyaan, ISRO has garnered global acclaim. This article provides an overview of India\'s space program, its key achievements, and its future ambitions, including the Gaganyaan human spaceflight mission. It highlights the role of space technology in national development and scientific advancement.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'rocket launch',
    categorySlug: 'science',
    originalUrl: '#',
    datePublished: '2024-07-23T15:20:00Z',
    author: 'Science Editor',
  }
];

export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter(article => article.categorySlug === categorySlug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};
