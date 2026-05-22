'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Code,
  FileText,
  Sparkles,
  Home,
  Blocks,
  Zap,
  Shield,
  Users,
  Terminal,
  GitBranch,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';

interface NavSubItem {
  title: string;
  href: string;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  items?: NavSubItem[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        icon: Home,
      },
      {
        title: 'Quick Start',
        href: '/docs/quickstart',
        icon: Zap,
      },
      {
        title: 'Installation',
        href: '/docs/installation',
        icon: Terminal,
      },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      {
        title: 'Authentication',
        href: '/docs/authentication',
        icon: Shield,
      },
      {
        title: 'API Keys',
        href: '/docs/api-keys',
        icon: Code,
      },
      {
        title: 'Rate Limiting',
        href: '/docs/rate-limiting',
        icon: Blocks,
      },
    ],
  },
  {
    title: 'API Reference',
    items: [
      {
        title: 'Overview',
        href: '/docs/api',
        icon: BookOpen,
        items: [
          { title: 'Authentication API', href: '/docs/api/auth' },
          { title: 'Social Posts API', href: '/docs/api/posts' },
          { title: 'Analytics API', href: '/docs/api/analytics' },
          { title: 'Webhooks API', href: '/docs/api/webhooks' },
        ],
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Examples',
        href: '/docs/examples',
        icon: FileText,
        items: [
          { title: 'React Example', href: '/docs/examples/react' },
          { title: 'Node.js Example', href: '/docs/examples/nodejs' },
          { title: 'Python Example', href: '/docs/examples/python' },
        ],
      },
      {
        title: 'Changelog',
        href: '/docs/changelog',
        icon: Sparkles,
        badge: 'New',
      },
      {
        title: 'Community',
        href: '/docs/community',
        icon: Users,
      },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/docs" className="flex items-center gap-2">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground"
                  style={{ backgroundColor: '#CD1B78' }}
                >
                  <BookOpen className="size-4 text-white" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold" style={{ color: '#CD1B78' }}>URI Social</span>
                  <span className="text-xs text-muted-foreground">Documentation</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                        <Link href={item.href}>
                          <Icon />
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="ml-auto px-1.5 py-0.5 text-xs font-semibold rounded-md bg-pink-100 text-pink-700">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                      {item.items && item.items.length > 0 && (
                        <SidebarMenuSub>
                          {item.items.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <SidebarMenuSubItem key={subItem.href}>
                                <SidebarMenuSubButton asChild isActive={isSubActive}>
                                  <Link href={subItem.href}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/signup" className="bg-pink-50 hover:bg-pink-100">
                <GitBranch />
                <span>Get Started Free</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
