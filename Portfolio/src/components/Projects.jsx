import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaCloud, FaBrain, FaChartLine, FaFileAlt, FaSeedling, FaShoppingCart } from 'react-icons/fa';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'KrishiMitra',
      subtitle: 'AI Leaf Disease Detection System',
      description: 'Designed and delivered a scalable, cloud-deployed web solution with integrated AI models and REST APIs for real-time image analysis.',
      link: 'https://krishimitra-hfgshsd9h2ecd8he.centralindia-01.azurewebsites.net/',
      icon: FaBrain,
      tags: ['AI/ML', 'Django', 'Azure', 'REST API', 'Computer Vision'],
      highlights: [
        'Deployed on Microsoft Azure ensuring reliability and scalability',
        'Real-time disease detection using deep learning',
        'Integrated REST APIs for seamless data flow',
      ],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Student Performance Prediction',
      subtitle: 'Management System',
      description: 'Developed a data-driven analytics solution using Django, SQL, and REST APIs with dashboards enabling data-driven academic decision-making.',
      link: 'https://student-performance-1-9cd4.onrender.com/',
      icon: FaChartLine,
      tags: ['Django', 'SQL', 'Data Analytics', 'REST API', 'Dashboard'],
      highlights: [
        'Built interactive dashboards for academic insights',
        'Reduced manual analysis effort by 50% through automation',
        'Predictive analytics for student performance',
      ],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'UdyogSetu',
      subtitle: 'Government Entrepreneurship Portal',
      description: 'Designed a CMS-style scalable web platform with reusable backend services and automation workflows for government use.',
      link: 'https://mahapower.onrender.com/',
      icon: FaCloud,
      tags: ['Django', 'CMS', 'Backend', 'Government Portal', 'Automation'],
      highlights: [
        'Achieved 98% uptime through optimized backend architecture',
        'Developed reusable backend services',
        'Supports 1,200+ active users',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Report Management System',
      subtitle: 'Smart Education Portal',
      description: 'Built a secure academic document portal for 500+ records with role-based access control.',
      link: 'https://github.com/AtharvKhawale02/Smart-Education-Report-Management-System',
      icon: FaFileAlt,
      tags: ['Django', 'Security', 'Role-Based Access', 'Document Management'],
      highlights: [
        'Secured 500+ academic records with role-based access control',
        'Reduced data retrieval time by 40% using optimized Django ORM queries',
        'Implemented secure document management workflows',
      ],
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'AgriPredictAI',
      subtitle: 'Crop Price Forecasting System',
      description: 'Forecasted 10+ crop prices with regression models (R² > 0.85) and designed farmer-focused dashboards.',
      link: '#',
      icon: FaSeedling,
      tags: ['Machine Learning', 'Regression', 'Data Visualization', 'Agriculture'],
      highlights: [
        'Forecasted 10+ crop prices with regression models (R² > 0.85)',
        'Designed dashboards tested by 50+ farmers and traders',
        'Improved insights by 40% through predictive analytics',
      ],
      gradient: 'from-lime-500 to-green-600',
    },
    {
      title: 'Diwali Sales Analysis',
      subtitle: 'Customer Behavior Analytics',
      description: 'Analyzed 20,000+ transactions to identify customer purchase patterns and improve marketing ROI.',
      link: '#',
      icon: FaShoppingCart,
      tags: ['Data Analytics', 'Python', 'Customer Insights', 'Marketing'],
      highlights: [
        'Analyzed 20,000+ transactions to identify purchase patterns',
        'Improved targeted marketing ROI by 15% through actionable insights',
        'Built comprehensive sales dashboards and reports',
      ],
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-800">
          <div className="flex gap-8 min-w-max px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all group w-96 flex-shrink-0"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className={`inline-block p-4 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}>
                  <project.icon className="text-3xl text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-primary font-semibold mb-3 text-sm">{project.subtitle}</p>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start">
                        <span className="text-primary mr-2">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full glass-effect border border-primary/30 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors font-semibold group"
                >
                  View Live Project
                  <FaExternalLinkAlt className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
