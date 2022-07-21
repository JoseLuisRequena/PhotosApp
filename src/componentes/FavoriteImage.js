import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from "react";
import { reducer } from "./MyPhotosActions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import NestedModal from './NestedModal'
const FileSaver = require('file-saver');



export default function FavoriteImage (image){
    const [open, setOpen] = useState(false)
    
   const onDelete = () => {
       const action = {
           type: 'removeFavorite',
           payload:image
       }
       reducer(action)
   }
    
    const handleOpen = () => {
        setOpen(true);
        console.log(image);
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
                    <IconButton sx={{ color: 'white' }} onClick={() => handleOpen()}><EditIcon sx={{fontSize:'xx-large'}} /></IconButton>
                    <IconButton sx={{ color: 'red' }} onClick={() => onDelete()}><FavoriteIcon sx={{fontSize:'xx-large'}} /></IconButton>
                    <IconButton sx={{ color: 'blue' }} onClick={() => FileSaver.saveAs(image.urlsFull, image.description)}><DownloadIcon sx={{fontSize:'xx-large'}} /></IconButton>
                </>
            }
        />
        </ImageListItem>   
        <NestedModal open={open} setOpen={setOpen} currentImage={image}/>
        </>
    )
}

