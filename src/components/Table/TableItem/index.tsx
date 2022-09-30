import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { User } from "../../../types/user";

import { MdEdit, MdDelete, MdSchedule } from "react-icons/md";
import { useState } from "react";
import { ScheduleModal } from "../../ScheduleModal";
import { CustomModal } from "../../CustomModal";

interface TableItemProps {
  user: User;
}

export function TableItem({ user }: TableItemProps) {
  const [isOpenCustomModal, setIsOpenCustomModal] = useState(false);
  const [isOpenScheduleModal, setIsOpenScheduleModal] = useState(false);

  const toggleModal = (type: string) => {
    if (type === "custom-modal") {
      setIsOpenCustomModal(!isOpenCustomModal);
      return;
    }

    if (type === "schedule-modal") {
      setIsOpenScheduleModal(!isOpenScheduleModal);
      return;
    }
  };
  return (
    <>
      {isOpenCustomModal && !isOpenScheduleModal && (
        <CustomModal
          user={user}
          type="edit"
          onRequestClose={() => toggleModal("custom-modal")}
        />
      )}
      {isOpenScheduleModal && !isOpenCustomModal && (
        <ScheduleModal
          user={user}
          onRequestClose={() => toggleModal("custom-modal")}
        />
      )}
      <TableRow>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.firstName}</TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>{user.gender}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell className="actions">
          <button type="button" onClick={() => toggleModal("custom-modal")}>
            <MdEdit />
          </button>
          <button type="button">
            <MdDelete />
          </button>
          <button type="button" onClick={() => toggleModal("schedule-modal")}>
            <MdSchedule />
          </button>
        </TableCell>
      </TableRow>
    </>
  );
}
