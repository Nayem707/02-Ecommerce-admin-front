import React from 'react';

const UserDetails = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <span
        type='button'
        onClick={() => setShowModal(true)}
        className=' cursor-pointer text-fuchsia-700'
      >
        User info
      </span>

      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-5 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex  w-full bg-white outline-none focus:outline-none'>
                {/*body*/}

                <div className='flex items-center'>
                  <img src='https://poshgarments.com/wp-content/uploads/2021/09/Mens-Shirt-MWS0001-450x450.jpg' />
                </div>
                <div className='m-5 flex'>
                  <p className='text-lg font-semibold mt-1'>
                    Increase confidence with TrustPilot reviews
                    <span className='h-8 mt-2 w-24 cursor-pointer font-semibold transition-all hover:text-blue-700 bg-pink-200 flex justify-center items-center text-sm rounded-full'>
                      $35
                    </span>
                  </p>

                  <span
                    className='p-1 text-lg font-semibold cursor-pointer'
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </span>
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

export default UserDetails;
