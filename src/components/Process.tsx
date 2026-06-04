/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquareShare, PenTool, Cpu, Mic, Video, CheckSquare, Check, Calendar } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

const iconMap: Record<string, any> = {
  MessageSquareShare,
  PenTool,
  Cpu,
  Mic,
  Video,
  CheckSquare,
};

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="relative py-24 bg-black border-t border-white/5 overflow-hidden"
    >
      {/* Background visual details */}
      <div className="absolute top-[10%] left-[-15%] w-[35vw] h-[35vw] bg-electric-blue/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="process-headline-container">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-3 animate-pulse">
            [ INDUSTRIAL WORKFLOW ROADMAP ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Our Render Pipeline
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed font-sans">
            How we translate arbitrary sketches or concepts into spectacular award-winning video masters in exactly 7 days.
          </p>
        </div>

        {/* Timeline Sequence List */}
        <div className="max-w-4xl mx-auto relative border-l border-white/10 ml-4 md:ml-32 space-y-12" id="process-steps-list-container">
          
          {PROCESS_STEPS.map((stepItem, idx) => {
            const IconComponent = iconMap[stepItem.icon] || MessageSquareShare;
            const isHovered = hoveredStep === stepItem.step;

            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredStep(stepItem.step)}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative pl-10 md:pl-16 group"
              >
                
                {/* Micro circle node on the center axis line */}
                <span className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-[#1C1C1E] border border-white/20 group-hover:border-gold-bright group-hover:bg-gold-bright transition-all duration-300 z-20" />

                {/* Left Floating Relative Calendar Indicator */}
                <div className="hidden md:block absolute -left-28 top-3 text-right w-20">
                  <span className="text-[10px] font-mono tracking-widest text-gold-bright font-semibold uppercase block">
                    {stepItem.duration}
                  </span>
                  <span className="text-[9px] text-gray-500 font-mono block">PHASE_0{stepItem.step}</span>
                </div>

                {/* Primary Step Plate Card */}
                <div className={`cinematic-glass border rounded-xl p-6 md:p-8 transition-all duration-300 relative ${
                  isHovered ? 'border-gold-bright/30 bg-white/[0.02]' : 'border-white/5 bg-white/[0.005]'
                }`}>
                  
                  {/* Floating index */}
                  <div className="absolute top-6 right-6 text-2xl md:text-4xl font-display font-light text-white/5 font-semibold group-hover:text-white/10 select-none">
                    0{stepItem.step}
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-gold-bright group-hover:text-electric-blue transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      {/* Mobile duration fallback label */}
                      <span className="inline-block md:hidden text-[9px] font-mono text-gold-bright uppercase tracking-wider mb-0.5">
                        {stepItem.duration} • Stage 0{stepItem.step}
                      </span>
                      <h3 className="text-base md:text-lg font-display font-medium text-white group-hover:text-gold-bright transition-colors">
                        {stepItem.title}
                      </h3>
                    </div>
                  </div>

                  {/* description summary */}
                  <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed mb-6">
                    {stepItem.description}
                  </p>

                  {/* Deliverables boxes */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-gray-500 tracking-wider block">
                      KEY DELIVERABLES & OUTCOMES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {stepItem.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center space-x-2 text-[11px] text-gray-300 font-sans font-light">
                          <span className="w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-bright">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
