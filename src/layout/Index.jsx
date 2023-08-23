import React from 'react';
import { Outlet } from 'react-router-dom';
import NavStyle from './NavStyle';
import Topnav from './Topnav';
import FooterStyle from './FooterStyle';

const Layout = () => {
  return (
    <>
      <Topnav />
      <NavStyle />
      <Outlet />
      <FooterStyle />
    </>
  );
};

export default Layout;
