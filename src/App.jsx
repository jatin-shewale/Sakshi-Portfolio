import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen custom-scrollbar overflow-x-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 border-t border-gray-800">
          <div className="container-custom">
            <div className="text-center text-gray-400">
              <p className="mb-2">
                Designed & Built by{' '}
                <span className="gradient-text font-semibold">Sakshi Bagul</span>
              </p>
              <p className="text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
