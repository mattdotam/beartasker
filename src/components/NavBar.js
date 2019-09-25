import React, { Component } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import styles from "../styles/NavBarStyles";

class NavBar extends Component {
  render() {
    return (
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h3" component="h1">
            BearTasker
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
