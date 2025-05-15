//import React from 'react'
import { AppBar, Box,IconButton, Toolbar, Typography,Button,   } from "@mui/material";
import { Link } from "react-router-dom";

function home() {
  return (
    <nav className="navbar">

   
    <div>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
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
            Welcome to EMS
          </Typography>
           
         <Link to={'/login'} ><Button style={{ color: "white" }} color="inherit">Login</Button></Link>
          <Link to={'/adminlogin'} ><Button style={{ color: "white" }} color="inherit">Admin Login</Button></Link>
        {/*<Link to={'/addmovie'} ><Button style={{ color: "white" }} color="inherit">Add Movie</Button></Link> */}
          {/* <Button color="inherit">SignUp</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
        
    </div>
    </nav>




  
  )
}

export default home