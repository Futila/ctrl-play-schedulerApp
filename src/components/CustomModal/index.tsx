import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { User } from "../../types/user";
import { useUsers } from "../../hooks/useUsers";

Modal.setAppElement("#root");

interface CustomModalProps {
  onRequestClose: () => void;
  type: "add" | "edit";
  user?: User;
}

interface UserDatas {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
}

export function CustomModal({ type, user, onRequestClose }: CustomModalProps) {
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

    if (type === "edit") {
      if (!user) {
        return;
      }

      const userData = {
        ...userDatas,
        id: user.id,
      };
      asyncUpdateUser(userData);
    }

    if (type === "add") {
      asyncAddUser(userDatas);
    }

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
        <h2>
          {type === "add" ? "Adicionar funcionário" : "Editar Funcionário"}
        </h2>
        <input
          value={userDatas.firstName}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nome"
          onChange={handleUserInputsChange}
        />

        <input
          value={userDatas.lastName}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Sobrenome"
          onChange={handleUserInputsChange}
        />
        <input
          value={userDatas.gender}
          type="text"
          name="gender"
          id="gender"
          placeholder="Gênero"
          onChange={handleUserInputsChange}
        />
        <input
          value={userDatas.email}
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleUserInputsChange}
        />
        <input
          value={userDatas.phone}
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          onChange={handleUserInputsChange}
        />

        <button type="submit">{type === "add" ? "Adicionar" : "Editar"}</button>
      </Container>
    </Modal>
  );
}
