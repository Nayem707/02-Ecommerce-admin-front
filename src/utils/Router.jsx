import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from '../App';
import HomeView from '../pages/home/HomeView';
import LoginView from '../pages/login/LoginView';
import RegisterView from '../pages/register/RegisterView';
import ErrorView from '../pages/error/ErrorView';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<HomeView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/register' element={<RegisterView />} />
      <Route path='*' element={<ErrorView />} />
    </Route>
  )
);
