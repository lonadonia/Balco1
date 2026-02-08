import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.8)"]
  );
  
  const navBackdrop = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('enquire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor: navBackground, backdropFilter: navBackdrop }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? 'border-slate-800/50 py-4' : 'border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Logo className="h-10 md:h-12 w-auto" />
        
        <div className="flex items-center gap-8">
          <a href="tel:+4403300564554" className="hidden lg:flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
              <Phone size={14} />
            </div>
            <span className="font-medium tracking-wide text-sm">03300 564554</span>
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold py-3 px-6 md:px-8 rounded-full transition-all text-sm md:text-base shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]"
          >
            Enquire Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};