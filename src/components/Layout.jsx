// src/components/Layout.js
import React from 'react';
import SidebarComponent from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <SidebarComponent />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
