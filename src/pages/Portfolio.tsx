// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// Banner and Interface

import Banner from '../components/Banner';
import BannerProps from '../interfaces/BannerProps';

// Portfolio Cards

import Cards from '../components/Cards';

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

const bannerText:BannerProps =   {
  "title": "My Portfolio",
  "content": "A selection of website designs, GitHub Repositories, web components, UX layouts, & more that I have developed and launched.",
  "fullScreen": false
}

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Banner {...bannerText}></Banner>
      <Cards></Cards>
    </div>
  );
}