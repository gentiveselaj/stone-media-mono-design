import { ShoppingCart, Package, FileText, Users, Calendar, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const solutions = [
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms for single store and multi-vendor businesses, enabling seamless online sales."
    },
    {
      icon: Package,
      title: "Stock and Price Management System",
      description: "Comprehensive inventory tracking and pricing tools to optimize your stock levels and profitability."
    },
    {
      icon: FileText,
      title: "Invoicing System",
      description: "Automated invoicing and billing solutions that streamline your financial operations and improve cash flow."
    },
    {
      icon: Users,
      title: "HR Management System",
      description: "Complete human resources platform for employee management, payroll, and performance tracking."
    },
    {
      icon: Calendar,
      title: "Attendance System",
      description: "Digital attendance tracking and time management solutions for accurate workforce monitoring."
    },
    {
      icon: Utensils,
      title: "Food Delivery App",
      description: "End-to-end food delivery platforms connecting restaurants with customers for seamless ordering."
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
    <section className="py-24 px-6 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={titleVariants}
          >
            Ready-to-deploy solutions tailored to solve specific business challenges across industries.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
