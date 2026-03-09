const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "nishad17nishad@gmail.com",
    pass: "dikj jygn thyo usua"
  }
});

// POST contact form
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
], async (req, res) => {
  // debug logging
  console.log('Received contact POST:', req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const contact = new Contact(req.body);
    await contact.save();

    // Send email notification
    await transporter.sendMail({
      from: "nishad17nishad@gmail.com",
      to: "razeenanishad2005@gmail.com",
      replyTo: req.body.email,
      subject: `New Contact: ${req.body.subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${req.body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${req.body.message}</p>
      `
    });

    await transporter.sendMail({
      from: "nishad17nishad@gmail.com",
      to: req.body.email,
      subject: "Thank you for contacting us",
      html: `
        <h2>Hello ${req.body.name},</h2>

        <p>Thank you for contacting us. We have received your message.</p>

        <p>Our team will get back to you shortly.</p>

        <h3>Your Submitted Details</h3>

        <p><strong>Subject:</strong> ${req.body.subject}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>

        <br/>

        <p>Best Regards,</p>
        <p><strong>Magician Parth Team</strong></p>
      `
    });

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    // send detailed error in development so front end can display it
    res.status(500).json({ message: process.env.NODE_ENV === 'development' ? error.message : 'Error submitting form' });
  }
});

module.exports = router;
