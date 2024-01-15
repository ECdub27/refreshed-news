import React from 'react';
import { useState }  from "react";
import  Button  from '@mui/material/Button';
import  Menu from '@mui/material/Menu';
import  MenuItem  from '@mui/material/MenuItem';

function NavBar(){
const [anchorElement, setAnchorElement] = useState(null);
const open  = Boolean(anchorElement);
const handleClick = (event) =>{
    setAnchorElement(event.currentTarget);
};
const handleClose = (event) =>{
    setAnchorElement(null);
}




    return (
        <div>
       <Button  id='nav-bar-button'
       aria-controls= {open ? 'nav-bar-button' :undefined}
       aria-haspopup = 'true'
       aria-expanded = {open ? 'true': undefined}
       onClick= {handleClick}
       position = 'left'
       sx={{right: 650}}>
        Explore Website
       </Button>
       <Menu  id='nav-bar-menu'
       anchorElement={anchorElement}
       open={open}
       onClose ={handleClose}
       menuListProps = {{'aria-labelledby':'nav-bar-button' }}
       
       anchorOrigin={{
        vertical: 'left',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'left',
        horizontal: 'left',
      }}>
        <MenuItem  className='nav-bar-i1' onClick={handleClose}>Culture</MenuItem>
        <MenuItem className='nav-bar-i2' onClick={handleClose}>Sports</MenuItem>
        <MenuItem className='nav-bar-i3' onClick={handleClose}>Politics</MenuItem>
        <MenuItem className='nav-bar-i1'onClick={handleClose}>Science</MenuItem>
        <MenuItem className='nav-bar-i2'onClick={handleClose}>Business</MenuItem>
        <MenuItem className='nav-bar-i3'onClick={handleClose}>Technology</MenuItem>
       </Menu>
        </div>

);
}



export default NavBar