import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, BookOpen, Zap } from 'lucide-react';
import Link from 'next/link';

export default function APIReferencePage() {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/auth/signup',
      description: 'Create a new developer account',
      category: 'Authentication',
    },
    {
      method: 'POST',
      path: '/api/v1/auth/login',
      description: 'Authenticate and receive access tokens',
      category: 'Authentication',
    },
    {
      method: 'GET',
      path: '/api/v1/posts',
      description: 'Retrieve social media posts across platforms',
      category: 'Social Posts',
    },
    {
      method: 'POST',
      path: '/api/v1/posts',
      description: 'Create and publish posts to multiple platforms',
      category: 'Social Posts',
    },
    {
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Get analytics and insights for your posts',
      category: 'Analytics',
    },
    {
      method: 'POST',
      path: '/api/v1/webhooks',
      description: 'Register webhook endpoints for real-time events',
      category: 'Webhooks',
    },
  ];

  const methodColors: Record<string, string> = {
    GET: 'bg-green-100 text-green-700',
    POST: 'bg-blue-100 text-blue-700',
    PUT: 'bg-yellow-100 text-yellow-700',
    DELETE: 'bg-red-100 text-red-700',
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Badge className="mb-4" style={{ backgroundColor: '#CD1B78' }}>
          API Reference
        </Badge>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">API Reference</h1>
        <p className="text-xl text-gray-600 mb-6">
          Complete REST API documentation for URI Social SDK. All endpoints use JSON for requests
          and responses.
        </p>
      </div>

      {/* Base URL */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Base URL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-gray-100 font-mono">https://sdk-gateway.urisocial.com</code>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            All API requests must be made over HTTPS. Requests made over plain HTTP will fail.
          </p>
        </CardContent>
      </Card>

      {/* Authentication */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
          <CardDescription>
            Include your API key in the Authorization header
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="curl">
            <TabsList>
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="curl">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-100 font-mono text-sm">
{`curl https://sdk-gateway.urisocial.com/api/v1/posts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="javascript">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-100 font-mono text-sm">
{`const response = await fetch('https://sdk-gateway.urisocial.com/api/v1/posts', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="python">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-100 font-mono text-sm">
{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://sdk-gateway.urisocial.com/api/v1/posts', headers=headers)`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Endpoints */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Endpoints</h2>
        <div className="space-y-4">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="hover:border-pink-300 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={methodColors[endpoint.method]}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono text-gray-700">{endpoint.path}</code>
                    </div>
                    <CardDescription className="text-base">
                      {endpoint.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-4">
                    {endpoint.category}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Rate Limiting */}
      <Card className="mb-8 border-orange-200 bg-orange-50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-600" />
            <CardTitle>Rate Limiting</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            API requests are rate limited to ensure fair usage:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Free Plan:</strong> 1,000 requests per hour</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Pro Plan:</strong> 10,000 requests per hour</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Enterprise Plan:</strong> Custom limits</span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            Rate limit information is included in response headers: <code className="text-xs bg-white px-1 py-0.5 rounded">X-RateLimit-Limit</code> and <code className="text-xs bg-white px-1 py-0.5 rounded">X-RateLimit-Remaining</code>
          </p>
        </CardContent>
      </Card>

      {/* Error Codes */}
      <Card>
        <CardHeader>
          <CardTitle>Error Codes</CardTitle>
          <CardDescription>Standard HTTP status codes are used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { code: '200', desc: 'OK - Request succeeded' },
              { code: '201', desc: 'Created - Resource created successfully' },
              { code: '400', desc: 'Bad Request - Invalid parameters' },
              { code: '401', desc: 'Unauthorized - Invalid or missing API key' },
              { code: '403', desc: 'Forbidden - Insufficient permissions' },
              { code: '404', desc: 'Not Found - Resource not found' },
              { code: '429', desc: 'Too Many Requests - Rate limit exceeded' },
              { code: '500', desc: 'Internal Server Error - Something went wrong' },
            ].map((error) => (
              <div key={error.code} className="flex items-start gap-4">
                <code className="text-sm font-mono font-bold text-gray-900 min-w-[60px]">
                  {error.code}
                </code>
                <span className="text-gray-700">{error.desc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
