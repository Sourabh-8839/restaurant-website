import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';
import { useEffect, useState } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const html = document.querySelector('html');

    html.classList.remove('light', 'dark');

    html.classList.add(theme);
  }, [theme]);

  return (
    <div className='relative'>
      <img
        src={LightButton}
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
        alt=''
        className={`w-12  cursor-pointer
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-500 absolute right-0 z-10 
        ${theme === 'light' ? 'opacity-100' : 'opacity-0'}
         `}
      />
      <img
        src={DarkButton}
        alt=''
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
        className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
      />
    </div>
  );
};

export default DarkMode;
