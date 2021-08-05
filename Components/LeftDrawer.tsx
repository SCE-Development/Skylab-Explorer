import React from 'react';
import { Link } from 'react-router-dom';
import Router from 'next/router';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles({
  page: {
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },

  drawerPaper: {
    width: drawerWidth,
    background: '#333',
  },
});

export default function LeftDrawer() {
  const classes = useStyles();

  const menuItems = [
    {
      text: 'Dashboard',
      path: '/dashboard',
    },
    {
      text: 'Landing',
      path: '/',
    },
    {
      text: 'Graph Examples',
      path: '/testingGraphs',
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
      >
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} button onClick={() => Router.push(item.path)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
