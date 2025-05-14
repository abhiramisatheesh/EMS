import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [employeeId, setEmployeeId] = useState('');
 
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:5000/api/Emp/viewtask', {
      Id: employeeId,
      password: password
    })
    .then(response => {
      if (response.status === 200) {
        // Save data if needed
        localStorage.setItem('employeeId', employeeId);
        //navigate('/employeehome'); // Redirect to profile page
        //navigate(`/employeeprofile/${id}`);

      }
    })
    .catch(error => {
      alert('View failed');
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
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default View;
