'use client';

import { DeveloperLayout } from '@/components/layout/DeveloperLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Blocks, Sparkles, ArrowRight } from 'lucide-react';

export default function PlaygroundPage() {
  return (
    <DeveloperLayout>
      <div className="space-y-6">
        {/* Coming Soon Card */}
        <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 shadow-sm">
          <CardHeader className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#CD1B78' }}
              >
                <Blocks className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl mb-2">
              Interactive Playground
            </CardTitle>
            <CardDescription className="text-base">
              Test the URI Social SDK with live code examples and see results in real-time.
              Coming soon!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="sm" variant="outline" className="border-gray-300">
                <Link href="/dashboard/docs">
                  <Code className="w-4 h-4 mr-2" />
                  Read Documentation
                </Link>
              </Button>
              <Button asChild size="sm" className="text-white shadow-sm" style={{ backgroundColor: '#CD1B78' }}>
                <Link href="/dashboard/keys">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get API Keys
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Live Code Editor',
              description: 'Write and execute SDK code directly in the browser',
              icon: Code,
            },
            {
              title: 'Real-time Testing',
              description: 'See API responses and results instantly',
              icon: Sparkles,
            },
            {
              title: 'Code Examples',
              description: 'Pre-built templates to get started quickly',
              icon: Blocks,
            },
            {
              title: 'API Explorer',
              description: 'Browse and test all available endpoints',
              icon: ArrowRight,
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card key={i} className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#CD1B7820' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#CD1B78' }} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                      <CardDescription className="text-xs">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </DeveloperLayout>
  );
}
