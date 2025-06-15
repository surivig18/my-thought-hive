import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, Clock, User, ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

// Mock data - will be replaced with database queries
const mockPost = {
  id: '1',
  title: 'Getting Started with Next.js 13 and the App Router',
  excerpt: 'Exploring the new features and improvements in Next.js 13, including the revolutionary App Router that changes how we structure our applications.',
  content: `
    <p>Next.js 13 introduces a revolutionary new way to structure and build React applications with the App Router. This new approach brings significant improvements in performance, developer experience, and application architecture.</p>

    <h2>What is the App Router?</h2>
    <p>The App Router is a new paradigm in Next.js that uses React's latest features, including Server Components, Streaming, and enhanced data fetching capabilities. It represents a fundamental shift in how we think about building web applications.</p>

    <h3>Key Features</h3>
    <ul>
      <li><strong>Server Components by default:</strong> Improved performance with server-side rendering</li>
      <li><strong>Nested layouts:</strong> More flexible and intuitive layout system</li>
      <li><strong>Improved data fetching:</strong> Better caching and revalidation strategies</li>
      <li><strong>Streaming:</strong> Progressive rendering for better user experience</li>
    </ul>

    <h2>Getting Started</h2>
    <p>To start using the App Router, you'll need to create a new Next.js 13+ project or migrate your existing project. Here's how to get started:</p>

    <pre><code>npx create-next-app@latest my-app --experimental-app</code></pre>

    <p>This command creates a new Next.js project with the App Router enabled by default.</p>

    <h3>File Structure</h3>
    <p>The App Router introduces a new file structure that's more intuitive and powerful:</p>

    <pre><code>app/
├── layout.tsx    # Root layout
├── page.tsx      # Home page
├── about/
│   └── page.tsx  # About page
└── blog/
    ├── layout.tsx # Blog layout
    └── page.tsx   # Blog listing</code></pre>

    <h2>Migration Considerations</h2>
    <p>When migrating from the Pages Router to the App Router, there are several important considerations:</p>

    <ul>
      <li>Server Components are the default, which affects how you handle client-side state</li>
      <li>Data fetching patterns have changed significantly</li>
      <li>Layout composition works differently</li>
      <li>File-based routing has been enhanced with new conventions</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The App Router represents the future of Next.js development. While there's a learning curve involved in adopting these new patterns, the benefits in terms of performance, developer experience, and application architecture make it well worth the investment.</p>

    <p>Start experimenting with the App Router today and discover how it can improve your Next.js applications!</p>
  `,
  author: 'John Doe',
  publishedAt: '2024-01-15',
  category: 'Technology',
  tags: ['Next.js', 'React', 'Web Development'],
  readTime: 8,
  slug: 'getting-started-nextjs-13-app-router'
};

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // In a real app, you would fetch the post data based on the slug
  const post = mockPost;

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="hover:bg-gray-100">
          <Link href="/posts" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Posts
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary">{post.category}</Badge>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime} min read
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author and Date */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-t border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mr-4">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{post.author}</p>
              <div className="flex items-center text-sm text-gray-600">
                <CalendarDays className="h-4 w-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Comment
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Enjoyed this article?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to get notified when I publish new posts. No spam, just quality content delivered to your inbox.
          </p>
          <Button size="lg" className="px-8">
            Subscribe to Newsletter
          </Button>
        </div>

        {/* Navigation to other posts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-left">
            <p className="text-sm text-gray-500 mb-2">Previous Article</p>
            <Link href="/posts/previous-post" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              Previous Post Title Here
            </Link>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-500 mb-2">Next Article</p>
            <Link href="/posts/next-post" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              Next Post Title Here
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}