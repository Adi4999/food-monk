import {GiShoppingCart} from 'react-icons/gi';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props) {
  return (
    <div >
      <Box sx={{ flexGrow: 1 }}  >
    <AppBar position="static">
      <Toolbar style={{backgroundColor:"rgb(102, 0, 255)"}}>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          Food Monk
        </Typography>
        <Button color="inherit" onClick={()=>props.cartClick(!props.isCart)}><GiShoppingCart size="2.5em"/></Button>
      </Toolbar>
    </AppBar>
  </Box>
  </div>
  )
}
