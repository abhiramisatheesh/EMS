// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employee data from API
//     axios.get('https://localhost:7176/api/Emp/employees')
//       .then(response => {
//         setEmployees(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching employee data:', error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Employee Report</h2>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Position</th>
//             <th>Basic Pay</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(emp => (
//             <tr key={emp.id}>
//               <td>{emp.id}</td>
//               <td>{emp.name}</td>
//               <td>{emp.email}</td>
//               <td>{emp.phone}</td>
//               <td>{emp.position}</td>
//               <td>{emp.basicPay}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Button } from '@mui/material';
import { Link } from "react-router-dom";
import AdminNavbar from './AdminNavbar';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from API
    axios.get('http://localhost:5000/api/Emp/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  return (
    <>
    <AdminNavbar/>
    
    <div style={{ padding: '100px' }}>
      <h2>Employee Report</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Basic Pay</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map(emp => (
              <TableRow key={emp.id}>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.phone}</TableCell>
                <TableCell>{emp.position}</TableCell>
                <TableCell>{emp.basicPay}</TableCell>
                 <TableCell>
                  <Link to={'/assigntask'} >
                  <Button
                    variant="contained"
                   
                   
                    onClick={() => handleAssignTask(emp.id)}
                    sx={{
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333' // Slightly lighter black on hover
    }
  }}
                  >
                    Assign Task
                  </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
};

export default EmployeeList;
