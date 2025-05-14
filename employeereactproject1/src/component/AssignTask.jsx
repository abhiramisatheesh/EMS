import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, TextField, Button, Typography, MenuItem, Box
} from '@mui/material';

const AssignTask = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  // Fetch employees
  useEffect(() => {
    axios.get('http://localhost:5000/api/Emp/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      employeeId,
      title: taskTitle,
      description: taskDescription
    };

    axios.post('http://localhost:5000/api/Emp/assign', taskData)
      .then(response => {
        alert('Task assigned successfully!');
        // Reset fields
        setEmployeeId('');
        setTaskTitle('');
        setTaskDescription('');
      })
      .catch(error => {
        console.error('Error assigning task:', error);
        alert('Failed to assign task.');
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Assign Task to Employee</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          select
          fullWidth
          label="Select Employee"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          margin="normal"
          required
        >
          {employees.map((emp) => (
            <MenuItem key={emp.id} value={emp.id}>
              {emp.name} ({emp.position})
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          label="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          required
        />

        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Assign Task
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AssignTask;
