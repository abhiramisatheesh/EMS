// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employee data from API
//    // axios.get('http://localhost:5000/api/Emp/id/${id}')
//     const { id } = useParams();
//    axios.get(`http://localhost:5000/api/Emp/id/${id}`)

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
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Position</TableCell>
//               <TableCell>Basic Pay</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {employees.map(emp => (
//               <TableRow key={emp.id}>
//                 <TableCell>{emp.id}</TableCell>
//                 <TableCell>{emp.name}</TableCell>
//                 <TableCell>{emp.email}</TableCell>
//                 <TableCell>{emp.phone}</TableCell>
//                 <TableCell>{emp.position}</TableCell>
//                 <TableCell>{emp.basicPay}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default EmployeeList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';  // Ensure this is imported
import EmployeeNavbar from './EmployeeNavbar';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const { id } = useParams();  // Use useParams to get the 'id' from URL

  useEffect(() => {
    // If you want to fetch a single employee by ID
    if (id) {
      axios.get(`http://localhost:5000/api/Emp/${id}`)
        .then(response => {
          setEmployees([response.data]); // If you're fetching a single employee, wrap in an array
        })
        .catch(error => {
          console.error('Error fetching employee data:', error);
        });
    } else {
      // If you're fetching all employees
      axios.get(`http://localhost:5000/api/Emp/${id}`)
        .then(response => {
          setEmployees(response.data);  // Set all employees
        })
        .catch(error => {
          console.error('Error fetching employee data:', error);
        });
    }
  }, [id]); // Dependency on 'id', so it will refetch if the id changes

  return (
    <>
    <EmployeeNavbar/>
    
    <div style={{ padding: '100px' }}>
      <h2>Profile</h2>
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
