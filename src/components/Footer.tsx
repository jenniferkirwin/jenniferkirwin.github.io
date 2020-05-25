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
import { faReact } from '@fortawesome/free-brands-svg-icons';

// Import Menu Items
import menu from '../data/menu';

// Begin Application
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#2A2B2A',
      color: '#ffffff',
      padding: '35px 0px',
      marginTop: 'calc(5% + 25px)',
      bottom: 0,
    },
    Icons: {
      marginRight: '7px',
    },
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Typography variant="h5" align="left">
              Hello, I'm Jen.
            </Typography>
          </Grid>
          <Grid item sm={12} md={8}>
            <Typography variant="body1" align="left">
              I am a marketer turned web developer, living in New Hampshire. I spend my days building projects with HTML, CSS, JavaScript, NodeJS, and more. In my spare time you can find me making embroidery art.
            </Typography>
          </Grid>
          <Grid item sm={12} md={4}>
            {menu.map(({ page, url }) => (
              <Button color="inherit" href={url}>{page}</Button>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              <FontAwesomeIcon icon={faReact} className={classes.Icons} size="lg" />Built by me with React &amp; MaterialUi.
            </Typography>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}