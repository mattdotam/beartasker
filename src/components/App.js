import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import styles from "../styles/AppStyles";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default withStyles(styles)(App);
