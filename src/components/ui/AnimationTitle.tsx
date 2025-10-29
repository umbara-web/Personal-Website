import { useEffect, useState } from 'react';

const roles = [
  { title: 'Web Developer' },
  { title: 'Full Stack Web Developer' },
  { title: 'Software Developer' },
  { title: 'Android Developer' },
];

const AnimationTitle = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currentRoleIndex].title;
      if (!isDeleting) {
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(500);
        } else {
          setCurrentText(current.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(500);
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRoleIndex, currentText, isDeleting, typingSpeed]);

  return (
    <div className='text-center md:text-start'>
      <h1 className='text-3xl md:text-5xl font-bold text-primary-600 mb-6'>
        <span className='pb-1'>{currentText}</span>
        <span className='inline-block h-7 md:h-14 w-0.5 bg-primary ml-1 animate-pulse'></span>
      </h1>
    </div>
  );
};

export default AnimationTitle;
