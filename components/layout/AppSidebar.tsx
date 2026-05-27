'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Code,
  Blocks,
  Layers,
  Settings,
  Key,
  BarChart3,
  Sparkles,
  FileText,
  Home,
  Users,
  ChevronDown,
  LifeBuoy,
  CreditCard,
  Shield,
  LogOut,
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
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { logout as logoutAction } from '@/lib/store/auth-slice';
import { useRouter } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Dashboard',
    items: [
      { title: 'Overview', href: '/dashboard', icon: Home },
    ],
  },
  {
    title: 'Developer Tools',
    items: [
      { title: 'Playground', href: '/dashboard/playground', icon: Blocks },
      { title: 'Widgets', href: '/dashboard/widgets', icon: Layers },
    ],
  },
  {
    title: 'Account & Settings',
    items: [
      { title: 'API Keys', href: '/dashboard/keys', icon: Key },
      { title: 'Usage & Billing', href: '/dashboard/usage', icon: BarChart3 },
      { title: 'Team', href: '/dashboard/team', icon: Users },
      { title: 'Security', href: '/dashboard/security', icon: Shield },
      { title: 'Settings', href: '/dashboard/settings', icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { developer } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://sdk-gateway.urisocial.com'}/api/v1/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
    dispatch(logoutAction());
    router.push('/login');
  };

  const getInitials = () => {
    if (developer?.first_name && developer?.last_name) {
      return `${developer.first_name[0]}${developer.last_name[0]}`.toUpperCase();
    }
    return developer?.email?.[0]?.toUpperCase() || 'U';
  };

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="border-r border-gray-200 bg-white">
      <SidebarHeader className="border-b border-gray-100 pb-3 pt-2 bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
              <Link href="/dashboard" className="flex items-center gap-2.5 px-2">
                <Image
                  src="/images/urilogo-nobg.png"
                  alt="URI Social"
                  width={36}
                  height={36}
                  className="h-9 w-auto flex-shrink-0"
                />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="text-sm font-bold text-gray-900">
                    URI Social
                  </span>
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                    Dashboard
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3 bg-white">
        {navigation.map((section, index) => (
          <SidebarGroup key={section.title} className={index > 0 ? 'mt-5' : ''}>
            <SidebarGroupLabel className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.title}
                        className={`
                          relative px-3 py-2 rounded-lg transition-all duration-200
                          ${isActive
                            ? 'bg-pink-50 text-[#CD1B78] font-semibold shadow-sm border border-pink-100'
                            : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                          }
                        `}
                      >
                        <Link href={item.href} className="flex items-center gap-2.5 w-full">
                          <Icon className={`size-4 flex-shrink-0 ${isActive ? 'text-[#CD1B78]' : 'text-gray-500'}`} />
                          <span className="text-sm flex-1">{item.title}</span>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full text-white shadow-sm flex-shrink-0" style={{ backgroundColor: '#CD1B78' }}>
                              {item.badge}
                            </span>
                          )}
                          {isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full" style={{ backgroundColor: '#CD1B78' }} />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100 pt-3 pb-3 px-2 bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-pink-50 hover:bg-gray-50 transition-colors rounded-lg h-auto py-2"
                >
                  <div
                    className="flex aspect-square size-8 items-center justify-center rounded-lg text-white font-bold text-xs shadow-sm flex-shrink-0"
                    style={{ backgroundColor: '#CD1B78' }}
                  >
                    {getInitials()}
                  </div>
                  <div className="grid flex-1 text-left leading-tight overflow-hidden min-w-0">
                    <span className="truncate font-semibold text-gray-900 text-xs">
                      {developer?.first_name || developer?.email?.split('@')[0] || 'User'}
                    </span>
                    <span className="truncate text-[10px] text-gray-500">
                      {developer?.email?.substring(0, 12) || 'user@...'}
                      {developer?.email && developer.email.length > 12 ? '...' : ''}
                    </span>
                  </div>
                  <ChevronDown className="ml-auto size-3.5 text-gray-400 flex-shrink-0" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-60 bg-white border border-gray-200 shadow-xl rounded-xl p-2"
                side="right"
                align="end"
                sideOffset={8}
              >
                <DropdownMenuLabel className="px-3 py-2 bg-gray-50 rounded-lg mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex aspect-square size-9 items-center justify-center rounded-lg text-white font-bold text-xs shadow-sm flex-shrink-0"
                      style={{ backgroundColor: '#CD1B78' }}
                    >
                      {getInitials()}
                    </div>
                    <div className="grid flex-1 text-left leading-tight overflow-hidden min-w-0">
                      <span className="font-semibold text-gray-900 text-xs truncate">
                        {developer?.first_name && developer?.last_name
                          ? `${developer.first_name} ${developer.last_name}`
                          : developer?.email?.split('@')[0] || 'Developer'}
                      </span>
                      <span className="text-[10px] text-gray-500 truncate">
                        {developer?.email || 'developer@example.com'}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1.5 bg-gray-200" />
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <Link href="/dashboard/billing" className="flex items-center px-3 py-2 text-gray-700 font-medium text-xs">
                    <CreditCard className="mr-2.5 size-3.5 flex-shrink-0" />
                    Billing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <Link href="/dashboard/settings" className="flex items-center px-3 py-2 text-gray-700 font-medium text-xs">
                    <Settings className="mr-2.5 size-3.5 flex-shrink-0" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1.5 bg-gray-200" />
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <a href="https://support.urisocial.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-gray-700 font-medium text-xs">
                    <LifeBuoy className="mr-2.5 size-3.5 flex-shrink-0" />
                    Support
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1.5 bg-gray-200" />
                <DropdownMenuItem
                  onClick={logout}
                  className="rounded-lg cursor-pointer hover:bg-red-50 transition-colors text-red-600 font-medium"
                >
                  <div className="flex items-center px-3 py-2 w-full text-xs">
                    <LogOut className="mr-2.5 size-3.5 flex-shrink-0" />
                    Log out
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
