/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Building2, Share2, Wand2, Compass, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, any> = {
  Film,
  Building2,
  Share2,
  Wand2,
  Compass,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { value: 'all', label: 'ALL SERVICES' },
    { value: 'Production', label: 'AI PRODUCTION' },
    { value: 'Corporate', label: 'CORPORATE' },
    { value: 'Social', label: 'SOCIAL VERTICAL' },
    { value: 'Creative', label: 'CREATIVE LABS' },
    { value: 'Documentary', label: 'CINEMA' },
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES
    : SERVICES.filter(service => service.category === activeTab);

  return (
    <section
      id="services"
      className="relative py-24 bg-black border-t border-white/5 overflow-hidden"
    >
      {/* Background neon laser graphics */}
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] bg-electric-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="services-headline-container">
          {/* New Active Pulsing Badge from Design HTML */}
          <div className="flex justify-center mb-6">
            <div className="py-1.5 px-4 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center gap-2.5 backdrop-blur-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
              <p className="text-[10px] font-mono tracking-widest font-semibold text-[#D4AF37] uppercase italic">New: Social Media Viral Engine</p>
            </div>
          </div>

          <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase block mb-3">
            [ AGENCY CORE CAPABILITIES ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Our Synthetic Services
          </h2>
          <p className="text-sm text-white/45 mt-4 leading-relaxed font-sans">
            Pushing the frontier of digital screen visualizers. Select a capability to view detailed technical features and custom prompt pipelines.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12 border-b border-white/5 pb-6"
          id="services-tab-list"
        >
          {categories.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setExpandedId(null);
              }}
              className={`px-5 py-2.5 rounded-none text-[10px] font-mono tracking-[0.2em] transition-all cursor-pointer border ${
                activeTab === tab.value
                  ? 'border-gold-bright text-gold-bright bg-[#D4AF37]/5 font-semibold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Showcase Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-cards-grid">
          <AnimatePresence mode="popLayout" className="pointer-events-auto">
            {filteredServices.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              const isExpanded = expandedId === service.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  key={service.id}
                  className={`rounded-xl transition-all duration-300 pointer-events-auto p-[1px] ${
                    isExpanded
                      ? 'bg-gradient-to-br from-gold-bright via-blue-500 to-transparent md:col-span-2 lg:col-span-3'
                      : 'bg-white/5 border border-white/10 hover:border-gold-bright/35 backdrop-blur-xl'
                  }`}
                >
                  {/* Outer Frame Wrapper */}
                  <div className="bg-[#050505]/95 rounded-xl h-full p-6 md:p-8 flex flex-col justify-between space-y-6">
                    
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-gold-bright">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-[#00E5FF] uppercase tracking-widest block mb-0.5">
                            {service.category} Core
                          </span>
                          <h3 className="text-lg font-display font-medium text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      
                      <span className="px-2.5 py-1 rounded bg-white/5 text-[9px] font-mono text-gray-500 uppercase tracking-widest border border-white/5">
                        SEC_REF_{service.id.toUpperCase()}_4
                      </span>
                    </div>

                    {/* Short & Long descriptions */}
                    <div className="space-y-3">
                      <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed">
                        {service.shortDesc}
                      </p>
                      
                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-white/5"
                        >
                          {service.longDesc}
                        </motion.p>
                      )}
                    </div>

                    {/* Bullet capabilities (Ads, Shorts, presentations, records, etc.) */}
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-mono text-gray-500 tracking-wider block">
                        CINEMATIC CORE WORKFLOWS
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-bright flex-shrink-0" />
                            <span className="font-sans font-light truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expand Detail Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : service.id)}
                        className="text-[11px] font-mono text-gold-bright hover:text-white transition-colors flex items-center space-x-1 uppercase tracking-widest cursor-pointer"
                      >
                        <span>{isExpanded ? 'Collapse technical specs' : 'Explore technical pipeline'}</span>
                        <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : 'rotate-0'}`} />
                      </button>

                      <span className="text-[10px] font-mono text-gray-600 block">
                        LATENCY: LIVE_SYNTH
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
