import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Magician Parth</h1>
          <p>Crafting moments of wonder for over a decade</p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="/images/about-magician.jpg" 
                alt="Magician Parth - Professional Illusionist"
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
                    ">🎩</div>
                  `;
                }}
              />
            </div>
            <div className="about-text">
              <h2>The Journey of Magic</h2>
              <p>
                For over 10 years, I've been dedicated to the art of illusion, bringing 
                joy and wonder to audiences worldwide. What started as a childhood 
                fascination has evolved into a professional career that has taken me 
                to stages across the globe.
              </p>
              <p>
                My performances blend classic sleight of hand with modern illusions, 
                creating experiences that captivate audiences of all ages. Whether it's 
                an intimate close-up performance or a grand stage show, I bring the same 
                level of dedication and artistry to every event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section achievements">
        <div className="container">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">500+</div>
              <p>Shows Performed</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">10+</div>
              <p>Years Experience</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">15+</div>
              <p>Countries Visited</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">5</div>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Create Magic Together</h2>
            <p>Ready to make your event unforgettable?</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
