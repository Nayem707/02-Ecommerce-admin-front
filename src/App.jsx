import Layout from './layout/Index';

import './App.css';
import NavStyle from './layout/NavStyle';
import Sidebar from './layout/SideNavStyle';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [userInfo, setUserinfo] = useState('');

  return (
    <div>
      {!userInfo ? (
        <NavStyle />
      ) : (
        <>
          <Sidebar />
          <NavStyle />
        </>
      )}
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default App;
