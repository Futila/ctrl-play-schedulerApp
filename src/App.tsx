import { UsersProvider } from "./hooks/useUsers";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <UsersProvider>
        <GlobalStyle />
        <AppRouter />
      </UsersProvider>
    </>
  );
}

export default App;
