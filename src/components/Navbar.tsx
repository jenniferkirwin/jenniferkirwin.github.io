// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';
import Link from '@material-ui/core/Link';

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
import Container from '@material-ui/core/Container';

// Import Menu Items
import menu from '../data/menu';

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
    },

  }),
);

// Functions for Drawer Menu
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

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
              <Link href="/" color="inherit" underline="none">
                Jennifer Kirwin
              </Link>
            </Typography>
            <section className={classes.rightToolbar}>
              <Hidden smDown>
                {menu.map(({ page, url }) => (
                  <Button color="inherit" href={url}>{page}</Button>
                ))}
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
            {menu.map(({ page, url }) => (

              <Link href={ url } color="inherit" underline="none">
                <ListItem button key={ page }>{ page }</ListItem>
              </Link>

            ))}
          </List>
        </div>
      </Drawer>

    </div>
  );
}