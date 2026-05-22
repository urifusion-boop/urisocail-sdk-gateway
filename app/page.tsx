import { LandingNavbar } from '@/components/home/LandingNavbar';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickStartSection } from '@/components/home/QuickStartSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code } from 'lucide-react';

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen">
        <HeroSection />
        <QuickStartSection />
        <FeaturesSection />

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

              <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                    <span className="text-xs font-semibold text-pink-900">Developer Ready</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                    Ready to Ship Faster?
                  </h2>

                  <p className="text-base text-gray-600 mb-6">
                    Join developers building powerful social media features in minutes. Complete SDK, examples, and 24/7 support included.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/signup"
                      className="group px-6 py-3 rounded-lg text-base font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#CD1B78' }}
                    >
                      Get Started Free
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/docs"
                      className="group px-6 py-3 rounded-lg text-base font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all flex items-center justify-center gap-2 border border-gray-300"
                    >
                      View Docs
                      <Code size={18} className="group-hover:rotate-12 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <code className="text-green-400">
                      <span className="text-gray-500">$</span> npm install @urisocial/sdk
                      <br />
                      <br />
                      <span className="text-purple-400">import</span> <span className="text-blue-400">{'{ URISocial }'}</span> <span className="text-purple-400">from</span> <span className="text-yellow-300">'@urisocial/sdk'</span>
                      <br />
                      <br />
                      <span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-300">URISocial</span>()
                      <br />
                      <span className="text-purple-400">await</span> client.<span className="text-yellow-300">posts</span>.<span className="text-green-400">create</span>()
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-gray-900 py-8 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/urilogo-nobg.png"
                  alt="URI Social SDK"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <div className="text-left">
                  <h3 className="text-sm font-bold text-white">URI Social SDK</h3>
                  <p className="text-xs text-gray-400">Developer Tools</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link href="/docs" className="text-xs text-gray-400 hover:text-white transition-colors">Docs</Link>
                <Link href="/dashboard/api" className="text-xs text-gray-400 hover:text-white transition-colors">API</Link>
                <Link href="/dashboard/examples" className="text-xs text-gray-400 hover:text-white transition-colors">Examples</Link>
                <a href="https://urisocial.com" className="text-xs text-gray-400 hover:text-white transition-colors">About</a>
                <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">Terms</Link>
              </div>

              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} URI Social
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
