import React from 'react';
import { BENEFITS } from '../constants';
import { Shield, Hammer, MapPin, School, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { GeometricPattern } from './GeometricPattern';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Hammer,
  MapPin,
  School,
};

export const Benefits: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-32 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Decorative Geometric Patterns */}
      <GeometricPattern type="A" className="absolute top-[-20%] right-[-10%] w-[50%] h-[120%] text-brand-cyan opacity-20 rotate-12" />
      <GeometricPattern type="B" className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[100%] text-brand-teal opacity-10" flipped />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-3 block">Why Choose Balco</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Standard for <br/> Safety & Quality</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Engineered in the UK, our padding solutions provide the ultimate balance of protection, durability, and aesthetic appeal.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BENEFITS.map((benefit) => {
            const Icon = iconMap[benefit.iconName];
            return (
              <motion.div 
                key={benefit.id} 
                variants={itemVariants}
                className="bg-slate-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-brand-cyan/40 hover:bg-slate-800/40 transition-all duration-300 group backdrop-blur-sm flex flex-col items-start h-full"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-300 border border-slate-700 group-hover:border-brand-cyan shadow-lg">
                  <Icon className="text-brand-cyan w-7 h-7 group-hover:text-brand-dark transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};