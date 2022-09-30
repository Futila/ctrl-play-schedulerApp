import { useState } from "react";
import { CustomTable } from "../../components/Table";
import { CustomModal } from "../../components/CustomModal";
import { Input } from "../../components/Input";
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
          <Input
            placeholder="Buscar funcionário"
            label="Buscar funcionário"
            name="employee"
          />
          <CustomTable users={users} />
        </form>
      </main>
    </Container>
  );
}
