import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Code, Database, Zap, Globe } from 'lucide-react';

interface AutocompleteItem {
  label: string;
  type: string;
  icon: React.ComponentType<any>;
  description: string;
}

export function IDEAutocomplete() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentSuggestions, setCurrentSuggestions] = useState<AutocompleteItem[]>([]);

  const suggestionSets = [
    {
      trigger: 'skills',
      items: [
        { label: 'React.js', type: 'library', icon: Code, description: 'JavaScript library for building UIs' },
        { label: 'TypeScript', type: 'language', icon: Code, description: 'Typed superset of JavaScript' },
        { label: 'Node.js', type: 'runtime', icon: Database, description: 'JavaScript runtime for server-side' },
        { label: 'Next.js', type: 'framework', icon: Globe, description: 'React framework for production' },
      ]
    },
    {
      trigger: 'experience',
      items: [
        { label: 'fullStackDeveloper', type: 'role', icon: Code, description: 'End-to-end development expertise' },
        { label: 'modernFrameworks', type: 'technology', icon: Zap, description: 'Latest web technologies' },
        { label: 'cloudDeployment', type: 'skill', icon: Globe, description: 'AWS, Vercel, Azure experience' },
        { label: 'databaseDesign', type: 'skill', icon: Database, description: 'SQL and NoSQL databases' },
      ]
    },
    {
      trigger: 'projects',
      items: [
        { label: 'webApplication', type: 'project', icon: Globe, description: 'Full-stack web solutions' },
        { label: 'mobileApp', type: 'project', icon: Zap, description: 'Cross-platform mobile development' },
        { label: 'apiIntegration', type: 'feature', icon: Database, description: 'Third-party service integration' },
        { label: 'uiComponents', type: 'component', icon: Code, description: 'Reusable UI component library' },
      ]
    }
  ];

  useEffect(() => {
    const showAutocomplete = () => {
      // Random position on screen
      const x = Math.random() * (window.innerWidth - 300);
      const y = Math.random() * (window.innerHeight - 200);
      
      setPosition({ x, y });
      
      // Random suggestion set
      const randomSet = suggestionSets[Math.floor(Math.random() * suggestionSets.length)];
      setCurrentSuggestions(randomSet.items);
      
      setIsVisible(true);
      
      // Hide after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    // Show autocomplete every 8-12 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance each interval
        showAutocomplete();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-40 pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-background border border-border rounded-lg shadow-lg p-1 min-w-[280px] max-w-[320px]">
            {/* Header */}
            <div className="px-3 py-2 border-b border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code className="w-4 h-4" />
                <span>IntelliSense</span>
              </div>
            </div>
            
            {/* Suggestions */}
            <div className="py-1">
              {currentSuggestions.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2 text-sm hover:bg-accent/50 ${
                      index === 0 ? 'bg-accent/30' : ''
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1, delay: index * 0.05 }}
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{item.label}</span>
                        <span className="text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 truncate">
                        {item.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Footer */}
            <div className="px-3 py-2 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>↵ to select</span>
                <span>Esc to dismiss</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}