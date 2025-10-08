import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ProgressBar {
  id: string;
  label: string;
  progress: number;
  color: string;
  isActive: boolean;
}

export function LoadingProgressBars() {
  const [progressBars, setProgressBars] = useState<ProgressBar[]>([
    { id: 'loading-skills', label: 'Loading skills.json', progress: 0, color: '#00ff88', isActive: false },
    { id: 'loading-projects', label: 'Fetching projects...', progress: 0, color: '#ff6b9d', isActive: false },
    { id: 'loading-experience', label: 'Compiling experience', progress: 0, color: '#00d4ff', isActive: false },
    { id: 'loading-contact', label: 'Initializing contact form', progress: 0, color: '#ffa500', isActive: false },
  ]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          let barIndex = -1;
          if (sectionId === 'skills') barIndex = 0;
          else if (sectionId === 'projects') barIndex = 1;
          else if (sectionId === 'experience') barIndex = 2;
          else if (sectionId === 'contact') barIndex = 3;

          if (barIndex >= 0) {
            triggerProgressBar(barIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe sections
    const sections = ['skills', 'projects', 'experience', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const triggerProgressBar = (index: number) => {
    setProgressBars(prev => {
      const updated = [...prev];
      if (!updated[index].isActive) {
        updated[index].isActive = true;
        
        // Animate progress
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += Math.random() * 15 + 5; // Random increment
          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(interval);
            
            // Hide after completion
            setTimeout(() => {
              setProgressBars(prev => {
                const final = [...prev];
                final[index].isActive = false;
                final[index].progress = 0;
                return final;
              });
            }, 1000);
          }
          
          setProgressBars(prev => {
            const inProgress = [...prev];
            inProgress[index].progress = currentProgress;
            return inProgress;
          });
        }, 100);
      }
      return updated;
    });
  };

  const activeProgressBars = progressBars.filter(bar => bar.isActive);

  if (activeProgressBars.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <div className="space-y-3">
        {activeProgressBars.map((bar, index) => (
          <motion.div
            key={bar.id}
            className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4 min-w-[280px] shadow-lg"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* Terminal-style header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs font-mono text-muted-foreground">Terminal</span>
            </div>
            
            {/* Progress info */}
            <div className="mb-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-foreground">{bar.label}</span>
                <span className="font-mono text-muted-foreground">{Math.round(bar.progress)}%</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ backgroundColor: bar.color }}
                initial={{ width: '0%' }}
                animate={{ width: `${bar.progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
              
              {/* Loading shimmer effect */}
              {bar.progress < 100 && (
                <motion.div
                  className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-32, 280] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              )}
            </div>
            
            {/* Status text */}
            <div className="mt-2 text-xs font-mono">
              {bar.progress < 100 ? (
                <span className="text-muted-foreground">
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Processing...
                  </motion.span>
                </span>
              ) : (
                <span className="text-green-500">✓ Complete</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}