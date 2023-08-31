import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from '../App';
import HomeView from '../pages/home/HomeView';
import LoginView from '../pages/login/LoginView';
import RegisterView from '../pages/register/RegisterView';
import ProductsView from '../pages/products/ProductsView';
import SettingView from '../pages/setting/SettingView';
import PrivateRoute from './ProvetRoute';
import ErrorView from '../pages/error/ErrorView';
import Dashboard from '../pages/dashboard/Dashboard';
import UsersView from '../pages/users/UsersView';
import OrderView from '../pages/order/OrderView';
import CustomerView from '../pages/customer/CustomerView';
import InfoView from '../pages/info/InfoView';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/info' element={<InfoView />} />
      <Route path='/register' element={<RegisterView />} />
      <Route path='/' element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<ProductsView />} />
        <Route path='/customer' element={<CustomerView />} />
        <Route path='/users' element={<UsersView />} />
        <Route path='/orders' element={<OrderView />} />
        <Route path='/setting' element={<SettingView />} />
        {/* <Route path='/edit/:id' element={<EditView />} />
        <Route path='/create' element={<CreateNote />} />
        <Route path='/cards' element={<CardS />} />
        <Route path='/card/:id' element={<Card />} /> */}
      </Route>
      <Route path='*' element={<ErrorView />} />
    </Route>
  )
);
