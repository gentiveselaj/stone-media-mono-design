
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss how we can bring your vision to life. 
          We're here to turn your ideas into exceptional digital experiences.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 mb-4" />
            <span className="text-lg">hello@stonemedia.dev</span>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-4" />
            <span className="text-lg">+1 (555) 123-4567</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-4" />
            <span className="text-lg">Remote Worldwide</span>
          </div>
        </div>
        
        <button className="bg-white text-black px-12 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
