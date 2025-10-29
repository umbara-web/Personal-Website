import React, { useState, useEffect } from 'react';
import type { PortfolioItem } from '@/data/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Portfolio: React.FC<{ slides: PortfolioItem[] }> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, slides.length - 2));
    }, 4000); // Auto slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) return null;
  return (
    <section id='portfolio' className='py-2 md:py-2'>
      <div className='container mx-auto relative max-w-6xl px-4 mt-28'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl lg:text-display-xl'>
            My <span className='text-primary-600'>Portfolio</span>
          </h1>
          <h2 className='text-base-500 mb-14'>
            The Tools and technologies I use to bring idea to life
          </h2>

          <div className='relative w-full max-w-6xl mx-auto px-4'>
            <button
              onClick={prevSlide}
              className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black dark:bg-white shadow-lg text-white dark:text-black p-3 rounded-full hover:bg-base-500 transition-colors'
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black dark:bg-white shadow-lg text-white dark:text-black p-3 rounded-full hover:bg-base-500 transition-colors'
            >
              <FaChevronRight />
            </button>
            <div className='overflow-hidden rounded-lg'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{
                  transform: `translateX(-${(currentIndex * 100) / 3}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className='w-1/3 flex-shrink-0 px-2'>
                    <div className='bg-base-100 dark:bg-base-950 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-base-200 dark:border-base-800'>
                      <div className='h-96 overflow-hidden'>
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='p-4'>
                        <h3 className='text-lg font-semibold text-primary-400 text-left'>
                          {slide.title}
                        </h3>
                        <p className='text-slate-400 mt-2 text-left'>
                          {slide.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex justify-center mt-6'>
              {Array.from(
                { length: Math.max(1, slides.length - 2) },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === currentIndex ? 'bg-primary-600' : 'bg-gray-400'
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
