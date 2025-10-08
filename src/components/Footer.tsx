import { motion } from 'motion/react';
import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-mono tracking-tight text-xl"
          >
            &lt;Developer /&gt;
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-4 h-4 text-primary" />
            </motion.div>
            <span>by Changyi Zhou</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} Changyi Zhou. All rights reserved.
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-mono text-xs text-muted-foreground/70"
          >
            console.log("Thanks for visiting! 🚀");
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}