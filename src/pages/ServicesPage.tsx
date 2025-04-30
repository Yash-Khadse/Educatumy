import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useServices } from '../hooks/useServices';
import { Code, BookOpen, Users, Loader, ArrowRight } from 'lucide-react';

interface Service {
  _id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

const ServicesPage: React.FC = () => {
  // Dummy data for services
  const dummyServices: Service[] = [
    {
      _id: '1',
      title: 'Web Development',
      description: 'Build modern and responsive websites tailored to your needs.',
      category: 'Major Projects',
      icon: 'code',
    },
    {
      _id: '2',
      title: 'Mobile App Development',
      description: 'Create cross-platform mobile applications for Android and iOS.',
      category: 'Major Projects',
      icon: 'smartphone',
    },
    {
      _id: '3',
      title: 'Mini Project Assistance',
      description: 'Get help with your mini projects and assignments.',
      category: 'Mini Projects',
      icon: 'code-2',
    },
    {
      _id: '4',
      title: 'Tutoring in Programming',
      description: 'One-on-one tutoring sessions for various programming languages.',
      category: 'Tutoring',
      icon: 'user',
    },
    {
      _id: '5',
      title: 'Group Study Sessions',
      description: 'Collaborative learning with peers and expert guidance.',
      category: 'Tutoring',
      icon: 'users',
    },
    {
      _id: '6',
      title: 'Open Source Guidance',
      description: 'Learn how to contribute to open source projects.',
      category: 'Mini Projects',
      icon: 'globe',
    },
  ];

  // Remove useServices and use dummyServices instead
  // const { services, loading, error } = useServices();
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    // Use dummyServices instead of services from hook
    if (dummyServices) {
      if (activeFilter === 'all') {
        setFilteredServices(dummyServices);
      } else {
        setFilteredServices(
          dummyServices.filter((service) => service.category === activeFilter)
        );
      }
    }
  }, [activeFilter]);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="h-10 w-10 text-primary" />;
      case 'code-2':
        return <BookOpen className="h-10 w-10 text-primary" />;
      case 'globe':
        return <Code className="h-10 w-10 text-primary" />;
      case 'smartphone':
        return <Code className="h-10 w-10 text-primary" />;
      case 'user':
        return <Users className="h-10 w-10 text-primary" />;
      case 'users':
        return <Users className="h-10 w-10 text-primary" />;
      default:
        return <Code className="h-10 w-10 text-primary" />;
    }
  };

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
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover the comprehensive educational services we offer to help you achieve your learning goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveFilter('Major Projects')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === 'Major Projects'
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Major Projects
            </button>
            <button
              onClick={() => setActiveFilter('Mini Projects')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === 'Mini Projects'
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Mini Projects
            </button>
            <button
              onClick={() => setActiveFilter('Tutoring')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === 'Tutoring'
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Tutoring
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-black">
        <div className="container">
          {/* Remove loading and error logic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service._id}
                className="bg-dark-100 p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-6">{getIconComponent(service.icon)}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  Inquire now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
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
            <h2 className="title">Need a custom service?</h2>
            <p className="subtitle mx-auto">
              Our team can create customized educational solutions tailored to your specific needs.
            </p>
            <Link to="/contact" className="btn btn-primary rounded-full">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;