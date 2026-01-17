import { motion } from 'framer-motion';
import { 
  SiTailwindcss, 
  SiIntellijidea,
  SiMysql,
  SiEclipseche
} from 'react-icons/si';
import { FaJava, FaJs, FaReact, FaGitAlt, FaBootstrap, FaGraduationCap, FaLaptopCode, FaUserCircle } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, skills } from '../constants';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

// Icon mapping
const iconMap = {
  SiJava: FaJava,
  SiJavascript: FaJs,
  SiMysql: SiMysql,
  SiReact: FaReact,
  SiTailwindcss: SiTailwindcss,
  SiBootstrap: FaBootstrap,
  SiGit: FaGitAlt,
  SiVisualstudiocode: VscCode,
  SiIntellijidea: SiIntellijidea,
  SiEclipseide: SiEclipseche,
};

const About = () => {
  return (
    <SectionWrapper id="about">
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
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-teal mx-auto rounded-full shadow-glow" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-6 flex items-center gap-3">
                  <FaUserCircle className="text-primary-500" />
                  Who I Am
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm an <span className="text-secondary-400 font-semibold">IT Engineering student</span> at{' '}
                    <span className="text-primary-400 font-semibold">{personalInfo.education.college}</span>, {personalInfo.education.location}.
                  </p>
                  <p>
                    I have a strong passion for <span className="text-accent-teal font-semibold">frontend development</span> and{' '}
                    <span className="text-accent-teal font-semibold">UI design</span>, with a focus on creating
                    beautiful, interactive, and user-friendly web applications.
                  </p>
                  <p>
                    I'm actively involved in <span className="text-secondary-400 font-semibold">open-source contributions</span> and
                    love collaborating with the developer community to build amazing projects.
                  </p>
                  <p>
                    When I'm not coding, you'll find me solving{' '}
                    <span className="text-primary-400 font-semibold">DSA problems</span> on LeetCode or
                    exploring new web technologies and design trends.
                  </p>
                </div>
              </div>

              {/* Education */}
              <motion.div variants={zoomIn(0.4)} className="card">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4 flex items-center gap-3">
                  <FaGraduationCap className="text-primary-500" />
                  Education
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p className="font-semibold">{personalInfo.education.degree}</p>
                  <p className="text-sm text-gray-400">{personalInfo.education.college}</p>
                  <p className="text-sm text-gray-400">{personalInfo.education.year}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={fadeIn('left', 0.3)} className="space-y-8">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-teal mb-8 flex items-center gap-3">
                <FaLaptopCode className="text-secondary-500" />
                Technical Skills
              </h3>
              
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  variants={fadeIn('up', 0.1 * categoryIndex)}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-gray-300">
                    {category.category}
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((skill, skillIndex) => {
                      const Icon = iconMap[skill.icon];
                      return (
                        <motion.div
                          key={skill.name}
                          variants={zoomIn(0.05 * skillIndex)}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="card group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            {Icon && (
                              <Icon className="w-8 h-8 text-primary-400 group-hover:text-secondary-400 transition-colors" />
                            )}
                            <span className="font-semibold text-gray-200">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary-600 to-secondary-600"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 mt-1">
                            {skill.level}%
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
