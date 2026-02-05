import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Atharv Khawale</h3>
            <p className="text-gray-400">
              Full Stack Developer | Backend Engineer
            </p>
            <p className="text-gray-400 mt-2">
              Building scalable solutions with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="https://github.com/AtharvKhawale02"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#3b82f6' }}
                className="text-2xl text-gray-400"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/atharvkhawale/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#3b82f6' }}
                className="text-2xl text-gray-400"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:atharvkhawaleofficial@gmail.com"
                whileHover={{ scale: 1.2, color: '#3b82f6' }}
                className="text-2xl text-gray-400"
              >
                <FaEnvelope />
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm">
              atharvkhawaleofficial@gmail.com
            </p>
            <p className="text-gray-400 text-sm">
              +91 9834159481
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center flex-wrap">
            <span>© {new Date().getFullYear()} Atharv Khawale. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-1"
            >
              <FaHeart className="text-red-500 inline" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All rights reserved.
          </p>
        </div>

        {/* Scroll to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-primary/50 transition-all z-40"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
