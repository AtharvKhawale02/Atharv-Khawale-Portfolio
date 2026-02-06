import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-darker opacity-90"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                Atharv Khawale
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-2xl md:text-4xl mb-8 h-20">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Backend Engineer',
                  2000,
                  'AI Engineer',
                  2000,
                  'Python Developer',
                  2000,
                  'Django Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text font-semibold"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
            >
              Solutions-focused engineer with expertise in Python, Django, REST APIs, and scalable backend systems.
              Passionate about building data-driven applications that solve real-world problems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-effect text-white rounded-full font-semibold border border-primary/30 hover:border-primary/60 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { icon: FaGithub, link: 'https://github.com/AtharvKhawale02', label: 'GitHub' },
                { icon: FaLinkedin, link: 'https://www.linkedin.com/in/atharvkhawale/', label: 'LinkedIn' },
                { icon: FaEnvelope, link: 'mailto:atharvkhawaleofficial@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5, color: '#3b82f6' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-secondary/20"
              />
              
              {/* Profile image with gradient */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-primary/30 group">
                <img 
                  src="/ak bg.jpg" 
                  alt="Atharv Khawale" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-lg transform rotate-12 opacity-80"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-primary text-4xl">
            <HiArrowDown />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
