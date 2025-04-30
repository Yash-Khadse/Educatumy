import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

// @route   POST /api/inquiries
// @desc    Create a new inquiry
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, serviceInterest, message } = req.body;

    // Create new inquiry
    const inquiry = new Inquiry({
      name,
      email,
      phone,
      serviceInterest,
      message
    });

    const savedInquiry = await inquiry.save();
    
    res.status(201).json({
      success: true,
      data: savedInquiry
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      console.error('Server error:', error);
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
});

export default router;