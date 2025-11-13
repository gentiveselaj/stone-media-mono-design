import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiLaravel, 
  SiPhp, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiJavascript, 
  SiAngular, 
  SiIonic ,
  SiTailwindcss
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, purpose: 'Frontend Development' },
  { name: 'React Native', icon: SiReact, purpose: 'Mobile App Development' },
  { name: 'Laravel', icon: SiLaravel, purpose: 'Backend Framework' },
  { name: 'PHP', icon: SiPhp, purpose: 'Server-Side Development' },
  { name: 'Node.js', icon: SiNodedotjs, purpose: 'Backend Runtime' },
  { name: 'Next.js', icon: SiNextdotjs, purpose: 'Full-Stack Framework' },
  { name: 'JavaScript', icon: SiJavascript, purpose: 'Programming Language' },
  { name: 'Angular', icon: SiAngular, purpose: 'Frontend Framework' },
  { name: 'Ionic', icon: SiIonic, purpose: 'Hybrid App Development' },
    { name: 'Tailwind', icon: SiTailwindcss, purpose: 'Hybrid App Development' },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Technologies = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technologies We Use
          </h2>
          <p className="text-muted-foreground text-lg">
            Leveraging cutting-edge technologies to build robust solutions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="flex flex-col items-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <tech.icon className="w-16 h-16 mb-4 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2 text-center">
                {tech.name}
              </h3>
            
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
