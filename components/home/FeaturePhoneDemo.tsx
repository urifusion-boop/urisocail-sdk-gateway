'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Clock, Send, Sparkles, BarChart3, Shield, Users, Calendar
} from 'lucide-react';

interface FeaturePhoneDemoProps {
  activeFeature: number;
}

export function FeaturePhoneDemo({ activeFeature }: FeaturePhoneDemoProps) {
  return (
    <div className="relative h-full flex items-center justify-center">
      {/* iPhone 13 Pro Max Frame */}
      <motion.div
        initial={{ opacity: 0, rotateY: -30, scale: 0.9 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
        style={{
          perspective: '2000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Phone Container with 3D Slant */}
        <div
          className="relative"
          style={{
            transform: 'rotateY(-12deg) rotateX(2deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Outer Frame - Silver/Gold Metal */}
          <div
            className="relative w-[300px] h-[530px] rounded-[3rem] p-[2px] shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #E8E8E8 0%, #BDBDBD 25%, #F5F5F5 50%, #D4D4D4 75%, #E8E8E8 100%)',
              boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
            }}
          >
            {/* Side Buttons - Left (Volume & Mute) */}
            <div className="absolute left-0 top-[90px] w-[3px] h-[38px] rounded-r-sm"
              style={{
                background: 'linear-gradient(90deg, #B8B8B8 0%, #D4D4D4 50%, #E8E8E8 100%)',
                transform: 'translateX(-2px)',
                boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.2)',
              }}
            />
            <div className="absolute left-0 top-[135px] w-[3px] h-[28px] rounded-r-sm"
              style={{
                background: 'linear-gradient(90deg, #B8B8B8 0%, #D4D4D4 50%, #E8E8E8 100%)',
                transform: 'translateX(-2px)',
                boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.2)',
              }}
            />
            <div className="absolute left-0 top-[170px] w-[3px] h-[28px] rounded-r-sm"
              style={{
                background: 'linear-gradient(90deg, #B8B8B8 0%, #D4D4D4 50%, #E8E8E8 100%)',
                transform: 'translateX(-2px)',
                boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.2)',
              }}
            />

            {/* Side Button - Right (Power) */}
            <div className="absolute right-0 top-[135px] w-[3px] h-[60px] rounded-l-sm"
              style={{
                background: 'linear-gradient(-90deg, #B8B8B8 0%, #D4D4D4 50%, #E8E8E8 100%)',
                transform: 'translateX(2px)',
                boxShadow: 'inset 1px 0 2px rgba(0,0,0,0.2)',
              }}
            />

            {/* Inner Bezel - Lighter */}
            <div className="relative w-full h-full bg-gray-100 rounded-[2.9rem] p-[1px]">
              {/* Screen */}
              <div className="relative w-full h-full bg-white rounded-[2.85rem] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-gray-900 rounded-[1.5rem] z-30 flex items-center justify-center">
                  <div className="flex items-center gap-2.5">
                    <div className="w-[8px] h-[8px] rounded-full bg-gray-700 border border-gray-600" />
                    <div className="w-[4px] h-[4px] rounded-full bg-gray-700" />
                  </div>
                </div>

                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-[42px] bg-transparent z-20 flex items-center justify-between px-8 pt-2.5">
                  <span className="text-[13px] font-semibold text-gray-900">9:41</span>
                  <div className="flex items-center gap-[5px]">
                    <svg width="15" height="10" viewBox="0 0 18 12" fill="none">
                      <rect width="3" height="7" rx="1" fill="#374151" />
                      <rect x="5" width="3" height="9" rx="1" fill="#374151" />
                      <rect x="10" width="3" height="11" rx="1" fill="#374151" />
                      <rect x="15" width="3" height="11" rx="1" fill="#374151" opacity="0.3" />
                    </svg>
                    <svg width="14" height="10" viewBox="0 0 17 13" fill="none">
                      <path d="M8.5 11C8.9 11 9.2 10.7 9.2 10.3C9.2 9.9 8.9 9.6 8.5 9.6C8.1 9.6 7.8 9.9 7.8 10.3C7.8 10.7 8.1 11 8.5 11ZM8.5 0C5.5 0 2.8 1 1.2 2.6L8.5 10.5L15.8 2.6C14.2 1 11.5 0 8.5 0Z" fill="#374151" />
                    </svg>
                    <svg width="22" height="10" viewBox="0 0 27 13" fill="none">
                      <rect x="1" y="2.5" width="19" height="7" rx="2" stroke="#374151" strokeWidth="1.2" fill="white" />
                      <rect x="2.5" y="4" width="15" height="4" rx="1" fill="#374151" />
                      <path d="M21 4.5C21 4.2 21.2 4 21.5 4V8C21.2 8 21 7.8 21 7.5V4.5Z" fill="#374151" />
                    </svg>
                  </div>
                </div>

                {/* Content Area */}
                <div className="absolute inset-0 pt-[44px] pb-[20px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      {activeFeature === 0 && <PlatformScreen />}
                      {activeFeature === 1 && <AIScreen />}
                      {activeFeature === 2 && <SchedulingScreen />}
                      {activeFeature === 3 && <AnalyticsScreen />}
                      {activeFeature === 4 && <SecurityScreen />}
                      {activeFeature === 5 && <MultiTenantScreen />}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[110px] h-[4px] bg-black rounded-full opacity-40" />
              </div>
            </div>
          </div>

          {/* 3D Shine/Reflection Effect */}
          <div
            className="absolute inset-0 rounded-[3.5rem] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 30%, rgba(255,255,255,0.15) 70%, transparent 100%)',
              mixBlendMode: 'overlay',
            }}
          />

          {/* Metal Edge Highlight */}
          <div
            className="absolute inset-0 rounded-[3.5rem] pointer-events-none"
            style={{
              boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.9), inset 0 -2px 3px rgba(0, 0, 0, 0.25)',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// Screen Components
function PlatformScreen() {
  const platforms = [
    { name: 'Instagram', color: '#E4405F', icon: '📷', status: 'Published', time: '2m ago' },
    { name: 'Facebook', color: '#1877F2', icon: '👍', status: 'Published', time: '2m ago' },
    { name: 'Twitter', color: '#1DA1F2', icon: '🐦', status: 'Published', time: '2m ago' },
    { name: 'LinkedIn', color: '#0A66C2', icon: '💼', status: 'Publishing...', time: 'now' },
  ];

  return (
    <div className="h-full p-5 flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-900">Multi-Platform Post</h2>
        <p className="text-xs text-gray-500 mt-0.5">One API call, all platforms</p>
      </div>

      <div className="flex-1 space-y-2">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="relative flex items-center gap-2.5 p-2.5 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
              style={{ backgroundColor: platform.color + '15' }}
            >
              {platform.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-xs text-gray-900">{platform.name}</div>
              <div className="text-[10px] text-gray-500">{platform.status}</div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-gray-400">{platform.time}</span>
              {platform.status === 'Published' ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.08) }}
                >
                  <CheckCircle2 size={16} className="text-green-500" />
                </motion.div>
              ) : (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-gray-300 border-t-pink-600 rounded-full"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-green-600" />
          <span className="text-xs font-medium text-green-800">4 posts published successfully</span>
        </div>
      </motion.div>
    </div>
  );
}

function AIScreen() {
  return (
    <div className="h-full p-5 flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-900">AI Content Studio</h2>
        <p className="text-xs text-gray-500 mt-0.5">Generate engaging content instantly</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-3 border border-gray-200 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles size={12} className="text-white" />
          </div>
          <span className="text-[10px] font-semibold text-gray-600">INPUT PROMPT</span>
        </div>
        <p className="text-xs text-gray-800 font-medium">"Launch announcement for new AI feature"</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center justify-center my-3"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg"
        >
          <Sparkles size={18} className="text-white" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex-1 bg-white border border-gray-200 rounded-xl p-3 shadow-sm overflow-hidden"
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 size={12} className="text-green-500" />
          <span className="text-[10px] font-bold text-gray-700">AI GENERATED</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.7, duration: 1 }}
            className="ml-auto h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{ maxWidth: '40px' }}
          />
        </div>
        <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg mb-2 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </div>
        <p className="text-[11px] text-gray-700 leading-relaxed">
          "🚀 Exciting news! We're thrilled to unveil our revolutionary AI-powered content studio. Create engaging posts in seconds with intelligent suggestions..."
        </p>
        <div className="flex gap-1.5 mt-2">
          {['Instagram', 'Twitter', 'LinkedIn'].map((platform, i) => (
            <motion.div
              key={platform}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className="px-2 py-1 bg-gray-100 rounded text-[9px] font-medium text-gray-600"
            >
              {platform}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SchedulingScreen() {
  const posts = [
    { time: '9:00 AM', platform: 'Instagram', status: 'Posted', icon: '📷', color: '#E4405F' },
    { time: '11:30 AM', platform: 'Twitter', status: 'Posted', icon: '🐦', color: '#1DA1F2' },
    { time: '2:00 PM', platform: 'LinkedIn', status: 'Posting now...', icon: '💼', color: '#0A66C2' },
    { time: '5:00 PM', platform: 'Facebook', status: 'Scheduled', icon: '👍', color: '#1877F2' },
    { time: '8:00 PM', platform: 'Instagram', status: 'Scheduled', icon: '📷', color: '#E4405F' },
  ];

  return (
    <div className="h-full p-5 flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-900">Smart Schedule</h2>
        <p className="text-xs text-gray-500 mt-0.5">Optimal timing for maximum reach</p>
      </div>

      <div className="flex-1 space-y-2 overflow-auto">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`
              p-2.5 rounded-lg border flex items-center gap-2.5 shadow-sm
              ${post.status === 'Posting now...'
                ? 'border-green-400 bg-green-50'
                : post.status === 'Posted'
                ? 'border-gray-200 bg-gray-50/50'
                : 'border-blue-200 bg-white'
              }
            `}
          >
            <div className="flex flex-col items-center gap-0.5">
              <Clock size={14} className={post.status === 'Posting now...' ? 'text-green-600' : 'text-gray-500'} />
              <span className="text-[9px] font-semibold text-gray-600">{post.time}</span>
            </div>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
              style={{ backgroundColor: post.color + '20' }}
            >
              {post.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-xs text-gray-900">{post.platform}</div>
              <div className="text-[10px] text-gray-500">{post.status}</div>
            </div>
            {post.status === 'Posting now...' && (
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Send size={14} className="text-green-600" />
              </motion.div>
            )}
            {post.status === 'Posted' && (
              <CheckCircle2 size={14} className="text-gray-400" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-3 p-2.5 bg-blue-50 rounded-lg border border-blue-200 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
          <Calendar size={12} className="text-white" />
        </div>
        <span className="text-[10px] font-medium text-blue-800">5 posts scheduled for today</span>
      </motion.div>
    </div>
  );
}

function AnalyticsScreen() {
  const stats = [
    { label: 'Total Reach', value: '2.4M', change: '+12%', percent: 85, color: '#CD1B78' },
    { label: 'Engagement', value: '184K', change: '+8%', percent: 70, color: '#0EA5E9' },
    { label: 'Click Rate', value: '4.2%', change: '+3%', percent: 65, color: '#8B5CF6' },
    { label: 'New Followers', value: '12.3K', change: '+15%', percent: 90, color: '#10B981' },
  ];

  const platforms = [
    { name: 'Instagram', value: '42%', color: '#E4405F' },
    { name: 'Twitter', value: '28%', color: '#1DA1F2' },
    { name: 'LinkedIn', value: '18%', color: '#0A66C2' },
    { name: 'Facebook', value: '12%', color: '#1877F2' },
  ];

  return (
    <div className="h-full p-5 flex flex-col bg-gradient-to-b from-purple-50 to-white">
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-900">Analytics Dashboard</h2>
        <p className="text-xs text-gray-500 mt-0.5">Last 30 days performance</p>
      </div>

      <div className="flex-1 space-y-2.5 overflow-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-lg p-2.5 border border-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[11px] font-semibold text-gray-700">{stat.label}</span>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-gray-900">{stat.value}</span>
                <span className="text-[9px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                  {stat.change}
                </span>
              </div>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${stat.percent}%` }}
                transition={{ delay: 0.3 + (i * 0.1), duration: 0.8 }}
                className="h-full rounded-full"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-3 bg-white rounded-lg p-3 border border-gray-200 shadow-sm"
      >
        <div className="text-[10px] font-semibold text-gray-600 mb-2">TOP PLATFORMS</div>
        <div className="space-y-1.5">
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (i * 0.08) }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: platform.color }} />
              <span className="text-[10px] text-gray-700 flex-1">{platform.name}</span>
              <span className="text-[10px] font-semibold text-gray-900">{platform.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SecurityScreen() {
  const features = [
    { title: 'OAuth 2.0', subtitle: 'Secure authentication', icon: '🔐', status: 'Active' },
    { title: 'Rate Limiting', subtitle: '1000 req/min', icon: '⚡', status: 'Active' },
    { title: 'Data Encryption', subtitle: 'AES-256 at rest', icon: '🔒', status: 'Active' },
    { title: 'Audit Logs', subtitle: 'Real-time monitoring', icon: '📊', status: 'Active' },
    { title: 'SOC 2 Type II', subtitle: 'Certified compliant', icon: '✅', status: 'Verified' },
  ];

  return (
    <div className="h-full p-5 flex flex-col bg-gradient-to-b from-green-50 to-white">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
            <Shield size={16} className="text-white" />
          </div>
          <h2 className="text-base font-bold text-gray-900">Enterprise Security</h2>
        </div>
        <p className="text-xs text-gray-500">Bank-grade protection for your data</p>
      </div>

      <div className="flex-1 space-y-2 overflow-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2.5 p-2.5 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-base flex-shrink-0">
              {feature.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-xs text-gray-900">{feature.title}</div>
              <div className="text-[10px] text-gray-500">{feature.subtitle}</div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[9px] font-semibold text-green-700">{feature.status}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200"
      >
        <div className="flex items-center gap-2">
          <Shield size={14} className="text-green-600" />
          <span className="text-[10px] font-semibold text-green-800">All systems operational • 99.99% uptime</span>
        </div>
      </motion.div>
    </div>
  );
}

function MultiTenantScreen() {
  const workspaces = [
    { name: 'Acme Corp', users: 24, posts: 1847, active: true, color: '#CD1B78', icon: '🏢' },
    { name: 'Tech Startup', users: 12, posts: 892, active: true, color: '#2563EB', icon: '🚀' },
    { name: 'Design Agency', users: 8, posts: 634, active: false, color: '#8B5CF6', icon: '🎨' },
    { name: 'E-commerce Co', users: 16, posts: 1203, active: true, color: '#059669', icon: '🛍️' },
  ];

  return (
    <div className="h-full p-5 flex flex-col bg-gradient-to-b from-indigo-50 to-white">
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-900">Multi-Tenant Workspaces</h2>
        <p className="text-xs text-gray-500 mt-0.5">Isolated environments with full control</p>
      </div>

      <div className="flex-1 space-y-2 overflow-auto">
        {workspaces.map((workspace, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg p-2.5 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{ backgroundColor: workspace.color + '20' }}
              >
                {workspace.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs text-gray-900">{workspace.name}</div>
                <div className="flex items-center gap-1">
                  <Users size={10} className="text-gray-400" />
                  <span className="text-[10px] text-gray-500">{workspace.users} members</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${workspace.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                <span className={`text-[9px] font-medium ${workspace.active ? 'text-green-600' : 'text-gray-400'}`}>
                  {workspace.active ? 'Active' : 'Idle'}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-50 rounded-md p-1.5">
                <div className="text-[9px] text-gray-500">Total Posts</div>
                <div className="text-xs font-bold text-gray-900">{workspace.posts.toLocaleString()}</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 rounded-md text-[10px] font-semibold text-white"
                style={{ backgroundColor: workspace.color }}
              >
                Manage
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
            <Users size={12} className="text-white" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-indigo-900">4 Active Workspaces</div>
            <div className="text-[9px] text-indigo-600">60 total team members</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
