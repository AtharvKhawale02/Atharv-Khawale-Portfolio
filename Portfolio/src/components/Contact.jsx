import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body with all form data
    const emailBody = `
From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;
    
    // Create mailto link that opens in user's email client
    const mailtoLink = `mailto:atharvkhawaleofficial@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Optional: Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'atharvkhawaleofficial@gmail.com',
      link: 'mailto:atharvkhawaleofficial@gmail.com',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9834159481',
      link: 'tel:+919834159481',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'AtharvKhawale02',
      link: 'https://github.com/AtharvKhawale02',
      gradient: 'from-gray-500 to-gray-700',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'atharvkhawale',
      link: 'https://www.linkedin.com/in/atharvkhawale/',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Amravati, India',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-effect p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} mr-4`}>
                      <info.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      <p className="text-white font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} mr-4`}>
                      <info.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl border border-primary/20 mt-8"
            >
              <h4 className="text-lg font-bold text-white mb-3">Let's Connect!</h4>
              <p className="text-gray-400 mb-4">
                Whether you have a project in mind, need consultation, or just want to say hi, I'd love to hear from you.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AtharvKhawale02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-primary transition-colors hover:scale-110 transform"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/atharvkhawale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-primary transition-colors hover:scale-110 transform"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="First Name Last Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="atharv@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
