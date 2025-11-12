import { ShoppingCart, Package, FileText, Users, Calendar, Utensils } from 'lucide-react';

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

  return (
    <section className="py-24 px-6 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready-to-deploy solutions tailored to solve specific business challenges across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
