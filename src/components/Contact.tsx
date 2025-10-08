import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, FileText, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // project: '',
    // urgent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - Replace with your actual values
      const serviceId = 'service_tih839k';
      const templateId = 'template_mf6rqof';
      const publicKey = 'n0CXrzIxag44FURS4';
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'cz578@cornell.edu', // Your email address
      }, publicKey);
      
      // Success
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      // Error
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cz578@cornell.edu',
      href: 'mailto:cz578@cornell.edu'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (312) 776-9626',
      href: 'tel:+13127769626'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Isaiah-zzz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/changyi-zhou', label: 'LinkedIn' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Let's Work Together</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Terminal-style Contact Info */}
            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-lg">
              {/* Terminal Header */}
              <div className="bg-secondary/30 border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">contact-info.json</span>
                </div>
              </div>

              {/* JSON-style Contact Info */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-3">
                  <div className="text-yellow-400">&#123;</div>
                  
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="pl-4"
                    >
                      <motion.a
                        href={info.href}
                        whileHover={{ x: 10 }}
                        className="block group cursor-pointer"
                      >
                        <span className="text-blue-400">"{info.label.toLowerCase()}"</span>
                        <span className="text-muted-foreground">: </span>
                        <span className="text-green-400 group-hover:text-green-300 transition-colors">
                          "{info.value}"
                        </span>
                        {index < contactInfo.length - 1 && <span className="text-muted-foreground">,</span>}
                      </motion.a>
                    </motion.div>
                  ))}
                  
                  <div className="text-yellow-400">&#125;</div>
                </div>
              </div>
            </div>

            {/* Social Links with Coding Theme */}
            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-lg">
              {/* Terminal Header */}
              <div className="bg-secondary/30 border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">social-links.js</span>
                </div>
              </div>

              {/* Code-style Social Links */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div>
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-foreground">socialLinks</span>{' '}
                    <span className="text-muted-foreground">=</span>{' '}
                    <span className="text-yellow-400">[</span>
                  </div>
                  
                  <div className="flex gap-3 pl-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-secondary/50 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 border border-border/50"
                        title={social.label}
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                  
                  <div className="text-yellow-400">];</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VS Code Style Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl overflow-hidden shadow-2xl">
              {/* VS Code Header */}
              <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-[#519aba]" />
                  <span className="text-[#cccccc]">contact-me.js</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {/* Code Content */}
                <div className="font-mono text-sm">
                  <div className="flex">
                    <div className="text-xs text-[#858585] pr-4 select-none flex flex-col">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div key={i + 1} className="h-6 flex items-center leading-6">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex-1 space-y-0">
                      {/* Line 1: const contactRequest = { */}
                      <div className="h-6 flex items-center leading-6">
                        <span className="text-[#569cd6]">const</span>{' '}
                        <span className="text-[#9cdcfe]">contactRequest</span>{' '}
                        <span className="text-[#cccccc]">=</span>{' '}
                        <span className="text-[#ffd700]">&#123;</span>
                      </div>
                      
                      {/* Line 2: name field */}
                      <div className="h-6 flex items-center leading-6 pl-4">
                        <span className="text-[#92c5f7]">name</span>
                        <span className="text-[#cccccc]">:</span>{' '}
                        <span className="text-[#ce9178]">"</span>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-transparent text-[#ce9178] border-none outline-none font-mono text-sm min-w-0 flex-1"
                          placeholder=" Your Name"
                          required
                          style={{ width: `${Math.max(formData.name.length * 8 + 20, 100)}px` }}
                        />
                        <span className="text-[#ce9178]">",</span>
                      </div>
                      
                      {/* Line 3: email field */}
                      <div className="h-6 flex items-center leading-6 pl-4">
                        <span className="text-[#92c5f7]">email</span>
                        <span className="text-[#cccccc]">:</span>{' '}
                        <span className="text-[#ce9178]">"</span>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-transparent text-[#ce9178] border-none outline-none font-mono text-sm min-w-0 flex-1"
                          placeholder=" your.email@example.com"
                          required
                          style={{ width: `${Math.max(formData.email.length * 8 + 20, 180)}px` }}
                        />
                        <span className="text-[#ce9178]">",</span>
                      </div>
                      
                      {/* Line 5: message start */}
                      <div className="h-6 flex items-center leading-6 pl-4">
                        <span className="text-[#92c5f7]">message</span>
                        <span className="text-[#cccccc]">:</span>{' '}
                        <span className="text-[#ffd700]">`</span>
                      </div>
                      
                      {/* Lines 6-9: message content */}
                      <div className="pl-4">
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-transparent text-[#ce9178] border-none outline-none font-mono text-sm w-full resize-none leading-6"
                          placeholder=" Tell me about your project ideas, timeline, budget, or any questions you have..."
                          rows={4}
                          required
                          style={{ minHeight: '96px' }}
                        />
                      </div>
                      
                      {/* Line 10: message end */}
                      <div className="h-6 flex items-center leading-6 pl-4">
                        <span className="text-[#ffd700]">`</span>
                        <span className="text-[#cccccc]">,</span>
                      </div>
                      
                      
                      {/* Line 12: closing brace */}
                      <div className="h-6 flex items-center leading-6">
                        <span className="text-[#ffd700]">&#125;</span>
                        <span className="text-[#cccccc]">;</span>
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="ml-1 text-[#cccccc]"
                        >
                          |
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Command Line Submit */}
                <motion.div
                  className="mt-6 pt-4 border-t border-[#3c3c3c]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="space-y-3">
                    {/* Command Line Prompt */}
                    {/* <div className="flex items-center gap-2 font-mono text-sm text-[#cccccc]">
                      <span className="text-[#569cd6]">alex@portfolio</span>
                      <span className="text-[#cccccc]">:</span>
                      <span className="text-[#6a9955]">~/contact</span>
                      <span className="text-[#cccccc]">$</span>
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-[#cccccc]"
                      >
                        |
                      </motion.span>
                    </div> */}
                    
                    {/* Success Indicator */}
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-3 flex items-center gap-2 text-green-600 text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Message sent successfully!</span>
                      </motion.div>
                    )}
                    
                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full group relative overflow-hidden bg-white text-black rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      )}
                      
                      <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-black/30 border-t-black dark:border-black/30 dark:border-t-black rounded-full"
                            />
                            <span className="font-mono">Sending message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span className="font-mono">Send Message</span>
                          </>
                        )}
                      </div>
                    </motion.button>

                    {/* Success/Error Animation Space */}
                    <motion.div
                      className="h-6 flex items-center justify-center font-mono text-sm"
                      initial={{ opacity: 0 }}
                    >
                      {/* This could show success/error messages */}
                    </motion.div>
                  </div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}