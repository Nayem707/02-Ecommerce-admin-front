import React from 'react';
import Sidebar from '../../layout/SideNavStyle';
import UsersList from '../../components/common/UsersList';

const UsersView = () => {
  return (
    <div className='bg-white relative '>
      <div className=' col-span-2 flex '>
        <div className='p-2 pt-10 w-80 h-screen '>
          <Sidebar />
        </div>
        <div className='w-full pt-10 px-4'>
          <div className='text-3xl mb-6 font-semibold'>Users List</div>
          <div className=''>
            <UsersList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersView;
