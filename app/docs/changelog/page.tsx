import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Plus, Bug, Zap, Shield } from 'lucide-react';

export default function ChangelogPage() {
  const releases = [
    {
      version: '2.1.0',
      date: 'May 20, 2026',
      isNew: true,
      changes: [
        { type: 'feature', text: 'Added support for Instagram Reels API' },
        { type: 'feature', text: 'New webhook event types for story posts' },
        { type: 'improvement', text: 'Improved rate limiting with automatic retry logic' },
        { type: 'improvement', text: 'Enhanced error messages with detailed context' },
        { type: 'fix', text: 'Fixed video upload timeout issues for large files' },
      ],
    },
    {
      version: '2.0.5',
      date: 'May 10, 2026',
      changes: [
        { type: 'feature', text: 'Added LinkedIn carousel post support' },
        { type: 'improvement', text: 'Optimized media upload performance (40% faster)' },
        { type: 'fix', text: 'Fixed Twitter thread ordering inconsistency' },
        { type: 'security', text: 'Updated OAuth 2.0 token refresh mechanism' },
      ],
    },
    {
      version: '2.0.0',
      date: 'April 28, 2026',
      changes: [
        { type: 'feature', text: 'Complete API redesign with RESTful endpoints' },
        { type: 'feature', text: 'Added batch operations for bulk posting' },
        { type: 'feature', text: 'New analytics API with advanced metrics' },
        { type: 'improvement', text: 'Reduced API response times by 60%' },
        { type: 'breaking', text: 'Deprecated v1 API endpoints (migration guide available)' },
      ],
    },
    {
      version: '1.9.2',
      date: 'April 15, 2026',
      changes: [
        { type: 'improvement', text: 'Added support for Facebook video posts' },
        { type: 'fix', text: 'Resolved Instagram caption character limit bug' },
        { type: 'fix', text: 'Fixed timezone handling in scheduled posts' },
      ],
    },
  ];

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return <Plus className="w-4 h-4 text-green-600" />;
      case 'fix':
        return <Bug className="w-4 h-4 text-red-600" />;
      case 'improvement':
        return <Zap className="w-4 h-4 text-blue-600" />;
      case 'security':
        return <Shield className="w-4 h-4 text-purple-600" />;
      case 'breaking':
        return <Sparkles className="w-4 h-4 text-orange-600" />;
      default:
        return null;
    }
  };

  const getChangeBadge = (type: string) => {
    const badges: Record<string, { label: string; className: string }> = {
      feature: { label: 'New', className: 'bg-green-100 text-green-700' },
      fix: { label: 'Fix', className: 'bg-red-100 text-red-700' },
      improvement: { label: 'Improved', className: 'bg-blue-100 text-blue-700' },
      security: { label: 'Security', className: 'bg-purple-100 text-purple-700' },
      breaking: { label: 'Breaking', className: 'bg-orange-100 text-orange-700' },
    };

    const badge = badges[type];
    return (
      <Badge className={badge.className} variant="outline">
        {badge.label}
      </Badge>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Badge className="mb-4" style={{ backgroundColor: '#CD1B78' }}>
          Changelog
        </Badge>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Changelog</h1>
        <p className="text-xl text-gray-600 mb-6">
          Stay up to date with the latest features, improvements, and bug fixes to URI Social SDK.
        </p>
      </div>

      {/* Releases */}
      <div className="space-y-8">
        {releases.map((release) => (
          <Card key={release.version} className={release.isNew ? 'border-pink-300 shadow-md' : ''}>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-2xl">v{release.version}</CardTitle>
                  {release.isNew && (
                    <Badge style={{ backgroundColor: '#CD1B78' }} className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Latest
                    </Badge>
                  )}
                </div>
                <span className="text-sm text-gray-500">{release.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {release.changes.map((change, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {getChangeIcon(change.type)}
                    <div className="flex-1 flex items-center gap-2">
                      <span className="text-gray-700">{change.text}</span>
                      <div className="ml-auto">
                        {getChangeBadge(change.type)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Subscribe CTA */}
      <Card className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="p-6 text-center">
          <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-4">
            Get notified about new releases, features, and important updates.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
            <button
              className="px-6 py-2 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#CD1B78' }}
            >
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
