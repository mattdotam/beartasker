import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import styles from "../styles/TaskContainerStyles";
import axios from "axios";
import TaskItem from "./TaskItem";

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  componentDidMount() {
    axios.get("/api/tasks").then(res => {
      res.status === 200 && this.setState({ tasks: [...res.data] });
    });
  }
  render() {
    return (
      <Grid direction="column" container>
        {this.state.tasks.length > 0 &&
          this.state.tasks.map(t => {
            return <TaskItem {...t} />;
          })}
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskContainer);
