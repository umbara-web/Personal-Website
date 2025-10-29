import React from 'react';
import Button from '@/components/ui/Button';
import AnimationTitle from './ui/AnimationTitle';
import { NavLink } from 'react-router';
// import { Header } from './header';

const HeroSection: React.FC = () => {
  return (
    <>
      <section>
        <div className='pb-4 pt-12 md:pb-4 lg:pb-44 lg:pt-44 mx-auto max-w-6xl'>
          <div className='relative mx-auto flex max-w-6xl flex-col px-6 lg:block mt-8 lg:mt-28'>
            <div className='mx-auto max-w-2xl text-center lg:z-20 lg:ml-0 lg:w-6xl lg:text-left'>
              <h1 className='mt-8 text-xs font-semibold md:text-base lg:mt-16 xl:text-2xl text-base-500'>
                Hi, I am
              </h1>
              <h1 className='text-sm font-extrabold md:text-lg xl:text-3xl'>
                DEBI UMBARA
              </h1>
              <AnimationTitle />
              <p className='max-w-2xl text-pretty text-lg text-base-500'>
                Building scalable and high-performance web solutions for your
                business needs.
              </p>

              <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start'>
                <Button variant='primary' className='w-full px-6 text-lg'>
                  <NavLink to='/portfolio'>
                    <span className='text-nowrap'>View Portfolio</span>
                  </NavLink>
                </Button>
                <Button variant='primary' className='w-full px-6 text-lg'>
                  <NavLink to='/contact'>
                    <span className='text-nowrap'>Contact Me</span>
                  </NavLink>
                </Button>
              </div>
            </div>
            <img
              className='-z-10 order-first mx-auto object-cover lg:absolute lg:inset-0 md:size-2/6 lg:inset-y-0 lg:-right-170 lg:-top-42 lg:order-last lg:h-[600px] lg:object-contain dark:mix-blend-lighten dark:invert-0'
              src='/src/assets/foto-hero.png'
              alt='Foto'
              height='100'
              width='150'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
