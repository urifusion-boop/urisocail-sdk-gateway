import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code, Copy, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ExamplesPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Badge className="mb-4" style={{ backgroundColor: '#CD1B78' }}>
          Examples
        </Badge>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Code Examples</h1>
        <p className="text-xl text-gray-600 mb-6">
          Real-world code examples to help you integrate URI Social SDK into your application.
        </p>
      </div>

      {/* Quick Start Example */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quick Start - Post to Multiple Platforms</CardTitle>
          <CardDescription>
            Publish a post to Instagram, Twitter, and Facebook simultaneously
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="javascript">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="php">PHP</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript">
              <div className="relative">
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-100 font-mono text-sm">
{`import { URISocialSDK } from '@urisocial/sdk';

const client = new URISocialSDK({
  apiKey: process.env.URISOCIAL_API_KEY
});

async function publishPost() {
  const post = await client.posts.create({
    content: 'Hello from URI Social SDK! 🚀',
    platforms: ['instagram', 'twitter', 'facebook'],
    media: [{
      url: 'https://example.com/image.jpg',
      type: 'image'
    }]
  });

  console.log('Post published:', post.id);
  console.log('Status:', post.status);
}

publishPost();`}
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="python">
              <div className="relative">
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-100 font-mono text-sm">
{`from urisocial import URISocialSDK
import os

client = URISocialSDK(
    api_key=os.environ.get('URISOCIAL_API_KEY')
)

def publish_post():
    post = client.posts.create(
        content='Hello from URI Social SDK! 🚀',
        platforms=['instagram', 'twitter', 'facebook'],
        media=[{
            'url': 'https://example.com/image.jpg',
            'type': 'image'
        }]
    )

    print(f'Post published: {post.id}')
    print(f'Status: {post.status}')

publish_post()`}
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="php">
              <div className="relative">
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-100 font-mono text-sm">
{`<?php
require 'vendor/autoload.php';

use URISocial\\SDK\\URISocialSDK;

$client = new URISocialSDK([
    'apiKey' => getenv('URISOCIAL_API_KEY')
]);

$post = $client->posts->create([
    'content' => 'Hello from URI Social SDK! 🚀',
    'platforms' => ['instagram', 'twitter', 'facebook'],
    'media' => [[
        'url' => 'https://example.com/image.jpg',
        'type' => 'image'
    ]]
]);

echo "Post published: {$post->id}\\n";
echo "Status: {$post->status}\\n";`}
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* React Integration */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>React Integration</CardTitle>
          <CardDescription>
            Complete React component for social posting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-100 font-mono text-sm">
{`import { useState } from 'react';
import { URISocialSDK } from '@urisocial/sdk';

const client = new URISocialSDK({
  apiKey: process.env.NEXT_PUBLIC_URISOCIAL_API_KEY
});

export default function SocialPostForm() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [platforms, setPlatforms] = useState(['instagram', 'twitter']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const post = await client.posts.create({
        content,
        platforms
      });

      alert(\`Post published successfully! ID: \${post.id}\`);
      setContent('');
    } catch (error) {
      alert(\`Error: \${error.message}\`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-3 border rounded"
        rows={4}
      />

      <div className="flex gap-2">
        {['instagram', 'twitter', 'facebook'].map(platform => (
          <label key={platform} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={platforms.includes(platform)}
              onChange={(e) => {
                if (e.target.checked) {
                  setPlatforms([...platforms, platform]);
                } else {
                  setPlatforms(platforms.filter(p => p !== platform));
                }
              }}
            />
            {platform}
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={loading || !content}
        className="px-4 py-2 bg-pink-600 text-white rounded disabled:opacity-50"
      >
        {loading ? 'Publishing...' : 'Publish Post'}
      </button>
    </form>
  );
}`}
              </pre>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="absolute top-2 right-2"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* More Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Webhook Setup',
            description: 'Configure webhooks for real-time event notifications',
            href: '/docs/examples/webhooks',
          },
          {
            title: 'Analytics Dashboard',
            description: 'Build a dashboard to track post performance',
            href: '/docs/examples/analytics',
          },
          {
            title: 'Scheduled Posts',
            description: 'Schedule posts for future publishing',
            href: '/docs/examples/scheduling',
          },
          {
            title: 'Multi-Account Management',
            description: 'Manage multiple social accounts in one app',
            href: '/docs/examples/multi-account',
          },
        ].map((example) => (
          <Link key={example.href} href={example.href}>
            <Card className="h-full hover:border-pink-300 hover:shadow-md transition-all cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  {example.title}
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* GitHub Repository */}
      <Card className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Full Example Repository</h3>
              <p className="text-gray-600 mb-4">
                Check out our GitHub repository for complete, production-ready examples.
              </p>
              <Button asChild style={{ backgroundColor: '#CD1B78', color: 'white' }}>
                <a href="https://github.com/urisocial/examples" target="_blank" rel="noopener noreferrer">
                  <Code className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
