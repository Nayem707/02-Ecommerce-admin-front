import React from 'react';
import Sidebar from '../../layout/SideNavStyle';
import ProductsList from '../../components/products/ProductsList';
import PList from '../../components/products/PList';

const ProductsView = () => {
  return (
    <div className='bg-white relative '>
      <div className=' col-span-2 flex '>
        <div className='p-2 pt-10 w-80 h-screen '>
          <Sidebar />
        </div>
        <div className='w-full pt-10 px-4 '>
          <div className='text-3xl mb-6 font-semibold'>Products List</div>
          <div className=''>
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
