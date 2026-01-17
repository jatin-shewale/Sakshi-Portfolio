import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  onClick, 
  href, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-glow hover:shadow-glow-lg hover:-translate-y-1',
    secondary: 'glass text-white hover:bg-white/20 border border-purple-500/50 hover:border-purple-400',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const ButtonContent = () => (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default Button;
