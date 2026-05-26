'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface Developer {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  company_name?: string;
}

interface AuthContextType {
  developer: Developer | null;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
  refreshProfile: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [developer, setDeveloper] = useState<Developer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on mount by fetching profile (uses cookies)
    fetchDeveloperProfile();
  }, []);

  const fetchDeveloperProfile = async (token?: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://sdk-gateway.urisocial.com'}/api/v1/auth/me`, {
        credentials: 'include', // Use cookies for auth
      });

      if (response.ok) {
        const data = await response.json();
        setDeveloper(data);
      } else {
        // Token invalid, clear storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
    } catch (error) {
      console.error('Failed to fetch developer profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = () => {
    // Cookies are already set by the server, just fetch the profile
    fetchDeveloperProfile();
  };

  const logout = async () => {
    try {
      // Call backend logout to clear cookies
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://sdk-gateway.urisocial.com'}/api/v1/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
    // Clear local state
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setDeveloper(null);
    router.push('/login');
  };

  const refreshProfile = () => {
    fetchDeveloperProfile();
  };

  return (
    <AuthContext.Provider value={{ developer, isLoading, login, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
