import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Terminal, Info, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface ConsoleLog {
  id: string;
  type: 'log' | 'warn' | 'error' | 'success';
  message: string;
  timestamp: string;
  isVisible: boolean;
}

export function ConsoleLogs() {
  const [logs, setLogs] = useState<ConsoleLog[]>([]);

  const logMessages = [
    { type: 'log' as const, message: 'User viewing portfolio...' },
    { type: 'success' as const, message: 'Skills component loaded successfully' },
    { type: 'log' as const, message: 'Fetching project data...' },
    { type: 'success' as const, message: 'Dark mode toggled' },
    { type: 'warn' as const, message: 'Consider optimizing images' },
    { type: 'log' as const, message: 'Contact form initialized' },
    { type: 'success' as const, message: 'Animation sequence complete' },
    { type: 'log' as const, message: 'Responsive layout activated' },
    { type: 'success' as const, message: 'Navigation smooth scroll enabled' },
    { type: 'log' as const, message: 'Social links verified' },
    { type: 'warn' as const, message: 'Browser compatibility check' },
    { type: 'success' as const, message: 'Performance metrics: Good' },
    { type: 'log' as const, message: 'Theme preferences saved' },
    { type: 'success' as const, message: 'Portfolio fully loaded' },
  ];

  useEffect(() => {
    const showLog = () => {
      const randomMessage = logMessages[Math.floor(Math.random() * logMessages.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const newLog: ConsoleLog = {
        id: `log-${Date.now()}`,
        type: randomMessage.type,
        message: randomMessage.message,
        timestamp,
        isVisible: true
      };

      setLogs(prev => [newLog, ...prev.slice(0, 2)]); // Keep max 3 logs

      // Hide log after 4 seconds
      setTimeout(() => {
        setLogs(prev => prev.map(log => 
          log.id === newLog.id ? { ...log, isVisible: false } : log
        ));
      }, 4000);

      // Remove log after fade out
      setTimeout(() => {
        setLogs(prev => prev.filter(log => log.id !== newLog.id));
      }, 4500);
    };

    // Show first log after a delay
    const initialTimeout = setTimeout(showLog, 2000);

    // Then show logs periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.85) { // 15% chance
        showLog();
      }
    }, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const getLogIcon = (type: string) => {
    switch (type) {
      case 'warn': return AlertTriangle;
      case 'error': return X;
      case 'success': return CheckCircle;
      default: return Info;
    }
  };

  const getLogColor = (type: string) => {
    switch (type) {
      case 'warn': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      case 'success': return 'text-green-500';
      default: return 'text-blue-500';
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-none max-w-sm">
      <AnimatePresence>
        {logs.map((log) => {
          if (!log.isVisible) return null;
          
          const IconComponent = getLogIcon(log.type);
          
          return (
            <motion.div
              key={log.id}
              className="mb-3 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 300, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Console header */}
              <div className="flex items-center gap-2 px-3 py-2 bg-secondary/30 border-b border-border">
                <Terminal className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">Console</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Log content */}
              <div className="p-3">
                <div className="flex items-start gap-2">
                  <IconComponent className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getLogColor(log.type)}`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-foreground font-mono break-words">
                      {log.message}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono mt-1">
                      {log.timestamp}
                    </div>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <motion.div
                  className={`mt-2 h-1 rounded-full ${
                    log.type === 'success' ? 'bg-green-500/20' :
                    log.type === 'warn' ? 'bg-yellow-500/20' :
                    log.type === 'error' ? 'bg-red-500/20' :
                    'bg-blue-500/20'
                  }`}
                >
                  <motion.div
                    className={`h-full rounded-full ${
                      log.type === 'success' ? 'bg-green-500' :
                      log.type === 'warn' ? 'bg-yellow-500' :
                      log.type === 'error' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}