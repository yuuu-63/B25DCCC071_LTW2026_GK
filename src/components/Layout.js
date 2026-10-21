import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  const location = useLocation();
  const isDetailRoute = location.pathname.startsWith('/events/') && location.pathname !== '/events/new';

  return (
    <div>
      {!isDetailRoute && <NavBar />}
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;