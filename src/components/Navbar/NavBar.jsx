import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
const NavBar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      {/* UpperBar
       */}
      <div className='bg-primary/80  py-2'>
        <div className='container flex justify-between'>
          <div>
            <a href='#' className='font-bold text-2xl sm:text-3xl flex  gap-2 '>
              <img
                src='https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg'
                alt='RestaurantImage'
                className='w-10'
              />
              Red Moon
            </a>
          </div>
          {/* SearchBar */}
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type='text'
                placeholder='Food'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                    rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  '
              />
              <IoMdSearch className=' text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
          </div>

          <button
            // onClick={() => handleOrderPopup()}
            onClick={() => {
              alert('THis is not for me');
            }}
            className='bg-gradient-to-r from-primary to-secondary transition-all duration-500 text-white  py-1 px-4 rounded-full flex items-center gap-3 group'
          >
            <span className='group-hover:block hidden transition-all duration-500'>
              Order
            </span>
            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
          </button>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default NavBar;
