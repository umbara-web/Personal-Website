import React from 'react';
import Button from '@/components/ui/Button';
import { Download } from 'lucide-react';
import cv from '../../public/CV_Debi Umbara.pdf';
// export default function AboutMe() {
const AboutMe: React.FC = () => {
  return (
    <>
      <section className='py-2 md:py-2'>
        <div className='mx-auto max-w-6xl px-6 mt-28'>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl font-bold lg:text-display-xl'>
              <span className='text-primary-500'>About</span> Me
            </h1>
            <h6 className='mb-14 text-base-500'>
              User Interface and User Experience
            </h6>
          </div>
          <div className='grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-14'>
            <div className='relative mb-2'>
              <div className='bg-linear-to-b aspect-76/59 relative flex items-center justify-center rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700'>
                <img
                  src='/src/assets/foto-aboutme.png'
                  className='hidden rounded-2xl dark:block'
                  alt='illustration dark'
                  width={300}
                  height={200}
                />
                <img
                  src='/src/assets/foto-aboutme.png'
                  className='rounded-2xl dark:hidden'
                  alt='illustration light'
                  width={300}
                  height={200}
                />
              </div>
            </div>

            <div className='text-justify mt-16'>
              <h1 className='text-2xl font-bold text-primary-300'>Hello!</h1>
              <p className='text-base-500 text-md'>
                My name is{' '}
                <span className='font-bold text-black dark:text-white'>
                  Debi Umbara
                </span>
                , and I specialize in web development using HTML, CSS, JS,
                TailwindCSS, React, and Next etc. I am a highly motivated and
                optimistic individual, dedicated to writing clear, concise, and
                robust code that is effective. I always strive to continuously
                learn and improve. I enjoy having my perspectives and beliefs
                challenged, allowing me to see the world from a new perspective.
                I emphasize core work principles such as punctuality, attention
                to detail, and clear communication.
              </p>
              <p></p>
              <div className='flex justify-center mt-6'>
                <Button variant='primary' className='rounded-xl text-md px-6'>
                  <a href={cv} download='cv'>
                    <span className='text-nowrap flex items-center justify-center gap-4'>
                      <Download className='w-5 h-5' /> Download CV
                    </span>
                  </a>
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
