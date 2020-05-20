// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// Begin Application
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

interface BannerProps {
  page: string;
  title: string;
  content: string;
  fullScreen: boolean;
}

interface BannerTest {
  mycontent: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(to right, #FF206E, #ff5858)',
      marginBottom: '25px',
    },
    customHeader: {
      minHeight: '350px',
      padding: '55px 0px'   
    },
  }),
);

export default function Banner({mycontent}:BannerTest) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.customHeader}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" component="h2">
              Hello, I'm Jen.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              I am a marketer turned web developer, living in New Hampshire. I spend my days building projects with HTML, CSS, and JavaScript. In my spare time you can find me making embroidery art.
            </Typography>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}