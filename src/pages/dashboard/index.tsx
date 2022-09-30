import { useState } from "react";
import { UsersTable } from "../../components/UsersTable";
import { CustomModal } from "../../components/CustomModal";
import { SideBar } from "../../components/SideBar";

import { useUsers } from "../../hooks/useUsers";

import { Container } from "./styles";

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

        <UsersTable users={users} />
      </main>
    </Container>
  );
}
