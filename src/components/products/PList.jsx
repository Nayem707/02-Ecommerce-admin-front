import React from 'react';

const PList = () => {
  return (
    <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8'>
      <div className='align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12'>
        <div className='flex justify-between'>
          <div className='inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent'>
            <div className='flex flex-wrap items-stretch w-full h-full mb-6 relative'>
              <div className='flex'>
                <span className='flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm'>
                  <svg
                    width='18'
                    height='18'
                    className='w-4 lg:w-auto'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z'
                      stroke='#455A64'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.9993 16.9993L13.1328 13.1328'
                      stroke='#455A64'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
              <input
                type='text'
                className='flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin'
                placeholder='Search'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg'>
        <table className='min-w-full'>
          <thead>
            <tr>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider'>
                ID
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>
                Fullname
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>
                Email
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>
                Phone
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>
                Status
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>
                Created At
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300'></th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            <tr>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='flex items-center'>
                  <div>
                    <div className='text-sm leading-5 text-gray-800'>#1</div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='text-sm leading-5 text-blue-900'>
                  Damilare Anjorin
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                damilareanjorin1@gmail.com
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                +2348106420637
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                  <span
                    aria-hidden
                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                  ></span>
                  <span className='relative text-xs'>active</span>
                </span>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5'>
                September 12
              </td>
              <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5'>
                <button className='px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none'>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='flex items-center'>
                  <div>
                    <div className='text-sm leading-5 text-gray-800'>#1</div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='text-sm leading-5 text-blue-900'>
                  Damilare Anjorin
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                damilareanjorin1@gmail.com
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                +2348106420637
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                  <span
                    aria-hidden
                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                  ></span>
                  <span className='relative text-xs'>active</span>
                </span>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5'>
                September 12
              </td>
              <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5'>
                <button className='px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none'>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='flex items-center'>
                  <div>
                    <div className='text-sm leading-5 text-gray-800'>#1</div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='text-sm leading-5 text-blue-900'>
                  Damilare Anjorin
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                damilareanjorin1@gmail.com
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                +2348106420637
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                <span className='relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight'>
                  <span
                    aria-hidden
                    className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                  ></span>
                  <span className='relative text-xs'>not active</span>
                </span>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5'>
                September 12
              </td>
              <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5'>
                <button className='px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none'>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='flex items-center'>
                  <div>
                    <div className='text-sm leading-5 text-gray-800'>#1</div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='text-sm leading-5 text-blue-900'>
                  Damilare Anjorin
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                damilareanjorin1@gmail.com
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                +2348106420637
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                  <span
                    aria-hidden
                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                  ></span>
                  <span className='relative text-xs'>active</span>
                </span>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5'>
                September 12
              </td>
              <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5'>
                <button className='px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none'>
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='flex items-center'>
                  <div>
                    <div className='text-sm leading-5 text-gray-800'>#1</div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                <div className='text-sm leading-5 text-blue-900'>
                  Damilare Anjorin
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                damilareanjorin1@gmail.com
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                +2348106420637
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5'>
                <span className='relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight'>
                  <span
                    aria-hidden
                    className='absolute inset-0 bg-orange-200 opacity-50 rounded-full'
                  ></span>
                  <span className='relative text-xs'>disabled</span>
                </span>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5'>
                September 12
              </td>
              <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5'>
                <button className='px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none'>
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans'>
          <div>
            <p className='text-sm leading-5 text-blue-700'>
              Showing
              <span className='font-medium'>1</span>
              to
              <span className='font-medium'>200</span>
              of
              <span className='font-medium'>2000</span>
              results
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PList;