import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { User } from "../../types/user";

import { TableItem } from "./TableItem";
import { ReactNode } from "react";

interface CustomTableProps {
  users: User[];
  children: ReactNode;
}

export function CustomTable({ users, children }: CustomTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>{children}</TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableItem key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
