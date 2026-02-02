import React, { useState } from 'react';
import { motion } from 'framer-motion';
export function NeonDragon() {
  const [isHovered, setIsHovered] = useState(false);
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: 0
      }
    }
  };
  const pulseVariants = {
    idle: {
      filter: 'drop-shadow(0 0 2px #ff0040) drop-shadow(0 0 5px #ff0040)',
      strokeOpacity: 0.8,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse' as const
      }
    },
    hover: {
      filter: 'drop-shadow(0 0 5px #ff0040) drop-shadow(0 0 15px #ff0040)',
      strokeOpacity: 1
    }
  };
  const eyeVariants = {
    idle: {
      fill: '#ff0040',
      filter: 'drop-shadow(0 0 2px #ff0040)',
      opacity: 0.6
    },
    hover: {
      fill: '#ffffff',
      filter: 'drop-shadow(0 0 10px #ff0040) drop-shadow(0 0 20px #ff0040)',
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    }
  };
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <svg
        viewBox="0 0 500 500"
        className="w-full h-full max-w-[600px] max-h-[600px]"
        style={{
          overflow: 'visible'
        }}>

        {/* Dragon Head Outline - Abstract geometric representation */}
        <motion.g
          initial="hidden"
          animate="visible"
          stroke="#ff0040"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">

          {/* Main Head Shape */}
          <motion.path
            variants={pathVariants}
            d="M150 250 L180 220 L220 220 L250 180 L300 180 L350 220 L400 200 L420 230 L380 260 L400 300 L350 320 L300 350 L250 320 L200 320 L150 250 Z"
            className="drop-shadow-neon"
            animate={isHovered ? 'hover' : 'idle'}
            // @ts-ignore
            variants={pulseVariants} />


          {/* Horns / Spikes */}
          <motion.path
            variants={pathVariants}
            d="M250 180 L230 120 L280 160"
            className="drop-shadow-neon" />

          <motion.path
            variants={pathVariants}
            d="M300 180 L320 100 L340 160"
            className="drop-shadow-neon" />

          <motion.path
            variants={pathVariants}
            d="M350 220 L420 180 L400 200"
            className="drop-shadow-neon" />


          {/* Jaw Detail */}
          <motion.path
            variants={pathVariants}
            d="M200 320 L220 380 L280 360"
            className="drop-shadow-neon" />


          {/* Internal Circuit Details */}
          <motion.path
            variants={pathVariants}
            d="M220 220 L240 250 L280 250"
            strokeWidth="1"
            opacity="0.5" />

          <motion.path
            variants={pathVariants}
            d="M350 320 L330 280 L380 260"
            strokeWidth="1"
            opacity="0.5" />

        </motion.g>

        {/* Eyes */}
        <motion.g>
          <motion.circle
            cx="260"
            cy="240"
            r="6"
            animate={isHovered ? 'hover' : 'idle'}
            variants={eyeVariants} />

          <motion.path
            d="M240 230 L280 235"
            stroke="#ff0040"
            strokeWidth="1"
            initial={{
              pathLength: 0
            }}
            animate={{
              pathLength: 1
            }}
            transition={{
              delay: 2,
              duration: 1
            }} />

        </motion.g>

        {/* Breath / Energy Particles */}
        {isHovered &&
        <motion.g>
            {[...Array(5)].map((_, i) =>
          <motion.circle
            key={i}
            cx="150"
            cy="250"
            r="2"
            fill="#ff0040"
            initial={{
              opacity: 0,
              x: 0,
              y: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              x: -50 - Math.random() * 50,
              y: (Math.random() - 0.5) * 40
            }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 0.5
            }} />

          )}
          </motion.g>
        }
      </svg>
    </div>);

}