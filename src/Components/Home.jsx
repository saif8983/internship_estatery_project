import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import Calendar from 'react-calendar';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Popover from '@mui/material/Popover';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import TextField from '@mui/material/TextField';

const Homecomponent = () => {
  const [value, onChange] = useState(new Date());
  console.log(value)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Container maxWidth="100%" style={{ backgroundColor: "#E2E2EA", height: "100%" }}>
      <Box sx={{ width: '100%' }} >
        <Stack container
          direction="column"
          justifyContent="space-around"
          alignItems="center" spacing={5}>
          <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="center">

            <h1>Search properties to rent</h1>
            <FormControl sx={{ m: 1, minWidth: 180 }} size='small' >
              <InputLabel style={{ color: "black" }} id="demo-select-small">Resources</InputLabel>
              <Select style={{ backgroundColor: "white" }} label="Resources" size="small" id="demo-select-small" labelId="demo-select-small" >
                <MenuItem >Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <div>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: 'fit-content',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                bgcolor: 'background.paper',
                color: 'text.secondary',
                '& svg': {
                  m: 1.5,
                },
                '& hr': {
                  mx: 5,
                },
                textAlign: 'center',
                alignContent: 'center'

              }}
            >
              <div>
                <Typography variant="body2" color="text.secondary">Location</Typography>
                <h3 style={{ marginLeft: "10px" }}>New york</h3>
              </div>
              <Divider orientation="vertical" flexItem />
              <div>
                <Typography variant="body2" color="text.secondary">When</Typography>
                <Stack container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center" >
                  <h3>Select Move-In Date</h3>
                  <Button aria-describedby={id} onClick={handleClick} size='small' ><CalendarMonthIcon /></Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <div style={{ width: 300 }}>
                      <Calendar onChange={onChange} value={value} />
                    </div>
                  </Popover>
                </Stack>
              </div>
              <Divider orientation="vertical" flexItem />
              <Stack container
                direction="row"
                justifyContent="space-around"
                alignItems="center" >
                <div>
                  <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>Price</Typography>
                  <form>
                    <select style={{ border: 'none', outlined: "none", fontSize: "20px", with: "200px", backgroundColor: "white", marginBottom: "16px", fontWeight: "bolder" }}>
                      <option>$500-$2500</option>
                      <option>two</option>
                      <option>three</option>

                    </select>
                  </form>
                </div>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack container
                direction="row"
                justifyContent="space-around"
                alignItems="center" >
                <div>
                  <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>Property type</Typography>
                  <form>
                    <select style={{ border: 'none', outlined: "none", fontSize: "20px", with: "200px", backgroundColor: "white", marginBottom: "16px", fontWeight: "bolder" }}>
                      <option>Houses</option>
                      <option>two</option>
                      <option>three</option>

                    </select>
                  </form>
                </div>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Button variant='contained'sx={{mr:5}} >Search</Button>
            </Box>
          </div>
        </Stack>
      </Box>
    </Container>
  );
}

export default Homecomponent;
