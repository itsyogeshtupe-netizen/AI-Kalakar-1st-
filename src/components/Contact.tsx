/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Send, Sparkles, Sliders, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: 'AI Advertisements',
    details: '',
  });

  // Estimator parameters
  const [runtimeSeconds, setRuntimeSeconds] = useState(30);
  const [renderingEngine, setRenderingEngine] = useState('Luma Gen-3'); // Luma Gen-3, Sora Premium, Kling Cinema
  const [narrationAccent, setNarrationAccent] = useState('Deep Cinema Male'); // Deep Cinema Male, Crisp Corporate Female, Historical Narrator
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Simple formula for estimation
  const frameCount = runtimeSeconds * 24; // 24 FPS
  let costEstimatorMin = runtimeSeconds * 1200;
  let costEstimatorMax = runtimeSeconds * 1800;

  if (renderingEngine === 'Sora Premium') {
    costEstimatorMin = runtimeSeconds * 2200;
    costEstimatorMax = runtimeSeconds * 3200;
  } else if (renderingEngine === 'Kling Cinema') {
    costEstimatorMin = runtimeSeconds * 1600;
    costEstimatorMax = runtimeSeconds * 2400;
  }

  // Format currency
  const formatINR = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please state your name and email to initialize your campaign brief.');
      return;
    }
    setShowSuccessModal(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black border-t border-white/5 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-[-10%] w-[35vw] h-[35vw] bg-gold-bright/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="contact-headline-container">
          <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase block mb-3 animate-pulse">
            [ SCHEDULE CONSULTATION CALL ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Let{"'"}s Build Something Extraordinary
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed font-sans">
            Whether you want a high-impact advertising commercial, industrial film, or viral content, we synthesize stories that translate directly into growth.
          </p>
        </div>

        {/* Contact form + Estimator split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-split-panels">
          
          {/* Left panel: Form */}
          <div className="lg:col-span-6 flex flex-col justify-between" id="contact-form-side">
            <div className="cinematic-glass border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 h-full flex flex-col justify-between">
              
              <div>
                <span className="text-[10px] font-mono text-gold-bright uppercase tracking-widest block mb-4">
                  01. FILL YOUR CAMPAIGN DETAILS
                </span>
                <span className="text-xs text-gray-400 block mb-6 font-sans">
                  Submit a brief synopsis of your creative visions. Our pipeline directors will analyze it and construct pre-visualization storyboard frames to present on our first call.
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-400 tracking-wider block" htmlFor="form-name">
                      YOUR NAME *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Yogesh Tupe"
                      className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 px-4 text-xs font-sans text-white placeholder-gray-600 focus:border-gold-bright focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-400 tracking-wider block" htmlFor="form-company">
                      COMPANY NAME
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Aureum Brands"
                      className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 px-4 text-xs font-sans text-white placeholder-gray-600 focus:border-gold-bright focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-400 tracking-wider block" htmlFor="form-phone">
                      PHONE NUMBER
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 px-4 text-xs font-sans text-white placeholder-gray-600 focus:border-gold-bright focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-400 tracking-wider block" htmlFor="form-email">
                      CORP EMAIL ADDRESS *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. creative@aureum.com"
                      className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 px-4 text-xs font-sans text-white placeholder-gray-600 focus:border-gold-bright focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 tracking-wider block" htmlFor="form-industry">
                    TARGET OUTLET FORMAT & CATEGORY
                  </label>
                  <select
                    id="form-industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 px-4 text-xs font-mono text-gray-300 focus:border-gold-bright focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="AI Advertisements">AI Commercial Ads & Promos</option>
                    <option value="Corporate Videos">Corporate Presenter & Profiles</option>
                    <option value="Historical Projects">Historical / Cultural Documentary</option>
                    <option value="Tourism Films">Global Tourism Film</option>
                    <option value="Social Campaigns">Instagram Reels / Short Form Vertical</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 tracking-wider block" htmlFor="form-details">
                    PROJECT IDEAS & TARGET DETAILS
                  </label>
                  <textarea
                    id="form-details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="We want to create a luxury advertisement depicting liquid gold simulation for cosmetic rebranding..."
                    className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 px-4 text-xs font-sans text-white placeholder-gray-600 focus:border-gold-bright focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full relative group overflow-hidden bg-gradient-to-r from-gold-bright to-gold-muted text-black py-4 rounded-lg font-mono font-medium text-xs tracking-widest uppercase cursor-pointer hover:scale-[1.01] active:scale-95 transition-all mt-4"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Send className="w-3.5 h-3.5 fill-black" />
                    <span>Get Free Consultation</span>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </button>
              </form>

            </div>
          </div>

          {/* Right panel: Live estimator */}
          <div className="lg:col-span-6 flex flex-col justify-between" id="contact-estimator-side">
            <div className="cinematic-glass border border-white/10 rounded-2xl p-6 md:p-8 space-y-8 h-full flex flex-col justify-between">
              
              <div>
                <span className="text-[10px] font-mono text-electric-blue uppercase tracking-widest block mb-4">
                  02. AI PIPELINE CONFIGURATOR
                </span>
                <span className="text-xs text-gray-400 block mb-6 font-sans">
                  Synthesize cinematic configurations in real-time. Tune video running times, models, and acoustic narrations to compute instant estimations.
                </span>
              </div>

              {/* Sliders and radio selectors */}
              <div className="space-y-6">
                
                {/* Duration Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center font-mono text-[10px]">
                    <span className="text-gray-400">DESIRED SCREEN RUNTIME</span>
                    <span className="text-gold-bright font-semibold">{runtimeSeconds} SECONDS</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="180"
                    step="5"
                    value={runtimeSeconds}
                    onChange={(e) => setRuntimeSeconds(Number(e.target.value))}
                    className="w-full accent-gold-bright h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-gray-600">
                    <span>15S (Short Ad)</span>
                    <span>90S (Teaser)</span>
                    <span>180S (Cinema)</span>
                  </div>
                </div>

                {/* Render Engine Selector */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider block">
                    NEURAL RENDER ENGINE LAYER
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Luma Gen-3', 'Kling Cinema', 'Sora Premium'].map((engine) => (
                      <button
                        key={engine}
                        type="button"
                        onClick={() => setRenderingEngine(engine)}
                        className={`py-3 px-1 rounded-lg text-[10px] font-mono text-center border transition-all cursor-pointer ${
                          renderingEngine === engine
                            ? 'border-gold-bright text-gold-bright bg-gold-bright/5'
                            : 'border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {engine}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accent Selection */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider block">
                    SYNTHESIZED NARRATION WAVEFORM
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Deep Cinema Male', 'Crisp Corp Female', 'Docu Narrator'].map((voice) => (
                      <button
                        key={voice}
                        type="button"
                        onClick={() => setNarrationAccent(voice)}
                        className={`py-3 px-1 rounded-lg text-[10px] font-mono text-center border transition-all cursor-pointer ${
                          narrationAccent === voice
                            ? 'border-electric-blue text-electric-blue bg-electric-blue/5'
                            : 'border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {voice}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Dynamic computed scoreboard */}
              <div className="rounded-xl border border-white/5 bg-black/60 p-5 space-y-4 pt-6 mt-6">
                <span className="text-[9px] font-mono text-gray-500 tracking-widest block">
                  ESTIMATED COMPLIANCE REPORT // SEC_CALCS
                </span>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[8px] font-mono text-gray-500 block">RENDER DCI FRAMES</span>
                    <span className="text-sm font-mono text-white block mt-0.5">{frameCount} Single Cuts</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-gray-500 block">EXPECTED LATENCY</span>
                    <span className="text-sm font-mono text-[#00E5FF] block mt-0.5">Under 5 Days</span>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-[8px] font-mono text-gray-500 block">VOICE FREQUENCY</span>
                    <span className="text-sm font-mono text-white block mt-0.5">48KHz Studio Master</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 block">ESTIMATED PRODUCTION COST</span>
                    <span className="text-sm font-sans tracking-wide text-gray-400 block mt-0.5">
                      Does not exceed physical scopes
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-display font-medium text-gold-bright block leading-tight">
                      {formatINR(costEstimatorMin)}
                    </span>
                    <span className="text-[9px] font-mono text-gray-500 block mt-0.5">
                      Estimative Campaign Range
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Campaign proposal Success Overlay Dialog */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 flex items-center justify-center p-6 backdrop-blur-xl"
            id="proposal-synchronized-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="max-w-xl w-full cinematic-glass border border-gold-bright/30 rounded-2xl p-8 text-center space-y-6"
            >
              <div className="w-14 h-14 rounded-full bg-gold-bright/10 border border-gold-bright/35 flex items-center justify-center text-gold-bright mx-auto animate-pulse">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gold-bright uppercase tracking-widest block">
                  PROPOSAL PROTOCOL COMPILED
                </span>
                <h3 className="text-2xl font-display font-medium text-white tracking-tight">
                  Briefing Synchronized!
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  Excellent choice. We have captured your campaign parameters. Our senior director will schedule a call with you to map storyboard previews.
                </p>
              </div>

              {/* summary readout */}
              <div className="rounded-xl bg-black border border-white/5 p-5 text-left font-mono text-[11px] space-y-2.5">
                <p className="border-b border-white/5 pb-2 text-gray-500 leading-none uppercase text-[8px]">
                  Configured Brief Readout
                </p>
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact:</span>
                  <span className="text-white font-medium">{formData.name} ({formData.email})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Industry:</span>
                  <span className="text-white font-medium">{formData.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Config:</span>
                  <span className="text-gold-bright font-medium">{runtimeSeconds}s @ {renderingEngine}</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-2 text-[10px]">
                  <span className="text-[#00E5FF] font-semibold">Max Frame Range:</span>
                  <span className="text-white font-semibold">{frameCount} Frames</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  setFormData({
                    name: '',
                    company: '',
                    phone: '',
                    email: '',
                    industry: 'AI Advertisements',
                    details: '',
                  });
                }}
                className="w-full py-3 rounded-lg bg-white/5 border border-white/10 hover:border-gold-bright text-xs font-mono font-medium tracking-widest uppercase transition-colors cursor-pointer"
              >
                DISMISS SYSTEM BRIEF
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
