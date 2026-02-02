import React from 'react';
import { motion } from 'framer-motion';
interface CyberButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gold';
  className?: string;
}
export function CyberButton({
  children,
  onClick,
  variant = 'primary',
  className = ''
}: CyberButtonProps) {
  const baseStyles =
  'relative px-8 py-4 font-orbitron font-bold uppercase tracking-wider transition-all duration-300 clip-cyber group overflow-hidden';
  const variants = {
    primary:
    'bg-cyber-red/10 text-cyber-red border border-cyber-red hover:bg-cyber-red hover:text-white hover:box-glow-red',
    secondary:
    'bg-cyber-metallic text-cyber-text border border-cyber-text/30 hover:border-cyber-red hover:text-cyber-red',
    gold: 'bg-cyber-gold/10 text-cyber-gold border border-cyber-gold hover:bg-cyber-gold hover:text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}>

      {/* Background circuit detail */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">

          <path
            d="M0,0 L20,0 L25,5 L100,5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1" />

          <path
            d="M0,100 L20,100 L25,95 L100,95"
            fill="none"
            stroke="currentColor"
            strokeWidth="1" />

        </svg>
      </div>

      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-50"></div>
    </motion.button>);

}