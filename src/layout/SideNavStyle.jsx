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
            className='md:block text-left md:pb-2 text-blueGray-600 inline-block whitespace-nowrap text-sm uppercase font-bold px-0'
            to='/'
          >
            <img
              src='https://getlogovector.com/wp-content/uploads/2021/05/yours-clothing-logo-vector.png'
              alt=''
              className='h-16'
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

            <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
              <li className='items-center'>
                <Link
                  className={
                    'text-xs uppercase py-3 font-bold block ' +
                    (window.location.href.indexOf('/admin/dashboard') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-blueGray-700 hover:text-blueGray-500')
                  }
                  to='/admin/dashboard'
                >
                  <i
                    className={
                      'fas fa-tv mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/dashboard') !== -1
                        ? 'opacity-75'
                        : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  Dashboard
                </Link>
              </li>

              <li className='items-center'>
                <Link
                  className={
                    'text-xs uppercase py-3 font-bold block ' +
                    (window.location.href.indexOf('/admin/settings') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-blueGray-700 hover:text-blueGray-500')
                  }
                  to='/admin/settings'
                >
                  <i
                    className={
                      'fas fa-tools mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/settings') !== -1
                        ? 'opacity-75'
                        : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  Settings
                </Link>
              </li>

              <li className='items-center'>
                <Link
                  className={
                    'text-xs uppercase py-3 font-bold block ' +
                    (window.location.href.indexOf('/admin/tables') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-blueGray-700 hover:text-blueGray-500')
                  }
                  to='/admin/tables'
                >
                  <i
                    className={
                      'fas fa-table mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/tables') !== -1
                        ? 'opacity-75'
                        : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  Tables
                </Link>
              </li>

              <li className='items-center'>
                <Link
                  className={
                    'text-xs uppercase py-3 font-bold block ' +
                    (window.location.href.indexOf('/admin/maps') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-blueGray-700 hover:text-blueGray-500')
                  }
                  to='/admin/maps'
                >
                  <i
                    className={
                      'fas fa-map-marked mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/maps') !== -1
                        ? 'opacity-75'
                        : 'text-blueGray-300')
                    }
                  ></i>{' '}
                  Maps
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
