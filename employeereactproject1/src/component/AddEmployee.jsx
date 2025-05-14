import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert
} from '@mui/material';
import AdminDashboard from './AdminDashboard';

const EmployeeRegistrationForm = () => {
  const [employee, setEmployee] = useState({
    // id: '',
    name: '',
    email: '',
    phone: '',
    position: '',
    basicPay: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    try {
      const response = await axios.post('http://localhost:5000/api/Emp/register', employee);
      setMessage(response.data.message || 'Employee registered successfully!');
      setEmployee({
        // id: '',
        name: '',
        email: '',
        phone: '',
        position: '',
        basicPay: ''
      });
    } catch (err) {
      setError(true);
      setMessage(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Employee Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* <TextField fullWidth label="ID" name="id" value={employee.id} onChange={handleChange} margin="normal" required /> */}
          <TextField fullWidth label="Name" name="name" value={employee.name} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Email" name="email" type="email" value={employee.email} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Phone" name="phone" value={employee.phone} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Position" name="position" value={employee.position} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Basic Pay" name="basicPay" type="number" value={employee.basicPay} onChange={handleChange} margin="normal" required />

          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>

        {message && (
          <Alert severity={error ? 'error' : 'success'} sx={{ mt: 3 }}>
            {message}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default EmployeeRegistrationForm;
