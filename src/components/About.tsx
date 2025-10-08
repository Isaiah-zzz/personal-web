import { motion } from 'motion/react';
import { Code2, Palette, Zap, FileText, Folder, Settings } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that tells a story'
    },
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Creating intuitive user experiences with attention to detail'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer who loves to create innovative solutions and bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Simplified Code Editor */}
            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-lg">
              {/* Window Header */}
              <div className="bg-secondary/30 border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">about-me.js</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono">
                <div className="flex">
                  <div className="text-xs text-muted-foreground pr-4 select-none">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((line) => (
                      <div key={line} className="h-6 flex items-center">
                        {line}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex-1 text-sm space-y-1">
                    <motion.div 
                      className="text-blue-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-blue-400">const</span> <span className="text-foreground">aboutMe</span> <span className="text-muted-foreground">=</span> <span className="text-yellow-400">&#123;</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <span className="text-red-400">name</span><span className="text-muted-foreground">:</span> <span className="text-green-400">"Changyi Zhou"</span><span className="text-muted-foreground">,</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <span className="text-red-400">role</span><span className="text-muted-foreground">:</span> <span className="text-green-400">"Full Stack Developer"</span><span className="text-muted-foreground">,</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 }}
                    >
                      <span className="text-red-400">experience</span><span className="text-muted-foreground">:</span> <span className="text-blue-400">5</span><span className="text-muted-foreground">,</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.5 }}
                    >
                      <span className="text-red-400">passions</span><span className="text-muted-foreground">:</span> <span className="text-yellow-400">[</span><span className="text-green-400">"Clean Code"</span><span className="text-muted-foreground">,</span> <span className="text-green-400">"Design"</span><span className="text-muted-foreground">,</span> <span className="text-green-400">"Innovation"</span><span className="text-yellow-400">]</span><span className="text-muted-foreground">,</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 3 }}
                    >
                      <span className="text-red-400">motto</span><span className="text-muted-foreground">:</span> <span className="text-green-400">"Code with purpose, design with intention"</span>
                    </motion.div>
                    
                    <motion.div 
                      className="text-yellow-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.5 }}
                    >
                      &#125;<span className="text-muted-foreground">;</span>
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 4 }}
                        className="ml-1 text-foreground"
                      >
                        |
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-neutral dark:prose-invert">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital experiences that make a difference. My journey began with curiosity about 
                how websites work, and it has evolved into a deep love for crafting elegant solutions 
                to complex problems.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Whether I'm architecting scalable backend systems, designing intuitive user interfaces, 
                or optimizing performance, I approach every project with the same enthusiasm and 
                attention to detail that drove me to become a developer.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4"
              >
                <highlight.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-lg mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
            or sketching out the next big idea. I believe in writing code that not only works but tells a story.
          </p>
        </motion.div>
      </div>
    </section>
  );
}