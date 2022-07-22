import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { reducer } from "./MyPhotosActions";


export default function Image (image){

    const onFavorite = () => {
        const action = {
            type: 'addToFavorite',
            payload:image
        }
        reducer(action)
    }
 
    return(
        <>
        <ImageListItem key={image.id}>
            <img
                src={`${image.urls.thumb}?w=333&fit=crop&auto=format`}
                srcSet={`${image.urls.thumb}?w=333&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
                alt={`${image.description}`}
            />
        <ImageListItemBar
            actionIcon={
                <IconButton onClick={onFavorite} sx={{ color: 'white' }} ><FavoriteBorderIcon sx={{fontSize:'xx-large'}} /></IconButton>
            }
        />
        </ImageListItem> 
        </>
    )
}