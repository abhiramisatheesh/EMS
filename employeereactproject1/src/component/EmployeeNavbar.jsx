// src/components/AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const EmployeeNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Employee Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/employeeprofile/:id">Profile</Button>
        <Button color="inherit" component={Link} to="/viewassigntask">View Task</Button>
        <Button color="inherit" component={Link} to="/updatepassword">Update Password</Button>
        <Button color="inherit" component={Link} to="/logout">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default EmployeeNavbar;
