import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { MdEdit, MdDelete, MdSchedule } from "react-icons/md";
import { User } from "../../../types/user";

import { ScheduleModal } from "../../ScheduleModal";
import { CustomModal } from "../../CustomModal";

import { useUsers } from "../../../hooks/useUsers";

interface TableItemProps {
  user: User;
}

export function TableItem({ user }: TableItemProps) {
  const { asyncDeleteUser } = useUsers();
  const [isOpenCustomModal, setIsOpenCustomModal] = useState(false);
  const [isOpenScheduleModal, setIsOpenScheduleModal] = useState(false);

  const toggleModalCustomModal = () => {
    setIsOpenCustomModal(!isOpenCustomModal);
  };
  const toggleModalScheduleModal = () => {
    setIsOpenScheduleModal(!isOpenScheduleModal);
  };

  const handleDeleteUser = (userId: number): void => {
    asyncDeleteUser(user.id);
  };

  return (
    <>
      {!isOpenScheduleModal && isOpenCustomModal && (
        <CustomModal
          user={user}
          type="edit"
          onRequestClose={toggleModalCustomModal}
        />
      )}
      {!isOpenCustomModal && isOpenScheduleModal && (
        <ScheduleModal user={user} onRequestClose={toggleModalScheduleModal} />
      )}
      <TableRow>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.firstName}</TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>{user.gender}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell className="actions">
          <button type="button" onClick={toggleModalCustomModal}>
            <MdEdit />
          </button>
          <button type="button" onClick={() => handleDeleteUser(user.id)}>
            <MdDelete />
          </button>
          <button type="button" onClick={toggleModalScheduleModal}>
            <MdSchedule />
          </button>
        </TableCell>
      </TableRow>
    </>
  );
}
