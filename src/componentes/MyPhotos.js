import React, { useState} from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ImageList } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteImage from './FavoriteImage'


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


export default function MyPhotos() {
    const [images, setImages]= useState(JSON.parse(localStorage.getItem('favourite_photos')))
    const [query, setQuery] = useState("")    

    function onQueryChange(e){
        setQuery = e.target.value;
        console.log(query)
    }

    function getImages(){
        return images.map(image =>{
            return FavoriteImage(image)
        })
    }
        return(
            <>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <nav>

                  <Link to='/'>Home</Link>
                    
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
                      value={query}
                      onChange={onQueryChange}
                        
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </Toolbar>
              </AppBar>
            </Box>
            
            <Box sx={{ width: '100%', display:'flex'}}>
                <ImageList variant="masonry" cols={4}>
                    {getImages()}
                </ImageList>
            </Box>
            </>
        )
}
