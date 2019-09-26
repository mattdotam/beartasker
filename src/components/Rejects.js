import React, { Component } from "react";
import RejectItem from "./RejectItem";
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  withStyles,
} from "@material-ui/core";

class Rejects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid direction="column" spacing={1} container>
        <Grid item>
          <Typography
            style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
            variant="h4"
            component="h2">
            Rejects
          </Typography>
        </Grid>
        <Grid item>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell key="rejectStamp">
                  <TableSortLabel>Rejected</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Opportunity</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Budget</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Bids</TableSortLabel>
                </TableCell>
                <TableCell key="dueDate">
                  <TableSortLabel>Due</TableSortLabel>
                </TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.tasks.length > 0 &&
                this.props.tasks.map(t => {
                  if (t.stage === "reject") {
                    return <RejectItem key={t.id} task={t} />;
                  }
                })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }
}

export default Rejects;
