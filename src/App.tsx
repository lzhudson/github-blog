import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/GlobalStyles"
import { DefaultLayout } from "./layout/DefaultLayout"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
