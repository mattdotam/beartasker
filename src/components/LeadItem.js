import React, { Component } from "react";
import {
  Typography,
  Grid,
  TableRow,
  TableCell,
  Button,
  withStyles,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../styles/LeadItemStyles";

class TaskItem extends Component {
  render() {
    const {
      leadStamp,
      name,
      due,
      bids,
      budget,
      url,
      classes,
    } = this.props;
    return (
      <TableRow>
        <TableCell>
          <Typography variant="body1" component="div">
            {`${new Date(leadStamp * 1000).toLocaleString()}`}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1" component="div">
            <a href={`${url}`}>{`${name}`}</a>
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1" component="div">
            {`$${budget
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1" component="div">
            {`${bids}`}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1" component="div">
            {`${new Date(due * 1000).toLocaleDateString()}`}
          </Typography>
        </TableCell>
        <TableCell>
          <Grid direction="row" spacing={1} container>
            <Grid item>
              <Button
                className={classes.actionButton}
                size="small"
                variant="contained"
                color="primary">
                <EditIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.actionButton}
                size="small"
                variant="contained"
                color="secondary">
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(TaskItem);
