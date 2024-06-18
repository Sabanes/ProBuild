'use client';

import React, { useState } from 'react';
import styles from './acc.module.css'; // Import your CSS file for styling

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the accordion if it's already open
    } else {
      setActiveIndex(index); // Expand the accordion
    }
  };

  const accordionItems = [
    { question: 'What types of construction projects do you specialize in?', answer: 'Answer 1' },
    { question: 'Construction projects our area of interest?', answer: 'Answer 2' },
    { question: 'Competitors in terms of quality and efficiency?', answer: 'Answer 3' },
    // Add more items as needed
  ];
  
  return (
    <div className={styles.accordion}>
      {accordionItems.map((item, index) => (
        <div className={styles.accordionItem} key={index}>
          <div className={styles.accordionTitle} onClick={() => toggleAccordion(index)}>
            <h1>{item.question}</h1>
            {/* You can add icons or other UI indicators for open/close state */}
            <span>{activeIndex === index ? '-' : ' +'}</span>
          </div>
          {activeIndex === index && (
            <div className={styles.accordionContent}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
