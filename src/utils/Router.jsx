import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from '../App';
import HomeView from '../pages/home/HomeView';
import LoginView from '../pages/login/LoginView';
import ProductsView from '../pages/products/ProductsView';
import SettingView from '../pages/setting/SettingView';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/register' element={<SginView />} />
      <Route path='/' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/setting' element={<SettingView />} />
        <Route path='/edit/:id' element={<EditView />} />
        <Route path='/create' element={<CreateNote />} />
        <Route path='/cards' element={<CardS />} />
        <Route path='/card/:id' element={<Card />} />
      </Route>
      <Route path='*' element={<ErrorView />} />
    </Route>
  )
);
