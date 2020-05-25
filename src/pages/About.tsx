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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

// Banner and Interface

import Banner from '../components/Banner';
import BannerProps from '../interfaces/BannerProps';

// Images & Assets

import jenniferKirwin from '../assets/images/jennifer-kirwin.jpg';
// import resume from '../assets/pdfs/kirwin-jennifer_resume.pdf';

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

    SkillList: {
      padding: '0px',
    },

    SkillLi: {
      marginBottom: '-25px',
    },

    imgRes: {
      float: 'right',
      maxWidth: '250px',
      margin: '0 0 25px 25px'
    }
  }),
);

const bannerText:BannerProps = {
  "title": "About Me",
  "content": "I am a digital marketer turned web developer, living in Manchester, New Hampshire, creating and developing websites and applications with HTML, CSS, JavaScript, NodeJS, and more.",
  "fullScreen": false
}

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Banner {...bannerText}></Banner>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Typography variant="h3">
              My Background
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={jenniferKirwin} alt="Jennifer Kirwin Web Developer" className={classes.imgRes}/>
            <Typography variant="body1">
              At the start of my career I was a self-taught front-end developer, building websites from scratch with HTML and CSS and managing AdWords and digital marketing campaigns for a marketing agency. When I moved to Boston, I landed a digital marketing job with my AdWords experience. Over the next 3 years of my marketing career, the companies I worked for underwent website redesigns and database updates. I found myself working alongside the developers troubleshooting responsive design issues, making adjustments to HTML and CSS, and directing UX layouts. My husband and I moved back to New Hampshire recently and I realized my true passion was in web development and I decided to pursue it once again.
            </Typography>
            <Typography variant="body1">
              To help jumpstart myself, I am taking a class through the University of New Hampshire to better understand back-end development and update my portfolio. <Link href="/portfolio" color="secondary"> Check out my latest projects here!</Link> Want to chat? <Link href="/contact" color="secondary"> Feel free to contact me at any time!</Link> Like art? <Link href="https://www.jenniferlamontagne.com/" target="_blank" rel="noopener noreferrer" color="secondary">Check out my embroideries at www.jenniferlamontagne.com.</Link>
            </Typography>
            <Button variant="contained" size="large" color="secondary" href="https://jenniferkirwin.com/assets/pdfs/kirwin-jennifer_resume.pdf" target="_blank">
              Download Resume
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              Skillset
            </Typography>
            <List>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faNodeJs} className={classes.Icons} /> Node.js
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faDatabase} className={classes.Icons} /> MySQL
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faJs} className={classes.Icons} /> JavaScript/TypeScript
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faSass} className={classes.Icons} /> SCSS/CSS
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faHtml5} className={classes.Icons} /> HTML5
                  </ListItemText>
                </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              Frameworks
            </Typography>
            <List>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faReact} className={classes.Icons} /> React
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faAngular} className={classes.Icons} /> Angular
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faBootstrap} className={classes.Icons} /> Bootstrap
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faCheck} className={classes.Icons} /> Materialize
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faCheck} className={classes.Icons} /> Foundation
                  </ListItemText>
                </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              Other Skills
            </Typography>
            <List>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faAdobe} className={classes.Icons} /> Adobe InDesign, Photoshop, Illustrator, Premiere
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.SkillList}>
                  <ListItemText className={classes.SkillLi}>
                    <FontAwesomeIcon icon={faAd} className={classes.Icons} /> Google AdWords, Facebook &amp; Instagram Ads
                  </ListItemText>
                </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}