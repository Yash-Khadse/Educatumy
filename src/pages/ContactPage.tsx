import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-dark-200">
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Reach out to learn more about our educational services or to schedule a consultation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactInfo />
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
            >
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-dark-200">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="subtitle mx-auto">
              Find answers to common questions about our educational services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">What services do you offer?</h3>
              <p className="text-gray-400">
                We offer a range of educational services including major projects, mini projects, and tutoring in various subjects and technologies for students and professionals.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">How long does a typical project take?</h3>
              <p className="text-gray-400">
                Project timelines vary based on complexity. Major projects typically take 4-8 weeks, while mini projects can be completed in 1-2 weeks. We'll provide a detailed timeline during consultation.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Do you offer remote tutoring?</h3>
              <p className="text-gray-400">
                Yes, we offer both in-person and remote tutoring options to accommodate different learning preferences and geographic locations.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">How do I get started?</h3>
              <p className="text-gray-400">
                To get started, simply fill out the contact form on this page or call us directly. We'll schedule an initial consultation to discuss your needs and recommend the best services for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title">Ready to elevate your educational journey?</h2>
            <p className="subtitle mx-auto">
              Our team of expert educators is ready to help you achieve your learning goals.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn btn-primary rounded-full"
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section> */}
    </>
  );
};

export default ContactPage;