import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { motion, Variants } from 'framer-motion';
import { Play } from 'lucide-react';

export const Showcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineered for Performance</h2>
          <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            See how our wall padding transforms spaces into safe, professional environments suitable for elite competition and education alike.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative max-w-5xl mx-auto"
        >
          {/* Animated Gradient Border */}
          <motion.div 
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-accent via-teal-500 to-brand-accent opacity-60 blur-md"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700 aspect-video z-10">
             {!isPlaying ? (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                   {/* Thumbnail */}
                   <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop" 
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                   />
                   
                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-24 h-24 bg-brand-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(132,204,22,0.6)] group-hover:bg-brand-accent transition-all duration-300"
                        aria-label="Play Video"
                      >
                        <Play className="w-10 h-10 text-brand-dark fill-brand-dark ml-1" />
                      </motion.div>
                   </div>
                   
                   {/* Text Overlay */}
                   <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent">
                     <p className="text-white font-bold text-xl tracking-wide mb-1">Safety in Action</p>
                     <p className="text-brand-accent text-sm font-medium uppercase tracking-wider">Watch Installation Demo</p>
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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {GALLERY_IMAGES.map((img) => (
            <motion.div 
              key={img.id}
              variants={itemVariants}
              className="relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer shadow-lg border border-slate-800"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};