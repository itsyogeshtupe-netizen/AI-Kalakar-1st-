/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { History, Award, Zap, ShieldCheck } from 'lucide-react';
import { STATS } from '../data';

export default function About() {
  const pillars = [
    {
      title: '10+ Years Creative Experience',
      description: 'Our senior directors and directors of photography bring traditional cinematic discipline to instruct artificial models seamlessly.',
      icon: History,
      color: 'text-gold-bright',
    },
    {
      title: 'AI Video Specialists',
      description: 'We do not just press click. Our technicians design custom model weights and neural text-to-sub-clip layers to control frames.',
      icon: Award,
      color: 'text-electric-blue',
    },
    {
      title: 'Fast Production Pipeline',
      description: 'Traditional corporate films take 60 days. Our synthetic production loop starts from prompt briefs to final delivery in days.',
      icon: Zap,
      color: 'text-[#A855F7]',
    },
    {
      title: 'Global Quality Standards',
      description: 'We deliver ultra-high resolutions up to 4K Cinema DCI, standardizing pixel counts and vocal elements for massive theater screens.',
      icon: ShieldCheck,
      color: 'text-[rgba(255,255,255,0.9)]',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 w-full bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background glow overlay */}
      <div className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-electric-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left copy column */}
          <div className="lg:col-span-5 space-y-8" id="about-intro-txt">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-gold-bright uppercase block mb-3">
                [ INTRODUCING AIKALAKAR ]
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white leading-tight"
              >
                We Create Stories <br />That Move People
              </motion.h2>
            </div>

            <p className="text-gray-400 leading-relaxed font-sans text-sm md:text-base">
              Aikalakar is a highly specialized, AI-powered creative agency designed to help brands, corporates, real estate developers, tourism boards, and visionary creators produce breathtaking, cinematic-quality videos.
            </p>

            <p className="text-gray-500 leading-relaxed font-sans text-xs md:text-sm">
              We replace massive crew logistics and endless rendering cycles with advanced prompt engineering and model pipelines. By aligning classic Hollywood dramatic narrative structures with neural video generators, we bring extreme high-end commercial ideas to life at lightspeed.
            </p>

            {/* Micro bento grid item for our focus */}
            <div className="border border-white/5 rounded-xl bg-white/[0.02] p-6 space-y-2">
              <span className="text-xs font-mono text-gold-bright">THE CREATIVE FORMULA</span>
              <p className="text-xs text-gray-400 leading-normal">
                {"Traditional Film Knowledge (Screenplay, Blocking, Camera Lenses) + State-Of-The-Art Neural Networks = Absolute Unbounded Imagination"}
              </p>
            </div>
          </div>

          {/* Right pillars list & metric indicators */}
          <div className="lg:col-span-7 space-y-12" id="about-metrics-list">
            
            {/* Metric counters banner */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="cinematic-glass border border-white/5 p-6 rounded-xl hover:border-gold-bright/20 transition-all duration-300"
                >
                  <span className="text-2xl md:text-4xl font-display font-semibold bg-gradient-to-r from-gold-bright to-gold-glowing bg-clip-text text-transparent block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-sans text-white font-medium block">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-gray-500 leading-normal block mt-1 font-sans">
                    {stat.subText}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Custom Interactive Pillars breakdown */}
            <div className="space-y-6">
              <span className="text-xs font-mono text-gray-500 block">
                [ THE FOUR CROWN PILLARS ]
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillars.map((pillar, idx) => {
                  const IconComponent = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] flex items-start space-x-4 transition-colors gold-border-glow"
                    >
                      <div className={`p-2.5 rounded-lg bg-black border border-white/10 ${pillar.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-xs md:text-sm font-display font-medium text-gray-200">
                          {pillar.title}
                        </h3>
                        <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
