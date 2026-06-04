/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, 'hero')}
          className="flex items-center space-x-3 group focus:outline-none"
          id="header-logo-container"
        >
          <div className="relative w-8 h-8 bg-gradient-to-tr from-gold-bright to-blue-500 rounded-sm rotate-45 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="w-4 h-4 bg-[#050505] rounded-full flex items-center justify-center -rotate-45">
              <Sparkles className="w-2.5 h-2.5 text-gold-bright group-hover:text-blue-400 transition-colors duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-lg tracking-wider text-white">
              AIKALAKAR
            </span>
            <span className="text-[8px] font-mono tracking-[0.25em] text-[#FFF]/40 uppercase group-hover:text-blue-400 transition-colors duration-300">
              Where AI Meets Creativity
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href.substring(1))}
              className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 relative py-1 focus:outline-none group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-bright transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block" id="header-cta-container">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="px-6 py-2 border border-gold-bright text-gold-bright text-[10px] uppercase font-bold tracking-[0.2em] bg-transparent hover:bg-gold-bright hover:text-black transition-all duration-300 inline-block rounded-none font-mono"
          >
            START YOUR PROJECT
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-gold-bright focus:outline-none p-2"
          aria-label="Toggle mobile menu"
          id="mobile-menu-toggle-btn"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-0 top-[60px] bg-[#050505]/95 backdrop-blur-xl z-40 flex flex-col justify-between py-12 px-6 border-t border-white/5 animate-fade-in"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href.substring(1))}
                className="text-2xl font-display font-light text-gray-200 hover:text-gold-bright transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="w-full text-center py-4 border border-gold-bright text-gold-bright font-mono font-bold text-xs tracking-[0.2em] uppercase transition-all"
            >
              START YOUR PROJECT
            </a>
            <div className="text-center text-xs text-gray-500 font-mono">
              Where AI Meets Creativity • Aikalakar
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
