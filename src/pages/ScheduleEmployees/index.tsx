import { TableCell } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SideBar } from "../../components/SideBar";
import { CustomTable } from "../../components/Table";
import { useScheduledUsers } from "../../hooks/useScheduledUsers";

import { Container } from "./styles";

export function ScheduleEmployees() {
  const { scheduledUsers } = useScheduledUsers();
  return (
    <Container>
      <SideBar />
      <main>
        <header>
          <h1>Scheduled Employees</h1>

          <div>
            <button type="button" onClick={() => {}}>
              <MdChevronLeft size={36} color="#FFF" />
            </button>
            {/* <strong>{dateFormatted}</strong> */}
            <button type="button" onClick={() => {}}>
              <MdChevronRight size={36} color="#FFF" />
            </button>
          </div>
        </header>

        <CustomTable users={scheduledUsers}>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Dia de trabalho</TableCell>
          <TableCell>Das</TableCell>
          <TableCell>Até</TableCell>
          <TableCell></TableCell>
        </CustomTable>
      </main>
    </Container>
  );
}
