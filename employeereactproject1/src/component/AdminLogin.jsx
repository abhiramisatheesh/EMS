import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
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
        navigate('/admindashboard'); // Redirect to profile page
      }
    })
    .catch(error => {
      alert('Login failed');
      console.error(error);
    });
  };

  return (
    <Container maxWidth="sm">
      <h2>Admin Login</h2>
      <TextField
        fullWidth
        label="Admin ID"
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
      <Button variant="contained" fullWidth onClick={handleLogin}
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

export default AdminLogin;