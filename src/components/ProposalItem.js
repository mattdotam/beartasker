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
import { generateTextField } from "../utilities/FormHelpers";

class ProposalItem extends Component {
  render() {
    const { classes } = this.props;
    const {
      proposeStamp,
      name,
      due,
      bids,
      hrsEstimate,
      value,
      url,
    } = this.props.task;
    return (
      <TableRow>
        <TableCell>
          <Typography variant="body1" component="div">
            {`${new Date(proposeStamp * 1000).toLocaleString()}`}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1" component="div">
            <a href={`${url}`}>{`${name}`}</a>
          </Typography>
        </TableCell>
        <TableCell>
          {generateTextField({
            margin: "dense",
            width: 10,
            prefix: "$",
            value: value,
            onChange: e =>
              this.props.handleChange({
                ...this.props.task,
                index: this.props.index,
              }),
          })}
        </TableCell>
        <TableCell>
          {generateTextField({
            margin: "dense",
            width: 12,
            suffix: "hrs",
            value: hrsEstimate,
            onChange: e =>
              this.props.handleChange({
                ...this.props.task,
                index: this.props.index,
              }),
          })}
        </TableCell>
        <TableCell>Rate</TableCell>
        {/* <TableCell>
          <Typography variant="body1" component="div">
            {`$${budget
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          </Typography>
        </TableCell> */}
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

export default withStyles(styles)(ProposalItem);
