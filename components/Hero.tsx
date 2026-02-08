import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0">
        {/* Deep gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#0f2a30] to-brand-dark opacity-90" />
        
        {/* Abstract Geometric Lines (Sports Court Inspired) */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 Q 250 50 500 100 T 1000 100" stroke="white" strokeWidth="2" fill="none" />
          <path d="M0 300 Q 300 200 600 300 T 1200 300" stroke="#84cc16" strokeWidth="2" fill="none" />
          <circle cx="80%" cy="20%" r="300" stroke="#115e59" strokeWidth="1" fill="none" />
          <circle cx="10%" cy="80%" r="200" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>

        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

        {/* Decorative Bottom Shape - Fully Visible */}
        <motion.img 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          src="https://i.ibb.co/4gCFcQr0/imgi-19-case-study-shape-bottom.png" 
          alt="" 
          className="absolute bottom-[-5%] right-[-5%] w-[90%] md:w-[60%] lg:w-[50%] pointer-events-none select-none z-0 object-contain mix-blend-screen opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1 rounded-full bg-brand-teal/30 border border-brand-teal/50 text-brand-accent text-sm font-semibold tracking-wide uppercase mb-2">
              UK Manufacturer
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Safer Spaces for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">
                High-Impact Sports
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Premium, UK-made wall padding engineered for safety in sports halls, arenas, and schools. Protect your athletes with professional-grade impact solutions.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold text-lg py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(132,204,22,0.4)] transition-colors flex items-center justify-center gap-2 group"
              >
                Enquire Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-brand-dark flex items-center justify-center text-xs">UK</div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-brand-dark flex items-center justify-center text-xs">BS</div>
                </div>
                <span>British Standards Compliant</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};