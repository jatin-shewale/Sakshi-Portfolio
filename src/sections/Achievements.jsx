import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaCode, FaTrophy, FaProjectDiagram } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { achievements } from '../constants';
import { fadeIn, staggerContainer } from '../utils/animations';

// Icon mapping
const iconMap = {
  FaCode: FaCode,
  FaTrophy: FaTrophy,
  FaProjectDiagram: FaProjectDiagram,
};

const Counter = ({ target, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const controls = animate(count, target, {
            duration: 2,
            ease: 'easeOut',
          });
          setHasAnimated(true);
          return controls.stop;
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [count, target, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold gradient-text">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
};

// Add React import for useState

const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section Title */}
          <motion.div variants={fadeIn('down', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Milestones and accomplishments that showcase my dedication and growth.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = iconMap[achievement.icon];
              return (
                <motion.div
                  key={achievement.id}
                  variants={fadeIn('up', index * 0.2)}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative group"
                >
                  <div className="card text-center h-full flex flex-col items-center justify-center p-8">
                    {/* Icon with glow */}
                    <motion.div
                      className={`mb-6 p-6 rounded-full bg-gradient-to-r ${achievement.color} inline-block`}
                      animate={{
                        boxShadow: [
                          '0 0 15px rgba(124, 58, 237, 0.4)',
                          '0 0 30px rgba(124, 58, 237, 0.6)',
                          '0 0 15px rgba(124, 58, 237, 0.4)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {Icon && <Icon className="w-12 h-12 text-white" />}
                    </motion.div>

                    {/* Counter */}
                    <Counter target={achievement.count} suffix={achievement.suffix} />

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-300 mt-4">
                      {achievement.title}
                    </h3>

                    {/* Decorative gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-10 transition-opacity -z-10 blur-xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            className="text-center mt-12"
          >
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm constantly learning and growing, pushing myself to solve more complex problems
              and build better applications. These numbers represent my journey so far! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
