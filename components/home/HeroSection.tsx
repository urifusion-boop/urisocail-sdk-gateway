import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroAnimation } from './HeroAnimation';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-white">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900">
              Social Media Management
              <span className="block mt-1" style={{ color: '#CD1B78' }}>SDK for Developers</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Integrate powerful social media features into your application. Post scheduling, multi-platform publishing, AI content generation, and analytics — all through one unified SDK.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-6 text-base font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#CD1B78' }}
              >
                <Link href="/signup" className="flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-6 text-base font-semibold rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                <Link href="/docs">
                  View Documentation
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Shield size={18} className="text-gray-700" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-gray-700">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Zap size={18} className="text-gray-700" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-gray-700">5-Minute Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Globe size={18} className="text-gray-700" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-gray-700">6+ Platforms</span>
              </div>
            </div>
          </div>

          {/* Right: Animation */}
          <div className="hidden lg:block">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
