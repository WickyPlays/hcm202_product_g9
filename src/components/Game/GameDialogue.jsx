import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import './GameDialogue.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GameDialogue() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="game-dialog">
      <button className="open-dialog-btn" onClick={handleOpen}>
        Open Dialog
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className="fullscreen-dialog"
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          className="close-btn"
        >
          <CloseIcon />
        </IconButton>
        <div className="dialog-content">
          <h1>Full-Screen Dialog</h1>
          <p>This is a full-screen dialog that slides up from the bottom.</p>
        </div>
      </Dialog>
    </div>
  );
};