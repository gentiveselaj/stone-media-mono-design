
const About = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              About Stone Media
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We are a forward-thinking software development agency dedicated to 
                transforming ideas into powerful digital solutions.
              </p>
              <p>
                Our team combines technical expertise with creative vision to deliver 
                applications that not only meet your requirements but exceed your expectations.
              </p>
              <p>
                From startups to enterprise clients, we pride ourselves on building 
                lasting partnerships and delivering solutions that drive real business value.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-black"></div>
            <div className="absolute inset-4 border-2 border-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
