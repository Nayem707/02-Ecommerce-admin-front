import React from 'react';
import Sidebar from '../../layout/SideNavStyle';
import ProductsList from '../../components/products/ProductsList';
import AddProducts from '../../components/products/AddProducts';

const ProductsView = () => {
  return (
    <div className='bg-white relative '>
      <div className=' col-span-2 flex '>
        <div className='p-2 pt-10 w-80 h-screen '>
          <Sidebar />
        </div>
        <div className='w-full pt-10 px-4 '>
          <div className=' mb-6 flex justify-between'>
            <h2 className='text-3xl  font-semibold'>Products List</h2>
            <div className='  hover:bg-gray-400 text-gray-100'>
              <AddProducts />
            </div>
          </div>
          <div className=''>
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
