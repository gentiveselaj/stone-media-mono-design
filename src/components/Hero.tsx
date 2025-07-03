
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
          STONE MEDIA
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          We craft exceptional digital experiences through custom software development, 
          web applications, and mobile solutions.
        </p>
        <button className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
          Let's Build Something
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
