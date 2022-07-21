import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { reducer } from "./MyPhotosActions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };
  
  const onEdit = () => {
    console.log(props.currentImage)
  const action = {
    type: 'editToFavorite',
    payload: props.currentImage
  }
    reducer(action);
  }
  const handleClose = () => {
    console.log('estoy en handleClose')
    console.log(props.currentImage)
    onEdit()

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>edit description</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <p id="child-modal-description">
            <textarea placeholder='Edit Description' value={description} onChange={ e => {setDescription(e.target.value)}}></textarea>
          </p>
          <Button onClick={handleClose}>save description</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal(props) {
  
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
      
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">DATA</h2>
          <p id="parent-modal-description">
          Likes: {props.currentImage.likes}</p>
          <p>Width: {props.currentImage.width}</p>
          <p>Height: {props.currentImage.height}</p>
          <p>
          Description: {props.currentImage.description}</p>
          <ChildModal currentImage={props.currentImage}/>
          <Button onClick={handleClose}>save</Button>
        </Box>
      </Modal>
    </div>
  );
}
//transformarlo en un metodo??