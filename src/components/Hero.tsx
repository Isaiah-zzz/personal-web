import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Full Stack Developer",
    "AI & Machine Learning Enthusiast",
    "Student @ Cornell Tech",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Human-Centered Technologist"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(
              currentTitle.substring(0, displayText.length + 1),
            );
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(
              displayText.substring(0, displayText.length - 1),
            );
          } else {
            setIsDeleting(false);
            setCurrentIndex(
              (prev) => (prev + 1) % titles.length,
            );
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-primary/70 font-mono">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl">
                Changyi{" "}
                <span className="text-primary">Zhou</span>
              </h1>
            </motion.div>

            <div className="h-20 flex items-center">
              <span className="text-xl md:text-2xl text-muted-foreground">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="ml-1 text-primary"
                >
                  |
                </motion.span>
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-md"
            >
              Passionate about developing reliable, scalable software that transforms ideas into real-world solutions through clean, efficient, and maintainable code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors text-center"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 0.5, 0, -0.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 blur-xl -z-10" />

                  {/* Main image with simple rounded border */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-gradient-to-br from-primary/30 via-blue-500/30 to-purple-500/30 shadow-2xl">
                    <img
                      src="src/assets/PFP.JPG"
                      alt="Changyi Zhou"
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Subtle overlay for effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-primary/5 pointer-events-none" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Terminal Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 font-mono text-sm shadow-lg z-20"
              >
                <span className="text-green-500">$</span> whoami
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 2,
                }}
                className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 font-mono text-sm shadow-lg z-20"
              >
                <span className="text-blue-500">const</span>{" "}
                <span className="text-yellow-500">dev</span> ={" "}
                <span className="text-green-500">
                  'creative'
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="absolute top-1/2 -left-8 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-2 font-mono text-xs shadow-lg z-20"
              >
                <span className="text-purple-500">{"</>"}</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 1.5,
                }}
                className="absolute top-1/4 -right-8 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-2 font-mono text-xs shadow-lg z-20"
              >
                <span className="text-red-500">npm</span>{" "}
                <span className="text-gray-500">run</span>{" "}
                <span className="text-green-500">dev</span>
              </motion.div>

              {/* Subtle particle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, -200],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute w-1 h-1 bg-primary/60 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: "10%",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}