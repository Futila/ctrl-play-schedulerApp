import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SideBar } from "../../components/SideBar";

import { Container } from "./styles";

export function ScheduleEmployees() {
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
      </main>
    </Container>
  );
}
