import React, { useState } from 'react';
import './FAQs.css';

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
        question: 'What is an "Active Request"?',
        answer: 'Do you need a video edited? That’s an Active Request. Need a graphic for Instagram, TikTok, or LinkedIn? That’s an Active Request. Want help designing an investment deck? That’s an Active Request. Essentially, any request that has a tangible deliverable for your business counts as an Active Request.'
    },
    {
      question: 'How is an "Active Request" measured for UX/UI?',
      answer: 'For UX/UI, an Active Request refers to a specific task with a defined deliverable. For example, designing a landing page interface, a single app screen, or creating a simple user flow. If the project is larger, we’ll break it down into smaller requests, with each one counted as an Active Request. This ensures that every part of the project is delivered with the attention and quality it deserves.'
    },
    {
      question: 'What does the unlimited design service include?',
      answer: 'Our unlimited design service allows you to submit design requests up to the number of active requests in your plan (for example, 8 active requests at a time with the Alfred Crush It plan). Once a request is delivered, you can submit a new one, maintaining a continuous flow of creative projects. This includes graphic design, video editing, branding, and more, all tailored to your business needs.'
    },
    {
      question: 'How does the design request process work?',
      answer: "You can submit your design request easily through our platform. Just tell us what you need, attach any references or guidelines, and our team will start working on it right away. We maintain constant communication with you to ensure the final result meets your expectations, and once completed, you'll receive it as quickly as possible."
    },
    {
        question: 'What if I don’t like the design?',
        answer: "Every time we deliver a design, our platform gives you an easy way to provide feedback. If you're not satisfied, we're here to help refine it until you get exactly what you need. We make sure the final result meets your expectations."
      },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, if you’re on a monthly subscription, you can cancel at any time. However, if you’ve chosen the annual plan, you can continue to use our services until your subscription period ends.'
    },
    {
        question: 'Can I try the service for free?',
        answer: "Yes! We offer a free sample. Contact us, and we'll design whatever you need as one active request. It's a great way to experience the quality of our work with no commitment."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faqs' className='section-padding'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h1 className="display-3 title">FAQs</h1>
              <div className="line"></div>
              <p>Got questions, huh? Don’t worry, we’ve got you covered. Here are some answers to help clear things up...</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                onClick={() => toggleFAQ(index)}>
                <h5 className="faq-question">{faq.question}</h5>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;

