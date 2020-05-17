// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

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
    },

    fullList: {
      width: 'auto',
    },

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Jennifer Kirwin
          </Typography>
          <section className={classes.rightToolbar}>
            <Hidden smDown>
              <Button color="inherit">Portfolio</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
              <Button color="inherit"><FontAwesomeIcon icon={faGithub} /></Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('bottom', true)}>
                <MenuIcon></MenuIcon>
              </IconButton>
            </Hidden>
          </section>
        </Toolbar>
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