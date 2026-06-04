/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Clock, MonitorPlay, Sparkles, X, ChevronRight, Cpu } from 'lucide-react';
import { PORTFOLIO } from '../data';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'AI Advertisements', label: 'AI Advertisements' },
    { value: 'Corporate Videos', label: 'Corporate Videos' },
    { value: 'Historical Projects', label: 'Historical Projects' },
    { value: 'Tourism Films', label: 'Tourism Films' },
    { value: 'Social Campaigns', label: 'Social campaigns' }
  ];

  const filteredPortfolio = activeCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(project => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background soft lighting */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-gold-bright/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[40vw] h-[40vw] bg-electric-blue/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0" id="portfolio-headline-container">
          <div className="text-left max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-3">
              [ EXPLORE PORTFOLIO SHOWCASE ]
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
              Aikalakar Masterpieces
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md md:text-right font-sans leading-relaxed">
            Overlooking absolute cinematic depth. High-end productions simulated across our key target industries. Click on any frame to inspect directing notes.
          </p>
        </div>

        {/* Categories Tab list */}
        <div
          className="flex flex-wrap items-center justify-start gap-2 mb-12 border-b border-white/5 pb-6 overflow-x-auto scrollbar-hide"
          id="portfolio-category-tabs"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-white/5 text-gold-bright border border-gold-bright/30 outline-none'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.03] border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-project-grid-container">
          <AnimatePresence mode="popLayout" className="pointer-events-auto">
            {filteredPortfolio.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5 hover:border-gold-bright/30 transition-all duration-300 cursor-pointer p-0 select-none shadow-xl shadow-black/50"
              >
                {/* Foreground Image */}
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Subtle noise pattern / overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300" />
                </div>

                {/* Simulated Hover Play Icon/Details */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  {/* Category tag */}
                  <div className="self-end bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono font-medium tracking-widest text-[#00E5FF] uppercase border border-white/10">
                    {project.category}
                  </div>

                  {/* Play circle trigger and bottom details */}
                  <div className="space-y-4">
                    {/* Pulsing play icon */}
                    <div className="w-10 h-10 rounded-full bg-gold-bright text-black flex items-center justify-center shadow-lg shadow-gold-bright/20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Play className="w-4 h-4 fill-black translate-x-0.5" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-gold-bright block font-medium">
                        {project.client}
                      </span>
                      <h3 className="text-base font-display font-medium text-white tracking-wide leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-1 truncate font-sans font-light">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated Scanner laser lines on card edge for AI tech feeling */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-bright to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Director Lightbox Modal Console */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-6 backdrop-blur-lg"
            id="portfolio-director-board-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl rounded-2xl cinematic-glass border border-white/10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/50">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 rounded-full bg-gold-bright animate-pulse" />
                  <span className="text-xs font-mono text-gray-400">AIKALAKAR // DIRECTORS_BOOTH</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:text-[#D4AF37] text-gray-400 transition-colors font-mono text-xs focus:outline-none"
                  aria-label="Close booth"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Inside Layout Content (Scrollable) */}
              <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Media display */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/5 shadow-inner">
                      <img
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <span className="p-1.5 bg-black/80 backdrop-blur-md rounded border border-white/10 text-[9px] font-mono text-[#00E5FF] tracking-widest uppercase">
                          {selectedProject.category}
                        </span>
                      </div>
                    </div>

                    {/* Metadata boxes */}
                    <div className="grid grid-cols-3 gap-2.5 font-mono text-[10px]">
                      <div className="p-3 bg-white/[0.01] border border-white/5 rounded-lg text-center">
                        <span className="text-gray-500 block mb-1">CLIENT NAME</span>
                        <span className="text-white font-medium truncate block">{selectedProject.client}</span>
                      </div>
                      <div className="p-3 bg-white/[0.01] border border-white/5 rounded-lg text-center">
                        <span className="text-gray-500 block mb-1">RUNNING TIME</span>
                        <span className="text-[#D4AF37] font-medium block flex items-center justify-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{selectedProject.duration}</span>
                        </span>
                      </div>
                      <div className="p-3 bg-white/[0.01] border border-white/5 rounded-lg text-center">
                        <span className="text-gray-500 block mb-1">ASPECT RATIO</span>
                        <span className="text-white font-medium block">{selectedProject.aspectRatio}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Case outline */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono text-gold-bright uppercase tracking-widest block mb-1">
                        PROJECT BRIEFCASE
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-medium text-white leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs text-gray-300 font-sans leading-relaxed">
                        {selectedProject.description}
                      </p>
                      {selectedProject.projectStory && (
                        <div className="p-5 bg-white/[0.01] border-l-2 border-gold-bright rounded-r-xl space-y-1.5">
                          <span className="text-[9px] font-mono text-gold-bright tracking-widest uppercase block">
                            THE OUTCOME STORY
                          </span>
                          <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                            {selectedProject.projectStory}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Technographics */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase block flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-electric-blue" />
                        <span>AI MODEL STACK UTILIZED</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-black border border-white/10 px-2.5 py-1 rounded text-[10px] font-mono text-gray-300 uppercase tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Prompt Console log inside styled console wrapper */}
                    {selectedProject.aiPromptSnippet && (
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase block flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                          <span>NEURAL PROMPT SYNTAX</span>
                        </span>
                        <div className="rounded-xl border border-white/10 bg-[#020202] text-[#A8FF60] font-mono p-4 text-xs overflow-x-auto space-y-1">
                          <span className="text-gray-500">// AIKALAKAR PROMPT COMPILER</span>
                          <p className="text-gray-300">
                            {'"'}{selectedProject.aiPromptSnippet}{'"'}
                          </p>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>

              {/* Action Button Footer */}
              <div className="px-6 py-4 bg-black/60 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-gray-500">
                  SECURE SEC_REF: #{selectedProject.id.toUpperCase()} • DEPLOYED MASTER VERIFIED
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-bright to-gold-muted text-black font-mono font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                >
                  START A SIMILAR PROJECT
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
