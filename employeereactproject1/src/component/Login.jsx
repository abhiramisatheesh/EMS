// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Alert
// } from '@mui/material';

// const LoginForm = () => {
//   const [id, setId] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError(false);

//     try {
//       const response = await axios.post('http://localhost:5000/api/Emp/login', {
//         id,
//         password
//       });
//       setMessage(`Login successful. Welcome ${response.data.name}!`);
//     } catch (error) {
//       setError(true);
//       setMessage(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
//         <Typography variant="h5" gutterBottom>
//           Employee Login
//         </Typography>
//         <form onSubmit={handleLogin}>
//           <TextField
//             fullWidth
//             label="Employee ID"
//             margin="normal"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Login
//           </Button>
//         </form>
//         {message && (
//           <Alert severity={error ? 'error' : 'success'} sx={{ mt: 3 }}>
//             {message}
//           </Alert>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:5000/api/Emp/login', {
      Id: employeeId,
      password: password
    })
    .then(response => {
      if (response.status === 200) {
        // Save data if needed
        localStorage.setItem('employeeId', employeeId);
        navigate('/employeehome'); // Redirect to profile page
        //navigate(`/employeeprofile/${id}`);

      }
    })
    .catch(error => {
      alert('Login failed');
      console.error(error);
    });
  };

  return (
    <Container maxWidth="sm">
      <h2>Employee Login</h2>
      <TextField
        fullWidth
        label="Employee ID"
        margin="normal"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained"  color="primary" fullWidth onClick={handleLogin}
      sx={{
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333', // slightly lighter on hover
    }
  }}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
