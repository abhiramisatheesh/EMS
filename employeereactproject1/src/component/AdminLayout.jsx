import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      {/* Admin Navbar */}
      <nav>
        <ul>
          <li><a href="/addemployee">Add Employee</a></li>
          <li><a href="/setpassword">Set Password</a></li>
          <li><a href="/employeelist">Employee List</a></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
