import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Services.css';
import FAQ from '../components/FAQ';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("https://bfames-demo-website-1.onrender.com/api/services");
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
      // Fallback data
      setServices([
        {
          _id: '1',
          title: 'Corporate Events',
          description: 'Elevate your corporate functions with professional magic entertainment',
          price: 'Starting at $1,500',
          duration: '30-60 minutes',
          features: ['Customized performance', 'Interactive audience participation', 'Professional setup']
        },
        {
          _id: '2',
          title: 'Private Parties',
          description: 'Make your celebration unforgettable with personalized magic shows',
          price: 'Starting at $800',
          duration: '45 minutes',
          features: ['Close-up magic', 'Tailored to your theme', 'All ages welcome']
        }
      ]);
    }
  };

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional magic entertainment for every occasion</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((service) => (
              <div key={service._id} className="service-item">
                {service.image && (
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                )}
                <div className="service-item-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="service-features">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="more-features">+ {service.features.length - 3} more features</li>
                      )}
                    </ul>
                  )}
                  <div className="service-meta">
                    {service.price && <span className="price">{service.price}</span>}
                    {service.duration && <span className="duration">⏱ {service.duration}</span>}
                  </div>
                  <Link to={`/services/${service._id}`} className="btn btn-outline" style={{marginTop: '20px'}}>
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Why Choose Our Services */}
          <div className="services-benefits" style={{marginTop: '80px'}}>
            <h2 className="section-title">Why Choose Our Services?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <h4>Customized Performances</h4>
                <p>Every show is tailored to your event and audience</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⭐</div>
                <h4>Professional Quality</h4>
                <p>Award-winning performances with top-tier production</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💼</div>
                <h4>Reliable & Punctual</h4>
                <p>Always on time with professional setup</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎉</div>
                <h4>Memorable Experience</h4>
                <p>Create lasting memories for your guests</p>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '60px'}}>
            <Link to="/contact" className="btn btn-primary btn-lg">Book Your Event</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Services;
