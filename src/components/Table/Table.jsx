import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(channels, members, keywords, messages) {
  return { channels, members, keywords, messages };
}

const rows = [
  createData("Merge Request", 10, "ready", 17),
  createData("Daily Sync", 8, "code", 6),
  createData("SW & AI Team", 5, "review", 3),
  createData("SW Team", 3, "merged", 4),
  createData("General", 23, "completed", 0),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Additional Stats</h3>
      <TableContainer component={Paper}
      style={{boxShadow: '0px 13px 20px 0px #80808029'}}

      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Most Frequent Channels</TableCell>
              <TableCell align="middle">Members</TableCell>
              <TableCell align="middle">Top Keywords</TableCell>
              <TableCell align="middle">Messages&nbsp;(last 24 hrs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.channels}
                </TableCell>
                <TableCell align="middle">{row.members}</TableCell>
                <TableCell align="middle">{row.keywords}</TableCell>
                <TableCell align="middle">{row.messages}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
