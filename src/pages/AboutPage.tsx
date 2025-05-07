import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // <-- updated import
import { Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AboutPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to start the interval
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 3500);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleUserNav = (newIdx: number | ((prev: number) => number), dir: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(dir);
    setCurrent((prev) => {
      const idx = typeof newIdx === 'function' ? newIdx(prev) : newIdx;
      return idx;
    });
    startAutoSlide();
  };

  const prevSlide = () => {
    handleUserNav((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1), -1);
  };

  const nextSlide = () => {
    handleUserNav((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1), 1);
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
              About Educatumy
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're dedicated to providing exceptional educational services that
              help students and professionals reach their full potential.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-6">
                At Educatumy, our mission is to empower individuals through
                education by providing high-quality, accessible learning
                experiences that foster growth, creativity, and excellence.
              </p>
              <p className="text-gray-300">
                We believe that education should be engaging, relevant, and
                tailored to meet the unique needs of each learner. Our approach
                combines cutting-edge educational methodologies with practical,
                hands-on experiences to ensure our students not only acquire
                knowledge but also develop the skills needed to succeed in
                today's rapidly evolving world.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-gray-400">Students Taught</p>
                </div>

                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-gray-400">Awards Won</p>
                </div>

                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">200+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>

                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">15+</h3>
                  <p className="text-gray-400">Expert Tutors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-dark-200">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title">Our Values</h2>
            <p className="subtitle mx-auto">
              These core values guide everything we do at Educatumy and shape
              our approach to education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in all aspects of our educational
                services, from curriculum development to student support.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-400">
                We embrace innovation and continuously adapt our teaching
                methods to reflect current best practices and emerging
                technologies.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-100 p-8 rounded-2xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Inclusivity</h3>
              <p className="text-gray-400">
                We believe that education should be accessible to all. We strive
                to create an inclusive learning environment that respects
                diversity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-black">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title">Gallery</h2>
            <p className="subtitle mx-auto">
              Explore some moments from our classes, workshops, and student achievements.
            </p>
          </motion.div>
          <div className="relative max-w-xl mx-auto">
            <div className="overflow-hidden rounded-xl border border-gray-800 h-72 relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={current}
                  src={galleryImages[current].src}
                  alt={galleryImages[current].alt}
                  className="w-full h-72 object-cover absolute left-0 top-0"
                  initial={{ x: direction > 0 ? 400 : -400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -400 : 400, opacity: 0 }}
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                />
              </AnimatePresence>
            </div>
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-dark-100 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 shadow-lg transition"
              aria-label="Previous"
              style={{ zIndex: 2 }}
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-dark-100 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 shadow-lg transition"
              aria-label="Next"
              style={{ zIndex: 2 }}
            >
              &#8594;
            </button>
            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleUserNav(idx, idx > current ? 1 : -1)}
                  className={`w-3 h-3 rounded-full ${current === idx ? 'bg-primary' : 'bg-gray-700'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
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
            <h2 className="title">Ready to start your educational journey?</h2>
            <p className="subtitle mx-auto">
              Join Educatumy today and take the first step towards achieving
              your learning goals.
            </p>
            <Link to="/contact" className="btn btn-primary rounded-full">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

const galleryImages = [
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626882/edu08_xpqfpb.jpg",
    alt: "Classroom",
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626882/edu06_bhkpgw.jpg",
    alt: "Workshop",
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626882/edu07_r7cmfq.jpg",
    alt: "Student Achievement",
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626882/edu05_vrlgsb.jpg",
    alt: "Seminar",
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626882/edu03_sjmrlv.jpg",
    alt: "Coding Session",
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626883/edu01_ndzx0q.jpg",
    alt: "Project Presentation",
  },
  {
    src: "https://res.cloudinary.com/delaezg4a/image/upload/v1746626884/edu02_uamt7l.jpg",
    alt: "Award Ceremony",
  },
];