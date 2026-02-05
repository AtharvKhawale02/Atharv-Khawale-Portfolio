import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, 
  FaServer, FaCloud, FaCode
} from 'react-icons/fa';
import { 
  SiDjango, SiMongodb, SiMysql, SiPostman, SiVisualstudiocode,
  SiMicrosoftazure
} from 'react-icons/si';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Backend Technologies',
      icon: FaServer,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 90, icon: FaPython },
        { name: 'Django', level: 85, icon: SiDjango },
        { name: 'REST API', level: 88, icon: FaCode },
        { name: 'Django REST Framework', level: 85, icon: SiDjango },
      ],
    },
    {
      title: 'Frontend Technologies',
      icon: FaCode,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'HTML', level: 90, icon: FaHtml5 },
        { name: 'CSS', level: 85, icon: FaCss3Alt },
        { name: 'JavaScript', level: 80, icon: FaJs },
      ],
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MySQL', level: 85, icon: SiMysql },
        { name: 'SQLite', level: 80, icon: FaDatabase },
        { name: 'MongoDB', level: 75, icon: SiMongodb },
      ],
    },
    {
      title: 'Tools & Cloud',
      icon: FaCloud,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: FaGitAlt },
        { name: 'Postman', level: 85, icon: SiPostman },
        { name: 'VS Code', level: 90, icon: SiVisualstudiocode },
        { name: 'Azure', level: 75, icon: SiMicrosoftazure },
      ],
    },
  ];

  const coreConcepts = [
    'Object-Oriented Programming (OOP)',
    'MVT Architecture',
    'SDLC',
    'Debugging & Problem Solving',
    'Scalable Systems',
    'API Architecture',
    'Troubleshooting',
    'Web Services',
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-effect p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} mr-4`}>
                  <category.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="text-primary mr-2" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-effect p-8 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Core <span className="gradient-text">Concepts</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreConcepts.map((concept, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 glass-effect border border-primary/30 rounded-full text-gray-300 hover:border-primary/60 hover:text-primary transition-all cursor-default"
              >
                {concept}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
