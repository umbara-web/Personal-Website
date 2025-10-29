import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { PiPhone } from 'react-icons/pi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Button from './ui/Button';
// import { experiences } from '@/data/data';

const Contact: React.FC = () => {
  return (
    <section id='contact' className='py-2 md:py-2'>
      <div className='container mx-auto relative max-w-6xl px-4 mt-28'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-3xl lg:text-display-xl'>
            Get In <span className='text-primary-600'>Touch</span>
          </h1>
          <h2 className='text-base-500 mb-14'>
            The Tools and technologies I use to bring idea to life
          </h2>

          {/* Contact Detail */}
          <div className='bg-base-100 dark:bg-base-950 text-left backdrop-blur-lg rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 border border-base-200 dark:border-base-800'>
            <div>
              <h3 className='text-xl font-semibold mb-6'>Contact Detail</h3>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='p-3 bg-base-300 dark:bg-base-900 backdrop-blur-3xl rounded-full mr-4 border border-base-200 dark:border-base-800'>
                    <IoLocationSharp />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Location</h4>
                    <p className='text-slate-400'>Jawa Barat, Indonesia</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='p-3 bg-base-300 dark:bg-base-900 backdrop-blur-3xl rounded-full mr-4 border border-base-200 dark:border-base-800'>
                    <MdEmail />
                  </div>
                  <div>
                    <h4 className='font-semibold'>E-mail</h4>
                    <p className='text-slate-400'>umbara81.web@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='p-3 bg-base-300 dark:bg-base-900 backdrop-blur-3xl rounded-full mr-4 border border-base-200 dark:border-base-800'>
                    <PiPhone />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Phone</h4>
                    <p className='text-slate-400'>+62 817 78 5006</p>
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <h4 className='font-semibold mb-4'>Follow Me</h4>
                <div className='flex gap-4'>
                  <div className='p-3 bg-base-300 dark:bg-base-900 backdrop-blur-3xl rounded-full border border-base-200 dark:border-base-800 hover:bg-primary-200'>
                    <FaInstagram />
                  </div>

                  <div className='p-3 bg-base-300 dark:bg-base-900 backdrop-blur-3xl rounded-full border border-base-200 dark:border-base-800 hover:bg-primary-200'>
                    <FaFacebook />
                  </div>

                  <div className='p-3 bg-base-300 dark:bg-base-900 backdrop-blur-3xl rounded-full border border-base-200 dark:border-base-800 hover:bg-primary-200'>
                    <FaTwitter />
                  </div>

                  <div className='p-3 bg-base-300 dark:bg-base-900 backdrop-blur-3xl rounded-full border border-base-200 dark:border-base-800 hover:bg-primary-200'>
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className='text-xl font-semibold mb-6'>Send me a Message</h3>
              <form action='' className='space-y-4'>
                <div>
                  <label htmlFor='' className='block mb-2 text-md font-medium'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    placeholder='Your Name'
                    className='w-full px-4 py-2 bg-base-100 dark:bg-base-950 rounded-lg border border-base-300 dark:border-base-800 focus:ring-3 focus:ring-primary-400'
                  ></input>
                </div>

                <div>
                  <label htmlFor='' className='block mb-2 text-md font-medium'>
                    Your Email
                  </label>
                  <input
                    type='text'
                    placeholder='Your Email'
                    className='w-full px-4 py-2 bg-base-100 dark:bg-base-950 rounded-lg border border-base-300 dark:border-base-800 focus:ring-3 focus:ring-primary-400'
                  ></input>
                </div>

                <div>
                  <label htmlFor='' className='block mb-2 text-md font-medium'>
                    Subject
                  </label>
                  <input
                    type='text'
                    placeholder='Subject'
                    className='w-full px-4 py-2 bg-base-100 dark:bg-base-950 rounded-lg border border-base-300 dark:border-base-800 focus:ring-3 focus:ring-primary-400'
                  ></input>
                </div>

                <div>
                  <label htmlFor='' className='block mb-2 text-md font-medium'>
                    Massege
                  </label>
                  <textarea
                    placeholder='Massege'
                    className='w-full h-40 px-4 py-2 bg-base-100 dark:bg-base-950 rounded-lg border border-base-300 dark:border-base-800 focus:ring-3 focus:ring-primary-400'
                  ></textarea>
                </div>
                <Button variant='primary' className='w-full'>
                  Send Massege
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
