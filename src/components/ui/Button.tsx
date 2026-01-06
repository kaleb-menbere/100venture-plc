import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  withArrow?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  withArrow = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-10 py-4 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-navy-950 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide';
  const variants = {
    primary: 'bg-white/10 text-white hover:bg-white/20 focus:ring-emerald-500 shadow-luxury hover:shadow-luxury-lg border border-white/20 hover:border-emerald-500/40 backdrop-blur-sm',
    secondary: 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-500 hover:to-emerald-500 focus:ring-emerald-500 shadow-luxury hover:shadow-luxury-lg',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-emerald-500/50 focus:ring-emerald-500 backdrop-blur-sm'
  };
  return <motion.button whileHover={{
    scale: 1.02,
    y: -2
  }} whileTap={{
    scale: 0.98
  }} transition={{
    duration: 0.3,
    ease: 'easeOut'
  }} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </motion.button>;
}