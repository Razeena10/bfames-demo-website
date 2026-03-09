import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Corporate Event Manager',
      company: 'Tech Corp',
      text: 'Magician Parth made our annual conference unforgettable! His performance was the highlight of the evening.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Wedding Couple',
      company: '',
      text: 'Our guests are still talking about the magic show at our wedding. Absolutely phenomenal!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Birthday Party Host',
      company: '',
      text: 'The kids were mesmerized! Professional, punctual, and incredibly talented. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied clients
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}{testimonial.company && `, ${testimonial.company}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
