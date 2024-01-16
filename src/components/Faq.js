import React, { useState } from 'react';
import Arrow from './images/down-arrow.svg';
import './static/Faq.css';

export default function Faq() {
  const [expanded, setExpanded] = useState(Array(3).fill(false));

  const handleToggle = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className='relative left-[114px] top-[500px]'>
      <h1 className="text-blue-950 text-5xl font-bold font-['Inter'] tracking-tight relative">FAQ</h1>
      <div className="w-[848px] flex-col relative top-[68px]">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question w-[848px] px-6 py-[17px] rounded-xl border border-blue-600 inline-flex cursor-pointer`}
              onClick={() => handleToggle(index)}
            >
              <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed flex-grow">
                {item.question}
              </div>
              <img
                className={`w-8 h-8 transform ${expanded[index] ? 'rotate-180' : 'rotate-0'}`}
                src={Arrow}
                alt={`Arrow ${expanded[index] ? 'up' : 'down'}`}
              />
            </div>
            {expanded[index] && (
              <p className="faq-answer px-6 py-2 text-zinc-800 font-custom">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    question: 'Can education flashcards be used for all age groups?',
    answer: 'Yes, flashcards are versatile and suitable for all age groups. They provide an interactive and engaging way of learning, making them effective for both children and adults. Flashcards can be customized to cater to different learning styles and levels, making them a valuable tool for education.',
  },
  {
    question: 'How do education flashcards work?',
    answer: 'Education flashcards use a question-and-answer format to aid learning and retention. Each flashcard presents a question or concept on one side and the corresponding answer or information on the other side. This format helps reinforce memory through repetition and active recall. Flashcards are particularly effective for memorizing facts, vocabulary, and key concepts.',
  },
  {
    question: 'Can education flashcards be used for test preparation?',
    answer: 'Absolutely, flashcards are an effective tool for test preparation. They are a practical and efficient way to review and reinforce information before exams. Flashcards allow students to focus on specific topics, test their knowledge, and identify areas that need further review. Additionally, the portability of flashcards makes them convenient for quick study sessions, helping students maximize their preparation time.',
  },
];
