import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import React from 'react';
import { useEffect, useState } from 'react';
import DarkModeBtn from '@/components/ui/DarkModeBtn';
import { ThemeProvider } from '../contexts/theme';
import NavigationMenu from './ui/NavigationMenu';
import { NavLink } from 'react-router';
import NavigationMenuMobile from './ui/NavigationMenuMobile';

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem('darkMode');
    return isDark === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className='bg-transparent fixed z-20 w-full border-b border-gray-500 backdrop-blur-3xl'
      >
        <div className='mx-auto max-w-6xl px-4 transition-all duration-300'>
          <div className='relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4'>
            {/* Logo */}
            <div className='flex w-full items-center justify-between gap-12 lg:w-auto'>
              <a
                href='/'
                aria-label='home'
                className='flex items-center space-x-2 '
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

                <div className='text-xl font-bold'>Umbara</div>
              </a>
              {/* Humberger Menu Mobile */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className='relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden'
              >
                <Menu className='in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200' />
                <X className='in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200' />
              </button>

              {/* Navigation Menu Dekstop */}
              <div className='hidden lg:block'>
                <nav className='flex flex-wrap justify-between items-center font-bold'>
                  <NavigationMenu />
                </nav>
              </div>
            </div>

            {/* Navigation Menu Mobile */}
            <div className='bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-200 p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent'>
              <div className='lg:hidden'>
                <nav className='space-y-6 text-base font-bold'>
                  <NavigationMenuMobile />
                </nav>
              </div>

              {/* Dark Mode */}
              <ThemeProvider value={{ darkMode, toggleDarkMode }}>
                <div className='flex w-full justify-end'>
                  <DarkModeBtn />
                </div>
              </ThemeProvider>
              <div className='flex w-full flex-col space-y-3'>
                <Button>
                  <NavLink to='/contact'>
                    <span className='text-nowrap'>Contact Me</span>
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
