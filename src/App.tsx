import { ScheduledUsersProvider } from "./hooks/useScheduledUsers";
import { UsersProvider } from "./hooks/useUsers";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <UsersProvider>
        <ScheduledUsersProvider>
          <GlobalStyle />
          <AppRouter />
        </ScheduledUsersProvider>
      </UsersProvider>
    </>
  );
}

export default App;
