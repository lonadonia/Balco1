import React from 'react';
import { motion } from 'framer-motion';

interface GeometricPatternProps {
  className?: string;
  flipped?: boolean;
  type?: 'A' | 'B' | 'Cellular';
}

export const GeometricPattern: React.FC<GeometricPatternProps> = ({ className = "", flipped = false, type = 'A' }) => {
  // Path A: The original cellular structure
  const pathDataA = `
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

  // Path B: A denser, more interlocking secondary pattern
  const pathDataB = `
    M100,100 L300,50  L450,150 L350,350 L150,300 Z
    M300,50  L550,20  L700,200 L550,350 L450,150
    M550,20  L800,50  L950,250 L800,450 L700,200
    M950,250 L980,500 L800,650 L650,550 L800,450
    M700,200 L800,450 L650,550 L500,400 L550,350
    M450,150 L550,350 L500,400 L300,500 L200,400 L350,350
    M150,300 L200,400 L100,600 L20,450 Z
    M100,600 L300,500 L450,700 L250,850 L50,750
    M300,500 L500,400 L650,550 L600,800 L450,700
    M650,550 L800,650 L900,850 L700,950 L600,800
  `;

  // Path Cellular: Mimics the reference image (dense Voronoi/Cellular)
  const pathDataCellular = `
    M20,20 L200,40 L300,150 L150,280 L40,180 Z
    M200,40 L450,20 L600,120 L480,250 L300,150
    M450,20 L750,30 L850,180 L650,220 L600,120
    M750,30 L980,50 L950,300 L850,180
    
    M150,280 L300,150 L480,250 L400,450 L200,400
    M480,250 L600,120 L650,220 L800,250 L750,480 L550,420 L400,450
    M650,220 L850,180 L950,300 L920,550 L750,480
    
    M40,180 L150,280 L200,400 L120,600 L20,500 Z
    M200,400 L400,450 L550,420 L500,650 L280,620
    M550,420 L750,480 L700,700 L500,650
    M750,480 L920,550 L950,800 L700,700
    
    M120,600 L280,620 L350,850 L50,800 Z
    M280,620 L500,650 L600,880 L350,850
    M500,650 L700,700 L850,900 L600,880
    M700,700 L950,800 L900,980 L850,900
  `;

  let pathData = pathDataA;
  if (type === 'B') pathData = pathDataB;
  if (type === 'Cellular') pathData = pathDataCellular;

  const nodesA = [[180, 20], [320, 80], [500, 120], [400, 250], [600, 400], [300, 450], [750, 650]];
  const nodesB = [[300, 50], [550, 20], [700, 200], [450, 150], [500, 400], [800, 450]];
  // Simple nodes for cellular
  const nodesCellular = [[200, 40], [300, 150], [480, 250], [650, 220], [400, 450], [750, 480], [500, 650]];
  
  let nodes = nodesA;
  if (type === 'B') nodes = nodesB;
  if (type === 'Cellular') nodes = nodesCellular;

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
          <linearGradient id={`patternGradient-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <motion.path
          d={pathData}
          stroke={`url(#patternGradient-${type})`}
          strokeWidth="2.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        
        {/* Nodes at intersections for a tech/structural feel */}
        {nodes.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="6"
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