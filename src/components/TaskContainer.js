import React, { Component } from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  withStyles,
} from "@material-ui/core";
import styles from "../styles/TaskContainerStyles";
import axios from "axios";
import Leads from "./Leads";

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.refreshTasks = this.refreshTasks.bind(this);
    this.newTasks = this.newTasks.bind(this);
  }
  componentDidMount() {
    this.refreshTasks();
  }
  refreshTasks() {
    console.log("refreshing task");
    axios.get("/api/tasks").then(res => {
      res.status === 200 &&
        this.setState({ tasks: [...res.data] }, () =>
          this.newTasks(),
        );
    });
  }
  newTasks() {
    const updated = [];
    this.state.tasks.map(t => {
      if (t.leadStamp === undefined) {
        updated.push({
          ...t,
          leadStamp: Math.floor(new Date().getTime() / 1000),
        });
      }
    });
    axios.put("/api/tasks", { tasks: updated });
  }
  render() {
    return (
      <Grid direction="column" spacing={1} container>
        <Grid item>
          <Leads {...this.state} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskContainer);
