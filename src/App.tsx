/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-[#F3F4F6] selection:bg-gold-bright selection:text-black antialiased overflow-x-hidden">
      {/* Sleek aesthetic premium top lines */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-bright via-electric-blue to-[#A855F7] z-50 pointer-events-none" />

      {/* Floating Header */}
      <Header />

      {/* Primary Landing Content */}
      <main className="relative flex flex-col items-center w-full">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer bar */}
      <Footer />
    </div>
  );
}
