// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faSass, 
  faJs, 
  faNodeJs, 
  faReact, 
  faAngular,
  faBootstrap,
  faAdobe 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCheck,
  faAd } from '@fortawesome/free-solid-svg-icons';

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

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Typography variant="h3">
              My Background
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
            At the start of my career I was a self-taught front-end developer, building websites from scratch with HTML and CSS and managing AdWords and digital marketing campaigns for a marketing agency. When I moved to Boston, I landed a digital marketing job with my AdWords experience. Over the next 3 years of my marketing career, the companies I worked for underwent website redesigns and database updates. I saw what the developers were creating and said to myself, "this is good, but I could push this further". I found myself troubleshooting responsive design issues, making adjustments to HTML and CSS, and directing UX layouts. My husband and I moved back to New Hampshire recently and I realized my true passion was in web development and I decided to pursue it once again.
            </Typography>
            <Typography variant="body1">
            To help jumpstart myself, I am taking a class through the University of New Hampshire to better understand back-end development and update my portfolio. <a href="portfolio.html">Check out my latest projects here!</a> Want to chat? <a href="contact.html">Feel free to contact me at any time!</a> Like art? <a href="https://www.jenniferlamontagne.com/" target="_blank" rel="noopener noreferrer">Check out my embroideries at www.jenniferlamontagne.com.</a>
            </Typography>
            <Button variant="contained" size="large" color="secondary">
              Download Resume
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              Skillset
            </Typography>
            <Typography variant="body1">
              <ul className={classes.UnstyledList}>
                <li><FontAwesomeIcon icon={faNodeJs} className={classes.Icons} /> Node.js</li>
                <li><FontAwesomeIcon icon={faDatabase} className={classes.Icons} /> MySQL</li>
                <li><FontAwesomeIcon icon={faJs} className={classes.Icons} /> JavaScript/TypeScript</li>
                <li><FontAwesomeIcon icon={faSass} className={classes.Icons} /> SCSS/CSS</li>
                <li><FontAwesomeIcon icon={faHtml5} className={classes.Icons} /> HTML5</li>
              </ul>  
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              Frameworks
            </Typography>
            <Typography variant="body1">
              <ul className={classes.UnstyledList}>
                <li><FontAwesomeIcon icon={faReact} className={classes.Icons} /> React</li>
                <li><FontAwesomeIcon icon={faAngular} className={classes.Icons} /> Angular</li>
                <li><FontAwesomeIcon icon={faBootstrap} className={classes.Icons} /> Bootstrap</li>
                <li><FontAwesomeIcon icon={faCheck} className={classes.Icons} /> Materialize</li>
                <li><FontAwesomeIcon icon={faCheck} className={classes.Icons} /> Foundation</li>
              </ul>  
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              Other Skills
            </Typography>
            <Typography variant="body1">
              <ul className={classes.UnstyledList}>
                <li><FontAwesomeIcon icon={faAdobe} className={classes.Icons} /> Adobe InDesign, Photoshop, Illustrator, Premiere</li>
                <li><FontAwesomeIcon icon={faAd} className={classes.Icons} /> Google AdWords, Facebook &amp; Instagram Ads</li>
              </ul>  
            </Typography>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}