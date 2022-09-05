import React from 'react';
import { useState, useEffect } from 'react';
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
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import StraightenIcon from "@mui/icons-material/Straighten";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import OutlinedInput from '@mui/material/OutlinedInput';
import properties from "../local-JSON/houseapi.json"
const Homecomponent = () => {
  const [value, onChange] = useState(new Date());
  const [propertyData] = useState(properties)
  const [filterValue, updateFiterValue] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(value)
  const [anyTypePrice, setAnyTypePrice] = useState()
  const [category, setCategory] = useState()
  const [firstPriceRange, setFirstPriceRange] = useState()
  const [secondPriceRange, setSecondPriceRange] = useState()
  const [priceValue, setPriceValue] = useState({
    firstPriceRange: "",
    secondPriceRange: "",
    anyTypePrice: "",
    category: "",
    value: ""
  })
  const [inputSearch, setInputSearch] = useState()
  const [searchInputValue, setSearchInputValue] = useState()
  console.log(priceValue.value)
  console.log(anyTypePrice)
  console.log(secondPriceRange)
  useEffect(() => {
    const filter = propertyData.filter(
      (item) => {
        if (priceValue.category === 'House' || priceValue.category === 'Apartment') {
          return (item.price >= priceValue.firstPriceRange && item.price <= priceValue.secondPriceRange && item.category === priceValue.category)
        } else if (priceValue.category === "Any_Type" && priceValue.anyTypePrice === "Any_Type") {
          return item
        } else if (priceValue.firstPriceRange === 500 && priceValue.secondPriceRange === 2500 && priceValue.category === 'Apartment') {
          return (item.price >= 500 && item.price <= 2500 && item.priceValue.category === "Apartment")
        }
        else if (priceValue.firstPriceRange === 2500 && priceValue.secondPriceRange === 5000 && priceValue.category === 'Apartment') {
          return (item.price >= 2500 && item.price <= 5000 && item.priceValue.category === "Apartment")
        } else if (priceValue.firstPriceRange === 500 && priceValue.secondPriceRange === 2500 && priceValue.category === 'House') {
          return (item.price >= 500 && item.price <= 2500 && item.priceValue.category === "House")
        }
        else if (priceValue.firstPriceRange === 2500 && priceValue.secondPriceRange === 5000 && priceValue.category === 'House') {
          return (item.price >= 2500 && item.price <= 5000 && item.priceValue.category === "House")
        }
        else if (priceValue.anyTypePrice === 'Any_Type' && priceValue.category === 'House') {
          return (item.priceValue.category === "House")
        }
        else if (priceValue.firstPriceRange === 500 && priceValue.secondPriceRange === 2500 && priceValue.category === 'Any_Type') {
          return (item.price >= 500 && item.price <= 2500)
        }
        else if (priceValue.firstPriceRange === 2500 && priceValue.secondPriceRange === 5000 && priceValue.category === 'Any_Type') {
          return (item.price >= 2500 && item.price <= 5000)
        }
        else if (priceValue.value) {
          return (item.date == priceValue.value)
        }
        else if (searchInputValue === '') {
          return item
        }
        else if (searchInputValue) {
          return (item.address.toLowerCase().includes(searchInputValue))
        }
      }
    );
    updateFiterValue(filter)

  }, [priceValue.firstPriceRange, priceValue.secondPriceRange, priceValue.category, priceValue.anyTypePrice, priceValue.value, searchInputValue,])

  console.log(filterValue)
  useEffect(() => {
    updateFiterValue(propertyData)
  }, [propertyData, selectedOption])


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelectPriceChange = (price) => {

    switch (price) {
      case "Any_Type":
        setAnyTypePrice('Any_Type')
        break;
      case "500-2500":
        setFirstPriceRange(500)
        setSecondPriceRange(2500)
        break;
      case "2500-5000":
        setFirstPriceRange(2500)
        setSecondPriceRange(5000)
        break;
      default:
        setAnyTypePrice(null)
        break;
    }
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handlesearchManually = () => {
    setPriceValue({
      firstPriceRange,
      secondPriceRange,
      anyTypePrice,
      category,
      value
    })

  }
  const handleSearchInput = (value) => {
    setInputSearch(value)
  }
  const handleSearchBarButton = () => {
    setSearchInputValue(inputSearch)
  }

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
              <InputLabel style={{ color: "black" }} id="demo-select-small">Search Option</InputLabel>
              <Select style={{ backgroundColor: "white" }} label="Resources" size="small" onChange={(e) => setSelectedOption(e.target.value)} >
                <MenuItem value={2} >Search with Search Bar</MenuItem>
                <MenuItem value={null}>Search with Manually</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {selectedOption === null && (
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
                      <select onChange={(e) => handleSelectPriceChange(e.target.value)} style={{ border: 'none', outlined: "none", fontSize: "20px", with: "200px", backgroundColor: "white", marginBottom: "16px", fontWeight: "bolder" }}>
                        <option value={'Any_Type'}>Any Type</option>
                        <option value={"500-2500"}>$500-$2500</option>
                        <option value={"2500-5000"}>$2500-$5000</option>
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
                      <select onChange={(e) => setCategory(e.target.value)} style={{ border: 'none', outlined: "none", fontSize: "20px", with: "200px", backgroundColor: "white", marginBottom: "16px", fontWeight: "bolder" }}>
                        <option value={'Any_Type'}>Any Type</option>
                        <option value={'House'}>Houses</option>
                        <option value={'Apartment'}>Apartments</option>


                      </select>
                    </form>
                  </div>
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Button onClick={() => handlesearchManually()} variant='contained' sx={{ mr: 5 }} >Search</Button>
              </Box>
            </div>
          )}
          {selectedOption === 2 && (

            <div>
              <FormControl fullWidth sx={{ m: 1, width: "500px", bgcolor: 'white' }} variant="outlined">

                <OutlinedInput
                  id="OutlinedInput-adornment-amount"
                  placeholder='New York, 1001...'
                  onChange={(e) => handleSearchInput(e.target.value)}
                />
              </FormControl>
              <Button onClick={() => handleSearchBarButton()} variant='contained' sx={{ mt: 2, ml: 2 }}>Search</Button>
            </div>
          )}
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {filterValue.map((item, index) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345, borderRadius: "5%" }} style={{ margin: "50px" }} >
                  <CardMedia
                    component="img"
                    alt="No Image"
                    height="140"
                    image={item.image}
                  />
                  <CardContent>
                    <Stack
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography color="primary" gutterBottom variant="h5" component="div">
                        ${item.price}
                      </Typography>
                      <FavoriteBorderOutlinedIcon />
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.address}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <BedroomChildOutlinedIcon />{item.bed}
                    </Button>
                    <Button size="small">
                      <BathtubOutlinedIcon />{item.bathroom}
                    </Button>
                    <Button size="small">
                      <StraightenIcon />
                      {item.size}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}

export default Homecomponent;
