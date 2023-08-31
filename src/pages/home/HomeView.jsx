import { Link } from 'react-router-dom';
import FooterStyle from '../../layout/FooterStyle';

export default function HomeView() {
  return (
    <section className=' dark:text-gray-100 '>
      <div className='container flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between h-screen'>
        <div className='flex mx-auto items-center justify-center'>
          <img
            src='https://mambaui.com/assets/svg/Business_SVG.svg'
            alt=''
            className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
          />
        </div>
        <div className='flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-5xl font-bold leadi sm:text-6xl'>
            Get Manage Your Products
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12'>
            if you want better exprience plz make sure your Desktop or mobile
            Dark or Ligth Mode on
          </p>
          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
            <Link
              rel='noopener noreferrer'
              to='/info'
              className='px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900'
            >
              More info
            </Link>
            <Link
              rel='noopener noreferrer'
              to='/login'
              className='px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100'
            >
              Get Start
            </Link>
          </div>
        </div>
      </div>
      <FooterStyle />
    </section>
  );
}
