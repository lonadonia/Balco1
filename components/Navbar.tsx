import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo className="h-10 md:h-12" />
        
        <div className="flex items-center gap-4">
          <a href="tel:+4403300564554" className="hidden md:flex items-center gap-2 text-white hover:text-brand-accent transition-colors">
            <Phone size={18} />
            <span className="font-medium">03300 564554</span>
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold py-2 px-4 md:px-6 rounded-full transition-colors text-sm md:text-base shadow-[0_0_15px_rgba(132,204,22,0.3)]"
          >
            Enquire Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
