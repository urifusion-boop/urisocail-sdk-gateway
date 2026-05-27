'use client';

import { DeveloperLayout } from '@/components/layout/DeveloperLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers, Palette, Smartphone, Monitor } from 'lucide-react';

export default function WidgetsPage() {
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
                <Layers className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl mb-2">
              Embeddable Widgets
            </CardTitle>
            <CardDescription className="text-base">
              Pre-built UI components you can easily embed in your applications.
              Coming soon!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="sm" variant="outline" className="border-gray-300">
                <Link href="/dashboard/docs">
                  <Monitor className="w-4 h-4 mr-2" />
                  View Documentation
                </Link>
              </Button>
              <Button asChild size="sm" className="text-white shadow-sm" style={{ backgroundColor: '#CD1B78' }}>
                <Link href="/dashboard/playground">
                  <Palette className="w-4 h-4 mr-2" />
                  Try Playground
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Widget Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Social Feed Widget',
              description: 'Display social media posts in a beautiful grid',
              icon: Layers,
            },
            {
              title: 'Share Buttons',
              description: 'One-click sharing across all platforms',
              icon: Smartphone,
            },
            {
              title: 'Analytics Dashboard',
              description: 'Real-time metrics and insights widget',
              icon: Monitor,
            },
            {
              title: 'Custom Themes',
              description: 'Fully customizable to match your brand',
              icon: Palette,
            },
          ].map((widget, i) => {
            const Icon = widget.icon;
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
                      <CardTitle className="text-base">{widget.title}</CardTitle>
                      <CardDescription className="text-xs">{widget.description}</CardDescription>
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
