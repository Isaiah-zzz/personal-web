import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function CodeBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; code: string }>>([]);

  const codeSnippets = [
    'const',
    'function',
    'return',
    '{}',
    '=>',
    'async',
    'await',
    'import',
    'export',
    'let',
    'var',
    'if',
    'else',
    'for',
    'while',
    'class',
    'extends',
    'new',
    'this',
    'try',
    'catch',
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: `${particle.x}vw`, 
            y: `${particle.y}vh`,
            opacity: 0 
          }}
          animate={{ 
            x: `${particle.x + (Math.random() - 0.5) * 20}vw`,
            y: `${particle.y + (Math.random() - 0.5) * 20}vh`,
            opacity: [0, 0.3, 0] 
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute font-mono text-sm text-primary/30"
        >
          {particle.code}
        </motion.div>
      ))}
      
      {/* Binary rain effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            className="absolute font-mono text-xs text-primary/20"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Array.from({ length: 20 }, () => Math.round(Math.random())).join('')}
          </motion.div>
        ))}
      </div>
    </div>
  );
}