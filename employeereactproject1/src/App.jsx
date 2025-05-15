// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from 'react';
// import './App.css';
// import EmployeeList from "./component/EmployeeList";
// import Navbar from './component/Home';
// import Login from "./component/Login";
// import AddEmployee from "./component/AddEmployee";
// import SetPassword from "./component/SetPassword";
// import EmployeeProfile from "./component/EmployeeProfile"
// import AdminLogin from "./component/AdminLogin";
// import AdminDashboard from './component/AdminDashboard';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import EmployeeHome from './component/EmployeeHome';
// import UpdatePassword from "./component/UpdatePassword"
// import AdminLayout  from './component/AdminLayout';
// import PublicLayout from './component/PublicLayout';
// import Home from './component/Home';
// import AssignTask from './component/AssignTask';
// import Logout from './component/LogOut';
// import ViewAssignTask from './component/ViewAssignTask'




// function App() {
//   return (
//   //   <div className="App">
//   //     <EmployeeList />
//   //   </div>
//   // );
  
//   <Router> {/* Wrap everything in BrowserRouter */}
//       <>
       
//         <Navbar />

       
//         <Routes>
//            <Route path="/login" element={<Login />} />
//           <Route path="/adminlogin" element={<AdminLogin />} />
//           <Route path="/admindashboard" element={<AdminDashboard />} />
//            <Route path="/addemployee" element={<AddEmployee />} />
//           <Route path="/setpassword" element={<SetPassword />} />
//           <Route path="/employeelist" element={<EmployeeList />} />
//            <Route path="/employeehome" element={<EmployeeHome />} /> 
//           <Route path="/updatepassword" element={<UpdatePassword />} /> 
//           <Route path="/employeeprofile/:id" element={<EmployeeProfile />} /> 
//            <Route path="/assigntask" element={<AssignTask />} /> 
//            <Route path="/logout" element={<Logout />} />  
//             <Route path="/viewassigntask" element={<ViewAssignTask />} />  

//         </Routes>

//       </>
//     </Router>
    


    
// )}

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';

// import EmployeeList from "./component/EmployeeList";
// import Navbar from './component/Home'; // Assuming this is the Login/AdminLogin navbar
// import Login from "./component/Login";
// import AddEmployee from "./component/AddEmployee";
// import SetPassword from "./component/SetPassword";
// import EmployeeProfile from "./component/EmployeeProfile";
// import AdminLogin from "./component/AdminLogin";
// import AdminDashboard from './component/AdminDashboard';
// import EmployeeHome from './component/EmployeeHome';
// import UpdatePassword from "./component/UpdatePassword";
// import AssignTask from './component/AssignTask';
// import Logout from './component/LogOut';
// import ViewAssignTask from './component/ViewAssignTask';

// // Wrapper to handle Navbar conditionally
// const AppWrapper = () => {
//   const location = useLocation();

//   // Show Navbar only for /login or /adminlogin
//   const showNavbar = location.pathname === "/login" || location.pathname === "/adminlogin";

//   return (
//     <>
//       {showNavbar && <Navbar />}

//       <Routes>
        
//         <Route path="/login" element={<Login />} />
//         <Route path="/adminlogin" element={<AdminLogin />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//         <Route path="/addemployee" element={<AddEmployee />} />
//         <Route path="/setpassword" element={<SetPassword />} />
//         <Route path="/employeelist" element={<EmployeeList />} />
//         <Route path="/employeehome" element={<EmployeeHome />} />
//         <Route path="/updatepassword" element={<UpdatePassword />} />
//         <Route path="/employeeprofile/:id" element={<EmployeeProfile />} />
//         <Route path="/assigntask" element={<AssignTask />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/viewassigntask" element={<ViewAssignTask />} />
//       </Routes>
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppWrapper />
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';

import EmployeeList from "./component/EmployeeList";
import Navbar from './component/Home'; // Assuming this is the Login/AdminLogin navbar
import Login from "./component/Login";
import AddEmployee from "./component/AddEmployee";
import SetPassword from "./component/SetPassword";
import EmployeeProfile from "./component/EmployeeProfile";
import AdminLogin from "./component/AdminLogin";
import AdminDashboard from './component/AdminDashboard';
import EmployeeHome from './component/EmployeeHome';
import UpdatePassword from "./component/UpdatePassword";
import AssignTask from './component/AssignTask';
import Logout from './component/LogOut';
import ViewAssignTask from './component/ViewAssignTask';
import ViewTasks from './component/ViewAssignTask';

// Wrapper to handle Navbar conditionally
const AppWrapper = () => {
  const location = useLocation();

  // Show Navbar only for /login or /adminlogin
  const showNavbar = location.pathname === "/login" || location.pathname === "/adminlogin";

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/setpassword" element={<SetPassword />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/employeehome" element={<EmployeeHome />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/employeeprofile/:id" element={<EmployeeProfile />} />
        <Route path="/assigntask" element={<AssignTask />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/viewassigntask" element={<ViewAssignTask />} />
         <Route path="/viewtasks" element={<ViewTasks />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
