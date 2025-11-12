
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tech: "HTML&CSS,Javascript,PHP, Laravel, mySQL, Ajax ",
      details: "This project features a robust admin dashboard, user authentication, and seamless payment gateway integration. It supports discount codes, order tracking, and analytics for store owners.",
      visit:"https://www.e-baa.com",
      image:"https://portfolio-1-psi-weld.vercel.app/ebaaa.png"
    },
    {
      title: "Mobile News App",
      description: "Arbresh is a modern news app delivering fast, reliable, and up-to-date coverage on national and international events.",
      tech: "Typescript,Ionic,Angular,Capacitor,Wordpress API",
      details: "Arbresh is a modern news app delivering fast, reliable, and up-to-date coverage on national and international events. Designed for a seamless mobile experience, Arbresh offers breaking news, in-depth articles, and multimedia content — all in one place. Stay informed with trusted journalism, personalized notifications, and a clean, user-friendly interface that brings the headlines to your fingertips.",
         visit:"https://play.google.com/store/apps/details?id=io.ionic.arbreshinfo&hl=en",
           image:"https://portfolio-1-psi-weld.vercel.app/arbreshinfomain.png"
    },
    {
      title: "News Consulting Agency Website",
      description: "Custom Website design and development for a Miami Based Digital Marketing Agency.",
      tech: "HTML&CSS,Javascript,Laravel, Bootstrap",
      details: "developed a responsive, high-performance website for a digital marketing company based in Miami using Laravel, Bootstrap, HTML, and CSS. The site features a clean, modern design, fast load times, and a fully responsive layout optimized for both desktop and mobile. It showcases the agency’s services, portfolio, and contact features, providing a strong online presence tailored to their brand.",
         visit:"https://www.thenewsconsulting.com",
           image:"https://portfolio-1-psi-weld.vercel.app/newsconsulting.png"
    },
    {
      title: "Burim Zogaj SA",
      description: "Custom Website Design and development with a property listing a platform.",
      tech: "HTML&CSS,Javascript,Laravel, Bootstrap, mySQL, PHP",
      details: "developed a responsive, high-performance website for a construction  company based in Fribourg using Laravel, Bootstrap, HTML, and CSS. The site features a clean, modern design, fast load times, and a fully responsive layout optimized for both desktop and mobile. It showcases the company's services, listings, and contact features",
         visit:"https://www.burimzogaj.ch",
           image:"https://portfolio-1-psi-weld.vercel.app/burimzogaj.png"
    },

       {
      title: "D-Tring Qeramika ",
      description: "Custom Website Design and development for a tile company",
      tech: "HTML&CSS,Javascript,Laravel, Bootstrap",
      details: "Custom Website Design and development for D-Tring Qeramika , a tile company leader in the market of Kosovo for over 20 years. The website features a modern design, user-friendly navigation, and showcases their extensive range of ceramic tiles. It includes an online catalog, product details, and a contact form for inquiries.",
         visit:"https://www.dtringqeramika.com",
           image:"./dtring.png"
    },


       {
      title: "Majodo LLC ",
      description: "Custom Website Design and development for a digital marketing company",
      tech: "HTML,CSS,Javascript,Laravel, Bootstrap",
      details: "Agents can manage listings, schedule viewings, and communicate with clients. The platform includes 3D virtual tours and integrates with popular CRM tools.",
         visit:"https://www.majodo.com",
           image:"./majodo.png"
    },


  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

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

  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-black mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              variants={itemVariants}
            >
              <div className="h-70  mb-6 duration-300">
                <img src={project.image} alt={project.title} className="w-full h-full " />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="text-sm text-black font-medium">
                {project.tech}
              </div>

               <div className="text-sm text-black font-medium">
               <p  className="text-gray-600 mb-4 leading-relaxed mt-3 text-1xl"> More details   <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" /></p>
              </div>
                
              

              
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.details}</p>
            <div className="text-sm text-black font-medium mb-2">
              Technologies: {selectedProject.tech}
            </div>
            <p className="text-gray-500">{selectedProject.description}</p>
            <p className="text-blue-600 mt-2"> Visit <a href={selectedProject.visit}>{selectedProject.visit}</a></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;