import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Shield, Users, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  const features = [
    {
      icon: Zap,
      title: 'Quick Start',
      description: 'Get up and running with URI Social SDK in minutes',
      href: '/docs/quickstart',
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      href: '/docs/api',
    },
    {
      icon: Shield,
      title: 'Authentication',
      description: 'Secure your app with OAuth 2.0 authentication',
      href: '/docs/authentication',
    },
    {
      icon: BookOpen,
      title: 'Examples',
      description: 'Real-world code examples in multiple languages',
      href: '/docs/examples',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-12">
        <Badge className="mb-4" style={{ backgroundColor: '#CD1B78' }}>
          Documentation
        </Badge>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to URI Social SDK
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          Build powerful social media integrations with ease. Our SDK provides a unified API to
          connect with Instagram, Twitter, Facebook, LinkedIn, and more.
        </p>
        <div className="flex items-center gap-4">
          <Button asChild size="lg" style={{ backgroundColor: '#CD1B78', color: 'white' }}>
            <Link href="/docs/quickstart">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/docs/api">
              API Reference
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link key={feature.href} href={feature.href}>
              <Card className="h-full hover:border-pink-300 hover:shadow-md transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: '#CD1B7820' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#CD1B78' }} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* What's New */}
      <Card className="border-pink-200 bg-pink-50">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-pink-600" />
            <CardTitle>What's New</CardTitle>
          </div>
          <CardDescription className="text-gray-700">
            Check out the latest features and improvements in v2.1.0
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">•</span>
              <span className="text-gray-700">Added support for Instagram Reels API</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">•</span>
              <span className="text-gray-700">Improved rate limiting with automatic retry</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">•</span>
              <span className="text-gray-700">New webhook event types for real-time updates</span>
            </li>
          </ul>
          <Button asChild variant="outline" className="mt-4" size="sm">
            <Link href="/docs/changelog">
              View Full Changelog <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="mt-12 pt-12 border-t">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Installation Guide', href: '/docs/installation' },
            { title: 'Authentication Flow', href: '/docs/authentication' },
            { title: 'Rate Limiting', href: '/docs/rate-limiting' },
            { title: 'Error Handling', href: '/docs/errors' },
            { title: 'Webhooks Setup', href: '/docs/api/webhooks' },
            { title: 'Best Practices', href: '/docs/best-practices' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all group"
            >
              <span className="text-gray-700 group-hover:text-pink-700 font-medium">
                {link.title}
              </span>
              <ArrowRight className="inline-block ml-2 h-4 w-4 text-gray-400 group-hover:text-pink-600 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Card className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to build?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Sign up now and get instant access to your API keys. Start integrating social media
            features into your application today.
          </p>
          <Button asChild size="lg" style={{ backgroundColor: '#CD1B78', color: 'white' }}>
            <Link href="/signup">
              Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
