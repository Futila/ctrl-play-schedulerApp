import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { MdEdit, MdDelete, MdSchedule } from "react-icons/md";
import { ScheduledUserData } from "../../../hooks/useScheduledUsers";

interface TableItemProps {
  scheduleduser: ScheduledUserData;
}

export function ScheduledTableItem({ scheduleduser }: TableItemProps) {
  return (
    <>
      <TableRow>
        <TableCell>{scheduleduser.id}</TableCell>
        <TableCell>{scheduleduser.firstName}</TableCell>
        <TableCell>{scheduleduser.lastName}</TableCell>
        <TableCell>{scheduleduser.week_day}</TableCell>
        <TableCell>{scheduleduser.from}</TableCell>
        <TableCell>{scheduleduser.to}</TableCell>
        <TableCell className="actions">
          <button type="button" onClick={() => {}}>
            <MdEdit />
          </button>
          <button type="button" onClick={() => {}}>
            <MdDelete />
          </button>
        </TableCell>
      </TableRow>
    </>
  );
}
