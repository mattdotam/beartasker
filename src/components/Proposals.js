import React, { Component } from "react";
import ProposalItem from "./ProposalItem";
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

class Proposals extends Component {
  render() {
    return (
      <Grid direction="column" spacing={1} container>
        <Grid item>
          <Typography
            style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
            variant="h4"
            component="h2">
            Proposals
          </Typography>
        </Grid>
        <Grid item>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell key="rejectStamp">
                  <TableSortLabel>Proposed</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Opportunity</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Value</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Hrs (Est)</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Rate</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Bids</TableSortLabel>
                </TableCell>
                <TableCell key="dueDate">
                  <TableSortLabel>Due</TableSortLabel>
                </TableCell>
                <TableCell>Outcome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.tasks.length > 0 &&
                this.props.tasks.map((t, i) => {
                  if (t.stage === "propose") {
                    return (
                      <ProposalItem
                        key={t.id}
                        index={i}
                        task={t}
                        handleChange={this.props.handleChange}
                      />
                    );
                  }
                })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }
}

export default Proposals;
