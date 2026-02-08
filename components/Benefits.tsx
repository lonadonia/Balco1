import React from 'react';
import { BENEFITS } from '../constants';
import { Shield, Hammer, MapPin, School, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

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
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-slate-800 border-t border-slate-700 border-b relative overflow-hidden">
      {/* Decorative Top Shape - Framing the header from Top Right */}
      <motion.img 
        initial={{ opacity: 0, x: 50, rotate: -5 }}
        whileInView={{ opacity: 0.15, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://i.ibb.co/VYKBdJvx/imgi-18-case-study-shape-top.png" 
        alt="" 
        className="absolute top-[-20%] right-[-10%] w-[90%] md:w-[60%] pointer-events-none select-none z-0"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Why Choose Balco?</h2>
          <p className="text-slate-400">The standard for safety and quality in the UK.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {BENEFITS.map((benefit) => {
            const Icon = iconMap[benefit.iconName];
            return (
              <motion.div 
                key={benefit.id} 
                variants={itemVariants}
                className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-brand-accent/50 transition-colors duration-300 group backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                  <Icon className="text-brand-accent w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
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