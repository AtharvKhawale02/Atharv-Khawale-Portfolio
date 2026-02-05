import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Collector Office, Amravati & MSKVIB',
      project: 'UdyogSetu Project',
      location: 'Amravati, India',
      period: 'May 2025 - July 2025',
      achievements: [
        'Gathered business and technical requirements from government stakeholders',
        'Designed and developed scalable backend solutions and REST APIs using Django',
        'Supported a production portal used by 1,200+ users',
        'Implemented SQL-based data models, validations, and backend automation',
        'Owned end-to-end solution lifecycle from development to deployment',
        'Performed troubleshooting and optimization, reducing system errors by 40%',
        'Collaborated with technical and non-technical teams to deliver reusable solutions',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Python Backend Developer Intern',
      company: 'Soham Global Pvt. Ltd.',
      location: 'Remote',
      period: 'Feb 2024 - Mar 2024',
      achievements: [
        'Built and maintained backend services and RESTful APIs using Python & Django',
        'Optimized backend logic, reducing API latency by 25%',
        'Used Git/GitHub in a collaborative development workflow',
        'Performed backend debugging and production issue resolution',
        'Strengthened understanding of maintainable and scalable backend systems',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Data Analytics Intern',
      company: 'Connecting Dreams Foundation',
      location: 'Remote',
      period: 'Oct 2024 - Nov 2024',
      achievements: [
        'Processed and analyzed 10,000+ records with Python & SQL',
        'Automated reporting workflows, reducing manual effort by 30%',
        'Built Tableau dashboards, improving decision-making speed by 25%',
        'Performed data cleaning and validation on large datasets',
        'Generated actionable insights for organizational strategies',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'AI-ML Intern',
      company: 'Google AI-ML Virtual Internship (AICTE & EduSkill)',
      location: 'Virtual',
      period: 'Apr 2024 - Jun 2024',
      achievements: [
        'Built 4 ML models (classification, regression, clustering) with 85-92% accuracy',
        'Optimized training pipelines using TensorFlow + Scikit-learn, reducing model runtime by 20%',
        'Explored ethical AI practices and deployed models on cloud environments',
        'Implemented model evaluation metrics and performance optimization',
        'Gained hands-on experience with modern ML frameworks and tools',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-800">
          <div className="flex gap-8 min-w-max px-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all w-[550px] flex-shrink-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} mr-4`}>
                      <FaBriefcase className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-xl text-primary font-semibold">{exp.company}</p>
                      {exp.project && (
                        <p className="text-sm text-gray-400 italic">{exp.project}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <FaCalendar className="mr-2 text-primary" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                    className="flex items-start"
                  >
                    <FaCheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-400">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
