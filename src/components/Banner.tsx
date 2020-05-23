// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// interface

import BannerProps from '../interfaces/BannerProps';

// Begin Application
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(to right, #FF206E, #ff5858)',
      margin: '35px 0px 25px',
    },
    customHeader: {
      minHeight: '350px',
      padding: '55px 0px'   
    },
  }),
);

export default function Banner({title, content}:BannerProps) {
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
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              {content}
            </Typography>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}