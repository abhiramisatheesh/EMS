// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Remove auth info
//     localStorage.removeItem('employeeId');  // or 'token' if using JWT
//     localStorage.removeItem('token');       // if stored

//     // Redirect to login
//     navigate('/home');
//   };

// //   return (
// //     // <Button onClick={handleLogout} variant="outlined" color="secondary">
// //     //   Logout
// //     // </Button>
// //   );
// };

// export default Logout;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove auth info
    localStorage.removeItem('employeeId');
    localStorage.removeItem('token');

    // Redirect to login or home
    navigate('/login'); // or '/home' if that exists
  };
  <h1>Do you wnat to logout ?</h1>
   return (
   
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
     <Button onClick={handleLogout} variant="outlined" color="secondary">
       Logout
    </Button>
    </Box>
   );
};

export default Logout;
