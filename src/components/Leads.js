import React, { Component } from "react";
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
import LeadItem from "./LeadItem";

const Leads = props => {
  return (
    <Grid direction="column" spacing={1} container>
      <Grid item>
        <Typography
          style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
          variant="h4"
          component="h2">
          Leads
        </Typography>
      </Grid>
      <Grid item>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell key="leadStamp">
                <TableSortLabel>Created</TableSortLabel>
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
            {props.tasks.length > 0 &&
              props.tasks.map(t => {
                if (t.stage !== "reject") {
                  return (
                    <LeadItem
                      key={t.id}
                      newTasks={props.newTasks}
                      rejectTask={props.rejectTask}
                      task={t}
                    />
                  );
                }
              })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default Leads;
