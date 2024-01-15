import React from 'react';
import { useState } from 'react';
import Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const SearchBar = () =>{
    const [anchorElement, setAnchorElement] = useState(null);
    const open  = Boolean(anchorElement);
    const handleClick = (event) =>{
        setAnchorElement(event.target.value);
        event.preventDefault();
    };
    const handleClose = (event) =>{
        setAnchorElement(null);
    }


return (

    <Button id = 'search-button'variant='outlined' color='success' sx={{float: 'right'}} href='outlinedbuttonome'
         aria-controls={open ? 'search-button' : undefined}
         onClick={handleClick}>

         🔍
         <TextField id="standard-basic" label="Search" variant="standard" />
           </Button>
);


}


export default SearchBar;
