import React from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Image from './Image'
import { ImageList } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import FavoriteImage from './FavoriteImage'

const clientId = 'ZV3icJSp1F9um_6W0NhYACZFvPb-D79UwMLn97-TItU';
const endpoint = 'https://api.unsplash.com/search/photos';

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
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));


export class MyPhotos extends React.Component{
    constructor(props){
        super(props);
        this.query = '';
        this.onQueryChange = this.onQueryChange.bind(this);
        this.search = this.search.bind(this);
        
        
        this.initData()
    }

    initData(){
        let favoryteItems = JSON.parse(localStorage.getItem('favourite_photos'));
        //console.log(favoryteItems);
        this.state = {
            images: favoryteItems
        }   
    }
    search(){

    }

    onQueryChange(e){
        this.query = e.target.value;
        this.search();
    }

    images(){
        return this.state.images.map(image =>{
            return FavoriteImage(image)
        })
    }
    

    
    render(){
        return(
            <>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <nav>

                    My photos
                    
                  </nav>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >

                  </Typography>
                  <Search >
                    <SearchIconWrapper >
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        onChange={this.onQueryChange}
                        
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </Toolbar>
              </AppBar>
            </Box>
            
            <Box sx={{ width: '100%', display:'flex'}}>
                <ImageList variant="masonry" cols={4}>
                    {this.images()}
                </ImageList>
            </Box>
            </>
        )
    }
}
