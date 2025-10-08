import { motion } from 'motion/react';
import { GitCommit, Calendar, MapPin, User, Hash, ChevronDown, ChevronRight, ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const [expandedCommits, setExpandedCommits] = useState<Set<string>>(new Set());
  
  const toggleCommit = (hash: string) => {
    setExpandedCommits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(hash)) {
        newSet.delete(hash);
      } else {
        newSet.add(hash);
      }
      return newSet;
    });
  };

  const commits = [
    {
      hash: 'a3f1b2c',
      message: 'school: MS in Applied Info Science & Info Systems – Connective Media',
      company: 'Cornell Tech',
      period: '2025 - Present',
      location: 'New York, NY',
      // description: 'Leading development of scalable web applications serving 100K+ users. Architecting microservices and mentoring junior developers.',
      technologies: ['Applied Machine Learning', 'AR/VR', 'Trustworthy AI', 'HCI'],
      type: 'school'
    },
    {
      hash: 'm4t9b2c',
      message: 'intern: Software Engineer Intern',
      company: 'Alibaba Group - Tmall Campus',
      period: 'Jul 2025 - Aug 2025',
      location: 'Hangzhou, China',
      description: 'Developed a React Native-based mobile app for Tmall, enhancing user engagement and operational efficiency.',
      technologies: ['Web Development', 'Typescript', 'Node.js', 'AI workflow', 'React', 'UI/UX', 'Responsive Design'],
      type: 'intern',
    },
    {
      hash: 'e7d9f4a',
      message: 'intern: Research Intern',
      company: 'Stanford University, Wisconsin Institute for Discovery',
      period: '2024 - 2025',
      location: 'Madison, WI',
      description: 'Conducted interdisciplinary research under Professor Robert Hawkins on the hidden structure of casual conversations,utilizing NLP, ML, web experiment development, and visualization techniques.',
      technologies: ['Web Development', 'Python', 'NLP', 'Data Visualization', 'Data Analysis', 'ML', 'Research', 'Data Collection'],
      type: 'intern',
      pdfLink: 'https://escholarship.org/content/qt15d3808f/qt15d3808f.pdf'
    },
    {
      hash: 'b8c5e1f',
      message: 'intern: Frontend Developer Intern',
      company: 'Shuhuan Technology',
      period: 'Jul 2023 - Aug 2023',
      location: 'Hangzhou, China',
      description: 'Developed a Vue.js-based Help Center and AI Assistant platform centralizing 400+ product documents, enhancing internal documentation efficiency and automating business task workflows.',
      technologies: ['JavaScript', 'Vue.js', 'HTML/CSS', 'Axios'],
      type: 'intern'
    },
    {
      hash: 'd2a6c9e',
      message: 'school: BS in Computer Science, Psychology, Game Design Certificate',
      company: 'University of Wisconsin-Madison',
      period: '2021 - 2025',
      location: 'Madison, WI',
      // description: 'Started my development journey building simple websites and learning modern frameworks. Gained foundation in web development best practices.',
      technologies: ['Operating Systems', 'Computer Graphics', 'Game Design', 'Database management', 'Big Data'],
      type: 'school'
    }
  ];

  const getCommitColor = (type: string) => {
    switch (type) {
      case 'school': return 'text-green-500';
      case 'intern': return 'text-blue-500';
      case 'refactor': return 'text-yellow-500';
      case 'init': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getCommitIcon = (type: string) => {
    switch (type) {
      case 'school': return '🎓';
      case 'intern': return '💻';
      case 'refactor': return '♻️';
      case 'init': return '🎉';
      default: return '🎓';
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Git Log --experience</h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey tracked like a version control history
          </p> */}
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-muted-foreground font-mono">terminal</span>
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                git log --oneline --graph
              </div>
            </div>

            {/* Commit History */}
            <div className="p-6 font-mono text-sm space-y-4">
              {commits.map((commit, index) => {
                const isExpanded = expandedCommits.has(commit.hash);
                
                return (
                  <motion.div
                    key={commit.hash}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    {/* Commit Line */}
                    <div 
                      className="flex items-start gap-3 mb-3 cursor-pointer hover:bg-secondary/20 rounded-lg p-2 -m-2 transition-colors"
                      onClick={() => toggleCommit(commit.hash)}
                    >
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <GitCommit className={`w-4 h-4 ${getCommitColor(commit.type)}`} />
                        <span className={`${getCommitColor(commit.type)}`}>
                          {commit.hash}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground">
                          {getCommitIcon(commit.type)} {commit.message}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </motion.div>
                    </div>

                    {/* Commit Details */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="ml-7 overflow-hidden"
                    >
                      <div className="bg-background/80 border border-border rounded-lg p-4 mb-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <User className="w-4 h-4 text-primary" />
                              <span className="text-primary font-medium">{commit.company}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{commit.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{commit.location}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                              {commit.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {commit.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: techIndex * 0.05
                              }}
                              whileHover={{ scale: 1.05 }}
                              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded font-sans"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* PDF Link */}
                        {commit.pdfLink && (
                          <div className="mt-4">
                            <motion.a
                              href={commit.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              whileHover={{ scale: 1.02 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Research Paper
                            </motion.a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Initial commit indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <GitCommit className="w-4 h-4" />
                <span className="text-muted-foreground">
                  ... (earlier commits hidden)
                </span>
              </motion.div>
            </div>

            {/* Terminal Footer */}
            <div className="px-4 py-3 bg-secondary/30 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>Showing 5 commits</span>
                <span>Type 'git log --help' for more options</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/ChangyiZhouResume.pdf"
            download="Zhou_Changyi_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
        
      </div>
    </section>
  );
}