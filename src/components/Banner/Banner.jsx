import BiryaniImg from '../../assets/website/biryani5.png';
import Vector from '../../assets/website/vector3.png';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';
import Button from '../Navbar/Button';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  };

  const navigate = useNavigate();

  const OnClickHandler = () => {
    console.log('Buuton Click');

    navigate('/menu');
  };
  return (
    <>
      <div
        style={bgImage}
        className='min-h-[550px] bg-gray-100 dark:bg-gray-950 dark:text-white'
      >
        <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 '>
          <div
            data-aos='slide-up'
            data-aos-duration='300'
            className='container'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt='biryani img'
                  className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'
                />
              </div>
              {/* text content section */}
              <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 className='text-3xl sm:text-4xl font-bold'>Biryani</h1>
                <p className='text-sm text-gray-500 tracking-wide leading-5'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ab sed, exercitationem minima aliquid eligendi
                  distinctio? Fugit repudiandae numquam hic quo recusandae.
                  Excepturi totam ad nam velit quasi quidem aspernatur.
                </p>
                <div className='flex gap-6'>
                  <div>
                    <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400' />
                  </div>
                  <div>
                    <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400' />
                  </div>
                  <div>
                    <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400' />
                  </div>
                </div>
                <div>
                  <Button
                    name='Order Now'
                    px='4'
                    py='2'
                    onClick={OnClickHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
