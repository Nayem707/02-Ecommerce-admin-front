import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const PrivateRoute = () => {
  const [userInfo, setUserinfo] = useState('');
  return !userInfo ? <Outlet /> : <Navigate to='/dashboard' replace />;
};

export default PrivateRoute;
