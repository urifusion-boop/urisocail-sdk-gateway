'use client';

import { motion } from 'framer-motion';
import { Code, Package, Layers, Database, Webhook, Cloud, Shield, Zap, BarChart3, Key, Globe, Lock, Clock, TrendingUp, Sparkles } from 'lucide-react';

export function HeroAnimation() {
  // SDK Features around the gateway - What URI Social Offers
  const sdkFeatures = [
    { Icon: Code, color: '#CD1B78', label: 'Post Scheduling', delay: 0, angle: 0 },
    { Icon: Webhook, color: '#9333EA', label: 'Real-time Events', delay: 0.1, angle: 45 },
    { Icon: Key, color: '#2563EB', label: 'Multi-Platform Auth', delay: 0.2, angle: 90 },
    { Icon: Shield, color: '#059669', label: 'Secure API', delay: 0.3, angle: 135 },
    { Icon: Database, color: '#DC2626', label: 'Content Library', delay: 0.4, angle: 180 },
    { Icon: Cloud, color: '#EA580C', label: 'AI Generation', delay: 0.5, angle: 225 },
    { Icon: Zap, color: '#CA8A04', label: 'Auto Publishing', delay: 0.6, angle: 270 },
    { Icon: BarChart3, color: '#7C3AED', label: 'Analytics Dashboard', delay: 0.7, angle: 315 },
  ];

  // User Benefits - revolving around the outer orbit
  const benefits = [
    { Icon: Zap, label: '10x Faster Launch', delay: 0.8, angle: 22.5, color: '#F59E0B' },
    { Icon: Clock, label: 'Save 100+ Hours', delay: 0.9, angle: 112.5, color: '#10B981' },
    { Icon: TrendingUp, label: 'Scale to Millions', delay: 1.0, angle: 202.5, color: '#3B82F6' },
    { Icon: Sparkles, label: 'White-Label Ready', delay: 1.1, angle: 292.5, color: '#8B5CF6' },
  ];

  const radius = 160;
  const iconSize = 48; // w-12 = 48px
  const iconOrbitRadius = radius + (iconSize / 2); // Icons centered on the inner circle line

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Orbital Rings */}
      <motion.div
        className="absolute rounded-full border border-pink-100"
        style={{ width: radius * 2, height: radius * 2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div
        className="absolute rounded-full border border-pink-50"
        style={{ width: (radius * 2) + 140, height: (radius * 2) + 140 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Connecting Lines Layer */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#CD1B78', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#CD1B78', stopOpacity: 0 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {sdkFeatures.map(({ angle }, index) => {
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          return (
            <motion.line
              key={`sdk-line-${index}`}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${x}px)`}
              y2={`calc(50% + ${y}px)`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.08 }}
            />
          );
        })}
      </svg>

      {/* Central Gateway Hub */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotateY: 180 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 150 }}
        className="relative z-20"
      >
        <motion.div
          className="w-32 h-32 rounded-3xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
          style={{ backgroundColor: '#CD1B78' }}
          animate={{
            boxShadow: [
              '0 25px 50px -12px rgba(205, 27, 120, 0.3)',
              '0 25px 50px -12px rgba(205, 27, 120, 0.6)',
              '0 25px 50px -12px rgba(205, 27, 120, 0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          <span className="text-white text-2xl font-bold relative z-10">URI Social</span>
          <span className="text-white text-xs font-semibold tracking-widest relative z-10 opacity-90">SDK</span>

          {/* Multiple Pulse Rings */}
          {[0, 0.5, 1].map((delay, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-3xl border-2"
              style={{ borderColor: '#CD1B78' }}
              animate={{
                scale: [1, 1.4 + (i * 0.1), 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity, delay, ease: 'easeOut' }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* SDK Features - Circular Orbit */}
      {sdkFeatures.map(({ Icon, color, label, delay, angle }, index) => {
        const x = Math.cos((angle * Math.PI) / 180) * iconOrbitRadius;
        const y = Math.sin((angle * Math.PI) / 180) * iconOrbitRadius;

        // Smart label positioning based on angle - keep labels close to icons
        let labelPositionStyle = {};

        if (angle >= 0 && angle < 90) {
          // Top right quadrant - label to the right
          labelPositionStyle = {
            left: '100%',
            top: '50%',
            transform: 'translate(12px, -50%)',
          };
        } else if (angle >= 90 && angle < 180) {
          // Top left quadrant - label to the left
          labelPositionStyle = {
            right: '100%',
            top: '50%',
            transform: 'translate(-12px, -50%)',
          };
        } else if (angle >= 180 && angle < 270) {
          // Bottom left quadrant - label to the left
          labelPositionStyle = {
            right: '100%',
            top: '50%',
            transform: 'translate(-12px, -50%)',
          };
        } else {
          // Bottom right quadrant - label to the right
          labelPositionStyle = {
            left: '100%',
            top: '50%',
            transform: 'translate(12px, -50%)',
          };
        }

        return (
          <motion.div
            key={label}
            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x,
              y,
            }}
            transition={{ duration: 0.6, delay, type: 'spring', stiffness: 120 }}
            className="absolute z-10"
            style={{ left: '50%', top: '50%' }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.3,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-white/95 backdrop-blur-md border-2"
                style={{ borderColor: color }}
              >
                <Icon size={20} style={{ color }} strokeWidth={2.5} />
              </div>

              {/* Always Visible Label - Positioned outward from icon */}
              <div
                className="absolute bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-md border border-gray-100"
                style={labelPositionStyle}
              >
                <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">{label}</span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* User Benefits - Temporarily Removed */}

      {/* Data Flow Particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30);
        const startRadius = 80;
        const endRadius = 180;

        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-pink-500"
            style={{ left: '50%', top: '50%' }}
            animate={{
              x: [
                Math.cos((angle * Math.PI) / 180) * startRadius,
                Math.cos((angle * Math.PI) / 180) * endRadius,
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * startRadius,
                Math.sin((angle * Math.PI) / 180) * endRadius,
              ],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}
