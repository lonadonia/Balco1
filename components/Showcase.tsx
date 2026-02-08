import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { motion, Variants } from 'framer-motion';
import { Play, Plus } from 'lucide-react';
import { GeometricPattern } from './GeometricPattern';

export const Showcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Patterns */}
      <GeometricPattern type="B" className="absolute top-0 right-0 w-[50%] h-[100%] text-brand-cyan opacity-10 rotate-180" />
      <GeometricPattern type="A" className="absolute bottom-0 left-0 w-[60%] h-[80%] text-brand-cyan opacity-5" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Engineered for <br /><span className="text-brand-cyan">Peak Performance</span></h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Experience the Balco difference. Our padding systems blend seamlessly into professional environments while providing certified impact protection.
            </p>
          </div>
          <div className="hidden md:block">
            <button className="text-brand-cyan font-medium hover:text-white transition-colors flex items-center gap-2">
              View all projects <ArrowRightIcon />
            </button>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 relative"
        >
          {/* Subtle Glow Behind */}
          <div className="absolute -inset-4 bg-brand-cyan/20 blur-2xl rounded-[2rem] opacity-50"></div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-950 aspect-video z-10 border border-slate-800/50 group">
             {!isPlaying ? (
                <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                   <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop" 
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors duration-500"></div>
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all duration-300 shadow-2xl"
                      >
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white group-hover:text-brand-dark group-hover:fill-brand-dark ml-1 transition-colors" />
                      </motion.div>
                   </div>
                </div>
             ) : (
                <iframe 
                  src="https://player.vimeo.com/video/1163078990?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                  className="absolute top-0 left-0 w-full h-full" 
                  title="Balco Padding Demo"
                ></iframe>
             )}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="space-y-4 mb-10">
          <h3 className="text-2xl font-bold text-white">Recent Installations</h3>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_IMAGES.slice(0, 6).map((img, idx) => (
            <motion.div 
              key={img.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-xl group cursor-pointer border border-slate-800 bg-slate-900 ${idx === 0 || idx === 3 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-cyan text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Project</span>
                <p className="text-white text-lg font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.alt}</p>
              </div>
              
              <div className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Plus className="text-brand-cyan w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);