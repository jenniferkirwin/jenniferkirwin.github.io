// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

// Begin Application
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlayDiv: {
      padding: '35px',
      position: 'fixed',
      display: 'block',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: '#ffffff',
      zIndex: 999,
      '&:focus': {
        outline: 'none',
      },
    },
    icon: {
      float: 'right',
    },
    btnContainer: {
      marginBottom: '25px',
    },
  }),
);

export default function CardModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
          <div className={classes.overlayDiv}>
            <Close className={classes.icon} />
            
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                  <Typography variant="h3">
                    My Background
                  </Typography>
                  <Typography variant="body1">
                    asdfadsf asdfadsf asdfsdafa asdf adsfds d asdfadfa asdfasdfa asdfadsf
                  </Typography>
                  <div className={classes.btnContainer}>
                    <Button variant="contained" size="large" color="secondary" href="#" target="_blank">
                      View Project
                    </Button>
                  </div>
                  <div>
                    <Button variant="contained" size="large" color="secondary" href="#" target="_blank">
                      View Github Repository
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <Typography variant="h3">
                    My Background
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}