import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import styles from "../styles/TaskContainerStyles";
import axios from "axios";
import Leads from "./Leads";
import Rejects from "./Rejects";

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      scrapeInterval: undefined,
    };
    this.refreshTasks = this.refreshTasks.bind(this);
    this.newTasks = this.newTasks.bind(this);
    this.rejectTask = this.rejectTask.bind(this);
    this.scrape = this.scrape.bind(this);
  }
  componentDidMount() {
    this.refreshTasks();
    var scrapeInterval = setInterval(this.scrape, 180000);
    this.setState({ scrapeInterval });
  }
  componentWillUnmount() {
    clearInterval(this.state.scrapeInterval);
  }
  scrape() {
    this.refreshTasks();
    axios.get("/api/refresh");
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
  newTasks(task) {
    const updated = [];
    if (task) {
      updated.push({
        ...task,
        leadStamp: Math.floor(new Date().getTime() / 1000),
      });
      const allTasks = this.state.tasks;
      allTasks.filter(
        t => t.id === task.id,
      )[0].leadStamp = Math.floor(new Date().getTime() / 1000);
      this.setState({ tasks: allTasks });
    } else {
      this.state.tasks.map(t => {
        if (t.leadStamp === undefined) {
          updated.push({
            ...t,
            leadStamp: Math.floor(new Date().getTime() / 1000),
          });
        }
      });
    }
    axios.put("/api/tasks", { tasks: updated });
  }
  rejectTask(task) {
    const updated = [];
    updated.push({
      ...task,
      stage: "reject",
      rejectStamp: Math.floor(new Date().getTime() / 1000),
    });
    const allTasks = this.state.tasks;
    allTasks.filter(t => t.id === task.id)[0].stage = "reject";
    allTasks.filter(
      t => t.id === task.id,
    )[0].rejectStamp = Math.floor(new Date().getTime() / 1000);
    this.setState({ tasks: allTasks }, () =>
      axios.put("/api/tasks", { tasks: updated }),
    );
  }
  render() {
    return (
      <Grid direction="column" spacing={1} container>
        <Grid item>
          <Leads
            {...this.state}
            newTasks={this.newTasks}
            rejectTask={this.rejectTask}
          />
        </Grid>
        <Grid item>
          <Rejects {...this.state} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskContainer);
