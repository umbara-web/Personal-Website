import React from 'react';
import { experiences } from '@/data/data';

const experience: React.FC = () => {
  return (
    <section
      id='experience'
      className='container mx-auto max-w-6xl p-6 md:p-8 lg:px-4 lg:py-10'
    >
      <div className='container mx-auto relative max-w-6xl mt-20'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl lg:text-display-xl'>
            My <span className='text-primary-600'>Experience</span>
          </h1>
          <h2 className='text-base-500 mb-14'>
            The Tools and technologies I use to bring idea to life
          </h2>

          <div className='relative w-full mx-auto py-12'>
            <div className='absolute left-1/2 md:left-1/2 top-0 bottom-0 w-1 md:flex hidden bg-primary-600 transform -translate-x-1/2'></div>
            <div className='space-y-16'>
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center w-full ${
                      isLeft ? 'md:justify-start' : 'md:justify-end'
                    } justify-center`}
                  >
                    <div className='absolute left-1/2 md:flex hidden transform -translate-1/2 z-10'>
                      <div className='h-10 w-10 rounded-full shadow-lg flex justify-center items-center bg-primary-600'>
                        <span className='text-2xl text-base-100'>
                          {exp.logo}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg bg-base-100 dark:bg-base-950 border border-base-border dark:border-primary-500 hover:scale-105 transition-transform duration-300 
                        
                        ${
                          isLeft ? 'md:text-right md:mr-12' : 'md:ml-12'
                        } text-left`}
                    >
                      <h3 className='text-xl font-semibold text-black dark:text-white'>
                        {exp.company}
                      </h3>
                      <p className='text-sm text-base-950 dark:text-base-500 mb-3'>
                        {exp.period}
                      </p>
                      <p className='text-sm text-base-950 dark:text-base-400 text-justify mb-4'>
                        {exp.description}
                      </p>

                      <div className='flex flex-wrap gap-2 md:justify-end justify-start'>
                        {exp.skills.map((skil, i) => (
                          <span
                            key={i}
                            className='px-3 py-1 bg-primary-800 dark:bg-base-100 rounded-md text-sm font-medium text-white dark:text-black'
                          >
                            {skil}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
