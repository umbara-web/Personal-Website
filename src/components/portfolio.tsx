import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { PortfolioItem } from '@/data/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const VISIBLE = 3;

const Portfolio: React.FC<{ slides: PortfolioItem[] }> = ({ slides }) => {
  // Jumlah slide yang dikloning di awal & akhir
  const clone = Math.min(VISIBLE, slides.length);

  // Extended array: [klon akhir] + [semua slide asli] + [klon awal]
  const extended = [
    ...slides.slice(-clone),
    ...slides,
    ...slides.slice(0, clone),
  ];

  // Mulai dari posisi pertama slide ASLI (setelah klon di awal)
  const [idx, setIdx] = useState(clone);
  const [animated, setAnimated] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Autoplay: reset timer setiap kali user klik manual
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimated(true);
      setIdx((prev) => prev + 1);
    }, 4000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Infinite loop: saat memasuki zona klon, setelah animasi selesai
  // langsung "teleport" (tanpa animasi) ke slide asli yang identik secara visual
  useEffect(() => {
    // Melewati slide asli terakhir → masuk klon awal di akhir
    if (idx >= clone + slides.length) {
      const t = setTimeout(() => {
        setAnimated(false);
        setIdx(clone); // teleport ke slide asli pertama
      }, 500);
      return () => clearTimeout(t);
    }
    // Melewati slide asli pertama → masuk klon akhir di awal
    if (idx < clone) {
      const t = setTimeout(() => {
        setAnimated(false);
        setIdx(clone + slides.length - 1); // teleport ke slide asli terakhir
      }, 500);
      return () => clearTimeout(t);
    }
  }, [idx, clone, slides.length]);

  const goNext = () => {
    setAnimated(true);
    setIdx((prev) => prev + 1);
    startTimer();
  };

  const goPrev = () => {
    setAnimated(true);
    setIdx((prev) => prev - 1);
    startTimer();
  };

  const goTo = (i: number) => {
    setAnimated(true);
    setIdx(i + clone);
    startTimer();
  };

  // Hitung index real untuk highlight dot
  const realIdx =
    ((idx - clone) % slides.length + slides.length) % slides.length;

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
              onClick={goPrev}
              className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black dark:bg-white shadow-lg text-white dark:text-black p-3 rounded-full hover:bg-base-500 transition-colors'
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goNext}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black dark:bg-white shadow-lg text-white dark:text-black p-3 rounded-full hover:bg-base-500 transition-colors'
            >
              <FaChevronRight />
            </button>

            <div className='overflow-hidden rounded-lg'>
              <div
                className='flex'
                style={{
                  transform: `translateX(-${(idx * 100) / VISIBLE}%)`,
                  transition: animated ? 'transform 500ms ease-in-out' : 'none',
                }}
              >
                {extended.map((slide, index) => (
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

            {/* Dots — satu per slide, highlight sesuai posisi real */}
            <div className='flex justify-center mt-6'>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                    i === realIdx ? 'bg-primary-600' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
