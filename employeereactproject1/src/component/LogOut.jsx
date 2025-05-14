import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove auth info
    localStorage.removeItem('employeeId');  // or 'token' if using JWT
    localStorage.removeItem('token');       // if stored

    // Redirect to login
    navigate('/home');
  };

//   return (
//     // <Button onClick={handleLogout} variant="outlined" color="secondary">
//     //   Logout
//     // </Button>
//   );
};

export default Logout;
