import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div className="container max-w-2xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="btn btn-primary rounded-full"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="btn border border-gray-700 text-white hover:bg-gray-800 rounded-full"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;