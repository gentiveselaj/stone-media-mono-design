
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              About Stone Media
            </h2>
            <motion.div 
              className="space-y-6 text-lg text-gray-600 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={paragraphVariants}>
                We are a forward-thinking software development agency dedicated to 
                transforming ideas into powerful digital solutions.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                Our team combines technical expertise with creative vision to deliver 
                applications that not only meet your requirements but exceed your expectations.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                From startups to enterprise clients, we pride ourselves on building 
                lasting partnerships and delivering solutions that drive real business value.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="w-full h-96 bg-black"></div>
            <div className="absolute inset-4 border-2 border-gray-300"></div>
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
