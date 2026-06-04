/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent } from 'react';
import { Instagram, Youtube, Linkedin, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      id="main-agency-footer"
      className="bg-black border-t border-white/5 pt-16 pb-8 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Top Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo brand and details col */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToTop(); }} className="flex items-center space-x-3 group animate-transition">
              <div className="relative w-8 h-8 bg-gradient-to-tr from-gold-bright to-blue-500 rounded-sm rotate-45 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="w-4 h-4 bg-[#050505] rounded-full flex items-center justify-center -rotate-45">
                  <Sparkles className="w-2.5 h-2.5 text-gold-bright" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-base tracking-wider text-white">
                  AIKALAKAR
                </span>
                <span className="text-[8px] font-mono tracking-[0.25em] text-[#FFF]/40 uppercase group-hover:text-blue-400 transition-colors duration-300">
                  Where AI Meets Creativity
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-500 leading-relaxed font-sans max-w-sm">
              Helping elite brands, developers, institutions, and creative organizations construct cinema-grade video sequences and commercials instantly using generative neural pipelines.
            </p>

            {/* Social channels indicators using matching inline icons */}
            <div className="flex items-center space-x-4" id="footer-social-channels">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold-bright text-gray-400 hover:text-white flex items-center justify-center hover:bg-white/5 transition-all"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold-bright text-gray-400 hover:text-white flex items-center justify-center hover:bg-white/5 transition-all"
                aria-label="Watch our work on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold-bright text-gray-400 hover:text-white flex items-center justify-center hover:bg-white/5 transition-all"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick structural navigation links col */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-mono text-white tracking-widest uppercase block">
              QUICK SECTIONS
            </span>
            <ul className="space-y-2 text-xs">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href.substring(1))}
                    className="text-gray-400 hover:text-gold-bright transition-colors font-sans py-0.5 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Targeted services link index col */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono text-white tracking-widest uppercase block">
              OUR SCOPES
            </span>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• AI Commercial Ads & Promos</li>
              <li>• Corporate Presenter Profiles</li>
              <li>• Historical / Cultural Documentaries</li>
              <li>• Global Tourism Campaigns</li>
              <li>• Short Form Vertical Engagement</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright disclaimer row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-mono text-[#FFF]/20" id="footer-bottom-compliance-row">
          <div className="flex items-center space-x-1 uppercase tracking-widest text-[#FFF]/30">
            <span>© {new Date().getFullYear()} AIKALAKAR CREATIVE STUDIOS</span>
          </div>

          {/* Back to top scroll widget */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center space-x-2 text-[10px] font-mono text-gray-500 hover:text-gold-bright transition-colors focus:outline-none cursor-pointer"
            aria-label="Scroll back to top of screen"
          >
            <span>BACK TO DECK TOP</span>
            <span className="p-1 rounded bg-white/5 border border-white/10 group-hover:border-gold-bright transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
