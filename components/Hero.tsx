import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { GeometricPattern } from './GeometricPattern';

export const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, duration: number}>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 25 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
      }))
    );
  }, []);

  const scrollToContact = () => {
    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Animated Gradient Background */}
        <div className="absolute inset-0 bg-slate-950">
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, #06a2bc 0%, transparent 60%)",
                "radial-gradient(circle at 100% 0%, #115e59 0%, transparent 60%)",
                "radial-gradient(circle at 100% 100%, #06a2bc 0%, transparent 60%)",
                "radial-gradient(circle at 0% 100%, #115e59 0%, transparent 60%)",
                "radial-gradient(circle at 0% 0%, #06a2bc 0%, transparent 60%)",
              ]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Dense Cellular Patterns - Hero Feature */}
        {/* We use two layers of the Cellular pattern to create depth and density */}
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Main Large Pattern */}
          <motion.div
             animate={{ rotate: [0, 2, 0] }}
             transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%]"
          >
             <GeometricPattern type="Cellular" className="w-full h-full text-brand-cyan" />
          </motion.div>
          
          {/* Secondary Overlay for density (rotated) */}
          <motion.div
             animate={{ rotate: [0, -2, 0] }}
             transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute top-[10%] left-[10%] w-[100%] h-[100%] opacity-50"
          >
             <GeometricPattern type="Cellular" flipped className="w-full h-full text-brand-teal" />
          </motion.div>
        </motion.div>

        {/* Large Moving Orbs (Subtle) */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-cyan/20 rounded-full blur-[100px]"
        />
        
        {/* Floating Particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-cyan/40 blur-[1px]"
            initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
            animate={{ 
              y: [`${p.y}vh`, `${p.y - 20}vh`],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
            style={{ width: p.size, height: p.size }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-brand-cyan/50 backdrop-blur-md mb-8 hover:border-brand-cyan transition-colors shadow-lg shadow-brand-cyan/10"
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase">UK Manufacturer</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl">
              SAFER SPACES FOR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-green-400 to-brand-accent animate-gradient-x bg-[length:200%_auto]">
                HIGH-IMPACT SPORTS
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-light drop-shadow-md">
              Premium, UK-made wall padding engineered for <span className="text-white font-semibold">safety</span> and <span className="text-white font-semibold">performance</span> in sports halls, arenas, and schools.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-brand-cyan hover:bg-[#088a9e] text-white font-bold text-lg py-5 px-10 rounded-xl shadow-[0_0_30px_rgba(6,162,188,0.4)] hover:shadow-[0_0_50px_rgba(6,162,188,0.6)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative">Enquire Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
              </motion.button>
              
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-md hover:bg-slate-900/60 transition-colors">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-brand-cyan/50 flex items-center justify-center text-[10px] text-white font-bold shadow-lg">UK</div>
                  <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-brand-cyan/50 flex items-center justify-center text-[10px] text-white font-bold shadow-lg">BS</div>
                </div>
                <span className="text-slate-300 text-sm font-medium">British Standards Compliant</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cyan/60 hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};