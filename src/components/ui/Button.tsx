import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'children'> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  withArrow?: boolean;
};

export function Button({
  children,
  variant = 'primary',
  withArrow = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-10 py-4 text-base font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-navy-950 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-white/10 text-white hover:bg-white/20 shadow-luxury hover:shadow-luxury-lg border border-white/20 hover:border-[#D3AF5E]/40 backdrop-blur-sm focus:ring-[#D3AF5E]',

    secondary:
      'bg-gradient-to-r from-[#299963] to-[#D3AF5E] text-white hover:from-[#1f7a4e] hover:to-[#c4a24f] shadow-luxury hover:shadow-luxury-lg focus:ring-[#D3AF5E]',

    outline:
      'border-2 border-[#D3AF5E]/40 text-[#D3AF5E] hover:bg-[#D3AF5E]/10 hover:border-[#D3AF5E]/70 backdrop-blur-sm focus:ring-[#D3AF5E]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </motion.button>
  );
}
