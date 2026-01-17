import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { personalInfo } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/animations';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update with actual resume path
    link.download = 'Sakshi_Bagul_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="flex flex-col items-center text-center gap-8"
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          animate="show"
        >
          {/* Greeting */}
          <motion.div
            variants={fadeIn('down', 0.2)}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm md:text-md font-semibold tracking-wider uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            variants={textVariant(0.3)}
            className="text-6xl md:text-8xl lg:text-9xl font-black gradient-text uppercase tracking-tighter"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Role */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xl md:text-2xl lg:text-3xl font-semibold"
          >
            {personalInfo.role.split('|').map((role, index) => (
              <span key={index} className="text-gray-300">
                {role.trim()}
                {index < personalInfo.role.split('|').length - 1 && (
                  <span className="text-secondary-500 mx-2">|</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={fadeIn('up', 0.5)}
            className="max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            {personalInfo.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <Button
              variant="primary"
              icon={FiArrowDown}
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              icon={FiDownload}
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FiArrowDown className="w-6 h-6 text-primary-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-primary-600/20 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary-600/20 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
    </section>
  );
};

export default Hero;
