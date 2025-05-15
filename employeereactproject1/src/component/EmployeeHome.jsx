import { AppBar, Box,IconButton, Toolbar, Typography,Button,   } from "@mui/material";
import { Link } from "react-router-dom";

function EmployeeHome() {
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
         <Link to={'/employeeprofile/:id'} ><Button style={{ color: "white" }} color="inherit">Profile</Button></Link>
           <Link to={'/updatepassword'} ><Button style={{ color: "white" }} color="inherit">Update Password</Button></Link>
         
        <Link to={'/viewassigntask'} ><Button style={{ color: "white" }} color="inherit">View Task</Button></Link> 
         <Link to={'/logout'} ><Button style={{ color: "white" }} color="inherit">Logout</Button></Link> 
          {/* <Button color="inherit">SignUp</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
        
    </div>
    </nav>

  
  )
}

export default EmployeeHome