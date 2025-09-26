import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme"
import { GlobalStyle } from "./types/GlobalStyle"
import { Header } from "./components/header"

function App() {
  return (
    <ThemeProvider theme = {theme}>
       <GlobalStyle />
       <Header />
    </ThemeProvider>
  )
}

export default App