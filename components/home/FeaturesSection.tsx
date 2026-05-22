'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Boxes, Globe, Sparkles, Calendar, BarChart3, Shield } from 'lucide-react';
import { FeaturePhoneDemo } from './FeaturePhoneDemo';

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-switch features every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Globe,
      title: 'Multi-Platform Publishing',
      description: 'Post to 6+ platforms simultaneously with a single API call. Instagram, Facebook, LinkedIn, Twitter, and more.',
      demo: 'platforms',
    },
    {
      icon: Sparkles,
      title: 'AI Content Generation',
      description: 'Generate engaging posts and stunning images with GPT-4 and DALL-E integration in real-time.',
      demo: 'ai',
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Schedule posts with intelligent timezone handling and optimal timing recommendations.',
      demo: 'scheduling',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track engagement, reach, and performance across all platforms in one unified view.',
      demo: 'analytics',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'OAuth 2.0, rate limiting, audit logs, and SOC 2 compliance ready infrastructure.',
      demo: 'security',
    },
    {
      icon: Boxes,
      title: 'Multi-Tenant Ready',
      description: 'Isolated workspaces with role-based access control and team collaboration features.',
      demo: 'multiTenant',
    },
  ];


  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Everything You Need to <span style={{ color: '#CD1B78' }}>Scale</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Built for developers who need enterprise-grade social media infrastructure.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Feature Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;

              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative text-left p-5 rounded-2xl border-2 transition-all duration-300 group
                    ${isActive
                      ? 'border-gray-900 bg-gray-900 shadow-xl'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
                    }
                  `}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(205, 27, 120, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: isActive ? [0, -10, 10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className="mb-3"
                    >
                      <div
                        className={`
                          w-11 h-11 rounded-xl flex items-center justify-center
                          ${isActive ? 'shadow-lg' : 'shadow-sm'}
                        `}
                        style={{ backgroundColor: isActive ? '#CD1B78' : '#F3F4F6' }}
                      >
                        <Icon
                          size={22}
                          style={{ color: isActive ? '#fff' : '#CD1B78' }}
                          strokeWidth={2}
                        />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className={`
                      text-base font-bold mb-1.5 leading-tight
                      ${isActive ? 'text-white' : 'text-gray-900'}
                    `}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className={`
                      text-xs leading-relaxed line-clamp-2
                      ${isActive ? 'text-gray-300' : 'text-gray-500'}
                    `}>
                      {feature.description}
                    </p>

                    {/* Hover arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -5,
                      }}
                      className="absolute top-5 right-5"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white text-xs">→</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Phone Demo */}
          <div className="relative hidden lg:block">
            <FeaturePhoneDemo activeFeature={activeFeature} />
          </div>
        </div>
      </div>
    </section>
  );
}
