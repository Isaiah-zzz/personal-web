import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
  id: string;
}

export function TerminalCursorTrail() {
  const [cursorHistory, setCursorHistory] = useState<CursorPosition[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const newCursor: CursorPosition = {
        x: e.clientX,
        y: e.clientY,
        id: `cursor-${Date.now()}`
      };

      setCursorHistory(prev => {
        const updated = [newCursor, ...prev.slice(0, 4)]; // Keep only 5 cursors
        return updated;
      });

      setIsVisible(true);

      // Hide after no movement
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        setCursorHistory([]);
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isVisible || cursorHistory.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {cursorHistory.map((cursor, index) => (
        <motion.div
          key={cursor.id}
          className="absolute w-3 h-5 bg-primary"
          style={{
            left: cursor.x + 5,
            top: cursor.y - 10,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ 
            opacity: 0,
            scale: 0.5,
          }}
          transition={{ 
            duration: 1,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          {/* Terminal cursor */}
          <motion.div
            className="w-full h-full bg-primary"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ 
              duration: 1, 
              repeat: Infinity,
              delay: index * 0.1 
            }}
          />
          
          {/* Optional: Add a small terminal-style background */}
          {index === 0 && (
            <motion.div
              className="absolute -left-1 -top-1 w-5 h-7 bg-background/80 border border-primary/30 rounded-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}