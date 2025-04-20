
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  messages: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenMessages?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  messages,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenMessages = 1000,
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentMessage = messages[currentMessageIndex];
      
      if (isDeleting) {
        setCurrentText(currentMessage.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
        }
      } else {
        setCurrentText(currentMessage.substring(0, currentText.length + 1));
        if (currentText === currentMessage) {
          setTimeout(() => setIsDeleting(true), delayBetweenMessages);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentMessageIndex, messages, typingSpeed, deletingSpeed, delayBetweenMessages]);

  return (
    <div className="min-h-[120px] flex items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        {currentText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};

export default TypewriterText;
