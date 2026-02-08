import React from 'react';
import { Logo } from './Logo';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-8 mb-4" />
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Engineered safety solutions for the UK's leading sports environments. Trusted by schools, councils, and private facilities.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Cookies</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>&copy; {currentYear} Balco Global Ltd. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};
