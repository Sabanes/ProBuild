import React, { useState, useRef, useEffect } from 'react';
import styles from './acc.module.css'; // Import your CSS file for styling

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [maxHeight, setMaxHeight] = useState({});
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the accordion if it's already open
    } else {
      setActiveIndex(index); // Expand the accordion
    }
  };

  useEffect(() => {
    // Set the max height for each accordion content
    const heights = contentRefs.current.map(ref => ref.scrollHeight);
    setMaxHeight(heights);
  }, []);

  const accordionItems = [
    { question: 'What types of construction projects do you specialize in?', answer: 'Probuild Lisbon offers a full range of construction services for your comfort and convenience. We specialize in building stylish homes, cottages, and performing interior construction work. Our professionals will ensure high-quality and fast completion of any construction tasks.' },
    { question: 'How do you ensure the quality and safety of your construction projects?', answer: 'Before any project begins, we conduct thorough planning and risk assessments. Our quality control measures include detailed project specifications, regular site inspections, and systematic checks at each stage of construction. This proactive approach helps us identify and address any issues promptly, ensuring that the project meets the highest standards.' },
    { question: 'What sets your construction company apart from others in the industry?', answer: 'We place our clients at the heart of everything we do. From the initial consultation through project completion, we maintain open and transparent communication. Our team is dedicated to understanding and fulfilling your vision, ensuring that you are informed and involved every step of the way.' },
    { question: 'What is your process for handling project timelines and budgets?', answer: 'Managing project timelines and budgets effectively is essential to the success of our construction projects. We follow a structured and transparent process to ensure that we meet deadlines and stay within budget.' },
  ];

  return (
    <div className={styles.accordion}>
      {accordionItems.map((item, index) => (
        <div className={styles.accordionItem} key={index}>
          <div className={styles.accordionTitle} onClick={() => toggleAccordion(index)}>
            <h1 className='2xl:text-[32px] md:text-[20px] md:max-w-[80%] text-white'>{item.question}</h1>
            <span className='text-white'>{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div
            ref={el => contentRefs.current[index] = el}
            className={`${styles.accordionContent} ${activeIndex === index ? styles.expanded : ''}`}
            style={activeIndex === index ? { maxHeight: `${maxHeight[index]}px` } : { maxHeight: '0' }}
          >
            <p className='2xl:text-[28px] pt-3 text-[#F45E41]'>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
