
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import React, { useEffect } from "react";
import Projects from '@/components/Projects';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { AuroraHero } from '@/components/AuroraHero';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";



const Index = () => {


     
  return (
 

       
    <div className="min-h-screen">
      <Header />
      
      <AuroraHero />
            
      <div id="services">
        <Services />
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
          
    </div>

  );
};

export default Index;
