import React from 'react';
import { motion } from 'framer-motion';

interface GeometricPatternProps {
  className?: string;
  flipped?: boolean;
}

export const GeometricPattern: React.FC<GeometricPatternProps> = ({ className = "", flipped = false }) => {
  // A complex path simulating a cellular/voronoi structure with rounded corners
  const pathData = `
    M50,50  L180,20  L320,80   L240,220  L60,180   Z
    M180,20 L380,10  L500,120  L400,250  L320,80
    M380,10 L600,30  L700,150  L500,120
    M700,150 L850,100 L900,280 L720,350 L500,120
    M500,120 L400,250 L600,400 L720,350
    M320,80  L400,250 L300,450 L150,350 L240,220
    M400,250 L600,400 L550,600 L300,450
    M600,400 L720,350 L850,450 L750,650 L550,600
    M60,180  L240,220 L150,350 L30,320   Z
    M150,350 L300,450 L250,700 L80,600   L30,320
    M300,450 L550,600 L500,800 L250,700
    M550,600 L750,650 L850,850 L600,900 L500,800
  `;

  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="patternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <motion.path
          d={pathData}
          stroke="url(#patternGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        
        {/* Nodes at intersections for a tech/structural feel */}
        {[
          [180, 20], [320, 80], [500, 120], [400, 250], [600, 400], [300, 450]
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="currentColor"
            fillOpacity="0.6"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </svg>
    </div>
  );
};