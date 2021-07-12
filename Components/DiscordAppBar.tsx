import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const WhiteTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const DiscordTypography = withStyles({
  root: {
    color: "#A5B7F6"
  }
})(Typography);

const BlackAppBar = withStyles({
  root: {
    background: "#000000"
  }
})(AppBar);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "black",
  },
  menuButton: {
    marginTop: theme.spacing(7),
  },
  toolbar: {
    minHeight: 100,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  divider: {
    background: "#A5B7F6",
    marginTop: 15,
},
}));

export default function DiscordAppBar() {
  const classes = useStyles();

  return (
    <Box pt={5} pl={10} pr={10} pb={5}>
    <div className={classes.root}>
      <BlackAppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
          <WhiteTypography variant="h1" style={{ marginRight: 20 }} display="inline">
            SCE Analytics
          </WhiteTypography>
          <DiscordTypography variant="h3" display="inline">
            Discord
          </DiscordTypography>
          </div>
          <Button className={classes.menuButton} color="primary">Logout</Button>
        </Toolbar>
        <Divider classes={ { root: classes.divider } }/>
      </BlackAppBar>
    </div>
    </Box>
  );
}
