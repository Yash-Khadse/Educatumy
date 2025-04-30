import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Service category is required'],
    enum: ['Major Projects', 'Mini Projects', 'Tutoring'],
    default: 'Major Projects'
  },
  icon: {
    type: String,
    default: 'code'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;