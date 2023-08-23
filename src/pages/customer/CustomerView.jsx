import React from 'react';
import Sidebar from '../../layout/SideNavStyle';
import CustomerList from '../../components/common/CustomerList';
const CustomerView = () => {
  return (
    <div className='bg-white relative '>
      <div className=' col-span-2 flex '>
        <div className='p-2 pt-10 w-80 h-screen '>
          <Sidebar />
        </div>
        <div className='w-full pt-10 px-4'>
          <div className='text-3xl font-semibold mb-6'>Customer List</div>
          <div className=''>
            <CustomerList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerView;
