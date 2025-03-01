// src/components/BasicLayout.js
import React from 'react';
import LeftMenu from './left-menu';
import { Outlet } from 'react-router-dom';
import Header from './header';
import '../styles/layout.scss';

const Layout = () => {
  return (
    <div className="main">
        <div className="row">
            <LeftMenu className="col-2" /> 
            <div className="col-10 content">
              <Header className="header" /> 
              <Outlet />  
          </div>
        </div>
          
    </div>
  );
};

export default Layout;
