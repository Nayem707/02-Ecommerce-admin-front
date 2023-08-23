import React from 'react';
import OrderList from '../../components/common/OrderList';
import Sidebar from '../../layout/SideNavStyle';

const OrderView = () => {
  return (
    <div className='bg-white relative '>
      <div className=' col-span-2 flex '>
        <div className='p-2 pt-10 w-80 h-screen '>
          <Sidebar />
        </div>
        <div className='w-full pt-10 px-4 '>
          <div className='text-3xl mb-6'>Order List Overview</div>
          <div className=''>
            <OrderList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderView;
