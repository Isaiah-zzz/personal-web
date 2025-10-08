import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CommitNode {
  id: string;
  x: number;
  y: number;
  branch: number;
  message: string;
  delay: number;
}

export function GitCommitGraph() {
  const [commits, setCommits] = useState<CommitNode[]>([]);

  useEffect(() => {
    const commitMessages = [
      'feat: add responsive design',
      'fix: navigation bug',
      'refactor: optimize performance',
      'docs: update README',
      'style: improve UI',
      'test: add unit tests',
      'chore: update dependencies',
      'feat: implement dark mode',
      'fix: accessibility issues',
      'perf: optimize images'
    ];

    const generateCommits = () => {
      const newCommits: CommitNode[] = [];
      let currentY = 50;
      let currentBranch = 0;

      for (let i = 0; i < 15; i++) {
        // Occasionally create a new branch
        if (Math.random() > 0.7 && currentBranch < 2) {
          currentBranch++;
        }
        
        // Occasionally merge back to main
        if (Math.random() > 0.8 && currentBranch > 0) {
          currentBranch = 0;
        }

        newCommits.push({
          id: `commit-${i}`,
          x: 50 + (currentBranch * 30),
          y: currentY,
          branch: currentBranch,
          message: commitMessages[Math.floor(Math.random() * commitMessages.length)],
          delay: i * 0.3
        });

        currentY += 40 + Math.random() * 20;
      }

      setCommits(newCommits);
    };

    generateCommits();
    const interval = setInterval(generateCommits, 15000); // Regenerate every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const branchColors = ['#00ff88', '#ff6b9d', '#00d4ff'];

  return (
    <div className="fixed top-0 right-0 w-32 h-full pointer-events-none z-0 opacity-20">
      <svg className="w-full h-full">
        {/* Draw connecting lines */}
        {commits.map((commit, index) => {
          const nextCommit = commits[index + 1];
          if (!nextCommit) return null;

          return (
            <motion.line
              key={`line-${commit.id}`}
              x1={commit.x}
              y1={commit.y}
              x2={nextCommit.x}
              y2={nextCommit.y}
              stroke={branchColors[commit.branch]}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: commit.delay + 0.2 }}
            />
          );
        })}

        {/* Draw commit nodes */}
        {commits.map((commit) => (
          <motion.g key={commit.id}>
            <motion.circle
              cx={commit.x}
              cy={commit.y}
              r="4"
              fill={branchColors[commit.branch]}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: commit.delay }}
            />
            <motion.circle
              cx={commit.x}
              cy={commit.y}
              r="8"
              fill="none"
              stroke={branchColors[commit.branch]}
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 0.5, delay: commit.delay + 0.1 }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}