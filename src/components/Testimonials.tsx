
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Collaborating with Stone Media was a pleasure. The professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ",
      author: "Burim Zogaj",
      company: "Burim Zogaj SA."
    },
    {
      quote: "As a client, We had the privilege of working with Stone Media on our App for Arbresh.info, and I was thoroughly impressed with the skills and professionalism. They consistently exceeded our expectations, delivering exceptional results on time and with great attention to detail. ",
      author: "Bleriant Syla ",
      company: "Arbresh.info"
    },
    {
      quote: "Working with Stone Media was seamless. They understood our needs and delivered a solution that drives real results.",
      author: "Ard Ceku",
      company: "D-Tring Qeramika"
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
