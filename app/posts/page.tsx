'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Clock, Search, User, Filter } from 'lucide-react';
import Link from 'next/link';

// Mock data - will be replaced with database queries
const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 13 and the App Router',
    excerpt: 'Exploring the new features and improvements in Next.js 13, including the revolutionary App Router that changes how we structure our applications.',
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
    author: 'John Doe',
    publishedAt: '2024-01-10',
    category: 'Backend',
    tags: ['TypeScript', 'Node.js', 'API'],
    readTime: 12,
    slug: 'building-scalable-apis-typescript-nodejs'
  },
  {
    id: '4',
    title: 'Advanced React Patterns and Performance Optimization',
    excerpt: 'Deep dive into advanced React patterns, hooks, and optimization techniques for building high-performance applications.',
    author: 'John Doe',
    publishedAt: '2024-01-08',
    category: 'Frontend',
    tags: ['React', 'Performance', 'Hooks'],
    readTime: 15,
    slug: 'advanced-react-patterns-performance-optimization'
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox, with practical examples and use cases for each layout method.',
    author: 'John Doe',
    publishedAt: '2024-01-05',
    category: 'Frontend',
    tags: ['CSS', 'Layout', 'Grid', 'Flexbox'],
    readTime: 10,
    slug: 'css-grid-vs-flexbox-when-to-use-each'
  },
  {
    id: '6',
    title: 'Database Design Principles for Modern Applications',
    excerpt: 'Essential database design principles and best practices for building scalable and maintainable applications.',
    author: 'John Doe',
    publishedAt: '2024-01-03',
    category: 'Backend',
    tags: ['Database', 'SQL', 'Design'],
    readTime: 14,
    slug: 'database-design-principles-modern-applications'
  }
];

const categories = ['All', 'Technology', 'Design', 'Backend', 'Frontend'];

export default function PostsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredPosts = mockPosts
    .filter(post => {
      const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
      
      return searchMatch && categoryMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      } else if (sortBy === 'readTime') {
        return a.readTime - b.readTime;
      }
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          All Blog Posts
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore all articles covering web development, design principles, and technology insights.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search posts..." 
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === selectedCategory ? 'default' : 'secondary'}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="readTime">Reading Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-8">
        <p className="text-gray-600">
          Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
          <Button variant="outline" onClick={() => {
            setSearchQuery('');
            setSelectedCategory('All');
          }}>
            Clear Filters
          </Button>
        </div>
      )}

      {/* Load More Button (for pagination) */}
      {filteredPosts.length > 0 && (
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Posts
          </Button>
        </div>
      )}
    </div>
  );
}