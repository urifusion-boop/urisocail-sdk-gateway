'use client';

import { DeveloperLayout } from '@/components/layout/DeveloperLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, UserPlus, Shield, Mail, Activity } from 'lucide-react';

export default function TeamPage() {
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
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl mb-2">
              Team Management
            </CardTitle>
            <CardDescription className="text-base">
              Collaborate with your team, manage roles, and track activity.
              Coming soon!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="sm" variant="outline" className="border-gray-300">
                <Link href="/dashboard/docs">
                  <Users className="w-4 h-4 mr-2" />
                  View Documentation
                </Link>
              </Button>
              <Button asChild size="sm" className="text-white shadow-sm" style={{ backgroundColor: '#CD1B78' }}>
                <Link href="/dashboard/settings">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Manage Settings
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Team Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Team Members',
              description: 'Add, remove, and manage team members',
              icon: Users,
            },
            {
              title: 'Roles & Permissions',
              description: 'Control access levels and permissions',
              icon: Shield,
            },
            {
              title: 'Invitations',
              description: 'Send and manage team invitations',
              icon: Mail,
            },
            {
              title: 'Activity Log',
              description: 'Track team actions and changes',
              icon: Activity,
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
