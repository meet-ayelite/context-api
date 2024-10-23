// FAQComponent.js
import React from "react";
import "../styles.css";

const faqs = [
  { question: "What services do you offer?", answer: "We offer marketing consulting, advertising, and SEO optimization." },
  { question: "How can I subscribe to the newsletter?", answer: "You can subscribe using the form in the newsletter section." },
  { question: "Can I cancel my subscription?", answer: "Yes, you can unsubscribe at any time." },
];

const FAQComponent = () => {
  return (
    <section className="faq-section" id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQComponent;
