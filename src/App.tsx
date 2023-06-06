import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"


export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL} >
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
