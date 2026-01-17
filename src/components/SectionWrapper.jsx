import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeIn } from '../utils/animations';

const SectionWrapper = ({ 
  children, 
  id, 
  className = '',
  delay = 0 
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section-padding ${className}`}
      variants={fadeIn('up', delay)}
      initial="hidden"
      animate={isVisible ? 'show' : 'hidden'}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
