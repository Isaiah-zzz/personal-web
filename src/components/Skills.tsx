import { motion } from 'motion/react';
import { Code, Database, Settings, Palette, Globe, Smartphone, Brain, Shield } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        'React', 'Next.js', 'Vue.js',
        'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3',
        'Tailwind CSS', 'UI Libraries', 'Framer Motion', 'GSAP', 'Unity'
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        'Node.js', 'Express.js', 'MySQL', 'Redis',
        'REST APIs', 'Java', 'Python', 'Spring Boot', 'C#', 'Docker', 'GCP'
      ]
    },
    // {
    //   title: 'Mobile & Desktop',
    //   icon: Smartphone,
    //   skills: [
    //     'React Native', 'Flutter', 'Ionic', 'Cordova',
    //     'Electron', 'PWA', 'Native iOS', 'Native Android',
    //     'Expo', 'Xamarin', 'Capacitor', 'Tauri'
    //   ]
    // },
    // {
    //   title: 'DevOps & Tools',
    //   icon: Settings,
    //   skills: [
    //     'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions',
    //     'AWS', 'Google Cloud', 'Azure', 'Vercel',
    //     'Nginx', 'Apache', 'Linux', 'Git',
    //     'Webpack', 'Vite', 'Babel', 'ESLint'
    //   ]
    // },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      skills: [
        'Photoshop',
        'User Research', 'Wireframing', 'Prototyping', 'Responsive Design', 'Game Design', 'Maya'
      ]
    },
    {
      title: 'AI & Data',
      icon: Brain,
      skills: [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn',
        'OpenAI API', 'Hugging Face', 'Pandas', 'NumPy',
        'Jupyter', 'Machine Learning',
        'Natural Language Processing',
      ]
    },
    // {
    //   title: 'Web Technologies',
    //   icon: Globe,
    //   skills: [
    //     'WebAssembly', 'WebRTC', 'Service Workers', 'Web APIs',
    //     'SEO Optimization', 'Performance Optimization', 'CDN', 'Caching',
    //     'Responsive Design', 'Cross-browser Compatibility', 'Web Standards', 'Accessibility',
    //     'Progressive Web Apps', 'Single Page Applications', 'Server-Side Rendering', 'Static Site Generation'
    //   ]
    // }
  ];

  const currentlyLearning = [
    'Machine Learning', 'AR/VR', 'AI Security', 'Human-Centered Design'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Technical Expertise</h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set across the full development stack, from design to deployment.
          </p> */}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.05 }}
                whileHover={{ y: -2 }}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CategoryIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (categoryIndex * 0.05) + (skillIndex * 0.02)
                      }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-3 py-1.5 bg-secondary/70 text-secondary-foreground text-sm rounded-full border border-border hover:bg-accent hover:border-primary/30 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5 rounded-xl p-8 border border-border mb-16"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl mb-2">Currently Expanding</h3>
            {/* <p className="text-muted-foreground text-sm">
              Always learning and staying current with emerging technologies.
            </p> */}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyLearning.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-all duration-300 cursor-default"
              >
                <span className="text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}