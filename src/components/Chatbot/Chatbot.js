// /app/components/ChatBot.js
'use client';

import { BsWhatsapp } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ChatBot = () => {
  const element = {
    initial: {
      scale: 1,
    },
    onHover: {
      scale: 1.05,
      animation: {
        duration: 0.2,
      },
    },
    onDrag: {
      scale: 0.9,
      animation: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="position-relative">
      <motion.div
        initial="initial"
        whileHover="onHover"
        whileTap="onDrag"
        variants={element}
        className="position-fixed d-flex justify-content-center align-items-center"
        style={{
          bottom: '50px',
          right: '30px',
          width: '68px',
          height: '68px',
          backgroundColor: '#47BF54',
          borderRadius: '90%',
          zIndex: 9999,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
        }}
      >
        <a
          href="https://wa.link/pyefnc"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex justify-content-center align-items-center h-100 w-100"
        >
          <BsWhatsapp className="text-white" style={{ fontSize: '40px' }} />
        </a>
      </motion.div>
    </div>
  );
};

export default ChatBot;
