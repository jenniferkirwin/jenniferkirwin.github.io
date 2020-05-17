import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
  fullList: {
    width: 'auto',
  },
});

const menuItems = ['Portfolio', 'About', 'Contact', 'Github'];

type Anchor = 'bottom';

export default function TemporaryDrawer() {
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
    <div>
 
        <React.Fragment>
          <Button onClick={toggleDrawer('bottom', true)}>bottom</Button>
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
        </React.Fragment>

    </div>
  );
}