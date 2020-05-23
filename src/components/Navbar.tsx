// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';
import { Link } from "react-router-dom";

// Material UI
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Styles
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },

    rightToolbar: {
      marginLeft: 'auto',
      marginRight: '-25px',
    },

    fullList: {
      width: 'auto',
    },

    title: {
      marginLeft: '-25px',
      padding: '15px 0px',
    }

  }),
);

// Functions for Drawer Menu
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

const menuItems = ['Portfolio', 'About', 'Contact', 'Github'];

type Anchor = 'bottom';

// Begin Application
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

export default function Navbar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
      <Container>
        <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Jennifer Kirwin
            </Typography>
            <section className={classes.rightToolbar}>
              <Hidden smDown>
                <Button color="inherit" href="/portfolio">Portfolio</Button>
                <Button color="inherit" href="/about">About</Button>
                <Button color="inherit" href="/contact">Contact</Button>
                <Button color="inherit" href="https://github.com/jenniferkirwin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></Button>
              </Hidden>
              <Hidden mdUp>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('bottom', true)}>
                  <MenuIcon></MenuIcon>
                </IconButton>
              </Hidden>
            </section>
          </Toolbar>
      </Container>
      </AppBar>

      <Drawer anchor={'bottom'} open={state['bottom']} onClose={toggleDrawer('bottom', false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer('bottom', false)}
          onKeyDown={toggleDrawer('bottom', false)}
        >
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

    </div>
  );
}