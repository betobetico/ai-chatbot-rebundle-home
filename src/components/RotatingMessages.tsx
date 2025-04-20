
import React, { useState, useEffect } from 'react';

interface RotatingMessagesProps {
  messages: string[];
  interval?: number;
}

const RotatingMessages: React.FC<RotatingMessagesProps> = ({ 
  messages, 
  interval = 30000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [messages, interval]);

  return (
    <div className="min-h-[80px] flex items-center justify-center">
      <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto animate-fade-in">
        {messages[currentIndex]}
      </p>
    </div>
  );
};

export default RotatingMessages;
