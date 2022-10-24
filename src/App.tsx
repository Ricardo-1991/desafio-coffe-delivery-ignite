import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
