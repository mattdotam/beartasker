import React, { Component } from "react";
import { Container, Typography, withStyles } from "@material-ui/core";
import styles from "../styles/AppStyles";
import NavBar from "./NavBar";
import TaskContainer from "./TaskContainer";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <Container maxWidth="md">
          <TaskContainer />
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
