import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Define the interface for a card item
interface CardItem {
  id: number;
  text: string;
  color: string;
  size: string;
  rotation?: string;
  translateX?: string;
}

const initialCards: CardItem[] = [
  { id: 1, text: 'USER EXPERIENCE', color: 'bg-blue-600', size: 'text-2xl', rotation: 'rotate-2', translateX: '-translate-x-4' },
  { id: 2, text: 'AGENCY WEBSITE', color: 'bg-gray-200', size: 'text-xl', rotation: '-rotate-1', translateX: 'translate-x-8' },
  { id: 3, text: 'IDEAS', color: 'bg-gray-200', size: 'text-lg' },
  { id: 4, text: 'PROTOTYPING', color: 'bg-gray-200', size: 'text-xl', translateX: 'translate-x-4' },
  { id: 5, text: 'WIREFRAMING', color: 'bg-gray-200', size: 'text-2xl', rotation: 'rotate-3' },
  { id: 6, text: 'VISUAL DESIGN', color: 'bg-gray-300', size: 'text-3xl', rotation: '-rotate-2' },
  { id: 7, text: 'STARTUP', color: 'bg-gray-200', size: 'text-xl' },
  { id: 8, text: 'MOBILE', color: 'bg-gray-200', size: 'text-xl' },
  { id: 9, text: 'WEB APP', color: 'bg-gray-200', size: 'text-lg', translateX: '-translate-x-4' },
  { id: 10, text: 'CREATIVITY', color: 'bg-purple-600', size: 'text-3xl', rotation: 'rotate-3' },
  { id: 11, text: 'BRAND DESIGN', color: 'bg-gray-200', size: 'text-xl' },
  { id: 12, text: 'WEB DESIGN', color: 'bg-gray-200', size: 'text-xl' },
  { id: 13, text: 'USER INTERFACE', color: 'bg-gray-200', size: 'text-xl' },
  // Add more cards as needed
];

// Define animation variants for the cards
const cardVariants = {
  // The state of the card before it's animated
  initial: {
    opacity: 0,
    y: -200, // Start high up, as if falling from above
    scale: 0.5,
  },
  // The state of the card after the animation
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const Cards = () => {
  const [cards] = useState<CardItem[]>(initialCards);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Detect when the container is 50% in view

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto p-4 md:p-8 overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"} // Animate only when the section is in view
            transition={{
              type: "spring", // Use a spring transition for a bouncing effect
              damping: 10,
              stiffness: 100,
              delay: index * 0.05, // Stagger the animation of each card
            }}
            className={`
              inline-block
              px-6 py-3
              text-center
              font-bold
              rounded-full
              shadow-lg
              cursor-pointer
              transition-all
              duration-300
              hover:scale-110
              whitespace-nowrap
              ${card.color}
              ${card.size}
              ${card.rotation || ''}
              ${card.translateX || ''}
              ${card.color === 'bg-gray-200' ? 'text-gray-800' : 'text-white'}
            `}
            style={{ 
              transform: `${card.rotation ? card.rotation : ''} ${card.translateX ? card.translateX : ''}`
            }}
          >
            {card.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;