import React from 'react';

const OrderList = () => {
  return (
    <section className=' font-mono'>
      <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
        <div className='flex sm:flex-row flex-col p-2'>
          <div className='flex flex-row mb-1 sm:mb-0'>
            <div className='relative'>
              <select className=' h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
            <div className='relative'>
              <select className=' h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500'>
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='block relative'>
            <span className='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
              <svg
                viewBox='0 0 24 24'
                className='h-4 w-4 fill-current text-gray-500'
              >
                <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
              </svg>
            </span>
            <input
              placeholder='Search'
              className='appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
            />
          </div>
        </div>
        <div className='w-full overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                <th className='px-4 py-3'>Name</th>
                <th className='px-4 py-3'>Age</th>
                <th className='px-4 py-3'>Status</th>
                <th className='px-4 py-3'>Date</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='text-gray-700'>
                <td className='px-4 py-3 border'>
                  <div className='flex items-center text-sm'>
                    <div className='relative w-8 h-8 mr-3 rounded-full md:block'>
                      <img
                        className='object-cover w-full h-full rounded-full'
                        src='https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                        alt=''
                        loading='lazy'
                      />
                      <div
                        className='absolute inset-0 rounded-full shadow-inner'
                        aria-hidden='true'
                      ></div>
                    </div>
                    <div className=' cursor-pointer'>
                      <p className='font-semibold text-black'>Sufyan</p>
                      <p className='text-xs text-gray-600'>Developer</p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-3 text-ms font-semibold border'>22</td>
                <td className='px-4 py-3 text-xs border'>
                  <span className='px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm'>
                    Acceptable
                  </span>
                </td>
                <td className='px-4 text-sm border'>
                  <span className='px-2  rounded-sm'>6/4/2000</span>
                  <a href='#' className=''>
                    View details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
