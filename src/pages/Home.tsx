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

// Banner and Interface

import Banner from '../components/Banner';
import BannerProps from '../interfaces/BannerProps';

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

const bannerText:BannerProps = {
  'title': 'Hello, I\'m Jen.',
  'content': 'I am a marketer turned web developer, living in New Hampshire. I spend my days building projects with HTML, CSS, JavaScript, NodeJS, and more. In my spare time you can find me making embroidery art.',
  'fullScreen': true
}

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Banner {...bannerText}></Banner>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              Portfolio
            </Typography>
            <Typography variant="body1">
              A selection of website designs, GitHub Repositories, web components, UX layouts, &amp; more that I have developed and launched.
            </Typography>
            <Button variant="contained" size="large" color="secondary" href="/portfolio">
              View Portfolio
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              About Me
            </Typography>
            <Typography variant="body1">
              I am a digital marketer turned web developer, living in Manchester, New Hampshire, creating and developing websites and applications with HTML, CSS, JavaScript, and more.
            </Typography>
            <Button variant="contained" size="large" color="secondary" href="/about">
              Learn More
            </Button>
          </Grid> 
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">
              Contact Me
            </Typography>
            <Typography variant="body1">
            Want to work with me? Send me a note, I would love to hear from you!
            </Typography>
            <Button variant="contained" size="large" color="secondary" href="/contact">
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}