import { Code, Globe, Smartphone, Upload, Wrench, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to meet your unique business requirements."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications that deliver exceptional user experiences."
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that engage users across all devices."
    },
    {
      icon: Upload,
      title: "Deployment",
      description: "Seamless deployment of your applications to cloud or on-prem environments, ensuring smooth go-live experiences."
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing updates, monitoring, and technical support to keep your software secure, stable, and up to date."
    },
    {
      icon: Briefcase,
      title: "Consulting",
      description: "Expert guidance to help you plan, strategize, and execute successful digital solutions for your business."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={titleVariants}
          >
            We specialize in creating digital solutions that drive business growth and innovation.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
