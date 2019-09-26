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
    const { name, due, bids, budget, url, classes } = this.props;
    return (
      <TableRow>
        <TableCell>
          <Typography variant="body1" component="div">
            {`${new Date(due * 1000).toLocaleDateString()}`}
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
      // <Grid xs={12} item>
      //   <Card style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      //     <Grid direction="row" justify="space-between" container>
      //       <Grid item>
      //         <Grid direction="row" spacing={1} container>
      //           <Grid item>{`${bids} bids`}</Grid>
      //           <Grid item>{`$${budget}`}</Grid>
      //           <Grid item>
      //             <Button
      //               variant="contained"
      //               color="secondary"
      //               size="small">
      //               Delete
      //             </Button>
      //           </Grid>
      //         </Grid>
      //       </Grid>
      //     </Grid>
      //   </Card>
      // </Grid>
    );
  }
}

export default withStyles(styles)(TaskItem);
