import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container } from '@mui/material';
import EmployeeNavbar from './EmployeeNavbar';
const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch all assigned tasks from the API
    axios.get('http://localhost:5000/api/Emp/assigned')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <>
    <EmployeeNavbar/>
    <Container maxWidth="md" style={{ marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Assigned Tasks
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Assigned Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map(task => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.employeeId}</TableCell>
                <TableCell>{task.taskTitle}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{new Date(task.assignedDate).toLocaleDateString()}</TableCell>
                <TableCell>{task.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </>
  );
};

export default ViewTasks;
