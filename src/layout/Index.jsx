import React from 'react';
import { Outlet } from 'react-router-dom';
import NavStyle from './NavStyle';
import SideNaveStyle from './SideNavStyle';

const Layout = () => {
  return (
    <>
      <NavStyle />
      <SideNaveStyle />
      <Outlet />
    </>
  );
};

export default Layout;
