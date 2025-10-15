import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Album Collage Maker',
      description: 'A modern e-commerce solution with secure payments and real-time inventory management.',
      image: '/ai-collage-spiral-clean.png',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/Isaiah-zzz/Album-Collage',
      live: 'https://collage.isaiahzzz.dev/',
      featured: false
    },
    {
      id: 2,
      title: '2D Platformer (Against The Grain)',
      description: '2D platformer that combines exploration, puzzle-solving, and combat mechanics with original music and artwork.',
      image: '/ATG.jpg',
      tech: ['C#', 'Unity', 'Aseprite', 'LDtk'],
      github: 'https://github.com/Isaiah-zzz/ATG',
      live: 'https://github.com/Isaiah-zzz/ATG',
      featured: false
    },
    {
      id: 3,
      title: 'UNIX Shell',
      description: 'WSH (Wisconsin Shell) is a command-line interpreter written in C that provides a Unix-like shell environment with support for process management, built-in commands, variable handling, and I/O redirection.',
      image: '/shell.jpeg',
      tech: ['C', 'OS', 'Shell'],
      github: 'https://github.com/Isaiah-zzz/unix-shell',
      live: 'https://github.com/Isaiah-zzz/unix-shell',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio with animated interactions and responsive design.',
      image: '/personalweb.png',
      tech: ['React', 'Typescript', 'Tailwind CSS', 'Motion', 'UI Libraries'],
      github: 'https://github.com/Isaiah-zzz/personal-web',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Heap File Manager',
      description: 'This project builds a Heap File Manager for Minirel DBMS, featuring file operations, concurrency, error handling, and flexible data type support.',
      image: '/database.jpeg',
      tech: ['C++', 'Database', 'Object-Oriented Programming', 'Multi-threaded Concurrency'],
      github: 'https://github.com/Isaiah-zzz/CS564-Stage4',
      live: 'https://github.com/Isaiah-zzz/CS564-Stage4',
      featured: false
    },
    {
      id: 6,
      title: 'Computer Graphics Projects',
      description: 'Series of computer graphics projects that I have worked on. Including: canvas animation, shader, and more.',
      image: '/roundabout.png',
      tech: ['JavaScript', 'WebGL', 'Animations', 'ML'],
      github: 'https://github.com/Isaiah-zzz/Computer-Graphics',
      live: 'https://graphicsprojects.netlify.app/',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Projects</h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring various technologies and creative solutions.
          </p> */}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                />

                {/* Action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  className="absolute top-4 right-4 flex gap-2"
                >
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                </motion.div>

                {/* Featured badge */}
                {project.featured && (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="absolute top-4 left-4 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full"
                  >
                    ⭐ Featured
                  </motion.div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl">{project.title}</h3>
                  <motion.div
                    animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                    className="text-primary"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (index * 0.1) + (techIndex * 0.05) 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(var(--primary), 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg"
          >
            <span>View All Projects</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}