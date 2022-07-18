import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import React from "react";
import { reducer, getPhotos } from "./MyPhotosActions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';



export default function FavoriteImage (image){
    //cont [image, setImage] = useState([])

    const onDelete = () => {
        const action = {
            type: 'removeFavorite',
            payload:image
        }
        reducer(action)
    }
    const onEdit = () => {
        const action = {
            type: 'Edit',
            payload:image
        }
        reducer(action)
    }
    const onDownload = () => {
        const action = {
            type: 'Download',
            payload:image
        }
        reducer(action)
    }
 
    return(
        <>
        <ImageListItem key={image.id}>
            <img
                src={`${image.thumb}?w=333&fit=crop&auto=format`}
                srcSet={`${image.thumb}?w=333&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
            />
        <ImageListItemBar
            actionIcon={
                <>
                    <IconButton sx={{ color: 'white' }} onClick={() => onEdit()}><EditIcon sx={{fontSize:'xx-large'}} /></IconButton>
                    <IconButton sx={{ color: 'white' }} onClick={() => onDelete()}><FavoriteIcon sx={{fontSize:'xx-large'}} /></IconButton>
                </>
            }
        />
        </ImageListItem>   

        </>
    )
}