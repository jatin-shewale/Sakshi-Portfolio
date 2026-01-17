import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaLaptopCode } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { projects } from '../constants';
import { fadeIn, staggerContainer, hoverCard } from '../utils/animations';

const Projects = () => {
  return (
    <SectionWrapper id="projects">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-teal mx-auto rounded-full shadow-glow" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for web development.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn('up', index * 0.1)}
                whileHover="hover"
                initial="rest"
                className="group"
              >
                <motion.div
                  variants={hoverCard}
                  className="card h-full flex flex-col overflow-hidden"
                >
                  {/* Project Image/Placeholder */}
                  <div className="relative h-48 mb-4 -m-6 mb-6 overflow-hidden bg-gradient-to-br from-primary-600/20 via-secondary-500/10 to-accent-teal/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-10">
                        <FaLaptopCode className="text-primary-500" />
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-3 group-hover:from-secondary-400 group-hover:to-accent-teal transition-all duration-300">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="primary"
                        icon={FiExternalLink}
                        href={project.liveDemo}
                        className="flex-1 text-sm py-2"
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        icon={FiGithub}
                        href={project.github}
                        className="flex-1 text-sm py-2"
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              Want to see more? Check out my GitHub for all my projects!
            </p>
            <Button
              variant="secondary"
              icon={FiGithub}
              href="https://github.com/sakshi-bagul"
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
