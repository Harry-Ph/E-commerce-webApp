import React from 'react';
import {Modal, Backdrop, Fade, Button} from '@material-ui/core';


import useStyles from './style';

export default function TransitionsModal({handleOpen, handleClose, open}) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">DELETE THIS ITEM</h2>
                        <p id="transition-modal-description">Do you want to delete this item?.</p>
                        <Button size="small" variant="contained" color="primary" onClick={handleClose}>DELETE</Button>
                        <Button size="small" variant="outlined" color="default" onClick={handleClose}>CANCEL</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
