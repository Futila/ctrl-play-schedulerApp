import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { User } from "../../types/user";
import { Select } from "../Select";
import { useScheduledUsers } from "../../hooks/useScheduledUsers";

Modal.setAppElement("#root");

interface ScheduleModalProps {
  onRequestClose: () => void;
  user: User;
}

export function ScheduleModal({ user, onRequestClose }: ScheduleModalProps) {
  const { scheduleUser } = useScheduledUsers();
  const [scheduleItems, setScheduleItems] = useState({
    week_day: 0,
    from: "",
    to: "",
  });
  const [userData, setUser] = useState({
    firstName: "",
  });

  useEffect(() => {
    if (!user) {
      return;
    }
    setUser({
      firstName: user.firstName,
    });
  }, [user]);

  const handleSchedlueInputsChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setScheduleItems({
      ...scheduleItems,
      [target.name]: target.value,
    });
  };

  const handleSubimit = (event: FormEvent) => {
    event.preventDefault();

    const scheduleUserData = {
      ...user,
      ...scheduleItems,
    };

    scheduleUser(scheduleUserData);
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
        <h2>Definir horário de Escala</h2>

        <input
          value={userData.firstName}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nome"
          readOnly
        />
        <Select
          label="Dia da semana"
          name="week_day"
          value={scheduleItems.week_day}
          onChange={handleSchedlueInputsChange}
          options={[
            { value: "0", label: "Domingo" },
            { value: "1", label: "Segunda-feira" },
            { value: "2", label: "Terça-feira" },
            { value: "3", label: "Quarta-feira" },
            { value: "4", label: "Quinta-feira" },
            { value: "5", label: "Sexta-feira" },
            { value: "6", label: "Sábado" },
          ]}
        />
        <div className="input-block">
          <label htmlFor="from">Das</label>
          <input
            type="time"
            name="from"
            value={scheduleItems.from}
            onChange={handleSchedlueInputsChange}
          />
        </div>
        <div className="input-block">
          <label htmlFor="from">Até</label>
          <input
            type="time"
            name="to"
            value={scheduleItems.to}
            onChange={handleSchedlueInputsChange}
          />
        </div>

        <button type="submit">Escalar funcionário</button>
      </Container>
    </Modal>
  );
}
