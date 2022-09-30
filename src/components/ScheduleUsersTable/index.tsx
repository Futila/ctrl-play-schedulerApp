import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ScheduledTableItem } from "./ScheduledTableItem";

import { ScheduledUserData } from "../../hooks/useScheduledUsers";

interface ScheduledUsersTableProps {
  scheduledUsers: ScheduledUserData[];
}

export function ScheduledUsersTable({
  scheduledUsers,
}: ScheduledUsersTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Dia de trabalho</TableCell>
            <TableCell>Das</TableCell>
            <TableCell>Até</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scheduledUsers.map((scheduledUser) => (
            <ScheduledTableItem
              key={scheduledUser.id}
              scheduleduser={scheduledUser}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
