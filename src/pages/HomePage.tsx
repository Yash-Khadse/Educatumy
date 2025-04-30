import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Elevate your learning with <span className="text-primary">Educatumy</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Providing exceptional educational services tailored to your needs. From major projects to one-on-one tutoring, we're here to help you succeed.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/services" 
                className="btn btn-primary rounded-full"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/contact" 
                className="btn border border-gray-700 text-white hover:bg-gray-800 rounded-full"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-dark-200">
        <div className="container">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title">Our Services</h2>
            <p className="subtitle mx-auto">
              We offer a wide range of educational services designed to help you reach your full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Major Projects */}
            <motion.div 
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Code className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Major Projects</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive educational projects for advanced learning, including full-stack web applications and complex software development.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Mini Projects */}
            <motion.div 
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <BookOpen className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Mini Projects</h3>
              <p className="text-gray-400 mb-6">
                Focused educational exercises designed to teach specific concepts or technologies in a shorter timeframe.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Tutoring */}
            <motion.div 
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Tutoring</h3>
              <p className="text-gray-400 mb-6">
                One-on-one and group tutoring sessions with experienced educators to help you master difficult concepts.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title">Ready to accelerate your learning?</h2>
            <p className="subtitle mx-auto">
              Take the next step in your educational journey with Educatumy. Our team of experts is ready to help you succeed.
            </p>
            <Link 
              to="/contact" 
              className="btn btn-primary rounded-full"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;