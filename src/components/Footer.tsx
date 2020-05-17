// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Begin Application
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Typography variant="h5" align="left">
              Hello, I'm Jen.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left">
              I am a marketer turned web developer, living in New Hampshire. I spend my days building projects with HTML, CSS, and JavaScript. In my spare time you can find me making embroidery art.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ul>
              <li>Portfolio</li>
              <li>About</li>
              <li>Contact</li>
              <li><FontAwesomeIcon icon={faGithub} /></li>
            </ul>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}