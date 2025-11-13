
import { motion } from "framer-motion";

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
    }, {
      quote: "StoneMedia did a wonderful job designing and developing our landing pages  Highly skilled, and will work with them again for future projects!",
      author: "Mesut Yilmaz",
      company: "Telecom Solutions"
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
    hidden: { opacity: 0, y: 40 },
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
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-black mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          What Our Clients Say
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-bold text-black">{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
