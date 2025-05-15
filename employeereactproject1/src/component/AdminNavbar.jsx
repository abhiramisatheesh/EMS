// src/components/AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const AdminNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/addemployee">Add Employee</Button>
        <Button color="inherit" component={Link} to="/setpassword">Set Password</Button>
        <Button color="inherit" component={Link} to="/employeelist">Employee List</Button>
        <Button color="inherit" component={Link} to="/logout">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
