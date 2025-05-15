import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import EmployeeNavbar from './EmployeeNavbar';

const updatePassword = () => {
  const [formData, setFormData] = useState({
    id: '',
    Password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/Emp/updatepassword', formData);
      setMessage('Password set successfully!');
    } catch (error) {
      console.error('Error setting password:', error);
      setMessage('Failed to set password.');
    }
  };

  return (
    <>
    <EmployeeNavbar/>
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Set Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Employee ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="New Password"
            name="Password"
            type="password"
            value={formData.Password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 ,
            backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333', // slightly lighter on hover
    }
          }}>
            Set Password
          </Button>
        </form>
        {message && (
          <Typography variant="body1" color="secondary" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
      </Box>
    </Container>
    </>
  );
};

export default updatePassword;
