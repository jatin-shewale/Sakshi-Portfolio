import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { socialLinks } from '../constants';

const SocialLinks = ({ className = '' }) => {
  const socials = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: socialLinks.linkedin,
      color: 'hover:text-blue-500',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: socialLinks.github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: socialLinks.leetcode,
      color: 'hover:text-yellow-500',
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl transition-colors duration-300 ${social.color}`}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          aria-label={social.name}
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
