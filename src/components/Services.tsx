
import { Code, Globe, Smartphone,Upload,Wrench,Briefcase } from 'lucide-react';

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

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We specialize in creating digital solutions that drive business growth and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
