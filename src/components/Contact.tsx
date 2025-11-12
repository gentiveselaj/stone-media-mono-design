
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4 + i * 0.1
      }
    })
  };

  return (
    <section className="py-24 px-6 bg-black text-white">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          variants={titleVariants}
        >
          Ready to Start Your Next Project?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={contentVariants}
        >
          Let's discuss how we can bring your vision to life. 
          We're here to turn your ideas into exceptional digital experiences.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            className="flex flex-col items-center"
            custom={0}
            variants={itemVariants}
          >
            <Mail className="w-8 h-8 mb-4" />
            <span className="text-lg">stonemediagency@gmail.com</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            custom={1}
            variants={itemVariants}
          >
            <Phone className="w-8 h-8 mb-4" />
            <span className="text-lg">+383 49 503 417</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            custom={2}
            variants={itemVariants}
          >
            <MapPin className="w-8 h-8 mb-4" />
            <span className="text-lg">Remote Worldwide</span>
          </motion.div>
        </div>
        
        <motion.button 
          className="bg-white text-black px-12 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;
