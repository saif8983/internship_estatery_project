import "../App.css"
import React from 'react';
import Select from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Navbar = () => {
  return (

    <><div class="left-navbar">
      <div class="left-navbar-home">
        <div><HomeIcon  color='primary'/></div>
        <h3>Estatery</h3>
      </div>
      <li> Rent</li>
      <li>Buy</li>
      <li>Sell</li>
      <FormControl sx={{ m: 1, minWidth: 180 }} size='small' >
    <InputLabel variant="standard" style={{color:"black"}} id="demo-select-small">Manage Property</InputLabel>
    <Select variant="standard" label="Manage Property" size="small" id="demo-select-small" labelId="demo-select-small" disableUnderline>
    <MenuItem >Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    </Select>
    </FormControl>

    <FormControl sx={{ m: 1, minWidth: 120 }} size='small' >
    <InputLabel variant="standard" style={{color:"black"}} id="demo-select-small">Resources</InputLabel>
    <Select variant="standard" label="Resources" size="small" id="demo-select-small" labelId="demo-select-small" disableUnderline>
    <MenuItem >Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    </Select>
    </FormControl>

      <div class='right-navbar'>
        <li style={{marginRight:"10px"}}><Button variant="outlined">Login</Button></li>
        <li><Button variant="contained">Sign Up</Button></li>
      </div>
    </div></>
  );
}

export default Navbar;
