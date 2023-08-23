import React from 'react';

const ProductsList = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-96 h-auto bg-[#f2f9fb] transition-all rounded-lg  md:w-full p-4'>
          <div className='box'>
            <div className='box-wrapper'>
              <div className=' bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200'>
                <button className='outline-none focus:outline-none'>
                  <svg
                    className=' w-5 text-gray-600 h-5 cursor-pointer'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                  </svg>
                </button>
                <input
                  type='search'
                  name=''
                  id=''
                  placeholder='search for Products'
                  className='w-full pl-4 text-sm outline-none focus:outline-none bg-transparent'
                />
                <div className='select'>
                  <select
                    name=''
                    id=''
                    className='text-sm outline-none focus:outline-none bg-transparent'
                  >
                    <option value='all' selected>
                      All
                    </option>
                    <option value='photo'>T-shrt</option>
                    <option value='illustration'>Bug</option>
                    <option value='vector'>Vector</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='flex mt-3 justify-between items-center'>
            <p className='text-[#545968] text-sm font-semibold'>
              Showing 291 Products
            </p>
            <div>
              <div className='flex items-center gap-1'>
                <p className='text-xs mt-1 '>Sort by</p>
                <select className='outline-none cursor-pointer h-6 w-20  text-sm font-semibold '>
                  <option className='hidden'>Size</option>
                  <option>Date</option>
                  <option>Time</option>
                  <option>Length</option>
                  <option>None</option>
                </select>
              </div>
            </div>
          </div>

          <div className=' grid  grid-cols-4 gap-3 '>
            <div className='md:flex md:justify-center md:flex-wrap gap-6'>
              <div className='w-full h-84 p-5 border bg-white mt-5 rounded-lg md:w-80'>
                <div className='flex items-center gap-1'>
                  <img src='https://imgur.com/paKJ7DO.png' />
                </div>
                <p className='text-lg font-semibold mt-1'>
                  Increase confidence with TrustPilot reviews
                </p>
                <span className='h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full'>
                  Integrations
                </span>

                <div className='flex justify-center items-center gap-3 mt-6'>
                  <div className=''>
                    <button>Edit</button>
                  </div>
                  <div className=''>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
