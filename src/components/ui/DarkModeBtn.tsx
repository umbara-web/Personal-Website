import { LuMoonStar, LuSun } from 'react-icons/lu';
import useTheme from '@/contexts/theme';

const DarkModeBtn = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className='flex items-center gap-3'>
      <div className='flex w-full justify-end-safe items-center font-semibold text-sm lg:hidden'>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
      <button
        onClick={toggleDarkMode}
        className={`relative flex items-center p-1 rounded-full border border-gray-600 shadow-xl hover:cursor-pointer transition-all duration-300  hover:bg-gray-300  dark:hover:bg-gray-600 ${
          darkMode ? 'bg-transparent' : ''
        }`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 bg-primary-600 p-0.5 rounded-full flex items-center justify-center transition-all duration-500 ${
            darkMode ? 'translate-x-5.5' : 'translate-x-0'
          }`}
        >
          {darkMode ? (
            <LuMoonStar size={18} className='text-white' />
          ) : (
            <LuSun size={18} className='text-white' />
          )}
        </div>

        <div className='flex w-full justify-between items-center gap-3 text-white '>
          <LuSun size={16} />
          <LuMoonStar size={16} className='text-black dark:text-white' />
        </div>
      </button>
    </div>
  );
};

export default DarkModeBtn;
