import React from 'react';
import { motion } from 'framer-motion';
interface CircuitPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
  delay?: number;
}
export function CircuitPattern({
  className = '',
  color = '#ffd700',
  opacity = 0.3,
  delay = 0
}: CircuitPatternProps) {
  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{
        opacity
      }}>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">

        <motion.path
          d="M50 0 V50 L100 100 H200"
          stroke={color}
          strokeWidth="2"
          initial={{
            pathLength: 0
          }}
          animate={{
            pathLength: 1
          }}
          transition={{
            duration: 2,
            delay: delay,
            ease: 'easeInOut'
          }} />

        <motion.circle
          cx="200"
          cy="100"
          r="4"
          fill={color}
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.5,
            delay: delay + 2
          }} />


        <motion.path
          d="M350 400 V350 L300 300 H150"
          stroke={color}
          strokeWidth="2"
          initial={{
            pathLength: 0
          }}
          animate={{
            pathLength: 1
          }}
          transition={{
            duration: 2,
            delay: delay + 0.5,
            ease: 'easeInOut'
          }} />

        <motion.circle
          cx="150"
          cy="300"
          r="4"
          fill={color}
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.5,
            delay: delay + 2.5
          }} />


        <motion.path
          d="M0 200 H50 L80 230 V300"
          stroke={color}
          strokeWidth="1"
          initial={{
            pathLength: 0
          }}
          animate={{
            pathLength: 1
          }}
          transition={{
            duration: 3,
            delay: delay + 1,
            ease: 'easeInOut'
          }} />


        <motion.path
          d="M400 150 H350 L320 120 V50"
          stroke={color}
          strokeWidth="1"
          initial={{
            pathLength: 0
          }}
          animate={{
            pathLength: 1
          }}
          transition={{
            duration: 3,
            delay: delay + 1.5,
            ease: 'easeInOut'
          }} />

      </svg>
    </div>);

}