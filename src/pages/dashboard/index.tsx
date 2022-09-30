import { useState } from "react";
import { CustomTable } from "../../components/Table";
import { CustomModal } from "../../components/CustomModal";
import { Input } from "../../components/Input";
import { SideBar } from "../../components/SideBar";

import { useUsers } from "../../hooks/useUsers";

import { Container } from "./styles";
import { TableCell } from "@mui/material";

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const { users } = useUsers();
  return (
    <Container>
      {isOpen && <CustomModal type="add" onRequestClose={toggleModal} />}
      <SideBar />

      <main>
        <header>
          <h1>Dashboard</h1>
          <button onClick={toggleModal}> + Novo funcionário</button>
        </header>

        <form action="">
          <input placeholder="Buscar funcionário" name="employee" />
          <button>Buscar</button>
        </form>

        <CustomTable users={users}>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </CustomTable>
      </main>
    </Container>
  );
}
