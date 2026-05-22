'use client';

import { DocsSidebar } from './DocsSidebar';
import { LandingNavbar } from '../home/LandingNavbar';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingNavbar />
      <TooltipProvider>
        <SidebarProvider>
          <div className="flex min-h-screen w-full pt-16">
            <DocsSidebar />
            <SidebarInset>
            <header className="sticky top-16 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center gap-2 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search documentation..."
                    className="pl-8 h-9"
                  />
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button asChild size="sm" style={{ backgroundColor: '#CD1B78', color: 'white' }}>
                  <a href="/signup">Get Started</a>
                </Button>
              </div>
            </header>
            <main className="flex-1 p-6 md:p-8">
              <div className="mx-auto max-w-4xl">
                {children}
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      </TooltipProvider>
    </>
  );
}
