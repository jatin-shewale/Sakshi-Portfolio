import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import SectionWrapper from '../components/SectionWrapper';
import { experience } from '../constants';
import { fadeIn, staggerContainer } from '../utils/animations';

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section Title */}
          <motion.div variants={fadeIn('down', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black gradient-text mb-4 uppercase tracking-tighter">
              Experience
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-teal mx-auto rounded-full shadow-glow" />
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeIn('up', index * 0.2)}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-500 opacity-30" />
                )}

                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center shadow-glow"
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    boxShadow: [
                      '0 0 15px rgba(124, 58, 237, 0.4)',
                      '0 0 30px rgba(124, 58, 237, 0.6)',
                      '0 0 15px rgba(124, 58, 237, 0.4)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiBriefcase className="w-4 h-4 text-white" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className="card ml-4"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl font-semibold text-secondary-400 mb-3">
                      {exp.organization}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pointIndex * 0.1 }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
