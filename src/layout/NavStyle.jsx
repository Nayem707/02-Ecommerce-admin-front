import { Link, NavLink } from 'react-router-dom';
// import ModalView from '../components/common/Modal';

function NavStyle() {
  return (
    <>
      {/* Navbar */}
      <nav className='absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4'>
        <div className='w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'>
          {/* Brand */}
          <a
            className='text-white text-sm uppercase hidden lg:inline-block font-semibold'
            href='#pablo'
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>

          {/* User */}
          <div className='w-3/12 flex justify-end gap-4'>
            <a href='notifications'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                />
              </svg>
            </a>

            <NavLink to='/setting/user'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

export default NavStyle;
