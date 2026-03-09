import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-3 months in advance for peak seasons (holidays, summer). However, we can often accommodate last-minute bookings depending on availability.'
    },
    {
      question: 'What types of events do you perform at?',
      answer: 'We perform at corporate events, private parties, weddings, birthday celebrations, virtual events, and more. Each performance is customized to suit your specific event and audience.'
    },
    {
      question: 'How long is a typical performance?',
      answer: 'Performance duration varies by package, typically ranging from 30 minutes to 2 hours. We can customize the length based on your event schedule and needs.'
    },
    {
      question: 'Do you provide your own equipment?',
      answer: 'Yes, we bring all necessary equipment and props. We only need adequate space and, for larger shows, access to basic sound/lighting systems.'
    },
    {
      question: 'Can you customize the show for our event theme?',
      answer: 'Absolutely! We specialize in creating customized performances that align with your event theme, brand, or special requirements.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require a deposit to secure your date. Cancellations made 30+ days before the event receive a full refund minus the deposit. Please contact us for detailed terms.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about booking a magic show
        </p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
