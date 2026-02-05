import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaBriefcase, FaFileAlt, FaTrophy } from 'react-icons/fa';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FaCode, value: '6+', label: 'Projects Completed' },
    { icon: FaBriefcase, value: '4', label: 'Internships' },
    { icon: FaFileAlt, value: '1', label: 'Research Paper' },
    { icon: FaTrophy, value: 'Top 3', label: 'National Hackathon' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold gradient-text">
              Professional Summary
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Solutions-focused <span className="text-primary font-semibold">Full Stack / Backend Engineer</span> with strong experience in Python, SQL, Django, REST APIs, and web technologies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Proven ability to gather requirements, design scalable technical solutions, and troubleshoot production systems used by real users. Experienced in collaborating with technical and non-technical stakeholders.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Strong foundation in problem-solving, OOP, and backend architecture with hands-on experience in building data-driven, reusable systems.
            </p>

            <div className="pt-6">
              <h4 className="text-xl font-bold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div className="glass-effect p-4 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-white">Bachelor of Engineering - AI & Data Science</h5>
                  <p className="text-sm text-gray-400">P. R. Pote Patil College, Amravati</p>
                  <p className="text-sm text-primary">2022 - 2026</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-xl text-center border border-primary/20 hover:border-primary/40 transition-all"
                >
                  <stat.icon className="text-4xl text-primary mx-auto mb-4" />
                  <h4 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 glass-effect p-6 rounded-xl border border-secondary/20"
            >
              <h4 className="text-xl font-bold text-white mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Based in Amravati, India
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Open to Full-time Opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Published Research Paper
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  National Hackathon Winner
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
