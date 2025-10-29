import React from 'react';
import { Link } from 'react-router';
import NavigationMenu from './ui/NavigationMenu';
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const FooterSection: React.FC = () => {
  return (
    <footer className='container mx-auto max-w-6xl p-6 md:p-8 lg:px-4 lg:py-10'>
      <div className='font-bold mx-auto max-w-6xl p-5 lg:p-10 bg-base-50 dark:bg-base-950 border border-base-border dark:border-base-800 rounded-3xl'>
        {/* Logo */}
        <Link
          to='/'
          aria-label='home'
          className='flex justify-center items-center space-x-2'
        >
          <img
            src='../src/assets/titik.png'
            alt='logo'
            width={26}
            height={28}
          />
          <img
            src='../src/assets/koma.png'
            alt='logo'
            width={26}
            height={28}
            className='-ml-2'
          />
          <span className='text-2xl font-bold'>Umbara</span>
        </Link>
        <nav
          className='my-8 flex flex-wrap justify-center gap-6 text-sm'
          aria-label='Footer navigation'
        >
          <NavigationMenu />
        </nav>

        {/* Social media links */}
        <div className='my-6 flex flex-wrap justify-center gap-6 text-3xl'>
          <div className='flex gap-4'>
            <div className='p-3 backdrop-blur-3xl cursor-pointer'>
              <FaInstagramSquare />
            </div>

            <div className='p-3 backdrop-blur-3xl cursor-pointer'>
              <FaFacebook />
            </div>

            <div className='p-3 backdrop-blur-3xl cursor-pointer'>
              <FaTwitter />
            </div>

            <div className='p-3 backdrop-blur-3xl cursor-pointer'>
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <p className='text-muted-foreground block text-center text-sm'>
          © {new Date().getFullYear()} Umbara, All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
