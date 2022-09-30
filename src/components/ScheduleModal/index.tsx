import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

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
    week_day: "",
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

  const handleScheduleInputsChange = (field: string, value: string) => {
    setScheduleItems({
      ...scheduleItems,
      [field]: value,
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
          onChange={(e) =>
            handleScheduleInputsChange("week_day", e.target.value)
          }
          options={[
            { value: "Domingo", label: "Domingo" },
            { value: "Segunda-feira", label: "Segunda-feira" },
            { value: "Terça-feira", label: "Terça-feira" },
            { value: "Quarta-feira", label: "Quarta-feira" },
            { value: "Quinta-feira", label: "Quinta-feira" },
            { value: "Sexta-feira", label: "Sexta-feira" },
            { value: "Sábado", label: "Sábado" },
          ]}
        />
        <div className="input-block">
          <label htmlFor="from">Das</label>
          <input
            type="time"
            name="from"
            value={scheduleItems.from}
            onChange={(e) => handleScheduleInputsChange("from", e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="from">Até</label>
          <input
            type="time"
            name="to"
            value={scheduleItems.to}
            onChange={(e) => handleScheduleInputsChange("to", e.target.value)}
          />
        </div>

        <button type="submit">Escalar funcionário</button>
      </Container>
    </Modal>
  );
}
