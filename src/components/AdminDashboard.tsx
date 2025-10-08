import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, Users, MapPin, Calendar, Globe, Trash2, Shield, BarChart3 } from 'lucide-react';
import { useVisitorTracking } from '../hooks/useVisitorTracking';

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { getVisitorStats, clearVisitorData, ADMIN_PASSWORD } = useVisitorTracking();
  const [stats, setStats] = useState(getVisitorStats());

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setStats(getVisitorStats());
    }
  }, [isAuthenticated, getVisitorStats]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    setPassword('');
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all visitor data? This action cannot be undone.')) {
      clearVisitorData();
      setStats(getVisitorStats());
    }
  };

  const refreshStats = () => {
    setStats(getVisitorStats());
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-lg p-8 w-full max-w-md shadow-lg"
        >
          <div className="text-center mb-6">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Admin Access</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 pr-12 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Visitor Analytics</h1>
                <p className="text-muted-foreground">Real-time visitor tracking and statistics</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={refreshStats}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Refresh
              </button>
              <button
                onClick={handleClearData}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear Data
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-500" />
              <h3 className="text-lg font-semibold">Total Visitors</h3>
            </div>
            <p className="text-3xl font-bold text-blue-500">{stats.totalVisitors}</p>
            <p className="text-sm text-muted-foreground">Unique visitors</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-semibold">Total Visits</h3>
            </div>
            <p className="text-3xl font-bold text-green-500">{stats.totalVisits}</p>
            <p className="text-sm text-muted-foreground">Page visits</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-6 h-6 text-purple-500" />
              <h3 className="text-lg font-semibold">Locations</h3>
            </div>
            <p className="text-3xl font-bold text-purple-500">{Object.keys(stats.visitorsByLocation).length}</p>
            <p className="text-sm text-muted-foreground">Different locations</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Visitors by Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Visitors by Location
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {Object.entries(stats.visitorsByLocation)
                .sort(([,a], [,b]) => (b as number) - (a as number))
                .map(([location, count], index) => (
                  <div key={location} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-medium">{location}</span>
                    <span className="text-sm text-muted-foreground">{count} visitors</span>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Recent Visitors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Recent Visitors
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {stats.recentVisitors.map((visitor, index) => (
                <div key={visitor.id} className="p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Visitor #{index + 1}</span>
                    <span className="text-xs text-muted-foreground">
                      {visitor.visitCount} visit{visitor.visitCount > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>📍 {visitor.location.city}, {visitor.location.region}, {visitor.location.country}</p>
                    <p>🕒 Last visit: {new Date(visitor.lastVisit).toLocaleString()}</p>
                    <p>🌐 Timezone: {visitor.location.timezone}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
