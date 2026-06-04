/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BrainCircuit, Sparkles, Zap, Coins, Infinity, Clapperboard } from 'lucide-react';
import { VALUES } from '../data';

const iconMap: Record<string, any> = {
  BrainCircuit,
  Sparkles,
  Zap,
  Coins,
  Infinity,
  Clapperboard,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background flare */}
      <div className="absolute bottom-[-10%] right-[5%] w-[45vw] h-[45vw] bg-electric-violet/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="why-choose-headline-container">
          <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase block mb-3 animate-pulse">
            [ OUTSTANDING DIFFERENTIATOR INDEX ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Why Visionaries Choose Us
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed font-sans">
            We bypass traditional filming bottlenecks to deliver unprecedented artistic liberty, rendering hyper-unlocked aesthetics on-demand.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6" id="why-choose-grid-container">
          {VALUES.map((value, idx) => {
            const IconComponent = iconMap[value.icon] || Sparkles;
            
            // Define custom styles and grid layouts for bento asymmetry
            // Items 0 and 5 are larger (span 3), items 1, 2, 3, 4 are span 2
            let flexClasses = 'md:col-span-3';
            if (idx === 1 || idx === 2 || idx === 3 || idx === 4) {
              flexClasses = 'md:col-span-3 lg:col-span-2';
            }

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`${flexClasses} cinematic-glass border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-8 hover:bg-white/[0.02] hover:border-gold-bright/20 gold-border-glow transition-all duration-300 relative group overflow-hidden`}
              >
                {/* Micro spot highlight reflection inside */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-bright/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* top container */}
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-gold-bright">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-display font-medium text-white tracking-wide">
                    {value.title}
                  </h3>
                </div>

                {/* description */}
                <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed">
                  {value.description}
                </p>

                {/* Dynamic grid marker in absolute corners representing luxury interface */}
                <div className="absolute bottom-3 right-3 text-[9px] font-mono text-gray-700 select-none group-hover:text-gold-bright/35 transition-colors">
                  CF_METRIC_0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
