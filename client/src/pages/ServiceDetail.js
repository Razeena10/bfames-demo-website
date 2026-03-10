import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      const response = await axios.get(`https://bfames-demo-website-1.onrender.com/api/services/${id}`);
      setService(response.data);
    } catch (error) {
      console.error('Error fetching service:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <section className="page-hero">
        <div className="container">
          <Link to="/services" className="back-link">← Back to Services</Link>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-main">
              {service.image && (
                <div className="service-detail-image">
                  <img src={service.image} alt={service.title} />
                </div>
              )}

              <div className="service-detail-content">
                <h2>What's Included</h2>
                {service.features && service.features.length > 0 && (
                  <ul className="feature-list-detailed">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="service-description-section">
                  <h2>Perfect For</h2>
                  <div className="perfect-for-grid">
                    {service.title === 'Corporate Events' && (
                      <>
                        <div className="perfect-item">🏢 Company Conferences</div>
                        <div className="perfect-item">🎊 Holiday Parties</div>
                        <div className="perfect-item">🎯 Team Building Events</div>
                        <div className="perfect-item">🏆 Award Ceremonies</div>
                      </>
                    )}
                    {service.title === 'Private Parties' && (
                      <>
                        <div className="perfect-item">🎂 Birthday Celebrations</div>
                        <div className="perfect-item">🎉 Anniversary Parties</div>
                        <div className="perfect-item">🏠 House Parties</div>
                        <div className="perfect-item">👨‍👩‍👧‍👦 Family Gatherings</div>
                      </>
                    )}
                    {service.title === 'Wedding Entertainment' && (
                      <>
                        <div className="perfect-item">💍 Wedding Receptions</div>
                        <div className="perfect-item">🥂 Cocktail Hours</div>
                        <div className="perfect-item">💒 Rehearsal Dinners</div>
                        <div className="perfect-item">🎊 Engagement Parties</div>
                      </>
                    )}
                    {service.title === 'Virtual Shows' && (
                      <>
                        <div className="perfect-item">💻 Zoom Events</div>
                        <div className="perfect-item">👥 Virtual Team Meetings</div>
                        <div className="perfect-item">🌐 Online Conferences</div>
                        <div className="perfect-item">🎓 Virtual Celebrations</div>
                      </>
                    )}
                  </div>
                </div>

                <div className="service-process">
                  <h2>How It Works</h2>
                  <div className="process-steps">
                    <div className="process-step">
                      <div className="step-number">1</div>
                      <h4>Contact Us</h4>
                      <p>Fill out the booking form with your event details</p>
                    </div>
                    <div className="process-step">
                      <div className="step-number">2</div>
                      <h4>Consultation</h4>
                      <p>We'll discuss your needs and customize the show</p>
                    </div>
                    <div className="process-step">
                      <div className="step-number">3</div>
                      <h4>Confirmation</h4>
                      <p>Receive booking confirmation and event details</p>
                    </div>
                    <div className="process-step">
                      <div className="step-number">4</div>
                      <h4>Show Time</h4>
                      <p>Enjoy an unforgettable magical experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-detail-sidebar">
              <div className="booking-card">
                <h3>Book This Service</h3>
                
                <div className="pricing-info">
                  {service.price && (
                    <div className="price-tag">
                      <span className="price-label">Investment</span>
                      <span className="price-value">{service.price}</span>
                    </div>
                  )}
                  {service.duration && (
                    <div className="duration-tag">
                      <span className="duration-icon">⏱</span>
                      <span>{service.duration}</span>
                    </div>
                  )}
                </div>

                <Link to="/contact" className="btn btn-primary btn-block">
                  Request Booking
                </Link>

                <div className="contact-info-box">
                  <h4>Questions?</h4>
                  <p>📧 info@magicianparth.com</p>
                  <p>📱 +91 98765 43210</p>
                </div>
              </div>

              <div className="related-services">
                <h4>Other Services</h4>
                <Link to="/services" className="related-link">
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
