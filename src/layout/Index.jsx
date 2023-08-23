import React, { useState } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
  const [userInfo, setUserinfo] = useState('');

  return <>{userInfo ? <Outlet /> : <Navigate to='/login' replace />}</>;
};

export default Layout;
