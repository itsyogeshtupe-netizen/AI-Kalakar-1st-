/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Calendar, Video, Sparkles, ChevronDown, CheckCircle } from 'lucide-react';
import { HERO_ASSET } from '../data';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlayingTrail, setIsPlayingTrail] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = entryWidth;
        height = entryHeight;
        canvas.width = entryWidth * window.devicePixelRatio;
        canvas.height = entryHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    });

    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    // Particle Setup
    const particlesCount = 70;
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }

    const particles: Particle[] = [];
    const colors = ['#D4AF37', '#00E5FF', '#A855F7', '#FFFFFF'];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * (parent?.clientWidth || 800),
        y: Math.random() * (parent?.clientHeight || 600),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Simple radial glow gradient at center
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.5
      );
      gradient.addColorStop(0, 'rgba(112, 0, 255, 0.05)');
      gradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.02)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update & Draw Particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections for nearby particles
        for (let j = idx + 1; j < particlesCount; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.strokeStyle = '#D4AF37';
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black pt-24"
    >
      {/* High-Performance Canvas for Interactivity */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Floating Ambient Glowing Orbs */}
      <div className="absolute top-1/4 right-[10%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-[5%] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-gold-bright/3 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 md:py-16">
        
        {/* Left Narrative Block */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-left-col">
          {/* Subtle Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Where AI Meets Creativity
            </span>
          </motion.div>

          {/* Large display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-white mb-6"
          >
            India{"'"}s Next Generation <br />
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-400">
              AI Video Production
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-white/40 max-w-lg leading-relaxed mb-8 font-sans"
          >
            Transforming complex ideas into cinematic reality through advanced artificial intelligence and high-end creative storytelling.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            id="hero-cta-group"
          >
            <button
              onClick={() => handleScrollToSection('contact')}
              className="px-8 py-3.5 border border-[#D4AF37] text-black bg-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-transparent hover:text-[#D4AF37] transition-all duration-300 rounded-none font-mono cursor-pointer"
            >
              Start Your Project
            </button>

            <button
              onClick={() => handleScrollToSection('portfolio')}
              className="px-8 py-3.5 border border-white/10 text-white hover:text-white hover:bg-white/5 hover:border-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-300 rounded-none font-mono cursor-pointer"
            >
              View Portfolio
            </button>
          </motion.div>

          {/* Trusted Badage/Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-8 mt-4 border-t border-white/5 pt-6"
            id="hero-trust-indicators"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white font-display">10+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Years Experience</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white font-display">250+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Global Projects</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-400 font-display">AI-Led</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Render Workflow</span>
            </div>
          </motion.div>
        </div>

        {/* Right Cinematic Mock-Visual Box */}
        <div className="lg:col-span-5 relative" id="hero-right-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent group"
          >
            <div className="absolute inset-0 bg-[#0F0F11] rounded-2xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/5] object-cover pointer-events-auto">
              <img
                src={HERO_ASSET}
                alt="Aikalakar Cinematic Visual"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Glowing Pulse Play Button */}
              <button
                onClick={() => setShowDemoModal(true)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gold-bright/90 backdrop-blur-sm flex items-center justify-center text-black shadow-2xl shadow-gold-bright/30 hover:scale-110 active:scale-95 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-bright z-10"
                aria-label="Play Agency Reel"
              >
                <Play className="w-7 h-7 fill-black translate-x-0.5" />
                <span className="absolute -inset-2 rounded-full border border-gold-bright/40 animate-ping pointer-events-none" />
              </button>

              {/* Status and Prompt overlay representing high technology */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl cinematic-glass border border-white/5">
                <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase block mb-1">
                  Active Scene Synthesis
                </span>
                <p className="text-xs text-gray-300 font-mono line-clamp-2">
                  {"[PROMPT] /vortex-synthesis: Cinematic shot of camera recording cosmic flow --gold and neon cyan lasers, 4k ultra precision."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative arrow scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer pointer-events-auto" onClick={() => handleScrollToSection('about')} id="scroll-hint-element">
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">EXPLORE STUDIO</span>
        <ChevronDown className="w-4 h-4 text-gold-bright animate-bounce" />
      </div>

      {/* Cinematic Modal Simulator */}
      <AnimatePresence>
        {showDemoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 backdrop-blur-md"
            id="agency-reel-modal"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl rounded-2xl cinematic-glass border border-white/10 p-1 overflow-hidden"
            >
              {/* Top Frame Control */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-gray-400 ml-3">AIKALAKAR_AGENCY_REEL.MP4</span>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="p-1 hover:text-white text-gray-400 font-mono text-xs transition-colors"
                >
                  [CLOSE X]
                </button>
              </div>

              {/* Simulation Screen */}
              <div className="relative aspect-video bg-black/80 rounded-b-xl overflow-hidden flex flex-col justify-between p-8">
                {/* Simulated playback visual overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08)_0%,transparent_70%)] animate-pulse" />
                
                {/* Tech stats floating */}
                <div className="flex justify-between items-start font-mono text-[10px] text-gray-400 z-10 w-full">
                  <div className="space-y-1">
                    <span className="block text-gold-bright">● RENDER ENGINE: LUMA_GEN_3</span>
                    <span className="block">RESOLUTION: 3840 X 2160 (4K Cinema)</span>
                    <span className="block">BITRATE: PRORES_422_HQ</span>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="block text-electric-blue">SOUND: ATMOS_SURROUND_5.1</span>
                    <span className="block">SEED_REFERENCE: #791040529</span>
                  </div>
                </div>

                {/* Subtitle / Narration card simulation */}
                <div className="self-center flex flex-col items-center justify-center space-y-4 max-w-xl text-center z-10 my-auto py-12">
                  <span className="p-2 border border-gold-bright/30 bg-gold-bright/5 rounded-md inline-block w-fit">
                    <Video className="w-6 h-6 text-gold-bright animate-pulse" />
                  </span>
                  <p className="text-lg md:text-xl font-display text-white tracking-wide">
                    {"\"Where historical legends meet futuristic visuals. We don't just generate frames, we synthesize human heartbeats.\""}
                  </p>
                  <span className="text-xs text-gray-400 font-mono">
                    Scene Sync Pipeline complete in 0.08s
                  </span>
                </div>

                {/* Play bar control simulation */}
                <div className="w-full space-y-2 z-10">
                  <div className="h-1.5 w-full bg-white/10 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[44%] bg-gradient-to-r from-gold-bright to-electric-blue rounded-full" />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                    <span>0:32 / 1:15</span>
                    <span className="flex items-center space-x-1 text-gold-bright">
                      <CheckCircle className="w-3 h-3" />
                      <span>HD STREAM STABLE</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
