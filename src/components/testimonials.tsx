import React from 'react';
import { testimonials } from '@/data/data';
import { IoIosStar } from 'react-icons/io';

const Testimonials: React.FC = () => {
  return (
    <section id='testimonials' className='py-2 md:py-2'>
      <div className='container mx-auto relative max-w-6xl px-4 mt-28'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl lg:text-display-xl'>
            <span className='text-primary-600'>Testimonials</span>
          </h1>
          <h2 className='text-base-500 mb-14'>
            The Tools and technologies I use to bring idea to life
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {testimonials.map((item, index) => (
              <div
                key={index}
                className='bg-base-100 dark:bg-base-950 rounded-xl p-6 overflow-hidden shadow-lg border border-base-200 dark:border-base-800 hover:scale-105 transition-transform duration-300 ease-in-out'
              >
                <div className='items-center object-cover mb-4'>
                  <div className='w-12 h-12 rounded-full overflow-hidden mr-4 mb-4'>
                    <img
                      src={item.image}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-primary-400'>
                      {item.name}
                    </h3>
                    <h4 className='text-lg font-bold text-primary-400'>
                      {item.position}
                    </h4>
                  </div>
                  <p className='text-slate-400 py-2'>{item.content}</p>

                  <div className='flex gap-1 mt-4'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IoIosStar
                        key={i}
                        className='text-amber-600 dark:text-yellow-600'
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
