import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div>
      {/* Home or Public Navbar */}
      <header><h1>Welcome to Our System</h1></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
