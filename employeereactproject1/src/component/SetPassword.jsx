import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert
} from '@mui/material';
import AdminNavbar from './AdminNavbar';

const SetPasswordForm = () => {
  // const [id, setId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSetPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    try {
      const response = await axios.post('http://localhost:5000/api/Emp/setpassword', {
        id,
        password: newPassword
      });
      setMessage(response.data.message || 'Password set successfully.');
    } catch (err) {
      setError(true);
      setMessage(err.response?.data?.message || 'Failed to set password.');
    }
  };

  return (
    <>
          <AdminNavbar /> 
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Set Password
        </Typography>
        <form onSubmit={handleSetPassword}>
          {/* <TextField
            fullWidth
            label="Employee ID"
            margin="normal"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          /> */}
          <TextField
            fullWidth
            label="New Password"
            type="password"
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2,
              backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333', // slightly lighter on hover
    }
             }}
          >
            Set Password
          </Button>
        </form>
        {message && (
          <Alert severity={error ? 'error' : 'success'} sx={{ mt: 3 }}>
            {message}
          </Alert>
        )}
      </Box>
    </Container>
    </>
  );
};

export default SetPasswordForm;
