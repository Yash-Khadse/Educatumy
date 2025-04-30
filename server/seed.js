import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Service from './models/Service.js';

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/educatumy')
  .then(() => {
    console.log('Connected to MongoDB for seeding');
    seedServices()
      .then(() => {
        console.log('Database seeded successfully');
        process.exit(0);
      })
      .catch(error => {
        console.error('Error seeding database:', error);
        process.exit(1);
      });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

const seedServices = async () => {
  // Clear existing services
  await Service.deleteMany({});

  // Seed services
  const services = [
    {
      title: 'Major Projects',
      description: 'Comprehensive educational projects for advanced learning, including full-stack web applications and complex software development.',
      category: 'Major Projects',
      icon: 'code'
    },
    {
      title: 'Mini Projects',
      description: 'Focused educational exercises designed to teach specific concepts or technologies in a shorter timeframe.',
      category: 'Mini Projects',
      icon: 'code-2'
    },
    {
      title: 'Web Development',
      description: 'Learn modern web development with HTML, CSS, JavaScript, and popular frameworks like React, Vue, and Angular.',
      category: 'Major Projects',
      icon: 'globe'
    },
    {
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications using React Native, Flutter, or Swift.',
      category: 'Major Projects',
      icon: 'smartphone'
    },
    {
      title: 'One-on-One Tutoring',
      description: 'Personalized tutoring sessions tailored to your learning pace and specific educational needs.',
      category: 'Tutoring',
      icon: 'user'
    },
    {
      title: 'Group Workshops',
      description: 'Collaborative learning experiences for teams and study groups with hands-on exercises.',
      category: 'Tutoring',
      icon: 'users'
    }
  ];

  await Service.insertMany(services);
  console.log('Sample services added to database');
};