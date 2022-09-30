import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { User } from "../../types/user";
import { useUsers } from "../../hooks/useUsers";
import { Input } from "../Input";
// import { Select } from "../../components/Select";

Modal.setAppElement("#root");

interface CustomModalProps {
  onRequestClose: () => void;
  user?: User;
}

interface UserDatas {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
}

export function ScheduleModal({ user, onRequestClose }: CustomModalProps) {
  const { asyncUpdateUser, asyncAddUser } = useUsers();

  const [userDatas, setUserDatas] = useState<UserDatas>({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (!user) {
      return;
    }
    setUserDatas({
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
    });
  }, [user]);

  const handleUserInputsChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setUserDatas({
      ...userDatas,
      [target.name]: target.value,
    });
  };

  const handleSubimit = async (event: FormEvent) => {
    event.preventDefault();

    onRequestClose();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleSubimit}>
        <h2>Escalar funcionário</h2>
        <div className="schedule-item">
          {/* <select
            name="week_day"
          
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          /> */}
          <Input type="time" name="from" label="Das" />
          <Input type="time" name="to" label="Até" />
        </div>
        <input
          value={userDatas.firstName}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nome"
          onChange={handleUserInputsChange}
        />

        <button type="submit">Escalar funcionário</button>
      </Container>
    </Modal>
  );
}
