import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
      <div style={{paddingBottom:'100px'}} className="bg-secondary-subtle pt-4 ">
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
    );
};

export default LoginLayout;