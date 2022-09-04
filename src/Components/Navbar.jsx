import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';
const pages = ['Rent', 'Buy', 'sell'];
const Navbar = () => {
  return (
    <AppBar sx={{position:"static"}} style={{ background: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HomeIcon color='primary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              textDecoration: 'none',
            }}
            style={{ color: "black" }}
          >
            Estatery
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{ color: 'black' }}
              >
                {page}
              </Button>

            ))}
            <FormControl sx={{ m: 1, minWidth: 180 }} size='small' >
              <InputLabel variant="standard" style={{ color: "black" }} id="demo-select-small">Manage Property</InputLabel>
              <Select variant="standard" label="Manage Property" size="small" id="demo-select-small" labelId="demo-select-small" disableUnderline>
                <MenuItem >Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size='small' >
              <InputLabel variant="standard" style={{ color: "black" }} id="demo-select-small">Resources</InputLabel>
              <Select variant="standard" label="Resources" size="small" id="demo-select-small" labelId="demo-select-small" disableUnderline>
                <MenuItem >Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant='outlined'>Login</Button>
            <Button variant='contained' sx={{ ml: 1 }}>Sign Up</Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
