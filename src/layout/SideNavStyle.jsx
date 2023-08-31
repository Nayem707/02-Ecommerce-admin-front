/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState('hidden');
  return (
    <>
      <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-0 px-6'>
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
          {/* Brand */}
          <Link
            className='md:block text-left md:p-2 text-blueGray-600 inline-block whitespace-nowrap text-sm uppercase font-bold px-0'
            to='/dashboard'
          >
            <img
              src='https://res.cloudinary.com/nayem490/image/upload/v1693437906/shop-logo_zlvemt.png'
              alt=''
              className='h-12'
            />
          </Link>

          <hr className=' md:min-w-full m-1.5' />
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Divider */}

            {/* Navigation */}

            <ul className='md:flex-col md:min-w-full flex flex-col list-none gap-5'>
              <li className='items-center'>
                <Link className='' to='/dashboard'>
                  Dashboard
                </Link>
              </li>

              <li className='items-center'>
                <Link className='' to='/products'>
                  Product List
                </Link>
              </li>

              <li className='items-center'>
                <Link className='' to='/orders'>
                  Order List
                </Link>
              </li>

              <li className='items-center'>
                <Link className='' to='/customer'>
                  Customer List
                </Link>
              </li>

              <li className='items-center'>
                <Link className='' to='/users'>
                  Users
                </Link>
              </li>

              <li className='items-center'>
                <Link className='' to='/setting'>
                  Setting
                </Link>
              </li>

              <li className='items-center'>
                <Link className='' to='/'>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
