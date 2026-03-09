import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Banner */}
      <section 
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%), url('/images/hero-bg.jpg')`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Experience Magic Like Never Before</h1>
          <p className="hero-subtitle">
            Professional illusionist bringing wonder and amazement to your events
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Book a Show</Link>
            <Link to="/services" className="btn btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">Services That Amaze</h2>
          <p className="section-subtitle">
            From intimate gatherings to grand corporate events
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎩</div>
              <h3>Corporate Events</h3>
              <p>Elevate your corporate functions with mind-bending illusions</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Private Parties</h3>
              <p>Make your celebration unforgettable with personalized magic</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💍</div>
              <h3>Wedding Entertainment</h3>
              <p>Add enchantment to your special day with elegant performances</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Virtual Shows</h3>
              <p>Bring magic to your online events and virtual gatherings</p>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '40px'}}>
            <Link to="/services" className="btn btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section why-choose">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose Magician Parth?</h2>
              <ul className="features-list">
                <li>✨ 10+ years of professional experience</li>
                <li>🏆 Award-winning performances</li>
                <li>🎭 Customized shows for every occasion</li>
                <li>⭐ 500+ satisfied clients worldwide</li>
                <li>🎪 Interactive and engaging performances</li>
              </ul>
              <Link to="/about" className="btn btn-primary">Learn More About Me</Link>
            </div>
            <div className="why-choose-image">
              <img 
                src="/images/magician-performance.jpg" 
                alt="Magician performing amazing tricks"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div style="
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      border-radius: 12px;
                      height: 400px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 80px;
                    ">✨</div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Add Magic to Your Event?</h2>
            <p>Book your unforgettable experience today</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
