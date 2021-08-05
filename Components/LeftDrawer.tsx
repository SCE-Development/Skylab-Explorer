import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Router from 'next/router';

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
