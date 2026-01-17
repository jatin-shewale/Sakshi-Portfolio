import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  // Blob positions and colors
  const blobs = [
    {
      id: 1,
      size: 'w-96 h-96',
      position: 'top-0 -left-20',
      color: isDark 
        ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30' 
        : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20',
      animation: {
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      },
      duration: 20,
    },
    {
      id: 2,
      size: 'w-[500px] h-[500px]',
      position: 'top-1/4 -right-40',
      color: isDark
        ? 'bg-gradient-to-r from-blue-600/30 to-cyan-600/30'
        : 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20',
      animation: {
        x: [0, -80, 0],
        y: [0, 100, 0],
        scale: [1, 1.1, 1],
        rotate: [0, -90, 0],
      },
      duration: 25,
    },
    {
      id: 3,
      size: 'w-80 h-80',
      position: 'bottom-1/4 left-1/4',
      color: isDark
        ? 'bg-gradient-to-r from-pink-600/30 to-purple-600/30'
        : 'bg-gradient-to-r from-pink-400/20 to-purple-400/20',
      animation: {
        x: [0, 60, 0],
        y: [0, -80, 0],
        scale: [1, 1.15, 1],
        rotate: [0, 180, 0],
      },
      duration: 22,
    },
    {
      id: 4,
      size: 'w-72 h-72',
      position: 'bottom-0 right-1/4',
      color: isDark
        ? 'bg-gradient-to-r from-cyan-600/30 to-blue-600/30'
        : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20',
      animation: {
        x: [0, -70, 0],
        y: [0, 90, 0],
        scale: [1, 1.3, 1],
        rotate: [0, -180, 0],
      },
      duration: 28,
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`} />
      
      {/* Animated blobs */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute ${blob.size} ${blob.position} ${blob.color} rounded-full blur-3xl opacity-70`}
          animate={blob.animation}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className={`absolute inset-0 ${
          isDark 
            ? 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]'
        } bg-[size:100px_100px]`}
      />
    </div>
  );
};

export default AnimatedBackground;
