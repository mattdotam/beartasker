import React, { Component } from "react";
import {
  Typography,
  Grid,
  Card,
  Button,
  withStyles,
} from "@material-ui/core";
import styles from "../styles/TaskItemStyles";

class TaskItem extends Component {
  render() {
    const { name, due, bids, budget, url } = this.props;
    return (
      <Grid xs={12} item>
        <Card style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <Grid direction="row" justify="space-between" container>
            <Grid item>
              <Grid direction="row" spacing={1} container>
                <Grid item>
                  <Typography
                    variant="body1"
                    component="div">{`${new Date(
                    due * 1000,
                  ).toLocaleDateString()}`}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="div">
                    <a href={`${url}`}>{`${name}`}</a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid direction="row" spacing={1} container>
                <Grid item>{`${bids} bids`}</Grid>
                <Grid item>{`$${budget}`}</Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small">
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskItem);
