import React from 'react';

const AddProducts = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setShowModal(true)}
        className='flex items-center justify-center bg-green-600 text-slate-200 cursor-pointer rounded-md border border-transparent h-10 text-base font-medium  shadow-sm hover:bg-indigo-700'
      >
        Add Product
      </button>

      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-5 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*body*/}
                <div className='relative flex-auto'>
                  <div className='max-w-md w-full space-y-8 p-5  rounded-xl shadow-lg z-10'>
                    <div className='grid  gap-8 grid-cols-1'>
                      <div className='flex flex-col '>
                        <div className='flex flex-col sm:flex-row items-center'>
                          <h2 className='font-semibold text-lg mr-auto'>
                            Edit
                          </h2>
                          <div className='w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0'></div>
                        </div>
                        <div className='mt-5'>
                          <div className='form'>
                            <div className='md:space-y-2 mb-3'>
                              <div className='flex items-center py-6'>
                                <div className='w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden'>
                                  <img
                                    className='w-12 h-12 mr-4 object-cover'
                                    src='https://poshgarments.com/wp-content/uploads/2021/09/Mens-Shirt-MWS0001-450x450.jpg'
                                    alt='Avatar Upload'
                                  />
                                </div>
                                <label className='cursor-pointer '>
                                  <span className='focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg'>
                                    Browse
                                  </span>
                                  <input type='file' className='hidden' />
                                </label>
                              </div>
                            </div>

                            <div className='mb-3 space-y-2 w-full text-xs'>
                              <label className=' font-semibold text-gray-600 py-2'>
                                Product Title
                              </label>
                              <div className='flex flex-wrap items-stretch w-full mb-4 relative'>
                                <input
                                  type='text'
                                  className='flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow'
                                  placeholder='title'
                                />
                              </div>
                            </div>
                            <div className='md:flex md:flex-row md:space-x-4 w-full text-xs'>
                              <div className='w-full flex flex-col mb-3'>
                                <label className='font-semibold text-gray-600 py-2'>
                                  Prize
                                </label>
                                <input
                                  placeholder='prize'
                                  className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4'
                                  type='number'
                                  name='integration[street_address]'
                                  id='integration_street_address'
                                />
                              </div>
                              <div className='w-full flex flex-col mb-3'>
                                <label className='font-semibold text-gray-600 py-2'>
                                  Catagory
                                </label>
                                <select
                                  className='block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full '
                                  required='required'
                                  name='integration[city_id]'
                                  id='integration_city_id'
                                >
                                  <option value=''>Selete Catagory</option>
                                  <option value=''>Shoes</option>
                                  <option value=''>T-shirt</option>
                                  <option value=''>Watch</option>
                                </select>
                                <p
                                  className='text-sm text-red-500 hidden mt-3'
                                  id='error'
                                >
                                  Please fill out this field.
                                </p>
                              </div>
                            </div>
                            <div className='flex-auto w-full mb-1 text-xs space-y-2'>
                              <label className='font-semibold text-gray-600 py-2'>
                                Description
                              </label>
                              <textarea
                                required=''
                                name='message'
                                id=''
                                className=' min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4'
                                placeholder='Enter your product info'
                                spellCheck='false'
                              ></textarea>
                              <p className='text-xs text-gray-400 text-left my-3'>
                                You inserted 0 characters
                              </p>
                            </div>
                            <p className='text-xs text-red-500 text-right my-3'>
                              Required fields are marked with an asterisk
                              <abbr title='Required field'>*</abbr>
                            </p>
                            <div className='mt-5 text-right md:space-x-3 md:block flex flex-col-reverse'>
                              <button
                                onClick={() => setShowModal(false)}
                                className='mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100'
                              >
                                Cancel
                              </button>
                              <button className='mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500'>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};

export default AddProducts;
