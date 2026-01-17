import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { personalInfo } from '../constants';
import { fadeIn, staggerContainer } from '../utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true });
      return;
    }

    
    console.log('Form submitted:', formData);
    
    setFormStatus({ submitted: true, error: false });
    setFormData({ name: '', email: '', message: '' });

    // Reset status after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, error: false });
    }, 3000);
  };

  return (
    <SectionWrapper id="contact">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-teal mx-auto rounded-full shadow-glow" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeIn('right', 0.3)} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {/* Email */}
                  <motion.div
                    className="card flex items-start gap-4"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600">
                      <FiMail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-1">Email</h4>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-primary-400 hover:text-secondary-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="card flex items-start gap-4"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-secondary-600 to-accent-teal">
                      <FiPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-1">Phone</h4>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-primary-400 hover:text-secondary-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    className="card flex items-start gap-4"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-accent-rose to-primary-600">
                      <FiMapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-1">Location</h4>
                      <p className="text-gray-400">{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4">
                  Connect With Me
                </h3>
                <SocialLinks className="justify-start" />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeIn('left', 0.3)}>
              <form onSubmit={handleSubmit} className="card space-y-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4">
                  Send Me a Message
                </h3>

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-primary-500/30 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-primary-500/30 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-primary-500/30 rounded-xl focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  icon={FiSend}
                  className="w-full"
                >
                  Send Message
                </Button>

                {/* Status Messages */}
                {formStatus.submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-teal text-center font-medium"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {formStatus.error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-rose text-center font-medium"
                  >
                    Please fill in all fields correctly.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
