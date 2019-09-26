import React, { Component } from "react";
import {
  Container,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import styles from "../styles/AppStyles";
import NavBar from "./NavBar";
import TaskContainer from "./TaskContainer";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <Container maxWidth="lg">
          <Paper>
            <TaskContainer />
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
