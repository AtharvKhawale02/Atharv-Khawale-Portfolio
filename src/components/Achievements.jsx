import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaAward, FaNewspaper, FaUsers, FaMedal } from 'react-icons/fa';

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: FaNewspaper,
      title: 'Research Paper Published',
      subtitle: 'KrishiMitra - Deep Learning Algorithm',
      description: 'Published in Journal of Artificial Neural Networks and Learning System (JoANNLS), Vol. 3, Issue 1, 2026',
      link: 'https://matjournals.net/engineering/index.php/JoANNLS/article/view/3041',
      gradient: 'from-blue-500 to-cyan-500',
      year: '2026',
    },
    {
      icon: FaTrophy,
      title: '3rd Prize - Hackathon 2025',
      subtitle: 'National Level Competition',
      description: 'Won ₹11,000 prize money | Ranked Top 3 out of 250+ teams',
      gradient: 'from-yellow-500 to-orange-500',
      year: '2025',
    },
    {
      icon: FaMedal,
      title: 'TCS CodeVita Season 13',
      subtitle: 'Qualified for Round 2',
      description: 'Successfully qualified for the second round of TCS CodeVita, a prestigious global coding competition',
      gradient: 'from-purple-500 to-pink-500',
      year: '2025',
    },
    {
      icon: FaUsers,
      title: 'Coding Club Mentor',
      subtitle: 'National Hackathon Organizer',
      description: 'Conducted and mentored students for National Level Hackathon as part of college coding club',
      gradient: 'from-green-500 to-emerald-500',
      year: '2025-26',
    },
    {
      icon: FaAward,
      title: 'Best Portfolio Award',
      subtitle: 'LinkedIn Premium Winner',
      description: 'Won 6-month LinkedIn Premium subscription for best student portfolio on campus',
      gradient: 'from-indigo-500 to-blue-500',
      year: '2024',
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all group relative"
            >
              <div className={`h-1 bg-gradient-to-r ${achievement.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.gradient}`}>
                    <achievement.icon className="text-3xl text-white" />
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-primary font-semibold mb-3 text-sm">{achievement.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-primary hover:text-secondary transition-colors font-semibold group"
                  >
                    View Publication →
                  </a>
                )}
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
