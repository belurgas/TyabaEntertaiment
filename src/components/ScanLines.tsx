import React from 'react';
import { motion } from 'framer-motion';
export function ScanLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-full w-full">
      {/* Static scanlines texture */}
      <div className="absolute inset-0 scanlines opacity-20 mix-blend-overlay"></div>

      {/* Moving scanline bar */}
      <motion.div
        className="absolute w-full h-24 bg-gradient-to-b from-transparent via-cyber-red/10 to-transparent"
        animate={{
          top: ['-10%', '110%']
        }}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }} />


      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60"></div>
    </div>);

}