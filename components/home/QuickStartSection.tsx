'use client';

import Link from 'next/link';
import { ArrowRight, Terminal, Code2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageTabs } from '@/components/ui/custom/LanguageTabs';

export function QuickStartSection() {
  const steps = [
    {
      number: '01',
      icon: Terminal,
      title: 'Install',
      description: 'Add the SDK to your project',
    },
    {
      number: '02',
      icon: Code2,
      title: 'Initialize',
      description: 'Configure with your API key',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Deploy',
      description: 'Start posting across platforms',
    },
  ];

  const examples = [
    {
      language: 'npm',
      label: 'npm',
      code: `# Install the SDK
npm install @urisocial/sdk`,
    },
    {
      language: 'yarn',
      label: 'yarn',
      code: `# Install the SDK
yarn add @urisocial/sdk`,
    },
    {
      language: 'pnpm',
      label: 'pnpm',
      code: `# Install the SDK
pnpm add @urisocial/sdk`,
    },
    {
      language: 'python',
      label: 'Python',
      code: `# Install the SDK
pip install urisocial-sdk`,
    },
  ];

  const codeExamples = [
    {
      language: 'typescript',
      label: 'TypeScript',
      code: `import { URISocialSDK } from '@urisocial/sdk';

// Initialize the SDK
const sdk = new URISocialSDK({
  apiKey: process.env.URISOCIAL_API_KEY,
  workspaceId: 'your-workspace-id',
});

// Create a post
const post = await sdk.posts.create({
  content: 'Hello from URI Social SDK!',
  platforms: ['instagram', 'facebook'],
  scheduleFor: new Date('2026-05-25T10:00:00Z'),
});

console.log('Post created:', post.id);`,
      filename: 'app.ts',
    },
    {
      language: 'python',
      label: 'Python',
      code: `from urisocial import URISocialSDK
from datetime import datetime
import os

# Initialize the SDK
sdk = URISocialSDK(
    api_key=os.getenv('URISOCIAL_API_KEY'),
    workspace_id='your-workspace-id'
)

# Create a post
post = sdk.posts.create(
    content='Hello from URI Social SDK!',
    platforms=['instagram', 'facebook'],
    schedule_for=datetime(2026, 5, 25, 10, 0, 0)
)

print(f'Post created: {post.id}')`,
      filename: 'app.py',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated Code Symbols Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating code symbols */}
        {[
          { symbol: '</', x: '10%', y: '20%', delay: 0, duration: 15 },
          { symbol: '{ }', x: '85%', y: '15%', delay: 2, duration: 18 },
          { symbol: '()', x: '15%', y: '70%', delay: 4, duration: 20 },
          { symbol: '=>', x: '80%', y: '75%', delay: 1, duration: 16 },
          { symbol: 'npm', x: '5%', y: '45%', delay: 3, duration: 17 },
          { symbol: 'SDK', x: '90%', y: '40%', delay: 5, duration: 19 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl font-mono font-bold text-gray-300 opacity-[0.08]"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
          >
            {item.symbol}
          </motion.div>
        ))}

        {/* Animated lines representing code flow */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" style={{ color: '#CD1B78' }}>
          <motion.path
            d="M 0 100 Q 300 150 600 100 T 1200 100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.path
            d="M 1200 400 Q 900 350 600 400 T 0 400"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              delay: 1,
            }}
          />
        </svg>

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get Started in <span style={{ color: '#CD1B78' }}>Minutes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Install the SDK and start building powerful social media features for your users.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Animated gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300"
                  style={{ backgroundColor: '#CD1B78' }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: '#CD1B7810' }}
                      >
                        <step.icon size={28} style={{ color: '#CD1B78' }} strokeWidth={2} />
                      </div>
                    </motion.div>
                    <div>
                      <div className="text-xs font-bold mb-2" style={{ color: '#CD1B78' }}>{step.number}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                  style={{ backgroundColor: '#CD1B78' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (0.1 * index) }}
                />
              </motion.div>

              {/* Animated connector arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-6 z-20"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                >
                  <ArrowRight size={24} className="text-gray-300" strokeWidth={2} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Code Examples */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Installation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#CD1B7815' }}>
                <span className="text-sm font-bold" style={{ color: '#CD1B78' }}>1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Install the Package</h3>
            </div>
            <LanguageTabs examples={examples} />
          </motion.div>

          {/* Usage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#CD1B7815' }}>
                <span className="text-sm font-bold" style={{ color: '#CD1B78' }}>2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Initialize and Use</h3>
            </div>
            <LanguageTabs examples={codeExamples} />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center pt-8"
          >
            <Link
              href="/docs/quickstart"
              className="inline-flex items-center gap-2 font-semibold text-base hover:opacity-80 transition-opacity"
              style={{ color: '#CD1B78' }}
            >
              View Full Documentation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
