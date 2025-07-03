
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tech: "React, Node.js, PostgreSQL"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      tech: "React Native, Express.js, MongoDB"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management system with appointment scheduling and medical records.",
      tech: "Next.js, Python, MySQL"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours and CRM integration.",
      tech: "Vue.js, Laravel, Redis"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="h-48 bg-black mb-6 transition-all duration-300 group-hover:bg-gray-800"></div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="text-sm text-black font-medium">
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
