// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

// interface

import PortfolioProps from '../interfaces/PortfolioProps';

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
    responsiveImg: {
      maxWidth: '100%',
    },
    arrowPadding: {
      marginLeft: '15px',
    }
  }),
);

export default function CardModal({projectName, projectOver, projectDescr, projectURL, githubURL, imgSrc}:PortfolioProps) {
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

      <Button variant="contained" size="large" color="secondary" onClick={handleOpen}>
        {projectName} <FontAwesomeIcon icon={faArrowAltCircleRight} className={classes.arrowPadding}/>
      </Button>

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
        <Slide in={open} direction="up">
          <div className={classes.overlayDiv}>
            
            <Button size="large" className={classes.icon} onClick={handleClose}>
              <Close/>
            </Button>

            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                  <Typography variant="h3">
                    {projectName}
                  </Typography>
                  <Typography variant="body1">
                    {projectOver}
                  </Typography>
                  <div className={classes.btnContainer}>
                    <Button variant="contained" size="large" color="secondary" href={projectURL} target="_blank">
                      View Project
                    </Button>
                  </div>
                  <div>
                    <Button variant="contained" size="large" color="secondary" href={githubURL} target="_blank">
                      View Github Repository
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <img src={imgSrc} alt={projectName} className={classes.responsiveImg}/>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Slide>
      </Modal>
    </div>
  );
}