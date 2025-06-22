// src/components/FAQ.jsx
import React, { useState } from 'react';

const faqData = [
  {
    question: "Jakie są Wasze godziny pracy?",
    answer: "Jesteśmy dostępni od poniedziałku do piątku w godzinach 9:00 - 18:00.",
  },
  {
    question: "Jak mogę umówić się na spotkanie?",
    answer: "Możesz skontaktować się z nami telefonicznie lub poprzez formularz kontaktowy na stronie.",
  },
  {
    question: "Czy oferujecie finansowanie?",
    answer: "Tak, współpracujemy z bankami i doradcami finansowymi, którzy pomogą w uzyskaniu kredytu.",
  },
  // Dodaj kolejne pytania według potrzeby
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Najczęściej zadawane pytania</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-4 cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-semibold text-gray-900 flex justify-between items-center">
              {item.question}
              <span className="text-yellow-500 font-bold">{openIndex === index ? '-' : '+'}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
