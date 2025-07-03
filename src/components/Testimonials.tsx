
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Stone Media transformed our vision into reality. Their attention to detail and technical expertise exceeded our expectations.",
      author: "Sarah Johnson",
      company: "TechFlow Inc."
    },
    {
      quote: "Professional, reliable, and innovative. The team delivered our mobile app on time and within budget.",
      author: "Michael Chen",
      company: "StartupHub"
    },
    {
      quote: "Working with Stone Media was seamless. They understood our needs and delivered a solution that drives real results.",
      author: "Emily Rodriguez",
      company: "Digital Solutions Co."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-bold text-black">{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
