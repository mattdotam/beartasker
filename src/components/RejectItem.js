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

class RejectItem extends Component {
  render() {
    const { classes } = this.props;
    const {
      rejectStamp,
      name,
      due,
      bids,
      budget,
      url,
    } = this.props.task;
    return (
      <TableRow>
        <TableCell>
          <Typography variant="body1" component="div">
            {`${new Date(rejectStamp * 1000).toLocaleString()}`}
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
                color="secondary"
                onClick={e => this.props.rejectTask(this.props.task)}>
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(RejectItem);
