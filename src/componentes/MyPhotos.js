import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ImageList } from "@mui/material";
import { Link } from "react-router-dom";
import FavouriteImage from './FavouriteImage'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { reducer } from "./MyPhotosActions";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));


export default function MyPhotos() {
    let images = [];
    if (localStorage.getItem('favourite_photos')){
        images = JSON.parse(localStorage.getItem('favourite_photos'));
    }
    let Filter;

    const handleChange = (event) => {
        Filter = event;

        const action = {
            type: event,
            payload: event
        }
        reducer(action);
    };


    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
                <nav>
                <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                </nav>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                </Typography>
                <Search >
                    <Box sx={{ minWidth: 140 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={Filter}
                              label="Filter"
                              onChange={(e) => handleChange(e.target.value)}
                            >
                                <MenuItem value={'date'}>Date</MenuItem>
                                <MenuItem value={'width'}>Width</MenuItem>
                                <MenuItem value={'height'}>Height</MenuItem>
                                <MenuItem value={'likes'}>Likes</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                </Search>
            </Toolbar>
          </AppBar>
        </Box>

        <Box sx={{ width: '100%', display:'flex'}}>
            <ImageList variant="masonry" cols={4}>
                {images.map(image => 
                <FavouriteImage image={image} />
            )}
            </ImageList>
        </Box>
        </>
    )
}
