// // //import React from 'react'
// // import { AppBar, Box,IconButton, Toolbar, Typography,Button,   } from "@mui/material";
// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
// //     <nav className="navbar">

   
// //     <div>

// // <Box sx={{ flexGrow: 1 }}>
// //       <AppBar position="static">
// //         <Toolbar>
// //           <IconButton
// //             size="large"
// //             edge="start"
// //             color="inherit"
// //             aria-label="menu"
// //             sx={{ mr: 2 }}
// //           >
           
// //           </IconButton>
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //             WELCOME
// //           </Typography>
// //          <Link to={'/employeelist'} ><Button style={{ color: "white" }} color="inherit">Employee List</Button></Link>
// //          <Link to={'/setpassword'} ><Button style={{ color: "white" }} color="inherit">Set Password</Button></Link>
// //          <Link to={'/addemployee'} ><Button style={{ color: "white" }} color="inherit">Add Employee</Button></Link>
// //          {/* <Link to={'/signup'} ><Button style={{ color: "white" }} color="inherit">Sing Up</Button></Link>
// //          <Link to={'/addmovie'} ><Button style={{ color: "white" }} color="inherit">Add Movie</Button></Link> */}
// //           {/* <Button color="inherit">SignUp</Button> */}
// //         </Toolbar>
// //       </AppBar>
// //     </Box>
        
// //     </div>
// //     </nav>

  
// //   )
// // }

// // export default Navbar

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AddEmployee from './AddEmployee';
// import SetPassword from './SetPassword';
// import EmployeeList from './EmployeeList';

// const AdminDashboard = () => {
//   return (
//     <Router>
//       <div style={{ padding: 20 }}>
//         <h1>Admin Dashboard</h1>
//         <nav>
//           <Link to="/addemployee">Add Employee</Link> |{' '}
//           <Link to="/setpassword">Set Password</Link> |{' '}
//           <Link to="/employeelist">Employee List</Link>
//         </nav>
//         <Routes>
//           <Route path="/addemployee" element={<AddEmployee />} />
//           <Route path="/setpassword" element={<SetPassword />} />
//           <Route path="/employeelist" element={<EmployeeList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default AdminDashboard;
//import React from 'react'
import { AppBar, Box,IconButton, Toolbar, Typography,Button,   } from "@mui/material";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <nav className="navbar">

   
    <div>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WELCOME
          </Typography>
         <Link to={'/addemployee'} ><Button style={{ color: "white" }} color="inherit">Add Employee</Button></Link>
          <Link to={'/setpassword'} ><Button style={{ color: "white" }} color="inherit">Set Password</Button></Link>
          <Link to={'/employeelist'} ><Button style={{ color: "white" }} color="inherit">Employee List</Button></Link>
          {/* <Link to={'/viewtasks'} ><Button style={{ color: "white" }} color="inherit">View Tasks</Button></Link> */}
          <Link to={'/logout'} ><Button style={{ color: "white" }} color="inherit">Logout</Button></Link> 
          {/* <Button color="inherit">SignUp</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
        
    </div>
    </nav>

  
  )
}

export default AdminDashboard