import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import { GlobalStyle } from "./styles/global";
import { AppContainer } from "./styles/AppContainer";

export function App() {
  return (
    <AppContainer>
      <Header />
      <Section />
      <GlobalStyle />
    </AppContainer>
  );
}
