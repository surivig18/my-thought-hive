import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CalendarDays, Clock, Search, User } from 'lucide-react';
import Link from 'next/link';

// Mock data - will be replaced with database queries
const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 13 and the App Router',
    excerpt: 'Exploring the new features and improvements in Next.js 13, including the revolutionary App Router that changes how we structure our applications.',
    content: '',
    author: 'John Doe',
    publishedAt: '2024-01-15',
    category: 'Technology',
    tags: ['Next.js', 'React', 'Web Development'],
    readTime: 8,
    slug: 'getting-started-nextjs-13-app-router'
  },
  {
    id: '2',
    title: 'The Art of Minimalist Design in Web Development',
    excerpt: 'Understanding how minimalist principles can improve user experience and create more effective web applications.',
    content: '',
    author: 'John Doe',
    publishedAt: '2024-01-12',
    category: 'Design',
    tags: ['Design', 'UX', 'Minimalism'],
    readTime: 6,
    slug: 'art-of-minimalist-design-web-development'
  },
  {
    id: '3',
    title: 'Building Scalable APIs with TypeScript and Node.js',
    excerpt: 'Best practices for creating robust, type-safe APIs that can grow with your application needs.',
    content: '',
    author: 'John Doe',
    publishedAt: '2024-01-10',
    category: 'Backend',
    tags: ['TypeScript', 'Node.js', 'API'],
    readTime: 12,
    slug: 'building-scalable-apis-typescript-nodejs'
  }
];

const categories = ['All', 'Technology', 'Design', 'Backend', 'Frontend'];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Sharing insights on web development, design, and technology. 
            Join me on this journey of continuous learning and exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Link href="/posts">Browse All Posts</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search posts..." 
              className="pl-10 h-12"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === 'All' ? 'default' : 'secondary'}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">
                  <Link href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex items-center justify-between w-full text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
        <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
          Get notified when I publish new posts. No spam, just quality content delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            placeholder="Enter your email" 
            className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 h-12"
          />
          <Button variant="secondary" size="lg" className="px-8">
            Subscribe
          </Button>
        </div>
      </section>
    </div>
  );
}