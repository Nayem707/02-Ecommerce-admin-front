import React from 'react';
import Sidebar from '../../layout/SideNavStyle';

const UsersView = () => {
  return (
    <div className='bg-white relative '>
      <div className=' col-span-2 flex '>
        <div className='p-2 pt-10 w-80 h-screen '>
          <Sidebar />
        </div>
        <div className='w-full pt-10 px-4 '>
          <div className='text-3xl mb-6'>Users List</div>1
          <div className=''>2</div>
        </div>
      </div>
    </div>
  );
};

export default UsersView;
