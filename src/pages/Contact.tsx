// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Banner and Interface

import Banner from '../components/Banner';
import BannerProps from '../interfaces/BannerProps';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope,
  faGlobe
 } from '@fortawesome/free-solid-svg-icons';

// Begin Application
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },

    Icons: {
      marginRight: '7px',
    },

    UnstyledList: {
      listStyleType: 'none',
      padding: '25px 0 0',

    }
  }),
);

const bannerText:BannerProps = {
  'title': 'Contact Me',
  'content': 'Want to work with me? Send me a note, I would love to hear from you!',
  'fullScreen': false
}

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Banner {...bannerText}></Banner>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">
              Developer
            </Typography>
            <Typography variant="body1">
              I can't wait to hear from you! Send me an email or check out my latest projects...
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:jennifer.m.kirwin@gmail.com" color="secondary"><FontAwesomeIcon icon={faEnvelope} className={classes.Icons} size="lg"/> jennifer.m.kirwin@gmail.com</Link>
            </Typography>
            <Typography variant="body1">
              <Link href="https://github.com/jenniferkirwin" target="_blank" rel="noopener noreferrer" color="secondary"><FontAwesomeIcon icon={faGithub} className={classes.Icons} size="lg"/> github.com/jenniferkirwin</Link>
            </Typography>
            <Typography variant="body1">
              <Link href="https://www.linkedin.com/in/jennifer-lamontagne-kirwin-17b13646/" target="_blank" rel="noopener noreferrer" color="secondary"><FontAwesomeIcon icon={faLinkedin} className={classes.Icons} size="lg"/> linkedin.com/in/jennifer-lamontagne-kirwin-17b13646/</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">
              Artist
            </Typography>
            <Typography variant="body1">
              Like art? Check out my latest exhibitions, workshops, and creations here...
            </Typography>
            <Typography variant="body1">
              <Link href="https://www.jenniferlamontagne.com/" target="_blank" rel="noopener noreferrer" color="secondary"><FontAwesomeIcon icon={faGlobe} className={classes.Icons} size="lg"/> jenniferlamontagne.com</Link>
            </Typography>
            <Typography variant="body1">
              <Link href="https://www.instagram.com/lamont.artist/" target="_blank" rel="noopener noreferrer" color="secondary"><FontAwesomeIcon icon={faInstagram} className={classes.Icons} size="lg"/> instagram.com/lamont.artist/</Link>
            </Typography>
          </Grid> 
        </Grid>
      </Container>

    </div>
  );
}