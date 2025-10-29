import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
  return (
    <div>
      <nav
        className='flex flex-wrap items-center justify-center gap-2 md:gap-6 text-sm'
        aria-label='Footer navigation'
      >
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'text-black dark:text-white font-bold border border-base-500 rounded-full px-4 py-0.5'
              : 'hover:text-primary hover:underline block duration-150'
          }
        >
          Home
        </NavLink>

        <NavLink
          to='/about-me'
          className={({ isActive }) =>
            isActive
              ? 'text-black dark:text-white font-bold border border-base-500 rounded-full px-4 py-0.5'
              : 'hover:text-primary hover:underline block duration-150'
          }
        >
          About Me
        </NavLink>

        <NavLink
          to='/skills'
          className={({ isActive }) =>
            isActive
              ? 'text-black dark:text-white font-bold border border-base-500 rounded-full px-4 py-0.5'
              : 'hover:text-primary hover:underline block duration-150'
          }
        >
          Skills
        </NavLink>

        <NavLink
          to='/portfolio'
          className={({ isActive }) =>
            isActive
              ? 'text-black dark:text-white font-bold border border-base-500 rounded-full px-4 py-0.5'
              : 'hover:text-primary hover:underline block duration-150'
          }
        >
          Portfolio
        </NavLink>

        <NavLink
          to='/experience'
          className={({ isActive }) =>
            isActive
              ? 'text-black dark:text-white font-bold border border-base-500 rounded-full px-4 py-0.5'
              : 'hover:text-primary hover:underline block duration-150'
          }
        >
          Experience
        </NavLink>

        <NavLink
          to='/testimonials'
          className={({ isActive }) =>
            isActive
              ? 'text-black dark:text-white font-bold border border-base-500 rounded-full px-4 py-0.5'
              : 'hover:text-primary hover:underline block duration-150'
          }
        >
          Testimonials
        </NavLink>

        {/* <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive
              ? 'text-black dark:text-white font-bold border border-base-500 rounded-full px-4 py-0.5'
              : 'hover:text-primary hover:underline block duration-150'
          }
        >
          Contact
        </NavLink> */}
      </nav>
    </div>
  );
};

export default NavigationMenu;
