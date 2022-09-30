import { Link } from "react-router-dom";
import { Container } from "./styles";
export function SideBar() {
  return (
    <Container>
      <h1>SchedulerApp</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/scheduled-employees">Scheduled employees</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
