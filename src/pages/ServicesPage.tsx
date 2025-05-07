import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios"; // <-- Add this import
import { Code, BookOpen, Users, Loader, ArrowRight } from "lucide-react";

interface Service {
  _id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch services from backend
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/services`
        );
        if (response.data.success) {
          setServices(response.data.data);
          setError(null);
        } else {
          setError("Failed to fetch services");
        }
      } catch (err) {
        setError("Failed to fetch services");
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    if (services) {
      if (activeFilter === "all") {
        setFilteredServices(services);
      } else {
        setFilteredServices(
          services.filter((service) => service.category === activeFilter)
        );
      }
    }
  }, [services, activeFilter]);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-10 w-10 text-primary" />;
      case "code-2":
        return <BookOpen className="h-10 w-10 text-primary" />;
      case "globe":
        return <Code className="h-10 w-10 text-primary" />;
      case "smartphone":
        return <Code className="h-10 w-10 text-primary" />;
      case "user":
        return <Users className="h-10 w-10 text-primary" />;
      case "users":
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
              Discover the comprehensive educational services we offer to help
              you achieve your learning goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveFilter("Development")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "Development"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveFilter("Project Assistance")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "Project Assistance"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Project Assistance
            </button>
            <button
              onClick={() => setActiveFilter("Research Assistance")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "Research Assistance"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Research Assistance
            </button>
            <button
              onClick={() => setActiveFilter("Internships")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "Internships"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setActiveFilter("Tutoring")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "Tutoring"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader className="h-8 w-8 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service._id || index}
                  className="bg-dark-100 p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mb-6">{getIconComponent(service.icon)}</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
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
          )}
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
              Our team can create customized educational solutions tailored to
              your specific needs.
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
